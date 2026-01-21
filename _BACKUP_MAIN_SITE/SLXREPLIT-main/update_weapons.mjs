import fs from 'fs';

// Read the current weaponsData.ts file
const weaponsDataPath = './shared/weaponsData.ts';
let content = fs.readFileSync(weaponsDataPath, 'utf8');

// All weapons mapping - name to code (using data from Compilação, with priority from armas_atualizadas and snipers_atualizadas)
const weaponCodesFromCompilacao = {
    // SMG
    'Chicom': '1C2B3A4A8C',
    'PP19 Bizon': '1C2B4A6C9A',
    'GKS': '1A2A4B6B',
    'PDW-57': '1C2A4A5E9A',
    'Razorback': '1C2A5I6C9A',
    'MSMC': '1C2C4A6C8A',
    'HG 40': '2C4A6C8C9A',
    'Pharo': '1E2C4B7D8A',
    'Cordite': '1C2A4A6C8B',
    'QQ9': '1C2C4A6C8A',
    'Fennec': '1C2C4D7C8A',
    'AGR 556': '1C2B4C6C8C',
    'QXR': '1C2C4A5I8A',
    'CBR4': '1A2B4A5E9A',
    'PPSh-41': '1C2B5E6B9B',
    'MAC-10': '1B2A4D7B8B',
    'KSP 45': '1B2A4B7B8A',
    'Switchblade X9': '1A2C4C8A9A', // Priority
    'LAPA': '1B2F4F8B9C',
    'OTs 9': '1B2B7F8B9B',
    'Striker 45': '1C2C6C7C8A',
    'TEC-9': '1F2E4B8F9A',
    'MX9': '1B2A4D6C8B', // Priority
    'RUS-79U': '1C2A4A6C8B',
    'CX-9': '1A2B4C8B9A', // Priority
    'VMP': '2D4C5H8A9C', // Priority
    'ISO': '1C2C6C8B9A',
    'Sten': '1E2E6A7C8C',

    // Assault Rifles
    'M13': '1C2B4A6C8C',
    'Kilo 141': '1C2B4A6C8C',
    'M4': '1C2B4A6C8C',
    'AK-47': '1C2B4A6C8C',
    'DR-H': '1A2B4A8C9A', // Priority
    'HVK-30': '1C2B4A6C8C',
    'KN-44': '1C2B4A6C8C',
    'ICR-1': '1C2B4A6C8C',
    'Man-O-War': '1C2B4A6C8C',
    'AS VAL': '1C2B4A6C8C',
    'BK57': '1C2B4A6C8C',
    'LK24': '1C2B4A6C8C',
    'Peacekeeper MK2': '1C2B4A6C8C',
    'FR .556': '1C2B4A6C8C',
    'HBRa3': '1C2B4A6C8C',
    'AK117': '1C2B4A6C8C',
    'AK177': '1C2B4A6C8C',
    'Type 25': '1C2B4A6C8C',
    'ASM10': '1C2B4A6C8C',
    'M16': '1C2B4A6C8C',
    'Swordfish': '1C2B4A6C8C',
    'Oden': '1A4A5A7C9A', // Priority
    'XM4': '1A2G4A7C8D', // Priority
    'Type 19': '1D4A7B8B9C', // Priority
    'Krig 6': '1A2C4F7F8D',
    'EM2': '2B4A7G8B9B',
    'Maddox': '2D3A4A8A9A',
    'FFAR 1': '2E4B7E8E9A',
    'Grau 5.56': '1A2D4A8A9A',
    'Groza': '1B2D4F8B9C',
    'BP50': '1D2C4B8B9H',
    'LAG 53': '1A2B4B8A9A',
    'Vargo-S': '1C4C5B7C8A',
    'RAM-7': '1F2B4A6A8A',

    // Snipers
    'DL Q33': '2A4A5A6A8A', // Priority
    'Locus': '2A4B5H8C9C', // Priority
    'Arctic .50': '1C2B4A6C8C',
    'Koshka': '2A4A5G6A9C', // Priority
    'ZRG 20mm': '1C2B4A6C8C',
    'Outlaw': '2A4C5H6A9C', // Priority
    'M21 EBR': '1C2B4A6C8C',
    'XPR-50': '1C2B4A6C8C',
    'NA-45': '1C2B4A6C8C',
    'SVD': '1C2B4A6C8C',
    'Rytec AMR': '2A4B5A6A9C',
    'LW3-Tundra': '1A2F5A8A9E', // Priority
    '3-Line Rifle': '1E2A4B5F',
    'Fuzil de 3 Linhas': '1E2A4B5F',

    // Marksman
    'SKS': '1C2B4A6C8C',
    'MK2': '1C2B4A6C8C',
    'Kilo Bolt-Action': '1C2B4A6C8C',
    'SP-R 208': '1C2B4A6C8C',
    'Kar98k': '1C2B4A6C8C',
    'D-13 Sector': '1C2B4A6C8C',
    'Type 63': '1C2B4A7E9F', // Priority
    'M1 Garand': '1D2C4C6C7D',

    // Shotguns
    'R9-0': '1C2B4A6C8C',
    'KRM-262': '1C2B4A6C8C',
    'BY15': '1C2A3A4A8B', // Priority
    'HS0405': '1F2A4A5E6A', // Priority
    'HS2126': '1C2B4A6C8C',
    'Echo': '1C2B4A6C8C',
    'Striker': '1A2B5A6A8A',
    'JAK-12': '1C2B4A6C8C',
    'Argus': '1D2A4A7B8C',
    'VLK Rogue': '1F4B5A6A8A',
    'Einhorn Revolving': '1A2A3B4A7A',

    // LMG
    'M4LMG': '1C2B4A6C8C',
    'RPD': '1C2B4A6C8C',
    'Chopper': '1C2B4A6C8C',
    'UL736': '1C2B4A6C8C',
    'Hades': '1C2B4A6C8C',
    'Holger 26': '1C2B4A6C8C',
    'Dingo': '1C2B4A6C8C',
    'S36': '1C2B3A4B5D',
    'PKM': '2B4C6C7E8B',
    'Bruen MK9': '2A3A4A5A8B',
    'MG42': '1E2D5E8D9C',
    'RAAL MG': '2C6A7C8B9B',
    'MG 82': '2F4D7A8E9F',

    // Pistols
    'J358': '2C3A5B7A8B',
    'MW11': '1C2B6C7A8B',
    '.50 GS': '2A6C7A8A9A',
    'Renetti': '1E6B7A8B9C',
    'Shorty': '1C4C6C7C8A',
    'Besta': '1B2C4A5A7C',
    'L-CAR 9': '1B2B6C7C8B',
    'Dobvra': '1D2C5F7B8B',
};

