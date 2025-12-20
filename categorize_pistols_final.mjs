import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const weaponsDataPath = join(__dirname, 'shared', 'weaponsData.ts');
let content = readFileSync(weaponsDataPath, 'utf-8');

// Lista COMPLETA de armas que NÃO são pistolas (Assault Rifles, Snipers, LMGs, SMGs, Shotguns, Marksman)
const nonPistols = [
    // Assault Rifles
    'TYPE 25', 'TYPE25', 'M16', 'AK47', 'AK-47', 'AK117', 'M4', 'ICR-1', 'ICR',
    'KN-44', 'KN44', 'BK57', 'ASM10', 'LK24', 'HBRa3', 'HBR', 'DR-H', 'DRH',
    'MAN-O-WAR', 'MANOWAR', 'PEACEKEEPER', 'FR .556', 'FR.556', 'FR 556',
    'AS VAL', 'ASVAL', 'CR-56 AMAX', 'CR56', 'AMAX', 'KILO 141', 'KILO141',
    'ODEN', 'GRAU 5.56', 'GRAU', 'KRIG 6', 'KRIG6', 'EM2', 'SWORDFISH',
    'M13', 'FFAR', 'FFAR 1', 'AK-74U', 'AK74U', 'GROZA', 'MADDOX', 'LAG 53', 'BP50',

    // Snipers
    'DL Q33', 'DLQ33', 'LOCUS', 'ARCTIC .50', 'ARCTIC.50', 'ARCTIC', 'OUTLAW',
    'XPR-50', 'XPR', 'M21 EBR', 'M21', 'NA-45', 'NA45', 'RYTEC AMR', 'RYTEC',
    'SVD', 'ZRG 20mm', 'ZRG', 'HDR', 'LW3-TUNDRA', 'TUNDRA', 'KOSHKA',

    // LMGs
    'RPD', 'M4LMG', 'UL736', 'CHOPPER', 'HOLGER 26', 'HOLGER', 'HADES', 'S36',
    'DINGO', 'PKM', 'BRUEN MK9', 'BRUEN', 'MG42',

    // SMGs
    'RUS-79U', 'RUS', 'MSMC', 'PDW-57', 'PDW', 'RAZORBACK', 'CHICOM', 'PHARO',
    'HG 40', 'HG40', 'CORDITE', 'QQ9', 'FENNEC', 'AGR 556', 'AGR', 'QXR',
    'PP19 BIZON', 'BIZON', 'MX9', 'CBR4', 'PPSh-41', 'PPSH', 'MAC-10', 'MAC10',
    'KSP 45', 'KSP', 'SWITCHBLADE X9', 'SWITCHBLADE', 'LAPA', 'OTS 9', 'OTS',
    'STRIKER 45', 'CX-9', 'CX9', 'TEC-9', 'TEC9', 'ISO',

    // Shotguns
    'BY15', 'HS0405', 'STRIKER', 'KRM-262', 'KRM', 'HS2126', 'ECHO', 'R9-0',
    'JAK-12', 'JAK12', 'ARGUS',

    // Marksman
    'SKS', 'SP-R 208', 'SPR', 'MK2', 'KILO BOLT-ACTION', 'KILO BOLT',
    'EBR-14', 'SVD' // SVD is sometimes marksman
];

let updateCount = 0;
const lines = content.split('\n');
let inWeaponObject = false;
let currentWeaponLines = [];
let weaponStartIndex = -1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim().startsWith('{') && !inWeaponObject && i > 20) {
        inWeaponObject = true;
        weaponStartIndex = i;
        currentWeaponLines = [line];
    } else if (inWeaponObject) {
        currentWeaponLines.push(line);

        if (line.trim().startsWith('}')) {
            const weaponText = currentWeaponLines.join('\n');
            const nameMatch = weaponText.match(/name:\s*"([^"]+)"/);
            const typeMatch = weaponText.match(/type:\s*"([^"]+)"/);

            if (nameMatch && typeMatch) {
                const weaponName = nameMatch[1].toUpperCase().trim();
                const currentType = typeMatch[1];

                // Se ainda está como "Assault Rifle" (padrão) mas NÃO é uma arma conhecida de outra categoria
                if (currentType === 'Assault Rifle') {
                    const isKnownNonPistol = nonPistols.some(np => {
                        const npUpper = np.toUpperCase();
                        // Verifica correspondência exata ou parcial forte
                        return weaponName === npUpper ||
                            weaponName.startsWith(npUpper + ' ') ||
                            weaponName.endsWith(' ' + npUpper) ||
                            (weaponName.includes(npUpper) && npUpper.length > 3);
                    });

                    if (!isKnownNonPistol) {
                        console.log(`🔫 Pistola identificada: ${nameMatch[1]}`);

                        for (let j = weaponStartIndex; j <= i; j++) {
                            if (lines[j].includes(`type: "Assault Rifle"`)) {
                                lines[j] = lines[j].replace(`type: "Assault Rifle"`, `type: "Pistol"`);
                                updateCount++;
                                break;
                            }
                        }
                    }
                }
            }

            inWeaponObject = false;
            currentWeaponLines = [];
        }
    }
}

const newContent = lines.join('\n');
writeFileSync(weaponsDataPath, newContent, 'utf-8');

console.log(`\n✅ ${updateCount} pistolas categorizadas com sucesso!`);
