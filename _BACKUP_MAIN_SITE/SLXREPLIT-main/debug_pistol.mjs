import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const weaponsDataPath = join(__dirname, 'shared', 'weaponsData.ts');
const content = readFileSync(weaponsDataPath, 'utf-8');
const lines = content.split('\n');

let printing = false;
for (let line of lines) {
    if (line.includes('id: "j358"')) printing = true;
    if (printing) {
        console.log(line);
        if (line.includes('},')) break;
    }
}
