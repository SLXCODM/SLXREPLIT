import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const weaponsDataPath = join(__dirname, 'shared', 'weaponsData.ts');
let content = readFileSync(weaponsDataPath, 'utf-8');

// Lista exata de pistolas fornecida pelo usuário
const pistolsToUpdate = [
    'Pistola Automática',
    'J358',
    'MW11',
    '.50 GS',
    'Renetti',
    'Shorty',
    'Besta',
    'L-CAR 9',
    'Dobvra'
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

            if (nameMatch) {
                const weaponName = nameMatch[1];

                // Verifica se é uma das pistolas da lista
                const isPistol = pistolsToUpdate.some(pistol =>
                    weaponName.toLowerCase() === pistol.toLowerCase() ||
                    weaponName.toLowerCase().includes(pistol.toLowerCase())
                );

                if (isPistol) {
                    // Procura a linha do tipo e atualiza
                    for (let j = weaponStartIndex; j <= i; j++) {
                        if (lines[j].includes('type: "Assault Rifle"')) {
                            console.log(`🔫 Atualizando ${weaponName} para Pistol`);
                            lines[j] = lines[j].replace('type: "Assault Rifle"', 'type: "Pistol"');
                            updateCount++;
                            break;
                        } else if (lines[j].includes('type: "Pistol"')) {
                            // Já é pistola, ignora
                            break;
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

console.log(`\n✅ ${updateCount} pistolas atualizadas com sucesso!`);
