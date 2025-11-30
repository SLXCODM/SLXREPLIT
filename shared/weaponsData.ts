export interface Weapon {
  id: string;
  name: string;
  namePt?: string;
  nameEn?: string;
  type: "Assault Rifle" | "Sniper" | "SMG" | "Shotgun" | "LMG" | "Marksman" | "Pistol";
  description: string;
  descriptionEn?: string;
  code: string;
  codePt?: string;
  codeEn?: string;
  image?: string;
  imagePt?: string;
  imageEn?: string;
  keywords?: string[];
}

export const weaponsData: Weapon[] = [
  {
    "id": "three-line-rifle",
    "name": "3-Line Rifle",
    "namePt": "Fuzil de 3 Linhas",
    "nameEn": "3-Line Rifle",
    "type": "Sniper",
    "description": "Franco-atirador vers├ítil e eficaz",
    "descriptionEn": "Versatile and effective sniper",
    "code": "1E2A4B5F",
    "codePt": "1E2A4B5F",
    "codeEn": "1E2A4B5F",
    "imagePt": "/attached_assets/1000004331.jpg",
    "imageEn": "/attached_assets/1000004337.jpg",
    "image": "/attached_assets/1000004331.jpg",
    "keywords": [
      "fuzil",
      "3 linhas",
      "three line",
      "rifle",
      "sniper",
      "franco-atirador"
    ]
  },
  {
    "id": "agr",
    "name": "Agr",
    "namePt": "Agr",
    "nameEn": "Agr",
    "type": "Assault Rifle",
    "description": "Classe de arma Agr",
    "descriptionEn": "Agr weapon class",
    "code": "1C2B4C6C8C",
    "codePt": "1C2B4C6C8C",
    "codeEn": "1C2B4C6C8C",
    "image": "/attached_assets/agr-556-1C2B4C6C8C.jpg",
    "imagePt": "/attached_assets/agr-556-1C2B4C6C8C.jpg",
    "imageEn": "/attached_assets/agr-556-1C2B4C6C8C.jpg",
    "keywords": [
      "agr"
    ]
  },
  {
    "id": "agr-556",
    "name": "AGR 556",
    "namePt": "AGR 556",
    "nameEn": "AGR 556",
    "type": "SMG",
    "description": "Melhor classe para AGR 556 no COD Mobile",
    "descriptionEn": "Best loadout for AGR 556 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/agr-556-1C2B4C6C8C.jpg",
    "imagePt": "/attached_assets/agr-556-1C2B4C6C8C.jpg",
    "imageEn": "/attached_assets/agr-556-1C2B4C6C8C.jpg",
    "keywords": [
      "agr-556",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "ak",
    "name": "Ak",
    "namePt": "Ak",
    "nameEn": "Ak",
    "type": "Assault Rifle",
    "description": "Classe de arma Ak",
    "descriptionEn": "Ak weapon class",
    "code": "1B2AGA8C9C",
    "codePt": "1B2AGA8C9C",
    "codeEn": "1B2AGA8C9C",
    "image": "/attached_assets/ak-47-1B2AGA8C9C.jpg",
    "imagePt": "/attached_assets/ak-47-1B2AGA8C9C.jpg",
    "imageEn": "/attached_assets/ak-47-1B2AGA8C9C.jpg",
    "keywords": [
      "ak"
    ]
  },
  {
    "id": "ak-47",
    "name": "AK-47",
    "namePt": "AK-47",
    "nameEn": "AK-47",
    "type": "Assault Rifle",
    "description": "Melhor classe para AK-47 no COD Mobile",
    "descriptionEn": "Best loadout for AK-47 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/ak-47-1B2AGA8C9C.jpg",
    "imagePt": "/attached_assets/ak-47-1B2AGA8C9C.jpg",
    "imageEn": "/attached_assets/ak-47-1B2AGA8C9C.jpg",
    "keywords": [
      "ak-47",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "ak117-2",
    "name": "AK117",
    "namePt": "AK117",
    "nameEn": "AK117",
    "type": "Assault Rifle",
    "description": "Melhor classe para AK117 no COD Mobile",
    "descriptionEn": "Best loadout for AK117 in COD Mobile",
    "code": "2B4A7E8B9F",
    "codePt": "2B4A7E8B9F",
    "codeEn": "2B4A7E8B9F",
    "image": "/attached_assets/ak117-2B4A7E8B9F.jpg",
    "imagePt": "/attached_assets/ak117-2B4A7E8B9F.jpg",
    "imageEn": "/attached_assets/ak117-2B4A7E8B9F.jpg",
    "keywords": [
      "ak117",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "arctic",
    "name": "Arctic",
    "namePt": "Arctic",
    "nameEn": "Arctic",
    "type": "Assault Rifle",
    "description": "Classe de arma Arctic",
    "descriptionEn": "Arctic weapon class",
    "code": "1B2B4A8B9F",
    "codePt": "1B2B4A8B9F",
    "codeEn": "1B2B4A8B9F",
    "image": "/attached_assets/arctic-50-1B2B4A8B9F.jpg",
    "imagePt": "/attached_assets/arctic-50-1B2B4A8B9F.jpg",
    "imageEn": "/attached_assets/arctic-50-1B2B4A8B9F.jpg",
    "keywords": [
      "arctic"
    ]
  },
  {
    "id": "arctic-50",
    "name": "Arctic .50",
    "namePt": "Arctic .50",
    "nameEn": "Arctic .50",
    "type": "Sniper",
    "description": "Melhor classe para Arctic .50 no COD Mobile",
    "descriptionEn": "Best loadout for Arctic .50 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/arctic-50-1B2B4A8B9F.jpg",
    "imagePt": "/attached_assets/arctic-50-1B2B4A8B9F.jpg",
    "imageEn": "/attached_assets/arctic-50-1B2B4A8B9F.jpg",
    "keywords": [
      "arctic-50",
      "sniper",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "as",
    "name": "As",
    "namePt": "As",
    "nameEn": "As",
    "type": "Assault Rifle",
    "description": "Classe de arma As",
    "descriptionEn": "As weapon class",
    "code": "4B5BGA8C9C",
    "codePt": "4B5BGA8C9C",
    "codeEn": "4B5BGA8C9C",
    "image": "/attached_assets/as-val-4B5BGA8C9C.jpg",
    "imagePt": "/attached_assets/as-val-4B5BGA8C9C.jpg",
    "imageEn": "/attached_assets/as-val-4B5BGA8C9C.jpg",
    "keywords": [
      "as"
    ]
  },
  {
    "id": "as-val",
    "name": "AS VAL",
    "namePt": "AS VAL",
    "nameEn": "AS VAL",
    "type": "Assault Rifle",
    "description": "Melhor classe para AS VAL no COD Mobile",
    "descriptionEn": "Best loadout for AS VAL in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/as-val-4B5BGA8C9C.jpg",
    "imagePt": "/attached_assets/as-val-4B5BGA8C9C.jpg",
    "imageEn": "/attached_assets/as-val-4B5BGA8C9C.jpg",
    "keywords": [
      "as-val",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "asm10-2",
    "name": "ASM10",
    "namePt": "ASM10",
    "nameEn": "ASM10",
    "type": "Assault Rifle",
    "description": "Melhor classe para ASM10 no COD Mobile",
    "descriptionEn": "Best loadout for ASM10 in COD Mobile",
    "code": "1E6B7A8B9C",
    "codePt": "1E6B7A8B9C",
    "codeEn": "1E6B7A8B9C",
    "image": "/attached_assets/asm10-IEGB7A8B9C.jpg",
    "imagePt": "/attached_assets/asm10-IEGB7A8B9C.jpg",
    "imageEn": "/attached_assets/asm10-IEGB7A8B9C.jpg",
    "keywords": [
      "asm10",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "bk57",
    "name": "BK57",
    "namePt": "BK57",
    "nameEn": "BK57",
    "type": "Assault Rifle",
    "description": "Melhor classe para BK57 no COD Mobile",
    "descriptionEn": "Best loadout for BK57 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/bk57-2A4B5A8B9A.jpg",
    "imagePt": "/attached_assets/bk57-2A4B5A8B9A.jpg",
    "imageEn": "/attached_assets/bk57-2A4B5A8B9A.jpg",
    "keywords": [
      "bk57",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "by15",
    "name": "BY15",
    "namePt": "BY15",
    "nameEn": "BY15",
    "type": "Shotgun",
    "description": "Escopeta de disparo r├ípido",
    "descriptionEn": "Fast-firing shotgun",
    "code": "1C2A3A4A8B",
    "codePt": "1C2A3A4A8B",
    "codeEn": "1C2A3A4A8B",
    "imagePt": "/attached_assets/1000004520-1C2A3A4A8B.jpg",
    "imageEn": "/attached_assets/1000004516-1C2A3A4A8B.jpg",
    "image": "/attached_assets/1000004520-1C2A3A4A8B.jpg",
    "keywords": [
      "by15",
      "by",
      "escopeta",
      "shotgun"
    ]
  },
  {
    "id": "cbr4",
    "name": "CBR4",
    "namePt": "CBR4",
    "nameEn": "CBR4",
    "type": "SMG",
    "description": "Melhor classe para CBR4 no COD Mobile",
    "descriptionEn": "Best loadout for CBR4 in COD Mobile",
    "code": "1A2B4A5E9A",
    "codePt": "1A2B4A5E9A",
    "codeEn": "1A2B4A5E9A",
    "image": "/attached_assets/cbr4.jpg",
    "imagePt": "/attached_assets/cbr4.jpg",
    "imageEn": "/attached_assets/cbr4.jpg",
    "keywords": [
      "cbr4",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "chicom",
    "name": "Chicom",
    "namePt": "Chicom",
    "nameEn": "Chicom",
    "type": "SMG",
    "description": "Melhor classe para Chicom no COD Mobile",
    "descriptionEn": "Best loadout for Chicom in COD Mobile",
    "code": "1C2B3A4A8C",
    "codePt": "1C2B3A4A8C",
    "codeEn": "1C2B3A4A8C",
    "image": "/attached_assets/chicom-1C3A4C6C90.jpg",
    "imagePt": "/attached_assets/chicom-1C3A4C6C90.jpg",
    "imageEn": "/attached_assets/chicom-1C3A4C6C90.jpg",
    "keywords": [
      "chicom",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "chopper",
    "name": "Chopper",
    "namePt": "Chopper",
    "nameEn": "Chopper",
    "type": "LMG",
    "description": "Melhor classe para Chopper no COD Mobile",
    "descriptionEn": "Best loadout for Chopper in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/chopper-2A3A4A5A8B.jpg",
    "imagePt": "/attached_assets/chopper-2A3A4A5A8B.jpg",
    "imageEn": "/attached_assets/chopper-2A3A4A5A8B.jpg",
    "keywords": [
      "chopper",
      "lmg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "cordite",
    "name": "Cordite",
    "namePt": "Cordite",
    "nameEn": "Cordite",
    "type": "SMG",
    "description": "Melhor classe para Cordite no COD Mobile",
    "descriptionEn": "Best loadout for Cordite in COD Mobile",
    "code": "1C2A4A6C8B",
    "codePt": "1C2A4A6C8B",
    "codeEn": "1C2A4A6C8B",
    "image": "/attached_assets/cordite-IC2A4A6C8B.jpg",
    "imagePt": "/attached_assets/cordite-IC2A4A6C8B.jpg",
    "imageEn": "/attached_assets/cordite-IC2A4A6C8B.jpg",
    "keywords": [
      "cordite",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "cx9",
    "name": "CX-9",
    "namePt": "CX-9",
    "nameEn": "CX-9",
    "type": "SMG",
    "description": "Submetralhadora r├ípida e ├ígil",
    "descriptionEn": "Fast and agile submachine gun",
    "code": "1A2B4C8B9A",
    "codePt": "1A2B4C8B9A",
    "codeEn": "1A2B4C8B9A",
    "imagePt": "/attached_assets/1000004501-1A2B4C8B9A.jpg",
    "imageEn": "/attached_assets/1000004508-1A2B4C8B9A.jpg",
    "image": "/attached_assets/1000004501-1A2B4C8B9A.jpg",
    "keywords": [
      "cx9",
      "cx-9",
      "smt",
      "smg",
      "submetralhadora"
    ]
  },
  {
    "id": "d",
    "name": "D",
    "namePt": "D",
    "nameEn": "D",
    "type": "Assault Rifle",
    "description": "Classe de arma D",
    "descriptionEn": "D weapon class",
    "code": "ZA4B5A8C9C",
    "codePt": "ZA4B5A8C9C",
    "codeEn": "ZA4B5A8C9C",
    "image": "/attached_assets/d-13-sector-ZA4B5A8C9C.jpg",
    "imagePt": "/attached_assets/d-13-sector-ZA4B5A8C9C.jpg",
    "imageEn": "/attached_assets/d-13-sector-ZA4B5A8C9C.jpg",
    "keywords": [
      "d"
    ]
  },
  {
    "id": "d-13-sector",
    "name": "D-13 Sector",
    "namePt": "D-13 Sector",
    "nameEn": "D-13 Sector",
    "type": "Assault Rifle",
    "description": "Melhor classe para D-13 Sector no COD Mobile",
    "descriptionEn": "Best loadout for D-13 Sector in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/d-13-sector-ZA4B5A8C9C.jpg",
    "imagePt": "/attached_assets/d-13-sector-ZA4B5A8C9C.jpg",
    "imageEn": "/attached_assets/d-13-sector-ZA4B5A8C9C.jpg",
    "keywords": [
      "d-13-sector",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "dingo",
    "name": "Dingo",
    "namePt": "Dingo",
    "nameEn": "Dingo",
    "type": "LMG",
    "description": "Melhor classe para Dingo no COD Mobile",
    "descriptionEn": "Best loadout for Dingo in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/dingo-1C2A4A6C8B.jpg",
    "imagePt": "/attached_assets/dingo-1C2A4A6C8B.jpg",
    "imageEn": "/attached_assets/dingo-1C2A4A6C8B.jpg",
    "keywords": [
      "dingo",
      "lmg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "dl",
    "name": "Dl",
    "namePt": "Dl",
    "nameEn": "Dl",
    "type": "Assault Rifle",
    "description": "Classe de arma Dl",
    "descriptionEn": "Dl weapon class",
    "code": "IC4C6C7C8A",
    "codePt": "IC4C6C7C8A",
    "codeEn": "IC4C6C7C8A",
    "image": "/attached_assets/dl-q33-IC4C6C7C8A.jpg",
    "imagePt": "/attached_assets/dl-q33-IC4C6C7C8A.jpg",
    "imageEn": "/attached_assets/dl-q33-IC4C6C7C8A.jpg",
    "keywords": [
      "dl"
    ]
  },
  {
    "id": "dl-q33-2",
    "name": "DL Q33",
    "namePt": "DL Q33",
    "nameEn": "DL Q33",
    "type": "Sniper",
    "description": "Melhor classe para DL Q33 no COD Mobile",
    "descriptionEn": "Best loadout for DL Q33 in COD Mobile",
    "code": "1C4C6C7C8A",
    "codePt": "1C4C6C7C8A",
    "codeEn": "1C4C6C7C8A",
    "image": "/attached_assets/dl-q33-IC4C6C7C8A.jpg",
    "imagePt": "/attached_assets/dl-q33-IC4C6C7C8A.jpg",
    "imageEn": "/attached_assets/dl-q33-IC4C6C7C8A.jpg",
    "keywords": [
      "dl-q33",
      "sniper",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "dr",
    "name": "Dr",
    "namePt": "Dr",
    "nameEn": "Dr",
    "type": "Assault Rifle",
    "description": "Classe de arma Dr",
    "descriptionEn": "Dr weapon class",
    "code": "162B6C8A9A",
    "codePt": "162B6C8A9A",
    "codeEn": "162B6C8A9A",
    "image": "/attached_assets/dr-h-162B6C8A9A.jpg",
    "imagePt": "/attached_assets/dr-h-162B6C8A9A.jpg",
    "imageEn": "/attached_assets/dr-h-162B6C8A9A.jpg",
    "keywords": [
      "dr"
    ]
  },
  {
    "id": "drh",
    "name": "DR-H",
    "namePt": "DR-H",
    "nameEn": "DR-H",
    "type": "Assault Rifle",
    "description": "Rifle de assalto poderoso",
    "descriptionEn": "Powerful assault rifle",
    "code": "1A2B4A8C9A",
    "codePt": "1A2B4A8C9A",
    "codeEn": "1A2B4A8C9A",
    "imagePt": "/attached_assets/1000004506-1A2B4A8C9A.jpg",
    "imageEn": "/attached_assets/1000004513-1A2B4A8C9A.jpg",
    "image": "/attached_assets/1000004506-1A2B4A8C9A.jpg",
    "keywords": [
      "drh",
      "dr-h",
      "assalto",
      "assault",
      "rifle"
    ]
  },
  {
    "id": "echo",
    "name": "Echo",
    "namePt": "Echo",
    "nameEn": "Echo",
    "type": "Shotgun",
    "description": "Melhor classe para Echo no COD Mobile",
    "descriptionEn": "Best loadout for Echo in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/echo-102B3A4B5D.jpg",
    "imagePt": "/attached_assets/echo-102B3A4B5D.jpg",
    "imageEn": "/attached_assets/echo-102B3A4B5D.jpg",
    "keywords": [
      "echo",
      "shotgun",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "fennec",
    "name": "Fennec",
    "namePt": "Fennec",
    "nameEn": "Fennec",
    "type": "SMG",
    "description": "Melhor classe para Fennec no COD Mobile",
    "descriptionEn": "Best loadout for Fennec in COD Mobile",
    "code": "1C2C4D7C8A",
    "codePt": "1C2C4D7C8A",
    "codeEn": "1C2C4D7C8A",
    "image": "/attached_assets/fennec-1C2C407C8A.jpg",
    "imagePt": "/attached_assets/fennec-1C2C407C8A.jpg",
    "imageEn": "/attached_assets/fennec-1C2C407C8A.jpg",
    "keywords": [
      "fennec",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "fr",
    "name": "Fr",
    "namePt": "Fr",
    "nameEn": "Fr",
    "type": "Assault Rifle",
    "description": "Classe de arma Fr",
    "descriptionEn": "Fr weapon class",
    "code": "2C3A5B7A8B",
    "codePt": "2C3A5B7A8B",
    "codeEn": "2C3A5B7A8B",
    "image": "/attached_assets/fr-5-56-2C3A5B7A8B.jpg",
    "imagePt": "/attached_assets/fr-5-56-2C3A5B7A8B.jpg",
    "imageEn": "/attached_assets/fr-5-56-2C3A5B7A8B.jpg",
    "keywords": [
      "fr"
    ]
  },
  {
    "id": "fr-5-56",
    "name": "FR 5.56",
    "namePt": "FR 5.56",
    "nameEn": "FR 5.56",
    "type": "Assault Rifle",
    "description": "Melhor classe para FR 5.56 no COD Mobile",
    "descriptionEn": "Best loadout for FR 5.56 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/fr-5-56-2C3A5B7A8B.jpg",
    "imagePt": "/attached_assets/fr-5-56-2C3A5B7A8B.jpg",
    "imageEn": "/attached_assets/fr-5-56-2C3A5B7A8B.jpg",
    "keywords": [
      "fr-5-56",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "gks-2",
    "name": "GKS",
    "namePt": "GKS",
    "nameEn": "GKS",
    "type": "SMG",
    "description": "Melhor classe para GKS no COD Mobile",
    "descriptionEn": "Best loadout for GKS in COD Mobile",
    "code": "1A2A4B6B",
    "codePt": "1A2A4B6B",
    "codeEn": "1A2A4B6B",
    "image": "/attached_assets/gks.jpg",
    "imagePt": "/attached_assets/gks.jpg",
    "imageEn": "/attached_assets/gks.jpg",
    "keywords": [
      "gks",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "hades",
    "name": "Hades",
    "namePt": "Hades",
    "nameEn": "Hades",
    "type": "LMG",
    "description": "Melhor classe para Hades no COD Mobile",
    "descriptionEn": "Best loadout for Hades in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/hades-2C6A7C8B9B.jpg",
    "imagePt": "/attached_assets/hades-2C6A7C8B9B.jpg",
    "imageEn": "/attached_assets/hades-2C6A7C8B9B.jpg",
    "keywords": [
      "hades",
      "lmg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "hbra3-2",
    "name": "HBRa3",
    "namePt": "HBRa3",
    "nameEn": "HBRa3",
    "type": "Assault Rifle",
    "description": "Melhor classe para HBRa3 no COD Mobile",
    "descriptionEn": "Best loadout for HBRa3 in COD Mobile",
    "code": "1B2B4C5E9A",
    "codePt": "1B2B4C5E9A",
    "codeEn": "1B2B4C5E9A",
    "image": "/attached_assets/hbra3-1B2B4C5E9A.jpg",
    "imagePt": "/attached_assets/hbra3-1B2B4C5E9A.jpg",
    "imageEn": "/attached_assets/hbra3-1B2B4C5E9A.jpg",
    "keywords": [
      "hbra3",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "hg",
    "name": "Hg",
    "namePt": "Hg",
    "nameEn": "Hg",
    "type": "Assault Rifle",
    "description": "Classe de arma Hg",
    "descriptionEn": "Hg weapon class",
    "code": "2C4A6C8C9A",
    "codePt": "2C4A6C8C9A",
    "codeEn": "2C4A6C8C9A",
    "image": "/attached_assets/hg-40-2C4A6C8C9A.jpg",
    "imagePt": "/attached_assets/hg-40-2C4A6C8C9A.jpg",
    "imageEn": "/attached_assets/hg-40-2C4A6C8C9A.jpg",
    "keywords": [
      "hg"
    ]
  },
  {
    "id": "hg-40",
    "name": "HG 40",
    "namePt": "HG 40",
    "nameEn": "HG 40",
    "type": "SMG",
    "description": "Melhor classe para HG 40 no COD Mobile",
    "descriptionEn": "Best loadout for HG 40 in COD Mobile",
    "code": "2C4A6C8C9A",
    "codePt": "2C4A6C8C9A",
    "codeEn": "2C4A6C8C9A",
    "image": "/attached_assets/hg-40-2C4A6C8C9A.jpg",
    "imagePt": "/attached_assets/hg-40-2C4A6C8C9A.jpg",
    "imageEn": "/attached_assets/hg-40-2C4A6C8C9A.jpg",
    "keywords": [
      "hg-40",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "holger",
    "name": "Holger",
    "namePt": "Holger",
    "nameEn": "Holger",
    "type": "Assault Rifle",
    "description": "Classe de arma Holger",
    "descriptionEn": "Holger weapon class",
    "code": "2F4D7A8ESF",
    "codePt": "2F4D7A8ESF",
    "codeEn": "2F4D7A8ESF",
    "image": "/attached_assets/holger-26-2F4D7A8ESF.jpg",
    "imagePt": "/attached_assets/holger-26-2F4D7A8ESF.jpg",
    "imageEn": "/attached_assets/holger-26-2F4D7A8ESF.jpg",
    "keywords": [
      "holger"
    ]
  },
  {
    "id": "holger-26",
    "name": "Holger 26",
    "namePt": "Holger 26",
    "nameEn": "Holger 26",
    "type": "Assault Rifle",
    "description": "Melhor classe para Holger 26 no COD Mobile",
    "descriptionEn": "Best loadout for Holger 26 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/holger-26-2F4D7A8ESF.jpg",
    "imagePt": "/attached_assets/holger-26-2F4D7A8ESF.jpg",
    "imageEn": "/attached_assets/holger-26-2F4D7A8ESF.jpg",
    "keywords": [
      "holger-26",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "hs0405",
    "name": "HS0405",
    "namePt": "HS0405",
    "nameEn": "HS0405",
    "type": "Shotgun",
    "description": "Escopeta com alta mobilidade",
    "descriptionEn": "Shotgun with high mobility",
    "code": "1F2A4A5E6A",
    "codePt": "1F2A4A5E6A",
    "codeEn": "1F2A4A5E6A",
    "imagePt": "/attached_assets/1000004507-1F2A4A5E6A.jpg",
    "imageEn": "/attached_assets/1000004514-1F2A4A5E6A.jpg",
    "image": "/attached_assets/1000004507-1F2A4A5E6A.jpg",
    "keywords": [
      "hs0405",
      "hs",
      "escopeta",
      "shotgun"
    ]
  },
  {
    "id": "hs2126",
    "name": "HS2126",
    "namePt": "HS2126",
    "nameEn": "HS2126",
    "type": "Shotgun",
    "description": "Melhor classe para HS2126 no COD Mobile",
    "descriptionEn": "Best loadout for HS2126 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/hs2126-2A4BGA8B9C.jpg",
    "imagePt": "/attached_assets/hs2126-2A4BGA8B9C.jpg",
    "imageEn": "/attached_assets/hs2126-2A4BGA8B9C.jpg",
    "keywords": [
      "hs2126",
      "shotgun",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "hs405",
    "name": "HS405",
    "namePt": "HS405",
    "nameEn": "HS405",
    "type": "Assault Rifle",
    "description": "Melhor classe para HS405 no COD Mobile",
    "descriptionEn": "Best loadout for HS405 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/hs405-1C406C7D9A.jpg",
    "imagePt": "/attached_assets/hs405-1C406C7D9A.jpg",
    "imageEn": "/attached_assets/hs405-1C406C7D9A.jpg",
    "keywords": [
      "hs405",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "hvk",
    "name": "Hvk",
    "namePt": "Hvk",
    "nameEn": "Hvk",
    "type": "Assault Rifle",
    "description": "Classe de arma Hvk",
    "descriptionEn": "Hvk weapon class",
    "code": "UNKNOWN",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/hvk-30.jpg",
    "imagePt": "/attached_assets/hvk-30.jpg",
    "imageEn": "/attached_assets/hvk-30.jpg",
    "keywords": [
      "hvk"
    ]
  },
  {
    "id": "hvk-30",
    "name": "HVK-30",
    "namePt": "HVK-30",
    "nameEn": "HVK-30",
    "type": "Assault Rifle",
    "description": "Melhor classe para HVK-30 no COD Mobile",
    "descriptionEn": "Best loadout for HVK-30 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/hvk-30.jpg",
    "imagePt": "/attached_assets/hvk-30.jpg",
    "imageEn": "/attached_assets/hvk-30.jpg",
    "keywords": [
      "hvk-30",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "icr",
    "name": "Icr",
    "namePt": "Icr",
    "nameEn": "Icr",
    "type": "Assault Rifle",
    "description": "Classe de arma Icr",
    "descriptionEn": "Icr weapon class",
    "code": "1F4B5AGA8A",
    "codePt": "1F4B5AGA8A",
    "codeEn": "1F4B5AGA8A",
    "image": "/attached_assets/icr-1-1F4B5AGA8A.jpg",
    "imagePt": "/attached_assets/icr-1-1F4B5AGA8A.jpg",
    "imageEn": "/attached_assets/icr-1-1F4B5AGA8A.jpg",
    "keywords": [
      "icr"
    ]
  },
  {
    "id": "icr-1-2",
    "name": "ICR-1",
    "namePt": "ICR-1",
    "nameEn": "ICR-1",
    "type": "Assault Rifle",
    "description": "Melhor classe para ICR-1 no COD Mobile",
    "descriptionEn": "Best loadout for ICR-1 in COD Mobile",
    "code": "1F4B5A6A8A",
    "codePt": "1F4B5A6A8A",
    "codeEn": "1F4B5A6A8A",
    "image": "/attached_assets/icr-1-1F4B5AGA8A.jpg",
    "imagePt": "/attached_assets/icr-1-1F4B5AGA8A.jpg",
    "imageEn": "/attached_assets/icr-1-1F4B5AGA8A.jpg",
    "keywords": [
      "icr-1",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "jak",
    "name": "Jak",
    "namePt": "Jak",
    "nameEn": "Jak",
    "type": "Assault Rifle",
    "description": "Classe de arma Jak",
    "descriptionEn": "Jak weapon class",
    "code": "1C20405A9A",
    "codePt": "1C20405A9A",
    "codeEn": "1C20405A9A",
    "image": "/attached_assets/jak-12-1C20405A9A.jpg",
    "imagePt": "/attached_assets/jak-12-1C20405A9A.jpg",
    "imageEn": "/attached_assets/jak-12-1C20405A9A.jpg",
    "keywords": [
      "jak"
    ]
  },
  {
    "id": "jak-12",
    "name": "JAK-12",
    "namePt": "JAK-12",
    "nameEn": "JAK-12",
    "type": "Shotgun",
    "description": "Melhor classe para JAK-12 no COD Mobile",
    "descriptionEn": "Best loadout for JAK-12 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/jak-12-1C20405A9A.jpg",
    "imagePt": "/attached_assets/jak-12-1C20405A9A.jpg",
    "imageEn": "/attached_assets/jak-12-1C20405A9A.jpg",
    "keywords": [
      "jak-12",
      "shotgun",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "kar98k",
    "name": "Kar98k",
    "namePt": "Kar98k",
    "nameEn": "Kar98k",
    "type": "Assault Rifle",
    "description": "Melhor classe para Kar98k no COD Mobile",
    "descriptionEn": "Best loadout for Kar98k in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/kar98k-1A2B4B8A9A.jpg",
    "imagePt": "/attached_assets/kar98k-1A2B4B8A9A.jpg",
    "imageEn": "/attached_assets/kar98k-1A2B4B8A9A.jpg",
    "keywords": [
      "kar98k",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "kilo",
    "name": "Kilo",
    "namePt": "Kilo",
    "nameEn": "Kilo",
    "type": "Assault Rifle",
    "description": "Classe de arma Kilo",
    "descriptionEn": "Kilo weapon class",
    "code": "1C2A4A5E6B",
    "codePt": "1C2A4A5E6B",
    "codeEn": "1C2A4A5E6B",
    "image": "/attached_assets/kilo-141-1C2A4A5E6B.jpg",
    "imagePt": "/attached_assets/kilo-141-1C2A4A5E6B.jpg",
    "imageEn": "/attached_assets/kilo-141-1C2A4A5E6B.jpg",
    "keywords": [
      "kilo"
    ]
  },
  {
    "id": "kilo-141",
    "name": "Kilo 141",
    "namePt": "Kilo 141",
    "nameEn": "Kilo 141",
    "type": "Assault Rifle",
    "description": "Melhor classe para Kilo 141 no COD Mobile",
    "descriptionEn": "Best loadout for Kilo 141 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/kilo-141-1C2A4A5E6B.jpg",
    "imagePt": "/attached_assets/kilo-141-1C2A4A5E6B.jpg",
    "imageEn": "/attached_assets/kilo-141-1C2A4A5E6B.jpg",
    "keywords": [
      "kilo-141",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "kilo-bolt-action",
    "name": "Kilo Bolt-Action",
    "namePt": "Kilo Bolt-Action",
    "nameEn": "Kilo Bolt-Action",
    "type": "Marksman",
    "description": "Melhor classe para Kilo Bolt-Action no COD Mobile",
    "descriptionEn": "Best loadout for Kilo Bolt-Action in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/kilo-bolt-action-1B204F8B9C.jpg",
    "imagePt": "/attached_assets/kilo-bolt-action-1B204F8B9C.jpg",
    "imageEn": "/attached_assets/kilo-bolt-action-1B204F8B9C.jpg",
    "keywords": [
      "kilo-bolt-action",
      "marksman",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "kn",
    "name": "Kn",
    "namePt": "Kn",
    "nameEn": "Kn",
    "type": "Assault Rifle",
    "description": "Classe de arma Kn",
    "descriptionEn": "Kn weapon class",
    "code": "1D2A4A7B8C",
    "codePt": "1D2A4A7B8C",
    "codeEn": "1D2A4A7B8C",
    "image": "/attached_assets/kn-44-1D2A4A7B8C.jpg",
    "imagePt": "/attached_assets/kn-44-1D2A4A7B8C.jpg",
    "imageEn": "/attached_assets/kn-44-1D2A4A7B8C.jpg",
    "keywords": [
      "kn"
    ]
  },
  {
    "id": "kn-44",
    "name": "KN-44",
    "namePt": "KN-44",
    "nameEn": "KN-44",
    "type": "Assault Rifle",
    "description": "Melhor classe para KN-44 no COD Mobile",
    "descriptionEn": "Best loadout for KN-44 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/kn-44-1D2A4A7B8C.jpg",
    "imagePt": "/attached_assets/kn-44-1D2A4A7B8C.jpg",
    "imageEn": "/attached_assets/kn-44-1D2A4A7B8C.jpg",
    "keywords": [
      "kn-44",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "koshka-3",
    "name": "Koshka",
    "namePt": "Koshka",
    "nameEn": "Koshka",
    "type": "Sniper",
    "description": "Melhor classe para Koshka no COD Mobile",
    "descriptionEn": "Best loadout for Koshka in COD Mobile",
    "code": "1B2B6C7C9B",
    "codePt": "1B2B6C7C9B",
    "codeEn": "1B2B6C7C9B",
    "image": "/attached_assets/koshka-1B2B6C7C9B.jpg",
    "imagePt": "/attached_assets/koshka-1B2B6C7C9B.jpg",
    "imageEn": "/attached_assets/koshka-1B2B6C7C9B.jpg",
    "keywords": [
      "koshka",
      "sniper",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "krm",
    "name": "Krm",
    "namePt": "Krm",
    "nameEn": "Krm",
    "type": "Assault Rifle",
    "description": "Classe de arma Krm",
    "descriptionEn": "Krm weapon class",
    "code": "2A4C5ABA9C",
    "codePt": "2A4C5ABA9C",
    "codeEn": "2A4C5ABA9C",
    "image": "/attached_assets/krm-262-2A4C5ABA9C.jpg",
    "imagePt": "/attached_assets/krm-262-2A4C5ABA9C.jpg",
    "imageEn": "/attached_assets/krm-262-2A4C5ABA9C.jpg",
    "keywords": [
      "krm"
    ]
  },
  {
    "id": "krm-262",
    "name": "KRM-262",
    "namePt": "KRM-262",
    "nameEn": "KRM-262",
    "type": "Shotgun",
    "description": "Melhor classe para KRM-262 no COD Mobile",
    "descriptionEn": "Best loadout for KRM-262 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/krm-262-2A4C5ABA9C.jpg",
    "imagePt": "/attached_assets/krm-262-2A4C5ABA9C.jpg",
    "imageEn": "/attached_assets/krm-262-2A4C5ABA9C.jpg",
    "keywords": [
      "krm-262",
      "shotgun",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "ksp",
    "name": "Ksp",
    "namePt": "Ksp",
    "nameEn": "Ksp",
    "type": "Assault Rifle",
    "description": "Classe de arma Ksp",
    "descriptionEn": "Ksp weapon class",
    "code": "1B2A4B7B8A",
    "codePt": "1B2A4B7B8A",
    "codeEn": "1B2A4B7B8A",
    "image": "/attached_assets/ksp-45-1B2A4B7B8A.jpg",
    "imagePt": "/attached_assets/ksp-45-1B2A4B7B8A.jpg",
    "imageEn": "/attached_assets/ksp-45-1B2A4B7B8A.jpg",
    "keywords": [
      "ksp"
    ]
  },
  {
    "id": "ksp-45",
    "name": "KSP 45",
    "namePt": "KSP 45",
    "nameEn": "KSP 45",
    "type": "SMG",
    "description": "Melhor classe para KSP 45 no COD Mobile",
    "descriptionEn": "Best loadout for KSP 45 in COD Mobile",
    "code": "1B2A4B7B8A",
    "codePt": "1B2A4B7B8A",
    "codeEn": "1B2A4B7B8A",
    "image": "/attached_assets/ksp-45-1B2A4B7B8A.jpg",
    "imagePt": "/attached_assets/ksp-45-1B2A4B7B8A.jpg",
    "imageEn": "/attached_assets/ksp-45-1B2A4B7B8A.jpg",
    "keywords": [
      "ksp-45",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "lapa",
    "name": "LAPA",
    "namePt": "LAPA",
    "nameEn": "LAPA",
    "type": "SMG",
    "description": "Melhor classe para LAPA no COD Mobile",
    "descriptionEn": "Best loadout for LAPA in COD Mobile",
    "code": "1B2F4F8B9C",
    "codePt": "1B2F4F8B9C",
    "codeEn": "1B2F4F8B9C",
    "image": "/attached_assets/lapa-1B2F4F8B9C.jpg",
    "imagePt": "/attached_assets/lapa-1B2F4F8B9C.jpg",
    "imageEn": "/attached_assets/lapa-1B2F4F8B9C.jpg",
    "keywords": [
      "lapa",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "lk24",
    "name": "LK24",
    "namePt": "LK24",
    "nameEn": "LK24",
    "type": "Assault Rifle",
    "description": "Melhor classe para LK24 no COD Mobile",
    "descriptionEn": "Best loadout for LK24 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/lk24-2A4A5B6A9C.jpg",
    "imagePt": "/attached_assets/lk24-2A4A5B6A9C.jpg",
    "imageEn": "/attached_assets/lk24-2A4A5B6A9C.jpg",
    "keywords": [
      "lk24",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "locus-3",
    "name": "Locus",
    "namePt": "Locus",
    "nameEn": "Locus",
    "type": "Sniper",
    "description": "Melhor classe para Locus no COD Mobile",
    "descriptionEn": "Best loadout for Locus in COD Mobile",
    "code": "1B2C4A5A7C",
    "codePt": "1B2C4A5A7C",
    "codeEn": "1B2C4A5A7C",
    "image": "/attached_assets/locus-IB2C4A5A7C.jpg",
    "imagePt": "/attached_assets/locus-IB2C4A5A7C.jpg",
    "imageEn": "/attached_assets/locus-IB2C4A5A7C.jpg",
    "keywords": [
      "locus",
      "sniper",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "lw3-tundra",
    "name": "LW3-Tundra",
    "namePt": "LW3-Tundra",
    "nameEn": "LW3-Tundra",
    "type": "Sniper",
    "description": "Franco-atirador moderno e poderoso",
    "descriptionEn": "Modern and powerful sniper",
    "code": "1A2F5A8A9E",
    "codePt": "1A2F5A8A9E",
    "codeEn": "1A2F5A8A9E",
    "imagePt": "/attached_assets/1000004334-IA2F5ABASE.jpg",
    "imageEn": "/attached_assets/1000004338-LA2F5ABASE.jpg",
    "image": "/attached_assets/1000004334-IA2F5ABASE.jpg",
    "keywords": [
      "lw3",
      "tundra",
      "lw3-tundra",
      "sniper",
      "franco-atirador"
    ]
  },
  {
    "id": "m13",
    "name": "M13",
    "namePt": "M13",
    "nameEn": "M13",
    "type": "Assault Rifle",
    "description": "Melhor classe para M13 no COD Mobile",
    "descriptionEn": "Best loadout for M13 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/m13-IA2B5AGA8A.jpg",
    "imagePt": "/attached_assets/m13-IA2B5AGA8A.jpg",
    "imageEn": "/attached_assets/m13-IA2B5AGA8A.jpg",
    "keywords": [
      "m13",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "m16",
    "name": "M16",
    "namePt": "M16",
    "nameEn": "M16",
    "type": "Assault Rifle",
    "description": "Melhor classe para M16 no COD Mobile",
    "descriptionEn": "Best loadout for M16 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/m16-1C2B5E6C7G.jpg",
    "imagePt": "/attached_assets/m16-1C2B5E6C7G.jpg",
    "imageEn": "/attached_assets/m16-1C2B5E6C7G.jpg",
    "keywords": [
      "m16",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "m21",
    "name": "M21",
    "namePt": "M21",
    "nameEn": "M21",
    "type": "Assault Rifle",
    "description": "Classe de arma M21",
    "descriptionEn": "M21 weapon class",
    "code": "GABRIELYAN",
    "codePt": "GABRIELYAN",
    "codeEn": "GABRIELYAN",
    "image": "/attached_assets/m21-ebr-GABRIELYAN.jpg",
    "imagePt": "/attached_assets/m21-ebr-GABRIELYAN.jpg",
    "imageEn": "/attached_assets/m21-ebr-GABRIELYAN.jpg",
    "keywords": [
      "m21"
    ]
  },
  {
    "id": "m21-ebr",
    "name": "M21 EBR",
    "namePt": "M21 EBR",
    "nameEn": "M21 EBR",
    "type": "Sniper",
    "description": "Melhor classe para M21 EBR no COD Mobile",
    "descriptionEn": "Best loadout for M21 EBR in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/m21-ebr-GABRIELYAN.jpg",
    "imagePt": "/attached_assets/m21-ebr-GABRIELYAN.jpg",
    "imageEn": "/attached_assets/m21-ebr-GABRIELYAN.jpg",
    "keywords": [
      "m21-ebr",
      "sniper",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "m4",
    "name": "M4",
    "namePt": "M4",
    "nameEn": "M4",
    "type": "Assault Rifle",
    "description": "Melhor classe para M4 no COD Mobile",
    "descriptionEn": "Best loadout for M4 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/m4-1F2C4A6B8B.jpg",
    "imagePt": "/attached_assets/m4-1F2C4A6B8B.jpg",
    "imageEn": "/attached_assets/m4-1F2C4A6B8B.jpg",
    "keywords": [
      "m4",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "m4lmg",
    "name": "M4LMG",
    "namePt": "M4LMG",
    "nameEn": "M4LMG",
    "type": "Assault Rifle",
    "description": "Melhor classe para M4LMG no COD Mobile",
    "descriptionEn": "Best loadout for M4LMG in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/m4lmg-2B4C6C7E8B.jpg",
    "imagePt": "/attached_assets/m4lmg-2B4C6C7E8B.jpg",
    "imageEn": "/attached_assets/m4lmg-2B4C6C7E8B.jpg",
    "keywords": [
      "m4lmg",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "mac",
    "name": "Mac",
    "namePt": "Mac",
    "nameEn": "Mac",
    "type": "Assault Rifle",
    "description": "Classe de arma Mac",
    "descriptionEn": "Mac weapon class",
    "code": "1B2A407B8B",
    "codePt": "1B2A407B8B",
    "codeEn": "1B2A407B8B",
    "image": "/attached_assets/mac-10-1B2A407B8B.jpg",
    "imagePt": "/attached_assets/mac-10-1B2A407B8B.jpg",
    "imageEn": "/attached_assets/mac-10-1B2A407B8B.jpg",
    "keywords": [
      "mac"
    ]
  },
  {
    "id": "mac-10",
    "name": "MAC-10",
    "namePt": "MAC-10",
    "nameEn": "MAC-10",
    "type": "SMG",
    "description": "Melhor classe para MAC-10 no COD Mobile",
    "descriptionEn": "Best loadout for MAC-10 in COD Mobile",
    "code": "1B2A4D7B8B",
    "codePt": "1B2A4D7B8B",
    "codeEn": "1B2A4D7B8B",
    "image": "/attached_assets/mac-10-1B2A407B8B.jpg",
    "imagePt": "/attached_assets/mac-10-1B2A407B8B.jpg",
    "imageEn": "/attached_assets/mac-10-1B2A407B8B.jpg",
    "keywords": [
      "mac-10",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "man",
    "name": "Man",
    "namePt": "Man",
    "nameEn": "Man",
    "type": "Assault Rifle",
    "description": "Classe de arma Man",
    "descriptionEn": "Man weapon class",
    "code": "1A2A3B4A7A",
    "codePt": "1A2A3B4A7A",
    "codeEn": "1A2A3B4A7A",
    "image": "/attached_assets/man-o-war-1A2A3B4A7A.jpg",
    "imagePt": "/attached_assets/man-o-war-1A2A3B4A7A.jpg",
    "imageEn": "/attached_assets/man-o-war-1A2A3B4A7A.jpg",
    "keywords": [
      "man"
    ]
  },
  {
    "id": "man-o-war",
    "name": "Man-O-War",
    "namePt": "Man-O-War",
    "nameEn": "Man-O-War",
    "type": "Assault Rifle",
    "description": "Melhor classe para Man-O-War no COD Mobile",
    "descriptionEn": "Best loadout for Man-O-War in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/man-o-war-1A2A3B4A7A.jpg",
    "imagePt": "/attached_assets/man-o-war-1A2A3B4A7A.jpg",
    "imageEn": "/attached_assets/man-o-war-1A2A3B4A7A.jpg",
    "keywords": [
      "man-o-war",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "mk2-2",
    "name": "MK2",
    "namePt": "MK2",
    "nameEn": "MK2",
    "type": "Marksman",
    "description": "Melhor classe para MK2 no COD Mobile",
    "descriptionEn": "Best loadout for MK2 in COD Mobile",
    "code": "1C2B6C7A8B",
    "codePt": "1C2B6C7A8B",
    "codeEn": "1C2B6C7A8B",
    "image": "/attached_assets/mk2-102B6C7A8B.jpg",
    "imagePt": "/attached_assets/mk2-102B6C7A8B.jpg",
    "imageEn": "/attached_assets/mk2-102B6C7A8B.jpg",
    "keywords": [
      "mk2",
      "marksman",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "msmc",
    "name": "MSMC",
    "namePt": "MSMC",
    "nameEn": "MSMC",
    "type": "SMG",
    "description": "Melhor classe para MSMC no COD Mobile",
    "descriptionEn": "Best loadout for MSMC in COD Mobile",
    "code": "1C2C4A6C8A",
    "codePt": "1C2C4A6C8A",
    "codeEn": "1C2C4A6C8A",
    "image": "/attached_assets/msmc-1C2C4AGC8A.jpg",
    "imagePt": "/attached_assets/msmc-1C2C4AGC8A.jpg",
    "imageEn": "/attached_assets/msmc-1C2C4AGC8A.jpg",
    "keywords": [
      "msmc",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "mx9",
    "name": "MX9",
    "namePt": "MX9",
    "nameEn": "MX9",
    "type": "SMG",
    "description": "Submetralhadora vers├ítil para combate pr├│ximo",
    "descriptionEn": "Versatile submachine gun for close combat",
    "code": "1B2A4D6C8B",
    "codePt": "1B2A4D6C8B",
    "codeEn": "1B2A4D6C8B",
    "imagePt": "/attached_assets/1000004519-1B2A4D6C8B.jpg",
    "imageEn": "/attached_assets/1000004515-1B2A406C8B.jpg",
    "image": "/attached_assets/1000004519-1B2A4D6C8B.jpg",
    "keywords": [
      "mx9",
      "mx-9",
      "smt",
      "smg",
      "submetralhadora"
    ]
  },
  {
    "id": "na",
    "name": "Na",
    "namePt": "Na",
    "nameEn": "Na",
    "type": "Assault Rifle",
    "description": "Classe de arma Na",
    "descriptionEn": "Na weapon class",
    "code": "1C2A4A5A8C",
    "codePt": "1C2A4A5A8C",
    "codeEn": "1C2A4A5A8C",
    "image": "/attached_assets/na-45-1C2A4A5A8C.jpg",
    "imagePt": "/attached_assets/na-45-1C2A4A5A8C.jpg",
    "imageEn": "/attached_assets/na-45-1C2A4A5A8C.jpg",
    "keywords": [
      "na"
    ]
  },
  {
    "id": "na-45",
    "name": "NA-45",
    "namePt": "NA-45",
    "nameEn": "NA-45",
    "type": "Sniper",
    "description": "Melhor classe para NA-45 no COD Mobile",
    "descriptionEn": "Best loadout for NA-45 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/na-45-1C2A4A5A8C.jpg",
    "imagePt": "/attached_assets/na-45-1C2A4A5A8C.jpg",
    "imageEn": "/attached_assets/na-45-1C2A4A5A8C.jpg",
    "keywords": [
      "na-45",
      "sniper",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "oden",
    "name": "Oden",
    "namePt": "Oden",
    "nameEn": "Oden",
    "type": "Assault Rifle",
    "description": "Rifle de assalto de alto dano",
    "descriptionEn": "High damage assault rifle",
    "code": "1A4A5A7C9A",
    "codePt": "1A4A5A7C9A",
    "codeEn": "1A4A5A7C9A",
    "imagePt": "/attached_assets/1000004521-IA4A5A7C9A.jpg",
    "imageEn": "/attached_assets/1000004517-1A4A5A7C9A.jpg",
    "image": "/attached_assets/1000004521-IA4A5A7C9A.jpg",
    "keywords": [
      "oden",
      "assalto",
      "assault",
      "rifle"
    ]
  },
  {
    "id": "ots",
    "name": "Ots",
    "namePt": "Ots",
    "nameEn": "Ots",
    "type": "Assault Rifle",
    "description": "Classe de arma Ots",
    "descriptionEn": "Ots weapon class",
    "code": "1B2B7F8B9B",
    "codePt": "1B2B7F8B9B",
    "codeEn": "1B2B7F8B9B",
    "image": "/attached_assets/ots-9-1B2B7F8B9B.jpg",
    "imagePt": "/attached_assets/ots-9-1B2B7F8B9B.jpg",
    "imageEn": "/attached_assets/ots-9-1B2B7F8B9B.jpg",
    "keywords": [
      "ots"
    ]
  },
  {
    "id": "ots-9",
    "name": "OTs 9",
    "namePt": "OTs 9",
    "nameEn": "OTs 9",
    "type": "SMG",
    "description": "Melhor classe para OTs 9 no COD Mobile",
    "descriptionEn": "Best loadout for OTs 9 in COD Mobile",
    "code": "1B2B7F8B9B",
    "codePt": "1B2B7F8B9B",
    "codeEn": "1B2B7F8B9B",
    "image": "/attached_assets/ots-9-1B2B7F8B9B.jpg",
    "imagePt": "/attached_assets/ots-9-1B2B7F8B9B.jpg",
    "imageEn": "/attached_assets/ots-9-1B2B7F8B9B.jpg",
    "keywords": [
      "ots-9",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "outlaw",
    "name": "Outlaw",
    "namePt": "Outlaw",
    "nameEn": "Outlaw",
    "type": "Sniper",
    "description": "Franco-atirador r├ípido e preciso",
    "descriptionEn": "Fast and precise sniper",
    "code": "2A4C5H6A9C",
    "codePt": "2A4C5H6A9C",
    "codeEn": "2A4C5H6A9C",
    "imagePt": "/attached_assets/1000004329.jpg",
    "imageEn": "/attached_assets/1000004335-2A4CSHGASC.jpg",
    "image": "/attached_assets/1000004329.jpg",
    "keywords": [
      "outlaw",
      "sniper",
      "franco-atirador"
    ]
  },
  {
    "id": "pdw",
    "name": "Pdw",
    "namePt": "Pdw",
    "nameEn": "Pdw",
    "type": "Assault Rifle",
    "description": "Classe de arma Pdw",
    "descriptionEn": "Pdw weapon class",
    "code": "1C2A4A5E9A",
    "codePt": "1C2A4A5E9A",
    "codeEn": "1C2A4A5E9A",
    "image": "/attached_assets/pdw-57-1C2A4A5E9A.jpg",
    "imagePt": "/attached_assets/pdw-57-1C2A4A5E9A.jpg",
    "imageEn": "/attached_assets/pdw-57-1C2A4A5E9A.jpg",
    "keywords": [
      "pdw"
    ]
  },
  {
    "id": "pdw-57",
    "name": "PDW-57",
    "namePt": "PDW-57",
    "nameEn": "PDW-57",
    "type": "SMG",
    "description": "Melhor classe para PDW-57 no COD Mobile",
    "descriptionEn": "Best loadout for PDW-57 in COD Mobile",
    "code": "1C2A4A5E9A",
    "codePt": "1C2A4A5E9A",
    "codeEn": "1C2A4A5E9A",
    "image": "/attached_assets/pdw-57-1C2A4A5E9A.jpg",
    "imagePt": "/attached_assets/pdw-57-1C2A4A5E9A.jpg",
    "imageEn": "/attached_assets/pdw-57-1C2A4A5E9A.jpg",
    "keywords": [
      "pdw-57",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "peacekeeper",
    "name": "Peacekeeper",
    "namePt": "Peacekeeper",
    "nameEn": "Peacekeeper",
    "type": "Assault Rifle",
    "description": "Classe de arma Peacekeeper",
    "descriptionEn": "Peacekeeper weapon class",
    "code": "102C4C6C7D",
    "codePt": "102C4C6C7D",
    "codeEn": "102C4C6C7D",
    "image": "/attached_assets/peacekeeper-mk2-102C4C6C7D.jpg",
    "imagePt": "/attached_assets/peacekeeper-mk2-102C4C6C7D.jpg",
    "imageEn": "/attached_assets/peacekeeper-mk2-102C4C6C7D.jpg",
    "keywords": [
      "peacekeeper"
    ]
  },
  {
    "id": "peacekeeper-mk2",
    "name": "Peacekeeper MK2",
    "namePt": "Peacekeeper MK2",
    "nameEn": "Peacekeeper MK2",
    "type": "Assault Rifle",
    "description": "Melhor classe para Peacekeeper MK2 no COD Mobile",
    "descriptionEn": "Best loadout for Peacekeeper MK2 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/peacekeeper-mk2-102C4C6C7D.jpg",
    "imagePt": "/attached_assets/peacekeeper-mk2-102C4C6C7D.jpg",
    "imageEn": "/attached_assets/peacekeeper-mk2-102C4C6C7D.jpg",
    "keywords": [
      "peacekeeper-mk2",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "pharo",
    "name": "Pharo",
    "namePt": "Pharo",
    "nameEn": "Pharo",
    "type": "SMG",
    "description": "Melhor classe para Pharo no COD Mobile",
    "descriptionEn": "Best loadout for Pharo in COD Mobile",
    "code": "1E2C4B7D8A",
    "codePt": "1E2C4B7D8A",
    "codeEn": "1E2C4B7D8A",
    "image": "/attached_assets/pharo.jpg",
    "imagePt": "/attached_assets/pharo.jpg",
    "imageEn": "/attached_assets/pharo.jpg",
    "keywords": [
      "pharo",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "photography",
    "name": "Photography",
    "namePt": "Photography",
    "nameEn": "Photography",
    "type": "Assault Rifle",
    "description": "Classe de arma Photography",
    "descriptionEn": "Photography weapon class",
    "code": "UNKNOWN",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/photography-new.jpg",
    "imagePt": "/attached_assets/photography-new.jpg",
    "imageEn": "/attached_assets/photography-new.jpg",
    "keywords": [
      "photography"
    ]
  },
  {
    "id": "pp19",
    "name": "Pp19",
    "namePt": "Pp19",
    "nameEn": "Pp19",
    "type": "Assault Rifle",
    "description": "Classe de arma Pp19",
    "descriptionEn": "Pp19 weapon class",
    "code": "1C2B4A6C9A",
    "codePt": "1C2B4A6C9A",
    "codeEn": "1C2B4A6C9A",
    "image": "/attached_assets/pp19-bizon-1C2B4A6C9A.jpg",
    "imagePt": "/attached_assets/pp19-bizon-1C2B4A6C9A.jpg",
    "imageEn": "/attached_assets/pp19-bizon-1C2B4A6C9A.jpg",
    "keywords": [
      "pp19"
    ]
  },
  {
    "id": "pp19-bizon",
    "name": "PP19 Bizon",
    "namePt": "PP19 Bizon",
    "nameEn": "PP19 Bizon",
    "type": "SMG",
    "description": "Melhor classe para PP19 Bizon no COD Mobile",
    "descriptionEn": "Best loadout for PP19 Bizon in COD Mobile",
    "code": "1C2B4A6C9A",
    "codePt": "1C2B4A6C9A",
    "codeEn": "1C2B4A6C9A",
    "image": "/attached_assets/pp19-bizon-1C2B4A6C9A.jpg",
    "imagePt": "/attached_assets/pp19-bizon-1C2B4A6C9A.jpg",
    "imageEn": "/attached_assets/pp19-bizon-1C2B4A6C9A.jpg",
    "keywords": [
      "pp19-bizon",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "ppsh",
    "name": "Ppsh",
    "namePt": "Ppsh",
    "nameEn": "Ppsh",
    "type": "Assault Rifle",
    "description": "Classe de arma Ppsh",
    "descriptionEn": "Ppsh weapon class",
    "code": "1C2B5EGB98",
    "codePt": "1C2B5EGB98",
    "codeEn": "1C2B5EGB98",
    "image": "/attached_assets/ppsh-41-1C2B5EGB98.jpg",
    "imagePt": "/attached_assets/ppsh-41-1C2B5EGB98.jpg",
    "imageEn": "/attached_assets/ppsh-41-1C2B5EGB98.jpg",
    "keywords": [
      "ppsh"
    ]
  },
  {
    "id": "ppsh-41",
    "name": "PPSh-41",
    "namePt": "PPSh-41",
    "nameEn": "PPSh-41",
    "type": "SMG",
    "description": "Melhor classe para PPSh-41 no COD Mobile",
    "descriptionEn": "Best loadout for PPSh-41 in COD Mobile",
    "code": "1C2B5E6B9B",
    "codePt": "1C2B5E6B9B",
    "codeEn": "1C2B5E6B9B",
    "image": "/attached_assets/ppsh-41-1C2B5EGB98.jpg",
    "imagePt": "/attached_assets/ppsh-41-1C2B5EGB98.jpg",
    "imageEn": "/attached_assets/ppsh-41-1C2B5EGB98.jpg",
    "keywords": [
      "ppsh-41",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "qq9",
    "name": "QQ9",
    "namePt": "QQ9",
    "nameEn": "QQ9",
    "type": "SMG",
    "description": "Melhor classe para QQ9 no COD Mobile",
    "descriptionEn": "Best loadout for QQ9 in COD Mobile",
    "code": "1C2C4A6C8A",
    "codePt": "1C2C4A6C8A",
    "codeEn": "1C2C4A6C8A",
    "image": "/attached_assets/qq9-1C2C4A6C8A.jpg",
    "imagePt": "/attached_assets/qq9-1C2C4A6C8A.jpg",
    "imageEn": "/attached_assets/qq9-1C2C4A6C8A.jpg",
    "keywords": [
      "qq9",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "qxr",
    "name": "QXR",
    "namePt": "QXR",
    "nameEn": "QXR",
    "type": "SMG",
    "description": "Melhor classe para QXR no COD Mobile",
    "descriptionEn": "Best loadout for QXR in COD Mobile",
    "code": "1C2C4A5I8A",
    "codePt": "1C2C4A5I8A",
    "codeEn": "1C2C4A5I8A",
    "image": "/attached_assets/qxr-1C2C4A5I8A.jpg",
    "imagePt": "/attached_assets/qxr-1C2C4A5I8A.jpg",
    "imageEn": "/attached_assets/qxr-1C2C4A5I8A.jpg",
    "keywords": [
      "qxr",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "r9",
    "name": "R9",
    "namePt": "R9",
    "nameEn": "R9",
    "type": "Assault Rifle",
    "description": "Classe de arma R9",
    "descriptionEn": "R9 weapon class",
    "code": "1C4C5A7A8C",
    "codePt": "1C4C5A7A8C",
    "codeEn": "1C4C5A7A8C",
    "image": "/attached_assets/r9-0-1C4C5A7A8C.jpg",
    "imagePt": "/attached_assets/r9-0-1C4C5A7A8C.jpg",
    "imageEn": "/attached_assets/r9-0-1C4C5A7A8C.jpg",
    "keywords": [
      "r9"
    ]
  },
  {
    "id": "r9-0",
    "name": "R9-0",
    "namePt": "R9-0",
    "nameEn": "R9-0",
    "type": "Shotgun",
    "description": "Melhor classe para R9-0 no COD Mobile",
    "descriptionEn": "Best loadout for R9-0 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/r9-0-1C4C5A7A8C.jpg",
    "imagePt": "/attached_assets/r9-0-1C4C5A7A8C.jpg",
    "imageEn": "/attached_assets/r9-0-1C4C5A7A8C.jpg",
    "keywords": [
      "r9-0",
      "shotgun",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "razorback",
    "name": "Razorback",
    "namePt": "Razorback",
    "nameEn": "Razorback",
    "type": "SMG",
    "description": "Melhor classe para Razorback no COD Mobile",
    "descriptionEn": "Best loadout for Razorback in COD Mobile",
    "code": "1C2A5I6C9A",
    "codePt": "1C2A5I6C9A",
    "codeEn": "1C2A5I6C9A",
    "image": "/attached_assets/razorback-IC2A5I6C9A.jpg",
    "imagePt": "/attached_assets/razorback-IC2A5I6C9A.jpg",
    "imageEn": "/attached_assets/razorback-IC2A5I6C9A.jpg",
    "keywords": [
      "razorback",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "rpd",
    "name": "RPD",
    "namePt": "RPD",
    "nameEn": "RPD",
    "type": "LMG",
    "description": "Melhor classe para RPD no COD Mobile",
    "descriptionEn": "Best loadout for RPD in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/rpd-1E2C407F9C.jpg",
    "imagePt": "/attached_assets/rpd-1E2C407F9C.jpg",
    "imageEn": "/attached_assets/rpd-1E2C407F9C.jpg",
    "keywords": [
      "rpd",
      "lmg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "sks-2",
    "name": "SKS",
    "namePt": "SKS",
    "nameEn": "SKS",
    "type": "Marksman",
    "description": "Melhor classe para SKS no COD Mobile",
    "descriptionEn": "Best loadout for SKS in COD Mobile",
    "code": "1D2C5F7B8B",
    "codePt": "1D2C5F7B8B",
    "codeEn": "1D2C5F7B8B",
    "image": "/attached_assets/sks-102C5F7B8B.jpg",
    "imagePt": "/attached_assets/sks-102C5F7B8B.jpg",
    "imageEn": "/attached_assets/sks-102C5F7B8B.jpg",
    "keywords": [
      "sks",
      "marksman",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "sp",
    "name": "Sp",
    "namePt": "Sp",
    "nameEn": "Sp",
    "type": "Assault Rifle",
    "description": "Classe de arma Sp",
    "descriptionEn": "Sp weapon class",
    "code": "102C4B889H",
    "codePt": "102C4B889H",
    "codeEn": "102C4B889H",
    "image": "/attached_assets/sp-r-208-102C4B889H.jpg",
    "imagePt": "/attached_assets/sp-r-208-102C4B889H.jpg",
    "imageEn": "/attached_assets/sp-r-208-102C4B889H.jpg",
    "keywords": [
      "sp"
    ]
  },
  {
    "id": "sp-r-208",
    "name": "SP-R 208",
    "namePt": "SP-R 208",
    "nameEn": "SP-R 208",
    "type": "Marksman",
    "description": "Melhor classe para SP-R 208 no COD Mobile",
    "descriptionEn": "Best loadout for SP-R 208 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/sp-r-208-102C4B889H.jpg",
    "imagePt": "/attached_assets/sp-r-208-102C4B889H.jpg",
    "imageEn": "/attached_assets/sp-r-208-102C4B889H.jpg",
    "keywords": [
      "sp-r-208",
      "marksman",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "striker",
    "name": "Striker",
    "namePt": "Striker",
    "nameEn": "Striker",
    "type": "Shotgun",
    "description": "Melhor classe para Striker no COD Mobile",
    "descriptionEn": "Best loadout for Striker in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/striker-1A2B4C5D9A.jpg",
    "imagePt": "/attached_assets/striker-1A2B4C5D9A.jpg",
    "imageEn": "/attached_assets/striker-1A2B4C5D9A.jpg",
    "keywords": [
      "striker",
      "shotgun",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "striker-45",
    "name": "Striker 45",
    "namePt": "Striker 45",
    "nameEn": "Striker 45",
    "type": "SMG",
    "description": "Melhor classe para Striker 45 no COD Mobile",
    "descriptionEn": "Best loadout for Striker 45 in COD Mobile",
    "code": "1C2C6C7C8A",
    "codePt": "1C2C6C7C8A",
    "codeEn": "1C2C6C7C8A",
    "image": "/attached_assets/striker-45-1C2C6C708A.jpg",
    "imagePt": "/attached_assets/striker-45-1C2C6C708A.jpg",
    "imageEn": "/attached_assets/striker-45-1C2C6C708A.jpg",
    "keywords": [
      "striker-45",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "svd",
    "name": "SVD",
    "namePt": "SVD",
    "nameEn": "SVD",
    "type": "Sniper",
    "description": "Melhor classe para SVD no COD Mobile",
    "descriptionEn": "Best loadout for SVD in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/svd-102B4A5H8A.jpg",
    "imagePt": "/attached_assets/svd-102B4A5H8A.jpg",
    "imageEn": "/attached_assets/svd-102B4A5H8A.jpg",
    "keywords": [
      "svd",
      "sniper",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "switchblade",
    "name": "Switchblade",
    "namePt": "Switchblade",
    "nameEn": "Switchblade",
    "type": "Assault Rifle",
    "description": "Classe de arma Switchblade",
    "descriptionEn": "Switchblade weapon class",
    "code": "1F2C4A8A9A",
    "codePt": "1F2C4A8A9A",
    "codeEn": "1F2C4A8A9A",
    "image": "/attached_assets/switchblade-x9-1F2C4A8A9A.jpg",
    "imagePt": "/attached_assets/switchblade-x9-1F2C4A8A9A.jpg",
    "imageEn": "/attached_assets/switchblade-x9-1F2C4A8A9A.jpg",
    "keywords": [
      "switchblade"
    ]
  },
  {
    "id": "switchblade-x9",
    "name": "Switchblade X9",
    "namePt": "Switchblade X9",
    "nameEn": "Switchblade X9",
    "type": "SMG",
    "description": "Submetralhadora compacta e mort├¡fera",
    "descriptionEn": "Compact and deadly submachine gun",
    "code": "1A2C4C8A9A",
    "codePt": "1A2C4C8A9A",
    "codeEn": "1A2C4C8A9A",
    "imagePt": "/attached_assets/1000004505-1A2C4CBASA.jpg",
    "imageEn": "/attached_assets/1000004512.jpg",
    "image": "/attached_assets/1000004505-1A2C4CBASA.jpg",
    "keywords": [
      "switchblade",
      "x9",
      "smt",
      "smg",
      "submetralhadora"
    ]
  },
  {
    "id": "swordfish",
    "name": "Swordfish",
    "namePt": "Swordfish",
    "nameEn": "Swordfish",
    "type": "Assault Rifle",
    "description": "Melhor classe para Swordfish no COD Mobile",
    "descriptionEn": "Best loadout for Swordfish in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/swordfish-1A4A5D6C9A.jpg",
    "imagePt": "/attached_assets/swordfish-1A4A5D6C9A.jpg",
    "imageEn": "/attached_assets/swordfish-1A4A5D6C9A.jpg",
    "keywords": [
      "swordfish",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "tec",
    "name": "Tec",
    "namePt": "Tec",
    "nameEn": "Tec",
    "type": "Assault Rifle",
    "description": "Classe de arma Tec",
    "descriptionEn": "Tec weapon class",
    "code": "1F2E4B8F9A",
    "codePt": "1F2E4B8F9A",
    "codeEn": "1F2E4B8F9A",
    "image": "/attached_assets/tec-9-1F2E4B8F9A.jpg",
    "imagePt": "/attached_assets/tec-9-1F2E4B8F9A.jpg",
    "imageEn": "/attached_assets/tec-9-1F2E4B8F9A.jpg",
    "keywords": [
      "tec"
    ]
  },
  {
    "id": "tec-9",
    "name": "TEC-9",
    "namePt": "TEC-9",
    "nameEn": "TEC-9",
    "type": "SMG",
    "description": "Melhor classe para TEC-9 no COD Mobile",
    "descriptionEn": "Best loadout for TEC-9 in COD Mobile",
    "code": "1F2E4B8F9A",
    "codePt": "1F2E4B8F9A",
    "codeEn": "1F2E4B8F9A",
    "image": "/attached_assets/tec-9-1F2E4B8F9A.jpg",
    "imagePt": "/attached_assets/tec-9-1F2E4B8F9A.jpg",
    "imageEn": "/attached_assets/tec-9-1F2E4B8F9A.jpg",
    "keywords": [
      "tec-9",
      "smg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "type",
    "name": "Type",
    "namePt": "Type",
    "nameEn": "Type",
    "type": "Assault Rifle",
    "description": "Classe de arma Type",
    "descriptionEn": "Type weapon class",
    "code": "2A6C7A8A9A",
    "codePt": "2A6C7A8A9A",
    "codeEn": "2A6C7A8A9A",
    "image": "/attached_assets/type-25-2A6C7A8A9A.jpg",
    "imagePt": "/attached_assets/type-25-2A6C7A8A9A.jpg",
    "imageEn": "/attached_assets/type-25-2A6C7A8A9A.jpg",
    "keywords": [
      "type"
    ]
  },
  {
    "id": "type19",
    "name": "Type 19",
    "namePt": "Type 19",
    "nameEn": "Type 19",
    "type": "Assault Rifle",
    "description": "Rifle de assalto equilibrado",
    "descriptionEn": "Balanced assault rifle",
    "code": "1D4A7B8B9C",
    "codePt": "1D4A7B8B9C",
    "codeEn": "1D4A7B8B9C",
    "imagePt": "/attached_assets/1000004502-104A7B8B9C.jpg",
    "imageEn": "/attached_assets/1000004509-104A7B8B9C.jpg",
    "image": "/attached_assets/1000004502-104A7B8B9C.jpg",
    "keywords": [
      "type19",
      "type 19",
      "assalto",
      "assault",
      "rifle"
    ]
  },
  {
    "id": "type-25",
    "name": "Type 25",
    "namePt": "Type 25",
    "nameEn": "Type 25",
    "type": "Assault Rifle",
    "description": "Melhor classe para Type 25 no COD Mobile",
    "descriptionEn": "Best loadout for Type 25 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/type-25-2A6C7A8A9A.jpg",
    "imagePt": "/attached_assets/type-25-2A6C7A8A9A.jpg",
    "imageEn": "/attached_assets/type-25-2A6C7A8A9A.jpg",
    "keywords": [
      "type-25",
      "assault rifle",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "type63",
    "name": "Type 63",
    "namePt": "Type 63",
    "nameEn": "Type 63",
    "type": "Marksman",
    "description": "Rifle de precis├úo de m├®dio alcance",
    "descriptionEn": "Medium-range precision rifle",
    "code": "1C2B4A7E9F",
    "codePt": "1C2B4A7E9F",
    "codeEn": "1C2B4A7E9F",
    "imagePt": "/attached_assets/1000004522-102B4A7E9F.jpg",
    "imageEn": "/attached_assets/1000004518-102B4A7E9F.jpg",
    "image": "/attached_assets/1000004522-102B4A7E9F.jpg",
    "keywords": [
      "type63",
      "type 63",
      "atirador",
      "marksman"
    ]
  },
  {
    "id": "ul736",
    "name": "UL736",
    "namePt": "UL736",
    "nameEn": "UL736",
    "type": "LMG",
    "description": "Melhor classe para UL736 no COD Mobile",
    "descriptionEn": "Best loadout for UL736 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/ul736-1E2D5E8D9C.jpg",
    "imagePt": "/attached_assets/ul736-1E2D5E8D9C.jpg",
    "imageEn": "/attached_assets/ul736-1E2D5E8D9C.jpg",
    "keywords": [
      "ul736",
      "lmg",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "vmp",
    "name": "VMP",
    "namePt": "VMP",
    "nameEn": "VMP",
    "type": "SMG",
    "description": "Submetralhadora com taxa de fogo alta",
    "descriptionEn": "Submachine gun with high fire rate",
    "code": "2D4C5H8A9C",
    "codePt": "2D4C5H8A9C",
    "codeEn": "2D4C5H8A9C",
    "imagePt": "/attached_assets/1000004503-2D4C5HBA9C.jpg",
    "imageEn": "/attached_assets/1000004510-2D4C5HBASC.jpg",
    "image": "/attached_assets/1000004503-2D4C5HBA9C.jpg",
    "keywords": [
      "vmp",
      "smt",
      "smg",
      "submetralhadora"
    ]
  },
  {
    "id": "xm4",
    "name": "XM4",
    "namePt": "XM4",
    "nameEn": "XM4",
    "type": "Assault Rifle",
    "description": "Rifle de assalto com baixo recuo",
    "descriptionEn": "Assault rifle with low recoil",
    "code": "1A2G4A7C8D",
    "codePt": "1A2G4A7C8D",
    "codeEn": "1A2G4A7C8D",
    "imagePt": "/attached_assets/1000004504-1A2G4A7C80.jpg",
    "imageEn": "/attached_assets/1000004511-1A2G4A7C8D.jpg",
    "image": "/attached_assets/1000004504-1A2G4A7C80.jpg",
    "keywords": [
      "xm4",
      "xm-4",
      "assalto",
      "assault",
      "rifle"
    ]
  },
  {
    "id": "xpr",
    "name": "Xpr",
    "namePt": "Xpr",
    "nameEn": "Xpr",
    "type": "Assault Rifle",
    "description": "Classe de arma Xpr",
    "descriptionEn": "Xpr weapon class",
    "code": "1F2B4AGA8A",
    "codePt": "1F2B4AGA8A",
    "codeEn": "1F2B4AGA8A",
    "image": "/attached_assets/xpr-50-1F2B4AGA8A.jpg",
    "imagePt": "/attached_assets/xpr-50-1F2B4AGA8A.jpg",
    "imageEn": "/attached_assets/xpr-50-1F2B4AGA8A.jpg",
    "keywords": [
      "xpr"
    ]
  },
  {
    "id": "xpr-50",
    "name": "XPR-50",
    "namePt": "XPR-50",
    "nameEn": "XPR-50",
    "type": "Sniper",
    "description": "Melhor classe para XPR-50 no COD Mobile",
    "descriptionEn": "Best loadout for XPR-50 in COD Mobile",
    "code": "1C2B4A6C8C",
    "codePt": "1C2B4A6C8C",
    "codeEn": "1C2B4A6C8C",
    "image": "/attached_assets/xpr-50-1F2B4AGA8A.jpg",
    "imagePt": "/attached_assets/xpr-50-1F2B4AGA8A.jpg",
    "imageEn": "/attached_assets/xpr-50-1F2B4AGA8A.jpg",
    "keywords": [
      "xpr-50",
      "sniper",
      "codm",
      "loadout"
    ]
  },
  {
    "id": "zrg",
    "name": "Zrg",
    "namePt": "Zrg",
    "nameEn": "Zrg",
    "type": "Assault Rifle",
    "description": "Classe de arma Zrg",
    "descriptionEn": "Zrg weapon class",
    "code": "UNKNOWN",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/zrg-20mm.jpg",
    "imagePt": "/attached_assets/zrg-20mm.jpg",
    "imageEn": "/attached_assets/zrg-20mm.jpg",
    "keywords": [
      "zrg"
    ]
  },
  {
    "id": "zrg-20mm-2",
    "name": "ZRG 20mm",
    "namePt": "ZRG 20mm",
    "nameEn": "ZRG 20mm",
    "type": "Sniper",
    "description": "Melhor classe para ZRG 20mm no COD Mobile",
    "descriptionEn": "Best loadout for ZRG 20mm in COD Mobile",
    "code": "1A2B7D8A9I",
    "codePt": "1A2B7D8A9I",
    "codeEn": "1A2B7D8A9I",
    "image": "/attached_assets/zrg-20mm.jpg",
    "imagePt": "/attached_assets/zrg-20mm.jpg",
    "imageEn": "/attached_assets/zrg-20mm.jpg",
    "keywords": [
      "zrg-20mm",
      "sniper",
      "codm",
      "loadout"
    ]
  }
];