// Create a function to update each weapon entry
function updateWeapon(content, weaponName, code) {
    // Build the regex to find this weapon's entry and update namePt, nameEn, codePt, codeEn
    const fullCode = `${weaponName}-${code}`;

    // Pattern to match "namePt": "Arma X"
    const namePtPattern = new RegExp(
        `("name":\\s*"${escapeRegex(weaponName)}"[\\s\\S]*?"namePt":\\s*)"Arma \\d+"`,
        'g'
    );

    // Pattern to match "nameEn": "Weapon X"
    const nameEnPattern = new RegExp(
        `("name":\\s*"${escapeRegex(weaponName)}"[\\s\\S]*?"nameEn":\\s*)"Weapon \\d+"`,
        'g'
    );

    // Pattern to match "codePt": "UNKNOWN"
    const codePtPattern = new RegExp(
        `("name":\\s*"${escapeRegex(weaponName)}"[\\s\\S]*?"codePt":\\s*)"UNKNOWN"`,
        'g'
    );

    // Pattern to match "codeEn": "UNKNOWN"
    const codeEnPattern = new RegExp(
        `("name":\\s*"${escapeRegex(weaponName)}"[\\s\\S]*?"codeEn":\\s*)"UNKNOWN"`,
        'g'
    );

    content = content.replace(namePtPattern, `$1"${weaponName}"`);
    content = content.replace(nameEnPattern, `$1"${weaponName}"`);
    content = content.replace(codePtPattern, `$1"${fullCode}"`);
    content = content.replace(codeEnPattern, `$1"${fullCode}"`);

    return content;
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Apply updates for all weapons
for (const [weaponName, code] of Object.entries(weaponCodesFromCompilacao)) {
    content = updateWeapon(content, weaponName, code);
}

// Write the updated content back
fs.writeFileSync(weaponsDataPath, content, 'utf8');

console.log('Weapons data updated successfully!');
console.log('Total weapons processed:', Object.keys(weaponCodesFromCompilacao).length);
