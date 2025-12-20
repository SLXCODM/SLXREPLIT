import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const weaponsDataPath = join(__dirname, 'shared', 'weaponsData.ts');
let content = readFileSync(weaponsDataPath, 'utf-8');

// Armas que sabemos que NÃO são pistolas (as principais de cada categoria)
const knownNonPistols = [
    'TYPE 25', 'M16', 'AK47', 'AK-47', 'M4', 'ICR', 'KN-44', 'BK57', 'ASM10', 'LK24', 'HBR', 'DR-H', 'MAN-O-WAR', 'PEACEKEEPER', 'FR .556', 'AS VAL', 'CR-56 AMAX', 'KILO 141', 'ODEN', 'GRAU', 'KRIG 6', 'EM2', 'SWORDFISH',
    'DL Q33', 'LOCUS', 'ARCTIC', 'OUTLAW', 'XPR', 'M21 EBR', 'NA-45', 'RYTEC AMR', 'SVD', 'ZRG',
    'RPD', 'M4LMG', 'UL736', 'CHOPPER', 'HOLGER', 'HADES', 'S36', 'DINGO',
    'RUS', 'MSMC', 'PDW', 'RAZORBACK', 'CHICOM', 'PHARO', 'HG 40', 'CORDITE', 'QQ9', 'FENNEC', 'AGR', 'QXR', 'PP19 BIZON', 'MX9', 'CBR4', 'PPSh-41', 'MAC-10',
    'BY15', 'HS0405', 'STRIKER', 'KRM', 'HS2126', 'ECHO', 'R9-0', 'JAK-12',
    'SKS', 'SP-R 208', 'MK2', 'KILO BOLT', 'EBR-14', 'SVD'
];

let updateCount = 0;
const lines = content.split('\n');
let inWeaponObject = false;
let currentWeaponLines = [];
let weaponStartIndex = -1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim().startsWith('{') && !inWeaponObject && i > 20) { // Skip interface definition
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
                const weaponName = nameMatch[1].toUpperCase();
                const currentType = typeMatch[1];

                // Se é "Assault Rifle" e NÃO está na lista de armas conhecidas, é pistola
                if (currentType === 'Assault Rifle') {
                    const isKnownWeapon = knownNonPistols.some(known =>
                        weaponName.includes(known.toUpperCase()) || known.toUpperCase().includes(weaponName)
                    );

                    if (!isKnownWeapon) {
                        console.log(`Pistola encontrada: ${nameMatch[1]}`);

                        // Replace the type
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

console.log(`\n✅ Atualizadas ${updateCount} armas para tipo Pistol`);
