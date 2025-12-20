import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const weaponsDataPath = join(__dirname, 'shared', 'weaponsData.ts');
let content = readFileSync(weaponsDataPath, 'utf-8');

// IDs das pistolas encontradas + Pistola Automática
const pistolIds = [
    'j358',
    'mw11',
    '.50-gs',
    'renetti',
    'shorty',
    'besta',
    'l-car-9',
    'dobvra',
    'pistola-automática', // Tentativa de ID
    'pistola-automatica'  // Tentativa de ID sem acento
];

const pistolNames = [
    'Pistola Automática'
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
            const idMatch = weaponText.match(/id:\s*"([^"]+)"/);
            const nameMatch = weaponText.match(/name:\s*"([^"]+)"/);

            if (idMatch && nameMatch) {
                const id = idMatch[1];
                const name = nameMatch[1];

                const isPistolId = pistolIds.includes(id);
                const isPistolName = pistolNames.includes(name);

                if (isPistolId || isPistolName) {
                    // Procura a linha do tipo e atualiza
                    for (let j = weaponStartIndex; j <= i; j++) {
                        if (lines[j].includes('type: "Assault Rifle"')) {
                            console.log(`🔫 Atualizando ${name} (${id}) para Pistol`);
                            lines[j] = lines[j].replace('type: "Assault Rifle"', 'type: "Pistol"');
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
