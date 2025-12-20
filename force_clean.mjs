import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'shared', 'weaponsData.ts');

try {
    // Read as binary buffer to avoid encoding assumptions initially
    const buffer = fs.readFileSync(filePath);
    const content = buffer.toString('utf8'); // Try simple utf8 first

    // Find the start of the actual code
    const startIndex = content.indexOf('export interface Weapon');

    if (startIndex === -1) {
        // If utf8 failed to find it, maybe it is utf16le?
        const content16 = buffer.toString('utf16le');
        const startIndex16 = content16.indexOf('export interface Weapon');

        if (startIndex16 !== -1) {
            console.log('Found start index in UTF-16LE content:', startIndex16);
            const cleanContent = content16.slice(startIndex16);
            fs.writeFileSync(filePath, cleanContent, 'utf8');
            console.log('Fixed UTF-16LE file.');
            process.exit(0);
        }

        console.error('Could not find "export interface Weapon" in file.');
        process.exit(1);
    }

    if (startIndex > 0) {
        console.log(`Found start index at ${startIndex}. Trimming leading garbage...`);
        const cleanContent = content.slice(startIndex);
        fs.writeFileSync(filePath, cleanContent, 'utf8');
        console.log('File cleaned.');
    } else {
        console.log('File already clean (start index 0).');
    }

} catch (error) {
    console.error('Error processing file:', error);
    process.exit(1);
}
