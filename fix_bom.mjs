import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'shared', 'weaponsData.ts');

try {
    const buffer = fs.readFileSync(filePath);

    // Check for UTF-16 LE BOM (FF FE)
    if (buffer[0] === 0xFF && buffer[1] === 0xFE) {
        console.log('UTF-16 LE BOM detected. Converting to UTF-8...');
        const content = buffer.toString('utf16le'); // Read as UTF-16 LE (skips BOM usually or handles it)
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Converted and written as UTF-8.');
    }
    // Check for UTF-8 BOM (EF BB BF)
    else if (buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
        console.log('UTF-8 BOM detected. Removing...');
        const content = buffer.slice(3).toString('utf8');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('BOM removed and written as UTF-8.');
    }
    else {
        console.log('No known BOM detected. First bytes:', buffer.slice(0, 4));
        // It might be raw UTF-16 without BOM if the previous command messed up similarly?
        // But unlikely given `git show`.
    }
} catch (error) {
    console.error('Error processing file:', error);
    process.exit(1);
}
