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
    "id": "type-25",
    "name": "Type 25",
    "namePt": "Type 25",
    "nameEn": "Type 25",
    "type": "Assault Rifle",
    "description": "Melhor classe de type 25",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Type 25-1C3A4C6C9D",
    "codePt": "Type 25-1C3A4C6C9D",
    "codeEn": "Type 25-1C3A4C6C9D",
    "image": "/attached_assets/codm_2025-11-29_10_57_17.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_10_57_17.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_10_57_17.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "m16",
    "name": "M16",
    "namePt": "M16",
    "nameEn": "M16",
    "type": "Assault Rifle",
    "description": "Melhor classe para multijogador",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M16-2B4A5I8A9B",
    "codePt": "M16-2B4A5I8A9B",
    "codeEn": "M16-2B4A5I8A9B",
    "image": "/attached_assets/codm_2025-11-29_10_58_45.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_10_58_45.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_10_58_45.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "ak177",
    "name": "AK177",
    "namePt": "AK177",
    "nameEn": "AK177",
    "type": "Assault Rifle",
    "description": "Ak177 com recoil reduzido",
    "descriptionEn": "Best loadout for this weapon",
    "code": "AK177-1C2B4A8B9A",
    "codePt": "AK177-1C2B4A8B9A",
    "codeEn": "AK177-1C2B4A8B9A",
    "image": "/attached_assets/codm_2025-11-29_11_01_05.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_01_05.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_01_05.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "ak-47",
    "name": "AK-47",
    "namePt": "AK-47",
    "nameEn": "AK-47",
    "type": "Assault Rifle",
    "description": "AK-47 Rápida",
    "descriptionEn": "Best loadout for this weapon",
    "code": "AK-47-1A2C4A8A9A",
    "codePt": "AK-47-1A2C4A8A9A",
    "codeEn": "AK-47-1A2C4A8A9A",
    "image": "/attached_assets/codm_2025-11-29_11_01_32.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_01_32.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_01_32.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "asm10",
    "name": "ASM10",
    "namePt": "ASM10",
    "nameEn": "ASM10",
    "type": "Assault Rifle",
    "description": "Melhor classe de ASM10",
    "descriptionEn": "Best loadout for this weapon",
    "code": "ASM10-1C2C4A8B9A",
    "codePt": "ASM10-1C2C4A8B9A",
    "codeEn": "ASM10-1C2C4A8B9A",
    "image": "/attached_assets/codm_2025-11-29_11_02_18.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_02_18.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_02_18.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "m4",
    "name": "M4",
    "namePt": "M4",
    "nameEn": "M4",
    "type": "Assault Rifle",
    "description": "Melhor classe de M4",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M4-2C4A6C7D8A",
    "codePt": "M4-2C4A6C7D8A",
    "codeEn": "M4-2C4A6C7D8A",
    "image": "/attached_assets/codm_2025-11-29_11_02_53.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_02_53.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_02_53.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "bk57",
    "name": "BK57",
    "namePt": "BK57",
    "nameEn": "BK57",
    "type": "Assault Rifle",
    "description": "Melhor classe para BK57",
    "descriptionEn": "Best loadout for this weapon",
    "code": "BK57-1C2B3A4C9B",
    "codePt": "BK57-1C2B3A4C9B",
    "codeEn": "BK57-1C2B3A4C9B",
    "image": "/attached_assets/codm_2025-11-29_11_03_58.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_03_58.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_03_58.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "lk24",
    "name": "LK24",
    "namePt": "LK24",
    "nameEn": "LK24",
    "type": "Assault Rifle",
    "description": "Melhor classe para LK24",
    "descriptionEn": "Best loadout for this weapon",
    "code": "LK24-1A2A3A4D8B",
    "codePt": "LK24-1A2A3A4D8B",
    "codeEn": "LK24-1A2A3A4D8B",
    "image": "/attached_assets/codm_2025-11-29_11_04_30.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_04_30.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_04_30.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "icr-1",
    "name": "ICR-1",
    "namePt": "ICR-1",
    "nameEn": "ICR-1",
    "type": "Assault Rifle",
    "description": "Melhor classe para ICR-1",
    "descriptionEn": "Best loadout for this weapon",
    "code": "ICR-1-2C4A6C8C9C",
    "codePt": "ICR-1-2C4A6C8C9C",
    "codeEn": "ICR-1-2C4A6C8C9C",
    "image": "/attached_assets/codm_2025-11-29_11_05_12.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_05_12.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_05_12.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "man-o-war",
    "name": "Man-O-War",
    "namePt": "Man-O-War",
    "nameEn": "Man-O-War",
    "type": "Assault Rifle",
    "description": "Melhor classe para Man-O-War TERMITA",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Man-O-War-1C2C4C7D8C",
    "codePt": "Man-O-War-1C2C4C7D8C",
    "codeEn": "Man-O-War-1C2C4C7D8C",
    "image": "/attached_assets/codm_2025-11-29_11_06_07.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_06_07.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_06_07.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "kn-44",
    "name": "KN-44",
    "namePt": "KN-44",
    "nameEn": "KN-44",
    "type": "Assault Rifle",
    "description": "Melhor classe para KN-44",
    "descriptionEn": "Best loadout for this weapon",
    "code": "KN-44-1A2B4A8B9A",
    "codePt": "KN-44-1A2B4A8B9A",
    "codeEn": "KN-44-1A2B4A8B9A",
    "image": "/attached_assets/codm_2025-11-29_11_07_15.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_07_15.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_07_15.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "hbra3",
    "name": "HBRa3",
    "namePt": "HBRa3",
    "nameEn": "HBRa3",
    "type": "Assault Rifle",
    "description": "Melhor classe para HBRa3",
    "descriptionEn": "Best loadout for this weapon",
    "code": "HBRa3-2A4A5B8A9A",
    "codePt": "HBRa3-2A4A5B8A9A",
    "codeEn": "HBRa3-2A4A5B8A9A",
    "image": "/attached_assets/codm_2025-11-29_11_07_47.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_07_47.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_07_47.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "hvk-30",
    "name": "HVK-30",
    "namePt": "HVK-30",
    "nameEn": "HVK-30",
    "type": "Assault Rifle",
    "description": "Melhor classe para HVK-30",
    "descriptionEn": "Best loadout for this weapon",
    "code": "HVK-30-1C2A4C8C9A",
    "codePt": "HVK-30-1C2A4C8C9A",
    "codeEn": "HVK-30-1C2A4C8C9A",
    "image": "/attached_assets/codm_2025-11-29_11_08_46.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_08_46.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_08_46.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "dr-h",
    "name": "DR-H",
    "namePt": "DR-H",
    "nameEn": "DR-H",
    "type": "Assault Rifle",
    "description": "Melhor classe para DR-H",
    "descriptionEn": "Best loadout for this weapon",
    "code": "DR-H-1A2B4A8C9A",
    "codePt": "DR-H-1A2B4A8C9A",
    "codeEn": "DR-H-1A2B4A8C9A",
    "image": "/attached_assets/1000004506.jpg",
    "imagePt": "/attached_assets/1000004506.jpg",
    "imageEn": "/attached_assets/1000004513.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "peacekeeper-mk2",
    "name": "Peacekeeper MK2",
    "namePt": "Peacekeeper MK2",
    "nameEn": "Peacekeeper MK2",
    "type": "Assault Rifle",
    "description": "Melhor classe para Peacekeeper MK2",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Peacekeeper MK2-1B2C4D8B9C",
    "codePt": "Peacekeeper MK2-1B2C4D8B9C",
    "codeEn": "Peacekeeper MK2-1B2C4D8B9C",
    "image": "/attached_assets/codm_2025-11-29_11_10_42.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_10_42.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_10_42.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "fr-.556",
    "name": "FR .556",
    "namePt": "FR .556",
    "nameEn": "FR .556",
    "type": "Assault Rifle",
    "description": "Melhor classe para FR .556",
    "descriptionEn": "Best loadout for this weapon",
    "code": "FR .556-1C2C5A8A9B",
    "codePt": "FR .556-1C2C5A8A9B",
    "codeEn": "FR .556-1C2C5A8A9B",
    "image": "/attached_assets/codm_2025-11-29_11_11_33.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_11_33.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_11_33.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "as-val",
    "name": "AS VAL",
    "namePt": "AS VAL",
    "nameEn": "AS VAL",
    "type": "Assault Rifle",
    "description": "Melhor classe para AS VAL",
    "descriptionEn": "Best loadout for this weapon",
    "code": "AS VAL-2C4B6C8A9A",
    "codePt": "AS VAL-2C4B6C8A9A",
    "codeEn": "AS VAL-2C4B6C8A9A",
    "image": "/attached_assets/codm_2025-11-29_11_12_27.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_12_27.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_12_27.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "cr-56-amax",
    "name": "CR-56 AMAX",
    "namePt": "CR-56 AMAX",
    "nameEn": "CR-56 AMAX",
    "type": "Assault Rifle",
    "description": "Melhor classe para CR-56 AMAX",
    "descriptionEn": "Best loadout for this weapon",
    "code": "CR-56 AMAX-1A2C5E8A9A",
    "codePt": "CR-56 AMAX-1A2C5E8A9A",
    "codeEn": "CR-56 AMAX-1A2C5E8A9A",
    "image": "/attached_assets/codm_2025-11-29_11_12_56.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_12_56.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_12_56.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "m13",
    "name": "M13",
    "namePt": "M13",
    "nameEn": "M13",
    "type": "Assault Rifle",
    "description": "Melhor classe para M13",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M13-2C4B6B8B9B",
    "codePt": "M13-2C4B6B8B9B",
    "codeEn": "M13-2C4B6B8B9B",
    "image": "/attached_assets/codm_2025-11-29_11_13_32.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_13_32.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_13_32.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "swordfish",
    "name": "Swordfish",
    "namePt": "Swordfish",
    "nameEn": "Swordfish",
    "type": "Assault Rifle",
    "description": "Melhor classe para Swordfish",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Swordfish-1A3A4A5A8C",
    "codePt": "Swordfish-1A3A4A5A8C",
    "codeEn": "Swordfish-1A3A4A5A8C",
    "image": "/attached_assets/codm_2025-11-29_11_14_14.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_14_14.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_14_14.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "kilo-141",
    "name": "Kilo 141",
    "namePt": "Kilo 141",
    "nameEn": "Kilo 141",
    "type": "Assault Rifle",
    "description": "Melhor classe para Kilo 141",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Kilo 141-1C4A6C8B9A",
    "codePt": "Kilo 141-1C4A6C8B9A",
    "codeEn": "Kilo 141-1C4A6C8B9A",
    "image": "/attached_assets/codm_2025-11-29_11_14_48.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_14_48.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_14_48.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "oden",
    "name": "Oden",
    "namePt": "Oden",
    "nameEn": "Oden",
    "type": "Assault Rifle",
    "description": "Melhor classe para Oden",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Oden-1A4A5A7C9A",
    "codePt": "Oden-1A4A5A7C9A",
    "codeEn": "Oden-1A4A5A7C9A",
    "image": "/attached_assets/1000004521.jpg",
    "imagePt": "/attached_assets/1000004521.jpg",
    "imageEn": "/attached_assets/1000004517.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "krig-6",
    "name": "Krig 6",
    "namePt": "Krig 6",
    "nameEn": "Krig 6",
    "type": "Assault Rifle",
    "description": "Melhor classe para Krig 6",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Krig 6-1A2C4F7F8D",
    "codePt": "Krig 6-1A2C4F7F8D",
    "codeEn": "Krig 6-1A2C4F7F8D",
    "image": "/attached_assets/codm_2025-11-29_11_16_29.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_16_29.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_16_29.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "em2",
    "name": "EM2",
    "namePt": "EM2",
    "nameEn": "EM2",
    "type": "Assault Rifle",
    "description": "Melhor classe para EM2",
    "descriptionEn": "Best loadout for this weapon",
    "code": "EM2-2B4A7G8B9B",
    "codePt": "EM2-2B4A7G8B9B",
    "codeEn": "EM2-2B4A7G8B9B",
    "image": "/attached_assets/codm_2025-11-29_11_17_52.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_17_52.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_17_52.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "maddox",
    "name": "Maddox",
    "namePt": "Maddox",
    "nameEn": "Maddox",
    "type": "Assault Rifle",
    "description": "Melhor classe para Maddox",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Maddox-2D3A4A8A9A",
    "codePt": "Maddox-2D3A4A8A9A",
    "codeEn": "Maddox-2D3A4A8A9A",
    "image": "/attached_assets/codm_2025-11-29_11_18_37.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_18_37.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_18_37.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "ffar-1",
    "name": "FFAR 1",
    "namePt": "FFAR 1",
    "nameEn": "FFAR 1",
    "type": "Assault Rifle",
    "description": "Melhor classe para FFAR 1",
    "descriptionEn": "Best loadout for this weapon",
    "code": "FFAR 1-2E4B7E8E9A",
    "codePt": "FFAR 1-2E4B7E8E9A",
    "codeEn": "FFAR 1-2E4B7E8E9A",
    "image": "/attached_assets/codm_2025-11-29_11_19_26.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_19_26.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_19_26.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "grau-5.56",
    "name": "Grau 5.56",
    "namePt": "Grau 5.56",
    "nameEn": "Grau 5.56",
    "type": "Assault Rifle",
    "description": "Melhor classe para Grau 5.56",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Grau 5.56-1A2D4A8A9A",
    "codePt": "Grau 5.56-1A2D4A8A9A",
    "codeEn": "Grau 5.56-1A2D4A8A9A",
    "image": "/attached_assets/codm_2025-11-29_11_20_13.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_20_13.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_20_13.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "groza",
    "name": "Groza",
    "namePt": "Groza",
    "nameEn": "Groza",
    "type": "Assault Rifle",
    "description": "Melhor classe para Groza",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Groza-1B2D4F8B9C",
    "codePt": "Groza-1B2D4F8B9C",
    "codeEn": "Groza-1B2D4F8B9C",
    "image": "/attached_assets/codm_2025-11-29_11_20_37.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_20_37.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_20_37.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "bp50",
    "name": "BP50",
    "namePt": "BP50",
    "nameEn": "BP50",
    "type": "Assault Rifle",
    "description": "Melhor classe para BP50",
    "descriptionEn": "Best loadout for this weapon",
    "code": "BP50-1D2C4B8B9H",
    "codePt": "BP50-1D2C4B8B9H",
    "codeEn": "BP50-1D2C4B8B9H",
    "image": "/attached_assets/codm_2025-11-29_11_22_10.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_22_10.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_22_10.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "lag-53",
    "name": "LAG 53",
    "namePt": "LAG 53",
    "nameEn": "LAG 53",
    "type": "Assault Rifle",
    "description": "Melhor classe para LAG 53",
    "descriptionEn": "Best loadout for this weapon",
    "code": "LAG 53-1A2B4B8A9A",
    "codePt": "LAG 53-1A2B4B8A9A",
    "codeEn": "LAG 53-1A2B4B8A9A",
    "image": "/attached_assets/codm_2025-11-29_11_22_34.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_22_34.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_22_34.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "xm4",
    "name": "XM4",
    "namePt": "XM4",
    "nameEn": "XM4",
    "type": "Assault Rifle",
    "description": "Melhor classe para XM4",
    "descriptionEn": "Best loadout for this weapon",
    "code": "XM4-1A2G4A7C8D",
    "codePt": "XM4-1A2G4A7C8D",
    "codeEn": "XM4-1A2G4A7C8D",
    "image": "/attached_assets/1000004504.jpg",
    "imagePt": "/attached_assets/1000004504.jpg",
    "imageEn": "/attached_assets/1000004511.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "vargo-s",
    "name": "Vargo-S",
    "namePt": "Vargo-S",
    "nameEn": "Vargo-S",
    "type": "Assault Rifle",
    "description": "Melhor classe para Vargo-S",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Vargo-S-1C4C5B7C8A",
    "codePt": "Vargo-S-1C4C5B7C8A",
    "codeEn": "Vargo-S-1C4C5B7C8A",
    "image": "/attached_assets/codm_2025-11-29_11_29_47.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_29_47.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_29_47.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "ram-7",
    "name": "RAM-7",
    "namePt": "RAM-7",
    "nameEn": "RAM-7",
    "type": "Assault Rifle",
    "description": "Melhor classe para RAM-7",
    "descriptionEn": "Best loadout for this weapon",
    "code": "RAM-7-1F2B4A6A8A",
    "codePt": "RAM-7-1F2B4A6A8A",
    "codeEn": "RAM-7-1F2B4A6A8A",
    "image": "/attached_assets/codm_2025-11-29_11_31_08.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_31_08.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_31_08.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "xpr-50",
    "name": "XPR-50",
    "namePt": "XPR-50",
    "nameEn": "XPR-50",
    "type": "Sniper",
    "description": "Melhor classe para XPR-50",
    "descriptionEn": "Best loadout for this weapon",
    "code": "XPR-50-1C2A4A5A8C",
    "codePt": "XPR-50-1C2A4A5A8C",
    "codeEn": "XPR-50-1C2A4A5A8C",
    "image": "/attached_assets/codm_2025-11-29_11_32_11.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_32_11.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_32_11.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "artic-.50",
    "name": "Artic .50",
    "namePt": "Artic .50",
    "nameEn": "Artic .50",
    "type": "Sniper",
    "description": "Melhor classe para Artic .50",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Artic .50-1B2A4B5H9C",
    "codePt": "Artic .50-1B2A4B5H9C",
    "codeEn": "Artic .50-1B2A4B5H9C",
    "image": "/attached_assets/codm_2025-11-29_11_32_51.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_32_51.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_32_51.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "m21-ebr",
    "name": "M21 EBR",
    "namePt": "M21 EBR",
    "nameEn": "M21 EBR",
    "type": "Sniper",
    "description": "Melhor classe para M21 EBR",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M21 EBR-1D2B4A5H8A",
    "codePt": "M21 EBR-1D2B4A5H8A",
    "codeEn": "M21 EBR-1D2B4A5H8A",
    "image": "/attached_assets/codm_2025-11-29_11_33_14.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_33_14.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_33_14.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "na-45",
    "name": "NA-45",
    "namePt": "NA-45",
    "nameEn": "NA-45",
    "type": "Sniper",
    "description": "Melhor classe para NA-45",
    "descriptionEn": "Best loadout for this weapon",
    "code": "NA-45-1C4C5A7A8C",
    "codePt": "NA-45-1C4C5A7A8C",
    "codeEn": "NA-45-1C4C5A7A8C",
    "image": "/attached_assets/codm_2025-11-29_11_33_47.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_33_47.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_33_47.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "outlaw",
    "name": "Outlaw",
    "namePt": "Outlaw",
    "nameEn": "Outlaw",
    "type": "Sniper",
    "description": "Melhor classe para Outlaw",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Outlaw-2A4C5H6A9C",
    "codePt": "Outlaw-2A4C5H6A9C",
    "codeEn": "Outlaw-2A4C5H6A9C",
    "image": "/attached_assets/1000004329.jpg",
    "imagePt": "/attached_assets/1000004329.jpg",
    "imageEn": "/attached_assets/1000004335.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "rytec-amr",
    "name": "Rytec AMR",
    "namePt": "Rytec AMR",
    "nameEn": "Rytec AMR",
    "type": "Sniper",
    "description": "Melhor classe para Rytec AMR",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Rytec AMR-2A4B5A6A9C",
    "codePt": "Rytec AMR-2A4B5A6A9C",
    "codeEn": "Rytec AMR-2A4B5A6A9C",
    "image": "/attached_assets/codm_2025-11-29_11_35_03.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_35_03.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_35_03.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "svd",
    "name": "SVD",
    "namePt": "SVD",
    "nameEn": "SVD",
    "type": "Sniper",
    "description": "Melhor classe para SVD",
    "descriptionEn": "Best loadout for this weapon",
    "code": "SVD-1C2B3E4C8B",
    "codePt": "SVD-1C2B3E4C8B",
    "codeEn": "SVD-1C2B3E4C8B",
    "image": "/attached_assets/codm_2025-11-29_11_35_56.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_35_56.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_35_56.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "zrg-20-mm",
    "name": "ZRG 20 mm",
    "namePt": "ZRG 20 mm",
    "nameEn": "ZRG 20 mm",
    "type": "Sniper",
    "description": "Melhor classe para ZRG 20 mm",
    "descriptionEn": "Best loadout for this weapon",
    "code": "ZRG 20 mm-2A4B6A8B9C",
    "codePt": "ZRG 20 mm-2A4B6A8B9C",
    "codeEn": "ZRG 20 mm-2A4B6A8B9C",
    "image": "/attached_assets/codm_2025-11-29_11_36_23.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_36_23.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_36_23.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "s36",
    "name": "S36",
    "namePt": "S36",
    "nameEn": "S36",
    "type": "LMG",
    "description": "Melhor classe para S36",
    "descriptionEn": "Best loadout for this weapon",
    "code": "S36-1C2B3A4B5D",
    "codePt": "S36-1C2B3A4B5D",
    "codeEn": "S36-1C2B3A4B5D",
    "image": "/attached_assets/codm_2025-11-29_11_37_32.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_37_32.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_37_32.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "ul736",
    "name": "UL736",
    "namePt": "UL736",
    "nameEn": "UL736",
    "type": "LMG",
    "description": "Melhor classe para UL736",
    "descriptionEn": "Best loadout for this weapon",
    "code": "UL736-1A2B4C5D9A",
    "codePt": "UL736-1A2B4C5D9A",
    "codeEn": "UL736-1A2B4C5D9A",
    "image": "/attached_assets/codm_2025-11-29_11_37_48.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_37_48.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_37_48.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "rpd",
    "name": "RPD",
    "namePt": "RPD",
    "nameEn": "RPD",
    "type": "LMG",
    "description": "Melhor classe para RPD",
    "descriptionEn": "Best loadout for this weapon",
    "code": "RPD-1C2D4D5A9A",
    "codePt": "RPD-1C2D4D5A9A",
    "codeEn": "RPD-1C2D4D5A9A",
    "image": "/attached_assets/codm_2025-11-29_11_38_27.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_38_27.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_38_27.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "m4lmg",
    "name": "M4LMG",
    "namePt": "M4LMG",
    "nameEn": "M4LMG",
    "type": "LMG",
    "description": "Melhor classe para M4LMG",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M4LMG-1C4D6C7D9A",
    "codePt": "M4LMG-1C4D6C7D9A",
    "codeEn": "M4LMG-1C4D6C7D9A",
    "image": "/attached_assets/codm_2025-11-29_11_39_12.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_39_12.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_39_12.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "chopper",
    "name": "Chopper",
    "namePt": "Chopper",
    "nameEn": "Chopper",
    "type": "LMG",
    "description": "Melhor classe para Chopper",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Chopper-1C2B5E6C7G",
    "codePt": "Chopper-1C2B5E6C7G",
    "codeEn": "Chopper-1C2B5E6C7G",
    "image": "/attached_assets/codm_2025-11-29_11_39_43.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_39_43.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_39_43.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "holger-26",
    "name": "Holger 26",
    "namePt": "Holger 26",
    "nameEn": "Holger 26",
    "type": "LMG",
    "description": "Melhor classe para Holger 26",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Holger 26-1A4A5D6C9A",
    "codePt": "Holger 26-1A4A5D6C9A",
    "codeEn": "Holger 26-1A4A5D6C9A",
    "image": "/attached_assets/codm_2025-11-29_11_40_02.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_40_02.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_40_02.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "hades",
    "name": "Hades",
    "namePt": "Hades",
    "nameEn": "Hades",
    "type": "LMG",
    "description": "Melhor classe para Hades",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Hades-2B4D5B7A9D",
    "codePt": "Hades-2B4D5B7A9D",
    "codeEn": "Hades-2B4D5B7A9D",
    "image": "/attached_assets/codm_2025-11-29_11_40_27.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_40_27.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_40_27.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "pkm",
    "name": "PKM",
    "namePt": "PKM",
    "nameEn": "PKM",
    "type": "LMG",
    "description": "Melhor classe para PKM",
    "descriptionEn": "Best loadout for this weapon",
    "code": "PKM-2B4C6C7E8B",
    "codePt": "PKM-2B4C6C7E8B",
    "codeEn": "PKM-2B4C6C7E8B",
    "image": "/attached_assets/codm_2025-11-29_11_41_42.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_41_42.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_41_42.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "dingo",
    "name": "Dingo",
    "namePt": "Dingo",
    "nameEn": "Dingo",
    "type": "LMG",
    "description": "Melhor classe para Dingo",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Dingo-1E2C4D7F9C",
    "codePt": "Dingo-1E2C4D7F9C",
    "codeEn": "Dingo-1E2C4D7F9C",
    "image": "/attached_assets/codm_2025-11-29_11_42_14.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_42_14.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_42_14.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "bruen-mk9",
    "name": "Bruen MK9",
    "namePt": "Bruen MK9",
    "nameEn": "Bruen MK9",
    "type": "LMG",
    "description": "Melhor classe para Bruen MK9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Bruen MK9-2A3A4A5A8B",
    "codePt": "Bruen MK9-2A3A4A5A8B",
    "codeEn": "Bruen MK9-2A3A4A5A8B",
    "image": "/attached_assets/codm_2025-11-29_11_42_41.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_42_41.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_42_41.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "mg42",
    "name": "MG42",
    "namePt": "MG42",
    "nameEn": "MG42",
    "type": "LMG",
    "description": "Melhor classe para MG42",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MG42-1E2D5E8D9C",
    "codePt": "MG42-1E2D5E8D9C",
    "codeEn": "MG42-1E2D5E8D9C",
    "image": "/attached_assets/codm_2025-11-29_11_43_00.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_43_00.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_43_00.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "raal-mg",
    "name": "RAAL MG",
    "namePt": "RAAL MG",
    "nameEn": "RAAL MG",
    "type": "LMG",
    "description": "Melhor classe para RAAL MG",
    "descriptionEn": "Best loadout for this weapon",
    "code": "RAAL MG-2C6A7C8B9B",
    "codePt": "RAAL MG-2C6A7C8B9B",
    "codeEn": "RAAL MG-2C6A7C8B9B",
    "image": "/attached_assets/codm_2025-11-29_11_43_44.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_43_44.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_43_44.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "mg-82",
    "name": "MG 82",
    "namePt": "MG 82",
    "nameEn": "MG 82",
    "type": "LMG",
    "description": "Melhor classe para MG 82",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MG 82-2F4D7A8E9F",
    "codePt": "MG 82-2F4D7A8E9F",
    "codeEn": "MG 82-2F4D7A8E9F",
    "image": "/attached_assets/codm_2025-11-29_11_45_18.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_45_18.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_45_18.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "rus-79u",
    "name": "RUS-79U",
    "namePt": "RUS-79U",
    "nameEn": "RUS-79U",
    "type": "SMG",
    "description": "Melhor classe para RUS-79U",
    "descriptionEn": "Best loadout for this weapon",
    "code": "RUS-79U-1C2A4A6C8B",
    "codePt": "RUS-79U-1C2A4A6C8B",
    "codeEn": "RUS-79U-1C2A4A6C8B",
    "image": "/attached_assets/codm_2025-11-29_11_45_49.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_45_49.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_45_49.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "chicom",
    "name": "Chicom",
    "namePt": "Chicom",
    "nameEn": "Chicom",
    "type": "SMG",
    "description": "Melhor classe para Chicom",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Chicom-1C2B3A4A8C",
    "codePt": "Chicom-1C2B3A4A8C",
    "codeEn": "Chicom-1C2B3A4A8C",
    "image": "/attached_assets/codm_2025-11-29_11_47_59.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_47_59.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_47_59.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "pdw-57",
    "name": "PDW-57",
    "namePt": "PDW-57",
    "nameEn": "PDW-57",
    "type": "SMG",
    "description": "Melhor classe para PDW-57",
    "descriptionEn": "Best loadout for this weapon",
    "code": "PDW-57-1C2A4A5E9A",
    "codePt": "PDW-57-1C2A4A5E9A",
    "codeEn": "PDW-57-1C2A4A5E9A",
    "image": "/attached_assets/codm_2025-11-29_11_48_17.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_48_17.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_48_17.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "razorback",
    "name": "Razorback",
    "namePt": "Razorback",
    "nameEn": "Razorback",
    "type": "SMG",
    "description": "Melhor classe para Razorback",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Razorback-1C2A5I6C9A",
    "codePt": "Razorback-1C2A5I6C9A",
    "codeEn": "Razorback-1C2A5I6C9A",
    "image": "/attached_assets/codm_2025-11-29_11_48_44.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_48_44.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_48_44.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "msmc",
    "name": "MSMC",
    "namePt": "MSMC",
    "nameEn": "MSMC",
    "type": "SMG",
    "description": "Melhor classe para MSMC",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MSMC-1C2C4A6C8A",
    "codePt": "MSMC-1C2C4A6C8A",
    "codeEn": "MSMC-1C2C4A6C8A",
    "image": "/attached_assets/codm_2025-11-29_11_49_06.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_49_06.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_49_06.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "hg-40",
    "name": "HG 40",
    "namePt": "HG 40",
    "nameEn": "HG 40",
    "type": "SMG",
    "description": "Melhor classe para HG 40",
    "descriptionEn": "Best loadout for this weapon",
    "code": "HG 40-2C4A6C8C9A",
    "codePt": "HG 40-2C4A6C8C9A",
    "codeEn": "HG 40-2C4A6C8C9A",
    "image": "/attached_assets/codm_2025-11-29_11_49_23.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_49_23.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_49_23.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "pharo",
    "name": "Pharo",
    "namePt": "Pharo",
    "nameEn": "Pharo",
    "type": "SMG",
    "description": "Melhor classe para Pharo",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Pharo-1E2C4B7D8A",
    "codePt": "Pharo-1E2C4B7D8A",
    "codeEn": "Pharo-1E2C4B7D8A",
    "image": "/attached_assets/codm_2025-11-29_11_49_42.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_49_42.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_49_42.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "gks",
    "name": "GKS",
    "namePt": "GKS",
    "nameEn": "GKS",
    "type": "SMG",
    "description": "Melhor classe para GKS",
    "descriptionEn": "Best loadout for this weapon",
    "code": "GKS-1A2A4B6B",
    "codePt": "GKS-1A2A4B6B",
    "codeEn": "GKS-1A2A4B6B",
    "image": "/attached_assets/codm_2025-11-29_11_50_15.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_50_15.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_50_15.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "cordite",
    "name": "Cordite",
    "namePt": "Cordite",
    "nameEn": "Cordite",
    "type": "SMG",
    "description": "Melhor classe para Cordite",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Cordite-1C2A4A6C8B",
    "codePt": "Cordite-1C2A4A6C8B",
    "codeEn": "Cordite-1C2A4A6C8B",
    "image": "/attached_assets/codm_2025-11-29_11_50_49.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_50_49.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_50_49.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "qq9",
    "name": "QQ9",
    "namePt": "QQ9",
    "nameEn": "QQ9",
    "type": "SMG",
    "description": "Melhor classe para QQ9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "QQ9-1C2C4A6C8A",
    "codePt": "QQ9-1C2C4A6C8A",
    "codeEn": "QQ9-1C2C4A6C8A",
    "image": "/attached_assets/codm_2025-11-29_11_51_27.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_51_27.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_51_27.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "fennec",
    "name": "Fennec",
    "namePt": "Fennec",
    "nameEn": "Fennec",
    "type": "SMG",
    "description": "Melhor classe para Fennec",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Fennec-1C2C4D7C8A",
    "codePt": "Fennec-1C2C4D7C8A",
    "codeEn": "Fennec-1C2C4D7C8A",
    "image": "/attached_assets/codm_2025-11-29_11_52_15.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_52_15.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_52_15.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "agr-556",
    "name": "AGR 556",
    "namePt": "AGR 556",
    "nameEn": "AGR 556",
    "type": "SMG",
    "description": "Melhor classe para AGR 556",
    "descriptionEn": "Best loadout for this weapon",
    "code": "AGR 556-1C2B4C6C8C",
    "codePt": "AGR 556-1C2B4C6C8C",
    "codeEn": "AGR 556-1C2B4C6C8C",
    "image": "/attached_assets/codm_2025-11-29_11_52_43.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_52_43.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_52_43.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "qxr",
    "name": "QXR",
    "namePt": "QXR",
    "nameEn": "QXR",
    "type": "SMG",
    "description": "Melhor classe para QXR",
    "descriptionEn": "Best loadout for this weapon",
    "code": "QXR-1C2C4A5I8A",
    "codePt": "QXR-1C2C4A5I8A",
    "codeEn": "QXR-1C2C4A5I8A",
    "image": "/attached_assets/codm_2025-11-29_11_53_14.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_53_14.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_53_14.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "pp19-bizon",
    "name": "PP19 Bizon",
    "namePt": "PP19 Bizon",
    "nameEn": "PP19 Bizon",
    "type": "SMG",
    "description": "Melhor classe para PP19 Bizon",
    "descriptionEn": "Best loadout for this weapon",
    "code": "PP19 Bizon-1C2B4A6C9A",
    "codePt": "PP19 Bizon-1C2B4A6C9A",
    "codeEn": "PP19 Bizon-1C2B4A6C9A",
    "image": "/attached_assets/codm_2025-11-29_11_53_34.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_53_34.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_53_34.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "cbr4",
    "name": "CBR4",
    "namePt": "CBR4",
    "nameEn": "CBR4",
    "type": "SMG",
    "description": "Melhor classe para CBR4",
    "descriptionEn": "Best loadout for this weapon",
    "code": "CBR4-1A2B4A5E9A",
    "codePt": "CBR4-1A2B4A5E9A",
    "codeEn": "CBR4-1A2B4A5E9A",
    "image": "/attached_assets/codm_2025-11-29_11_54_04.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_54_04.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_54_04.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "ppsh-41",
    "name": "PPSh-41",
    "namePt": "PPSh-41",
    "nameEn": "PPSh-41",
    "type": "SMG",
    "description": "Melhor classe para PPSh-41",
    "descriptionEn": "Best loadout for this weapon",
    "code": "PPSh-41-1C2B5E6B9B",
    "codePt": "PPSh-41-1C2B5E6B9B",
    "codeEn": "PPSh-41-1C2B5E6B9B",
    "image": "/attached_assets/codm_2025-11-29_11_54_26.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_54_26.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_54_26.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "mac-10",
    "name": "MAC-10",
    "namePt": "MAC-10",
    "nameEn": "MAC-10",
    "type": "SMG",
    "description": "Melhor classe para MAC-10",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MAC-10-1B2A4D7B8B",
    "codePt": "MAC-10-1B2A4D7B8B",
    "codeEn": "MAC-10-1B2A4D7B8B",
    "image": "/attached_assets/codm_2025-11-29_11_54_48.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_54_48.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_54_48.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "ksp-45",
    "name": "KSP 45",
    "namePt": "KSP 45",
    "nameEn": "KSP 45",
    "type": "SMG",
    "description": "Melhor classe para KSP 45",
    "descriptionEn": "Best loadout for this weapon",
    "code": "KSP 45-1B2A4B7B8A",
    "codePt": "KSP 45-1B2A4B7B8A",
    "codeEn": "KSP 45-1B2A4B7B8A",
    "image": "/attached_assets/codm_2025-11-29_11_55_09.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_55_09.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_55_09.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "switchblade-x9",
    "name": "Switchblade X9",
    "namePt": "Switchblade X9",
    "nameEn": "Switchblade X9",
    "type": "SMG",
    "description": "Melhor classe para Switchblade X9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Switchblade X9-1A2C4C8A9A",
    "codePt": "Switchblade X9-1A2C4C8A9A",
    "codeEn": "Switchblade X9-1A2C4C8A9A",
    "image": "/attached_assets/1000004505.jpg",
    "imagePt": "/attached_assets/1000004505.jpg",
    "imageEn": "/attached_assets/1000004512.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "lapa-",
    "name": "LAPA",
    "namePt": "LAPA",
    "nameEn": "LAPA",
    "type": "SMG",
    "description": "Melhor classe para LAPA ",
    "descriptionEn": "Best loadout for this weapon",
    "code": "LAPA-1B2F4F8B9C",
    "codePt": "LAPA-1B2F4F8B9C",
    "codeEn": "LAPA-1B2F4F8B9C",
    "image": "/attached_assets/codm_2025-11-29_11_56_40.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_56_40.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_56_40.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "ots-9",
    "name": "OTs 9",
    "namePt": "OTs 9",
    "nameEn": "OTs 9",
    "type": "SMG",
    "description": "Melhor classe para OTs 9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "OTs 9-1B2B7F8B9B",
    "codePt": "OTs 9-1B2B7F8B9B",
    "codeEn": "OTs 9-1B2B7F8B9B",
    "image": "/attached_assets/codm_2025-11-29_11_57_00.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_57_00.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_57_00.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "striker-45",
    "name": "Striker 45",
    "namePt": "Striker 45",
    "nameEn": "Striker 45",
    "type": "SMG",
    "description": "Melhor classe para Striker 45",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Striker 45-1C2C6C7C8A",
    "codePt": "Striker 45-1C2C6C7C8A",
    "codeEn": "Striker 45-1C2C6C7C8A",
    "image": "/attached_assets/codm_2025-11-29_11_57_32.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_57_32.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_57_32.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "tec-9",
    "name": "TEC-9",
    "namePt": "TEC-9",
    "nameEn": "TEC-9",
    "type": "SMG",
    "description": "Melhor classe para TEC-9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "TEC-9-1F2E4B8F9A",
    "codePt": "TEC-9-1F2E4B8F9A",
    "codeEn": "TEC-9-1F2E4B8F9A",
    "image": "/attached_assets/codm_2025-11-29_11_58_08.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_58_08.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_58_08.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "iso",
    "name": "ISO",
    "namePt": "ISO",
    "nameEn": "ISO",
    "type": "SMG",
    "description": "Melhor classe para ISO",
    "descriptionEn": "Best loadout for this weapon",
    "code": "ISO-1C2C6C8B9A",
    "codePt": "ISO-1C2C6C8B9A",
    "codeEn": "ISO-1C2C6C8B9A",
    "image": "/attached_assets/codm_2025-11-29_11_58_29.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_58_29.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_58_29.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "sten",
    "name": "Sten",
    "namePt": "Sten",
    "nameEn": "Sten",
    "type": "SMG",
    "description": "Melhor classe para Sten",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Sten-1E2E6A7C8C",
    "codePt": "Sten-1E2E6A7C8C",
    "codeEn": "Sten-1E2E6A7C8C",
    "image": "/attached_assets/codm_2025-11-29_12_01_06.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_01_06.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_01_06.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "hs2126",
    "name": "HS2126",
    "namePt": "HS2126",
    "nameEn": "HS2126",
    "type": "Shotgun",
    "description": "Melhor classe para HS2126",
    "descriptionEn": "Best loadout for this weapon",
    "code": "HS2126-1B2A6A8C9C",
    "codePt": "HS2126-1B2A6A8C9C",
    "codeEn": "HS2126-1B2A6A8C9C",
    "image": "/attached_assets/codm_2025-11-29_12_01_58.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_01_58.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_01_58.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "striker",
    "name": "Striker",
    "namePt": "Striker",
    "nameEn": "Striker",
    "type": "Shotgun",
    "description": "Melhor classe para Striker",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Striker-1A2B5A6A8A",
    "codePt": "Striker-1A2B5A6A8A",
    "codeEn": "Striker-1A2B5A6A8A",
    "image": "/attached_assets/codm_2025-11-29_12_02_21.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_02_21.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_02_21.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "krm-262",
    "name": "KRM-262",
    "namePt": "KRM-262",
    "nameEn": "KRM-262",
    "type": "Shotgun",
    "description": "Melhor classe para KRM-262",
    "descriptionEn": "Best loadout for this weapon",
    "code": "KRM-262-1C2A4A5E6B",
    "codePt": "KRM-262-1C2A4A5E6B",
    "codeEn": "KRM-262-1C2A4A5E6B",
    "image": "/attached_assets/codm_2025-11-29_12_02_43.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_02_43.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_02_43.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "echo",
    "name": "Echo",
    "namePt": "Echo",
    "nameEn": "Echo",
    "type": "Shotgun",
    "description": "Melhor classe para Echo",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Echo-1F2C4A6B8B",
    "codePt": "Echo-1F2C4A6B8B",
    "codeEn": "Echo-1F2C4A6B8B",
    "image": "/attached_assets/codm_2025-11-29_12_03_04.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_03_04.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_03_04.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "r9-0",
    "name": "R9-0",
    "namePt": "R9-0",
    "nameEn": "R9-0",
    "type": "Shotgun",
    "description": "Melhor classe para R9-0",
    "descriptionEn": "Best loadout for this weapon",
    "code": "R9-0-1G2B6C8A9A",
    "codePt": "R9-0-1G2B6C8A9A",
    "codeEn": "R9-0-1G2B6C8A9A",
    "image": "/attached_assets/codm_2025-11-29_12_03_22.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_03_22.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_03_22.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "jak-12",
    "name": "JAK-12",
    "namePt": "JAK-12",
    "nameEn": "JAK-12",
    "type": "Shotgun",
    "description": "Melhor classe para JAK-12",
    "descriptionEn": "Best loadout for this weapon",
    "code": "JAK-12-1C2B5E6B",
    "codePt": "JAK-12-1C2B5E6B",
    "codeEn": "JAK-12-1C2B5E6B",
    "image": "/attached_assets/codm_2025-11-29_12_03_48.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_03_48.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_03_48.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "argus",
    "name": "Argus",
    "namePt": "Argus",
    "nameEn": "Argus",
    "type": "Shotgun",
    "description": "Melhor classe para Argus",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Argus-1D2A4A7B8C",
    "codePt": "Argus-1D2A4A7B8C",
    "codeEn": "Argus-1D2A4A7B8C",
    "image": "/attached_assets/codm_2025-11-29_12_04_15.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_04_15.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_04_15.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "vlk-rogue",
    "name": "VLK Rogue",
    "namePt": "VLK Rogue",
    "nameEn": "VLK Rogue",
    "type": "Shotgun",
    "description": "Melhor classe para VLK Rogue",
    "descriptionEn": "Best loadout for this weapon",
    "code": "VLK Rogue-1F4B5A6A8A",
    "codePt": "VLK Rogue-1F4B5A6A8A",
    "codeEn": "VLK Rogue-1F4B5A6A8A",
    "image": "/attached_assets/codm_2025-11-29_12_05_00.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_05_00.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_05_00.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "einhorn-revolving",
    "name": "Einhorn Revolving",
    "namePt": "Einhorn Revolving",
    "nameEn": "Einhorn Revolving",
    "type": "Shotgun",
    "description": "Melhor classe para Einhorn Revolving",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Einhorn Revolving-1A2A3B4A7A",
    "codePt": "Einhorn Revolving-1A2A3B4A7A",
    "codeEn": "Einhorn Revolving-1A2A3B4A7A",
    "image": "/attached_assets/codm_2025-11-29_12_05_26.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_05_26.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_05_26.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "kilo-de-a├뿯½├뿯½o-por-ferrolho",
    "name": "Kilo de Ao por Ferrolho",
    "namePt": "Kilo de Ao por Ferrolho",
    "nameEn": "Kilo de Ao por Ferrolho",
    "type": "Marksman",
    "description": "Melhor classe para Kilo de Aááo por Ferrolho",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Kilo de Ao por Ferrolho-4B5B6A8C9C",
    "codePt": "Kilo de Ao por Ferrolho-4B5B6A8C9C",
    "codeEn": "Kilo de Ao por Ferrolho-4B5B6A8C9C",
    "image": "/attached_assets/codm_2025-11-29_12_06_38.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_06_38.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_06_38.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "sks",
    "name": "SKS",
    "namePt": "SKS",
    "nameEn": "SKS",
    "type": "Marksman",
    "description": "Melhor classe para SKS",
    "descriptionEn": "Best loadout for this weapon",
    "code": "SKS-1B2B4C5E9A",
    "codePt": "SKS-1B2B4C5E9A",
    "codeEn": "SKS-1B2B4C5E9A",
    "image": "/attached_assets/codm_2025-11-29_12_07_07.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_07_07.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_07_07.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "sp-r-208",
    "name": "SP-R 208",
    "namePt": "SP-R 208",
    "nameEn": "SP-R 208",
    "type": "Marksman",
    "description": "Melhor classe para SP-R 208",
    "descriptionEn": "Best loadout for this weapon",
    "code": "SP-R 208-2A4B5A8B9A",
    "codePt": "SP-R 208-2A4B5A8B9A",
    "codeEn": "SP-R 208-2A4B5A8B9A",
    "image": "/attached_assets/codm_2025-11-29_12_07_30.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_07_30.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_07_30.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "mk2",
    "name": "MK2",
    "namePt": "MK2",
    "nameEn": "MK2",
    "type": "Marksman",
    "description": "Melhor classe para MK2",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MK2-2A4A5B6A9C",
    "codePt": "MK2-2A4A5B6A9C",
    "codeEn": "MK2-2A4A5B6A9C",
    "image": "/attached_assets/codm_2025-11-29_12_07_47.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_07_47.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_07_47.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "type-63",
    "name": "Type 63",
    "namePt": "Type 63",
    "nameEn": "Type 63",
    "type": "Marksman",
    "description": "Melhor classe para Type 63",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Type 63-1C2B4A7E9F",
    "codePt": "Type 63-1C2B4A7E9F",
    "codeEn": "Type 63-1C2B4A7E9F",
    "image": "/attached_assets/1000004522.jpg",
    "imagePt": "/attached_assets/1000004522.jpg",
    "imageEn": "/attached_assets/1000004518.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "m1-garand",
    "name": "M1 Garand",
    "namePt": "M1 Garand",
    "nameEn": "M1 Garand",
    "type": "Marksman",
    "description": "Melhor classe para M1 Garand",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M1 Garand-1D2C4C6C7D",
    "codePt": "M1 Garand-1D2C4C6C7D",
    "codeEn": "M1 Garand-1D2C4C6C7D",
    "image": "/attached_assets/codm_2025-11-29_12_11_36.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_11_36.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_11_36.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "pistola-autom├뿯½tica",
    "name": "Pistola Automtica",
    "namePt": "Pistola Automtica",
    "nameEn": "Pistola Automtica",
    "type": "Pistol",
    "description": "Melhor classe para Pistola Automática",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Pistola Automtica-1A2B7D8A9I",
    "codePt": "Pistola Automtica-1A2B7D8A9I",
    "codeEn": "Pistola Automtica-1A2B7D8A9I",
    "image": "/attached_assets/codm_2025-11-29_12_13_28.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_13_28.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_13_28.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "j358",
    "name": "J358",
    "namePt": "J358",
    "nameEn": "J358",
    "type": "Pistol",
    "description": "Melhor classe para J358",
    "descriptionEn": "Best loadout for this weapon",
    "code": "J358-2C3A5B7A8B",
    "codePt": "J358-2C3A5B7A8B",
    "codeEn": "J358-2C3A5B7A8B",
    "image": "/attached_assets/codm_2025-11-29_12_13_53.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_13_53.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_13_53.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "mw11",
    "name": "MW11",
    "namePt": "MW11",
    "nameEn": "MW11",
    "type": "Pistol",
    "description": "Melhor classe para MW11",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MW11-1C2B6C7A8B",
    "codePt": "MW11-1C2B6C7A8B",
    "codeEn": "MW11-1C2B6C7A8B",
    "image": "/attached_assets/codm_2025-11-29_12_14_15.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_14_15.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_14_15.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": ".50-gs",
    "name": ".50 GS",
    "namePt": ".50 GS",
    "nameEn": ".50 GS",
    "type": "Pistol",
    "description": "Melhor classe para .50 GS",
    "descriptionEn": "Best loadout for this weapon",
    "code": ".50 GS-2A6C7A8A9A",
    "codePt": ".50 GS-2A6C7A8A9A",
    "codeEn": ".50 GS-2A6C7A8A9A",
    "image": "/attached_assets/codm_2025-11-29_12_14_33.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_14_33.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_14_33.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "renetti",
    "name": "Renetti",
    "namePt": "Renetti",
    "nameEn": "Renetti",
    "type": "Pistol",
    "description": "Melhor classe para Renetti",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Renetti-1E6B7A8B9C",
    "codePt": "Renetti-1E6B7A8B9C",
    "codeEn": "Renetti-1E6B7A8B9C",
    "image": "/attached_assets/codm_2025-11-29_12_14_58.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_14_58.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_14_58.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "shorty",
    "name": "Shorty",
    "namePt": "Shorty",
    "nameEn": "Shorty",
    "type": "Pistol",
    "description": "Melhor classe para Shorty",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Shorty-1C4C6C7C8A",
    "codePt": "Shorty-1C4C6C7C8A",
    "codeEn": "Shorty-1C4C6C7C8A",
    "image": "/attached_assets/codm_2025-11-29_12_15_23.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_15_23.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_15_23.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "besta",
    "name": "Besta",
    "namePt": "Besta",
    "nameEn": "Besta",
    "type": "Pistol",
    "description": "Melhor classe para Besta",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Besta-1B2C4A5A7C",
    "codePt": "Besta-1B2C4A5A7C",
    "codeEn": "Besta-1B2C4A5A7C",
    "image": "/attached_assets/codm_2025-11-29_12_15_55.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_15_55.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_15_55.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "l-car-9",
    "name": "L-CAR 9",
    "namePt": "L-CAR 9",
    "nameEn": "L-CAR 9",
    "type": "Pistol",
    "description": "Melhor classe para L-CAR 9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "L-CAR 9-1B2B6C7C8B",
    "codePt": "L-CAR 9-1B2B6C7C8B",
    "codeEn": "L-CAR 9-1B2B6C7C8B",
    "image": "/attached_assets/codm_2025-11-29_12_16_17.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_16_17.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_16_17.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "dobvra",
    "name": "Dobvra",
    "namePt": "Dobvra",
    "nameEn": "Dobvra",
    "type": "Pistol",
    "description": "Melhor classe para Dobvra",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Dobvra-1D2C5F7B8B",
    "codePt": "Dobvra-1D2C5F7B8B",
    "codeEn": "Dobvra-1D2C5F7B8B",
    "image": "/attached_assets/codm_2025-11-29_12_16_38.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_16_38.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_16_38.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "cx-9",
    "name": "CX-9",
    "namePt": "CX-9",
    "nameEn": "CX-9",
    "type": "SMG",
    "description": "Melhor classe para CX-9",
    "descriptionEn": "Best loadout for CX-9",
    "code": "CX-9-1A2B4C8B9A",
    "codePt": "CX-9-1A2B4C8B9A",
    "codeEn": "CX-9-1A2B4C8B9A",
    "image": "/attached_assets/1000004501.jpg",
    "imagePt": "/attached_assets/1000004501.jpg",
    "imageEn": "/attached_assets/1000004508.jpg",
    "keywords": [
      "codm",
      "loadout",
      "cx-9",
      "smg"
    ]
  },
  {
    "id": "vmp",
    "name": "VMP",
    "namePt": "VMP",
    "nameEn": "VMP",
    "type": "SMG",
    "description": "Melhor classe para VMP",
    "descriptionEn": "Best loadout for VMP",
    "code": "VMP-2D4C5H8A9C",
    "codePt": "VMP-2D4C5H8A9C",
    "codeEn": "VMP-2D4C5H8A9C",
    "image": "/attached_assets/1000004503.jpg",
    "imagePt": "/attached_assets/1000004503.jpg",
    "imageEn": "/attached_assets/1000004510.jpg",
    "keywords": [
      "codm",
      "loadout",
      "vmp",
      "smg"
    ]
  },
  {
    "id": "mx9",
    "name": "MX9",
    "namePt": "MX9",
    "nameEn": "MX9",
    "type": "SMG",
    "description": "Melhor classe para MX9",
    "descriptionEn": "Best loadout for MX9",
    "code": "MX9-1B2A4D6C8B",
    "codePt": "MX9-1B2A4D6C8B",
    "codeEn": "MX9-1B2A4D6C8B",
    "image": "/attached_assets/1000004519.jpg",
    "imagePt": "/attached_assets/1000004519.jpg",
    "imageEn": "/attached_assets/1000004515.jpg",
    "keywords": [
      "codm",
      "loadout",
      "mx9",
      "smg"
    ]
  },
  {
    "id": "type-19",
    "name": "Type 19",
    "namePt": "Type 19",
    "nameEn": "Type 19",
    "type": "Assault Rifle",
    "description": "Melhor classe para Type 19",
    "descriptionEn": "Best loadout for Type 19",
    "code": "Type 19-1D4A7B8B9C",
    "codePt": "Type 19-1D4A7B8B9C",
    "codeEn": "Type 19-1D4A7B8B9C",
    "image": "/attached_assets/1000004502.jpg",
    "imagePt": "/attached_assets/1000004502.jpg",
    "imageEn": "/attached_assets/1000004509.jpg",
    "keywords": [
      "codm",
      "loadout",
      "type 19",
      "assault rifle"
    ]
  },
  {
    "id": "hs0405",
    "name": "HS0405",
    "namePt": "HS0405",
    "nameEn": "HS0405",
    "type": "Shotgun",
    "description": "Melhor classe para HS0405",
    "descriptionEn": "Best loadout for HS0405",
    "code": "HS0405-1F2A4A5E6A",
    "codePt": "HS0405-1F2A4A5E6A",
    "codeEn": "HS0405-1F2A4A5E6A",
    "image": "/attached_assets/1000004507.jpg",
    "imagePt": "/attached_assets/1000004507.jpg",
    "imageEn": "/attached_assets/1000004514.jpg",
    "keywords": [
      "codm",
      "loadout",
      "hs0405",
      "shotgun"
    ]
  },
  {
    "id": "by15",
    "name": "BY15",
    "namePt": "BY15",
    "nameEn": "BY15",
    "type": "Shotgun",
    "description": "Melhor classe para BY15",
    "descriptionEn": "Best loadout for BY15",
    "code": "BY15-1C2A3A4A8B",
    "codePt": "BY15-1C2A3A4A8B",
    "codeEn": "BY15-1C2A3A4A8B",
    "image": "/attached_assets/1000004520.jpg",
    "imagePt": "/attached_assets/1000004520.jpg",
    "imageEn": "/attached_assets/1000004516.jpg",
    "keywords": [
      "codm",
      "loadout",
      "by15",
      "shotgun"
    ]
  },
  {
    "id": "koshka",
    "name": "Koshka",
    "namePt": "Koshka",
    "nameEn": "Koshka",
    "type": "Sniper",
    "description": "Melhor classe para Koshka",
    "descriptionEn": "Best loadout for Koshka",
    "code": "Koshka-2A4A5G6A9C",
    "codePt": "Koshka-2A4A5G6A9C",
    "codeEn": "Koshka-2A4A5G6A9C",
    "image": "/attached_assets/1000004330.jpg",
    "imagePt": "/attached_assets/1000004330.jpg",
    "imageEn": "/attached_assets/1000004336.jpg",
    "keywords": [
      "codm",
      "loadout",
      "koshka",
      "sniper"
    ]
  },
  {
    "id": "3-line-rifle",
    "name": "3-Line Rifle",
    "namePt": "Fuzil de 3 Linhas",
    "nameEn": "3-Line Rifle",
    "type": "Sniper",
    "description": "Melhor classe para 3-Line Rifle",
    "descriptionEn": "Best loadout for 3-Line Rifle",
    "code": "Fuzil de 3 Linhas-1E2A4B5F",
    "codePt": "Fuzil de 3 Linhas-1E2A4B5F",
    "codeEn": "Fuzil de 3 Linhas-1E2A4B5F",
    "image": "/attached_assets/1000004331.jpg",
    "imagePt": "/attached_assets/1000004331.jpg",
    "imageEn": "/attached_assets/1000004337.jpg",
    "keywords": [
      "codm",
      "loadout",
      "3-line rifle",
      "sniper"
    ]
  },
  {
    "id": "locus",
    "name": "Locus",
    "namePt": "Locus",
    "nameEn": "Locus",
    "type": "Sniper",
    "description": "Melhor classe para Locus",
    "descriptionEn": "Best loadout for Locus",
    "code": "Locus-2A4B5H8C9C",
    "codePt": "Locus-2A4B5H8C9C",
    "codeEn": "Locus-2A4B5H8C9C",
    "image": "/attached_assets/1000004332.jpg",
    "imagePt": "/attached_assets/1000004332.jpg",
    "imageEn": "/attached_assets/1000004339.jpg",
    "keywords": [
      "codm",
      "loadout",
      "locus",
      "sniper"
    ]
  },
  {
    "id": "dl-q33",
    "name": "DL Q33",
    "namePt": "DL Q33",
    "nameEn": "DL Q33",
    "type": "Sniper",
    "description": "Melhor classe para DL Q33",
    "descriptionEn": "Best loadout for DL Q33",
    "code": "DL Q33-2A4A5A6A8A",
    "codePt": "DL Q33-2A4A5A6A8A",
    "codeEn": "DL Q33-2A4A5A6A8A",
    "image": "/attached_assets/1000004333.jpg",
    "imagePt": "/attached_assets/1000004333.jpg",
    "imageEn": "/attached_assets/1000004340.jpg",
    "keywords": [
      "codm",
      "loadout",
      "dl q33",
      "sniper"
    ]
  },
  {
    "id": "lw3-tundra",
    "name": "LW3-Tundra",
    "namePt": "LW3-Tundra",
    "nameEn": "LW3-Tundra",
    "type": "Sniper",
    "description": "Melhor classe para LW3-Tundra",
    "descriptionEn": "Best loadout for LW3-Tundra",
    "code": "LW3-Tundra-1A2F5A8A9E",
    "codePt": "LW3-Tundra-1A2F5A8A9E",
    "codeEn": "LW3-Tundra-1A2F5A8A9E",
    "image": "/attached_assets/1000004334.jpg",
    "imagePt": "/attached_assets/1000004334.jpg",
    "imageEn": "/attached_assets/1000004338.jpg",
    "keywords": [
      "codm",
      "loadout",
      "lw3-tundra",
      "sniper"
    ]
  }
];
