import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const weaponsDataPath = join(__dirname, 'shared', 'weaponsData.ts');
let content = readFileSync(weaponsDataPath, 'utf-8');

const pistolsToUpdate = [
    'j358',
    'mw11',
    '.50-gs',
    'renetti',
    'shorty',
    'besta',
    'l-car-9',
    'dobvra',
    'pistola-automática',
    'pistola-automatica'
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

            // Verifica se o ID corresponde a uma pistola
            const idMatch = weaponText.match(/"id":\s*"([^"]+)"/);

            if (idMatch) {
                const id = idMatch[1];

                if (pistolsToUpdate.includes(id)) {
                    // Encontra a linha do type dentro deste bloco e substitui
                    for (let j = weaponStartIndex; j <= i; j++) {
                        if (lines[j].includes('"type": "Assault Rifle"') || lines[j].includes('type: "Assault Rifle"')) {
                            console.log(`🔫 Atualizando ${id} para Pistol`);
                            lines[j] = lines[j].replace('Assault Rifle', 'Pistol');
                            updateCount++;
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
