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
    "namePt": "Arma 1",
    "nameEn": "Weapon 1",
    "type": "Assault Rifle",
    "description": "Melhor classe de type 25",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Type 25-1C3A4C6C9D",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 2",
    "nameEn": "Weapon 2",
    "type": "Assault Rifle",
    "description": "Melhor classe para multijogador",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M16-2B4A5I8A9B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 3",
    "nameEn": "Weapon 3",
    "type": "Assault Rifle",
    "description": "Ak177 com recoil reduzido",
    "descriptionEn": "Best loadout for this weapon",
    "code": "AK177-1C2B4A8B9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 4",
    "nameEn": "Weapon 4",
    "type": "Assault Rifle",
    "description": "AK-47 Rápida",
    "descriptionEn": "Best loadout for this weapon",
    "code": "AK-47-1A2C4A8A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 5",
    "nameEn": "Weapon 5",
    "type": "Assault Rifle",
    "description": "Melhor classe de ASM10",
    "descriptionEn": "Best loadout for this weapon",
    "code": "ASM10-1C2C4A8B9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 6",
    "nameEn": "Weapon 6",
    "type": "Assault Rifle",
    "description": "Melhor classe de M4",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M4-2C4A6C7D8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 7",
    "nameEn": "Weapon 7",
    "type": "Assault Rifle",
    "description": "Melhor classe para BK57",
    "descriptionEn": "Best loadout for this weapon",
    "code": "BK57-1C2B3A4C9B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 8",
    "nameEn": "Weapon 8",
    "type": "Assault Rifle",
    "description": "Melhor classe para LK24",
    "descriptionEn": "Best loadout for this weapon",
    "code": "LK24-1A2A3A4D8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 9",
    "nameEn": "Weapon 9",
    "type": "Assault Rifle",
    "description": "Melhor classe para ICR-1",
    "descriptionEn": "Best loadout for this weapon",
    "code": "ICR-1-2C4A6C8C9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 10",
    "nameEn": "Weapon 10",
    "type": "Assault Rifle",
    "description": "Melhor classe para Man-O-War TERMITA",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Man-O-War-1C2C4C7D8C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 11",
    "nameEn": "Weapon 11",
    "type": "Assault Rifle",
    "description": "Melhor classe para KN-44",
    "descriptionEn": "Best loadout for this weapon",
    "code": "KN-44-1A2B4A8B9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 12",
    "nameEn": "Weapon 12",
    "type": "Assault Rifle",
    "description": "Melhor classe para HBRa3",
    "descriptionEn": "Best loadout for this weapon",
    "code": "HBRa3-2A4A5B8A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 13",
    "nameEn": "Weapon 13",
    "type": "Assault Rifle",
    "description": "Melhor classe para HVK-30",
    "descriptionEn": "Best loadout for this weapon",
    "code": "HVK-30-1C2A4C8C9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 14",
    "nameEn": "Weapon 14",
    "type": "Assault Rifle",
    "description": "Melhor classe para DR-H",
    "descriptionEn": "Best loadout for this weapon",
    "code": "DR-H-1A2B4A8C9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/codm_2025-11-29_11_09_49.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_09_49.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_09_49.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "peacekeeper-mk2",
    "name": "Peacekeeper MK2",
    "namePt": "Arma 15",
    "nameEn": "Weapon 15",
    "type": "Assault Rifle",
    "description": "Melhor classe para Peacekeeper MK2",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Peacekeeper MK2-1B2C4D8B9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 16",
    "nameEn": "Weapon 16",
    "type": "Assault Rifle",
    "description": "Melhor classe para FR .556",
    "descriptionEn": "Best loadout for this weapon",
    "code": "FR .556-1C2C5A8A9B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 17",
    "nameEn": "Weapon 17",
    "type": "Assault Rifle",
    "description": "Melhor classe para AS VAL",
    "descriptionEn": "Best loadout for this weapon",
    "code": "AS VAL-2C4B6C8A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 18",
    "nameEn": "Weapon 18",
    "type": "Assault Rifle",
    "description": "Melhor classe para CR-56 AMAX",
    "descriptionEn": "Best loadout for this weapon",
    "code": "CR-56 AMAX-1A2C5E8A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 19",
    "nameEn": "Weapon 19",
    "type": "Assault Rifle",
    "description": "Melhor classe para M13",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M13-2C4B6B8B9B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 20",
    "nameEn": "Weapon 20",
    "type": "Assault Rifle",
    "description": "Melhor classe para Swordfish",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Swordfish-1A3A4A5A8C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 21",
    "nameEn": "Weapon 21",
    "type": "Assault Rifle",
    "description": "Melhor classe para Kilo 141",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Kilo 141-1C4A6C8B9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 22",
    "nameEn": "Weapon 22",
    "type": "Assault Rifle",
    "description": "Melhor classe para Oden",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Oden-1C4A5A7C9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/codm_2025-11-29_11_15_14.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_15_14.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_15_14.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "krig-6",
    "name": "Krig 6",
    "namePt": "Arma 23",
    "nameEn": "Weapon 23",
    "type": "Assault Rifle",
    "description": "Melhor classe para Krig 6",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Krig 6-1A2C4F7F8D",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 24",
    "nameEn": "Weapon 24",
    "type": "Assault Rifle",
    "description": "Melhor classe para EM2",
    "descriptionEn": "Best loadout for this weapon",
    "code": "EM2-2B4A7G8B9B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 25",
    "nameEn": "Weapon 25",
    "type": "Assault Rifle",
    "description": "Melhor classe para Maddox",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Maddox-2D3A4A8A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 26",
    "nameEn": "Weapon 26",
    "type": "Assault Rifle",
    "description": "Melhor classe para FFAR 1",
    "descriptionEn": "Best loadout for this weapon",
    "code": "FFAR 1-2E4B7E8E9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 27",
    "nameEn": "Weapon 27",
    "type": "Assault Rifle",
    "description": "Melhor classe para Grau 5.56",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Grau 5.56-1A2D4A8A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 28",
    "nameEn": "Weapon 28",
    "type": "Assault Rifle",
    "description": "Melhor classe para Groza",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Groza-1B2D4F8B9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 29",
    "nameEn": "Weapon 29",
    "type": "Assault Rifle",
    "description": "Melhor classe para BP50",
    "descriptionEn": "Best loadout for this weapon",
    "code": "BP50-1D2C4B8B9H",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 30",
    "nameEn": "Weapon 30",
    "type": "Assault Rifle",
    "description": "Melhor classe para LAG 53",
    "descriptionEn": "Best loadout for this weapon",
    "code": "LAG 53-1A2B4B8A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 31",
    "nameEn": "Weapon 31",
    "type": "Assault Rifle",
    "description": "Melhor classe para XM4",
    "descriptionEn": "Best loadout for this weapon",
    "code": "XM4-1A2C4E8D9E",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/codm_2025-11-29_11_24_41.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_24_41.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_24_41.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "vargo-s",
    "name": "Vargo-S",
    "namePt": "Arma 32",
    "nameEn": "Weapon 32",
    "type": "Assault Rifle",
    "description": "Melhor classe para Vargo-S",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Vargo-S-1C4C5B7C8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 33",
    "nameEn": "Weapon 33",
    "type": "Assault Rifle",
    "description": "Melhor classe para RAM-7",
    "descriptionEn": "Best loadout for this weapon",
    "code": "RAM-7-1F2B4A6A8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 34",
    "nameEn": "Weapon 34",
    "type": "Sniper",
    "description": "Melhor classe para XPR-50",
    "descriptionEn": "Best loadout for this weapon",
    "code": "XPR-50-1C2A4A5A8C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 35",
    "nameEn": "Weapon 35",
    "type": "Sniper",
    "description": "Melhor classe para Artic .50",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Artic .50-1B2A4B5H9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 36",
    "nameEn": "Weapon 36",
    "type": "Sniper",
    "description": "Melhor classe para M21 EBR",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M21 EBR-1D2B4A5H8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 37",
    "nameEn": "Weapon 37",
    "type": "Sniper",
    "description": "Melhor classe para NA-45",
    "descriptionEn": "Best loadout for this weapon",
    "code": "NA-45-1C4C5A7A8C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 38",
    "nameEn": "Weapon 38",
    "type": "Sniper",
    "description": "Melhor classe para Outlaw",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Outlaw-2A4C5H6A9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/codm_2025-11-29_11_34_16.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_34_16.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_34_16.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "rytec-amr",
    "name": "Rytec AMR",
    "namePt": "Arma 39",
    "nameEn": "Weapon 39",
    "type": "Sniper",
    "description": "Melhor classe para Rytec AMR",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Rytec AMR-2A4B5A6A9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 40",
    "nameEn": "Weapon 40",
    "type": "Sniper",
    "description": "Melhor classe para SVD",
    "descriptionEn": "Best loadout for this weapon",
    "code": "SVD-1C2B3E4C8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 41",
    "nameEn": "Weapon 41",
    "type": "Sniper",
    "description": "Melhor classe para ZRG 20 mm",
    "descriptionEn": "Best loadout for this weapon",
    "code": "ZRG 20 mm-2A4B6A8B9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 42",
    "nameEn": "Weapon 42",
    "type": "LMG",
    "description": "Melhor classe para S36",
    "descriptionEn": "Best loadout for this weapon",
    "code": "S36-1C2B3A4B5D",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 43",
    "nameEn": "Weapon 43",
    "type": "LMG",
    "description": "Melhor classe para UL736",
    "descriptionEn": "Best loadout for this weapon",
    "code": "UL736-1A2B4C5D9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 44",
    "nameEn": "Weapon 44",
    "type": "LMG",
    "description": "Melhor classe para RPD",
    "descriptionEn": "Best loadout for this weapon",
    "code": "RPD-1C2D4D5A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 45",
    "nameEn": "Weapon 45",
    "type": "LMG",
    "description": "Melhor classe para M4LMG",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M4LMG-1C4D6C7D9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 46",
    "nameEn": "Weapon 46",
    "type": "LMG",
    "description": "Melhor classe para Chopper",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Chopper-1C2B5E6C7G",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 47",
    "nameEn": "Weapon 47",
    "type": "LMG",
    "description": "Melhor classe para Holger 26",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Holger 26-1A4A5D6C9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 48",
    "nameEn": "Weapon 48",
    "type": "LMG",
    "description": "Melhor classe para Hades",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Hades-2B4D5B7A9D",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 49",
    "nameEn": "Weapon 49",
    "type": "LMG",
    "description": "Melhor classe para PKM",
    "descriptionEn": "Best loadout for this weapon",
    "code": "PKM-2B4C6C7E8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 50",
    "nameEn": "Weapon 50",
    "type": "LMG",
    "description": "Melhor classe para Dingo",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Dingo-1E2C4D7F9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 51",
    "nameEn": "Weapon 51",
    "type": "LMG",
    "description": "Melhor classe para Bruen MK9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Bruen MK9-2A3A4A5A8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 52",
    "nameEn": "Weapon 52",
    "type": "LMG",
    "description": "Melhor classe para MG42",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MG42-1E2D5E8D9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 53",
    "nameEn": "Weapon 53",
    "type": "LMG",
    "description": "Melhor classe para RAAL MG",
    "descriptionEn": "Best loadout for this weapon",
    "code": "RAAL MG-2C6A7C8B9B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 54",
    "nameEn": "Weapon 54",
    "type": "LMG",
    "description": "Melhor classe para MG 82",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MG 82-2F4D7A8E9F",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 55",
    "nameEn": "Weapon 55",
    "type": "SMG",
    "description": "Melhor classe para RUS-79U",
    "descriptionEn": "Best loadout for this weapon",
    "code": "RUS-79U-1C2A4A6C8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 56",
    "nameEn": "Weapon 56",
    "type": "SMG",
    "description": "Melhor classe para Chicom",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Chicom-1C2B3A4A8C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 57",
    "nameEn": "Weapon 57",
    "type": "SMG",
    "description": "Melhor classe para PDW-57",
    "descriptionEn": "Best loadout for this weapon",
    "code": "PDW-57-1C2A4A5E9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 58",
    "nameEn": "Weapon 58",
    "type": "SMG",
    "description": "Melhor classe para Razorback",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Razorback-1C2A5I6C9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 59",
    "nameEn": "Weapon 59",
    "type": "SMG",
    "description": "Melhor classe para MSMC",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MSMC-1C2C4A6C8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 60",
    "nameEn": "Weapon 60",
    "type": "SMG",
    "description": "Melhor classe para HG 40",
    "descriptionEn": "Best loadout for this weapon",
    "code": "HG 40-2C4A6C8C9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 61",
    "nameEn": "Weapon 61",
    "type": "SMG",
    "description": "Melhor classe para Pharo",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Pharo-1E2C4B7D8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 62",
    "nameEn": "Weapon 62",
    "type": "SMG",
    "description": "Melhor classe para GKS",
    "descriptionEn": "Best loadout for this weapon",
    "code": "GKS-1A2A4B6B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 63",
    "nameEn": "Weapon 63",
    "type": "SMG",
    "description": "Melhor classe para Cordite",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Cordite-1C2A4A6C8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 64",
    "nameEn": "Weapon 64",
    "type": "SMG",
    "description": "Melhor classe para QQ9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "QQ9-1C2C4A6C8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 65",
    "nameEn": "Weapon 65",
    "type": "SMG",
    "description": "Melhor classe para Fennec",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Fennec-1C2C4D7C8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 66",
    "nameEn": "Weapon 66",
    "type": "SMG",
    "description": "Melhor classe para AGR 556",
    "descriptionEn": "Best loadout for this weapon",
    "code": "AGR 556-1C2B4C6C8C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 67",
    "nameEn": "Weapon 67",
    "type": "SMG",
    "description": "Melhor classe para QXR",
    "descriptionEn": "Best loadout for this weapon",
    "code": "QXR-1C2C4A5I8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 68",
    "nameEn": "Weapon 68",
    "type": "SMG",
    "description": "Melhor classe para PP19 Bizon",
    "descriptionEn": "Best loadout for this weapon",
    "code": "PP19 Bizon-1C2B4A6C9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 69",
    "nameEn": "Weapon 69",
    "type": "SMG",
    "description": "Melhor classe para CBR4",
    "descriptionEn": "Best loadout for this weapon",
    "code": "CBR4-1A2B4A5E9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 70",
    "nameEn": "Weapon 70",
    "type": "SMG",
    "description": "Melhor classe para PPSh-41",
    "descriptionEn": "Best loadout for this weapon",
    "code": "PPSh-41-1C2B5E6B9B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 71",
    "nameEn": "Weapon 71",
    "type": "SMG",
    "description": "Melhor classe para MAC-10",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MAC-10-1B2A4D7B8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 72",
    "nameEn": "Weapon 72",
    "type": "SMG",
    "description": "Melhor classe para KSP 45",
    "descriptionEn": "Best loadout for this weapon",
    "code": "KSP 45-1B2A4B7B8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 73",
    "nameEn": "Weapon 73",
    "type": "SMG",
    "description": "Melhor classe para Switchblade X9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Switchblade X9-1F2C4A8A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/codm_2025-11-29_11_55_49.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_11_55_49.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_11_55_49.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "lapa-",
    "name": "LAPA ",
    "namePt": "Arma 74",
    "nameEn": "Weapon 74",
    "type": "SMG",
    "description": "Melhor classe para LAPA ",
    "descriptionEn": "Best loadout for this weapon",
    "code": "LAPA-1B2F4F8B9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 75",
    "nameEn": "Weapon 75",
    "type": "SMG",
    "description": "Melhor classe para OTs 9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "OTs 9-1B2B7F8B9B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 76",
    "nameEn": "Weapon 76",
    "type": "SMG",
    "description": "Melhor classe para Striker 45",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Striker 45-1C2C6C7C8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 77",
    "nameEn": "Weapon 77",
    "type": "SMG",
    "description": "Melhor classe para TEC-9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "TEC-9-1F2E4B8F9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 78",
    "nameEn": "Weapon 78",
    "type": "SMG",
    "description": "Melhor classe para ISO",
    "descriptionEn": "Best loadout for this weapon",
    "code": "ISO-1C2C6C8B9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 79",
    "nameEn": "Weapon 79",
    "type": "SMG",
    "description": "Melhor classe para Sten",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Sten-1E2E6A7C8C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 80",
    "nameEn": "Weapon 80",
    "type": "Shotgun",
    "description": "Melhor classe para HS2126",
    "descriptionEn": "Best loadout for this weapon",
    "code": "HS2126-1B2A6A8C9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 81",
    "nameEn": "Weapon 81",
    "type": "Shotgun",
    "description": "Melhor classe para Striker",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Striker-1A2B5A6A8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 82",
    "nameEn": "Weapon 82",
    "type": "Shotgun",
    "description": "Melhor classe para KRM-262",
    "descriptionEn": "Best loadout for this weapon",
    "code": "KRM-262-1C2A4A5E6B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 83",
    "nameEn": "Weapon 83",
    "type": "Shotgun",
    "description": "Melhor classe para Echo",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Echo-1F2C4A6B8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 84",
    "nameEn": "Weapon 84",
    "type": "Shotgun",
    "description": "Melhor classe para R9-0",
    "descriptionEn": "Best loadout for this weapon",
    "code": "R9-0-1G2B6C8A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 85",
    "nameEn": "Weapon 85",
    "type": "Shotgun",
    "description": "Melhor classe para JAK-12",
    "descriptionEn": "Best loadout for this weapon",
    "code": "JAK-12-1C2B5E6B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 86",
    "nameEn": "Weapon 86",
    "type": "Shotgun",
    "description": "Melhor classe para Argus",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Argus-1D2A4A7B8C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 87",
    "nameEn": "Weapon 87",
    "type": "Shotgun",
    "description": "Melhor classe para VLK Rogue",
    "descriptionEn": "Best loadout for this weapon",
    "code": "VLK Rogue-1F4B5A6A8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 88",
    "nameEn": "Weapon 88",
    "type": "Shotgun",
    "description": "Melhor classe para Einhorn Revolving",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Einhorn Revolving-1A2A3B4A7A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/codm_2025-11-29_12_05_26.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_05_26.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_05_26.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "kilo-de-ação-por-ferrolho",
    "name": "Kilo de Ação por Ferrolho",
    "namePt": "Arma 89",
    "nameEn": "Weapon 89",
    "type": "Marksman",
    "description": "Melhor classe para Kilo de Ação por Ferrolho",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Kilo de Ação por Ferrolho-4B5B6A8C9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 90",
    "nameEn": "Weapon 90",
    "type": "Marksman",
    "description": "Melhor classe para SKS",
    "descriptionEn": "Best loadout for this weapon",
    "code": "SKS-1B2B4C5E9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 91",
    "nameEn": "Weapon 91",
    "type": "Marksman",
    "description": "Melhor classe para SP-R 208",
    "descriptionEn": "Best loadout for this weapon",
    "code": "SP-R 208-2A4B5A8B9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 92",
    "nameEn": "Weapon 92",
    "type": "Marksman",
    "description": "Melhor classe para MK2",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MK2-2A4A5B6A9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 93",
    "nameEn": "Weapon 93",
    "type": "Marksman",
    "description": "Melhor classe para Type 63",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Type 63-2B4A7E8B9F",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/codm_2025-11-29_12_10_36.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_10_36.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_10_36.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "m1-garand",
    "name": "M1 Garand",
    "namePt": "Arma 95",
    "nameEn": "Weapon 95",
    "type": "Marksman",
    "description": "Melhor classe para M1 Garand",
    "descriptionEn": "Best loadout for this weapon",
    "code": "M1 Garand-1D2C4C6C7D",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/codm_2025-11-29_12_11_36.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_11_36.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_11_36.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  },
  {
    "id": "pistola-automática",
    "name": "Pistola Automática",
    "namePt": "Arma 96",
    "nameEn": "Weapon 96",
    "type": "Assault Rifle",
    "description": "Melhor classe para Pistola Automática",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Pistola Automática-1A2B7D8A9I",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 97",
    "nameEn": "Weapon 97",
    "type": "Assault Rifle",
    "description": "Melhor classe para J358",
    "descriptionEn": "Best loadout for this weapon",
    "code": "J358-2C3A5B7A8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 98",
    "nameEn": "Weapon 98",
    "type": "Assault Rifle",
    "description": "Melhor classe para MW11",
    "descriptionEn": "Best loadout for this weapon",
    "code": "MW11-1C2B6C7A8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 99",
    "nameEn": "Weapon 99",
    "type": "Assault Rifle",
    "description": "Melhor classe para .50 GS",
    "descriptionEn": "Best loadout for this weapon",
    "code": ".50 GS-2A6C7A8A9A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 100",
    "nameEn": "Weapon 100",
    "type": "Assault Rifle",
    "description": "Melhor classe para Renetti",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Renetti-1E6B7A8B9C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 101",
    "nameEn": "Weapon 101",
    "type": "Assault Rifle",
    "description": "Melhor classe para Shorty",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Shorty-1C4C6C7C8A",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 102",
    "nameEn": "Weapon 102",
    "type": "Assault Rifle",
    "description": "Melhor classe para Besta",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Besta-1B2C4A5A7C",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 103",
    "nameEn": "Weapon 103",
    "type": "Assault Rifle",
    "description": "Melhor classe para L-CAR 9",
    "descriptionEn": "Best loadout for this weapon",
    "code": "L-CAR 9-1B2B6C7C8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
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
    "namePt": "Arma 104",
    "nameEn": "Weapon 104",
    "type": "Assault Rifle",
    "description": "Melhor classe para Dobvra",
    "descriptionEn": "Best loadout for this weapon",
    "code": "Dobvra-1D2C5F7B8B",
    "codePt": "UNKNOWN",
    "codeEn": "UNKNOWN",
    "image": "/attached_assets/codm_2025-11-29_12_16_38.jpg",
    "imagePt": "/attached_assets/codm_2025-11-29_12_16_38.jpg",
    "imageEn": "/attached_assets/codm_2025-11-29_12_16_38.jpg",
    "keywords": [
      "codm",
      "review"
    ]
  }
];
