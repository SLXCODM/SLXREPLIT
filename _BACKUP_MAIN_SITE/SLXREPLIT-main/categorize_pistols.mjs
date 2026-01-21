import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const weaponsDataPath = join(__dirname, 'shared', 'weaponsData.ts');
let content = readFileSync(weaponsDataPath, 'utf-8');

// Lista COMPLETA de assault rifles reais do CODM
const realAssaultRifles = [
    'TYPE 25', 'TYPE25', 'M16', 'AK47', 'AK-47', 'AK117', 'M4', 'ICR-1', 'ICR',
    'KN-44', 'KN44', 'BK57', 'ASM10', 'LK24', 'HBRa3', 'HBR', 'DR-H', 'DRH',
    'MAN-O-WAR', 'MANOWAR', 'PEACEKEEPER', 'FR .556', 'FR.556', 'FR 556',
    'AS VAL', 'ASVAL', 'CR-56 AMAX', 'CR56', 'AMAX', 'KILO 141', 'KILO141',
    'ODEN', 'GRAU 5.56', 'GRAU', 'KRIG 6', 'KRIG6', 'EM2', 'SWORDFISH',
    'M13', 'FFAR', 'FFAR 1', 'AK-74U', 'AK74U'
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

                if (currentType === 'Assault Rifle') {
                    // Verifica se o nome contém algum assault rifle real
                    const isRealAR = realAssaultRifles.some(ar => {
                        const arUpper = ar.toUpperCase();
                        return weaponName.includes(arUpper) || arUpper.includes(weaponName);
                    });

                    if (!isRealAR) {
                        console.log(`🔫 Pistola: ${nameMatch[1]}`);

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

console.log(`\n✅ ${updateCount} pistolas categorizadas!`);
