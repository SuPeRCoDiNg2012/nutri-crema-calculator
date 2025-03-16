
export interface NutType {
  id: string;
  name: string;
  protein: number; // g per 100g
  fat: number; // g per 100g
  carbs: number; // g per 100g
  fiber: number; // g per 100g
  calories: number; // kcal per 100g
  category?: string; // Optional category for grouping
}

// Categorized nuts array with 150+ items
export const nuts: NutType[] = [
  // NUTS - BASIC
  {
    id: "almond",
    name: "Mandorle",
    protein: 21.15,
    fat: 49.93,
    carbs: 21.55,
    fiber: 12.5,
    calories: 579,
    category: "Noci e Mandorle"
  },
  {
    id: "cashew",
    name: "Anacardi",
    protein: 18.22,
    fat: 43.85,
    carbs: 30.19,
    fiber: 3.3,
    calories: 553,
    category: "Noci e Mandorle"
  },
  {
    id: "hazelnut",
    name: "Nocciole",
    protein: 14.95,
    fat: 60.75,
    carbs: 16.70,
    fiber: 9.7,
    calories: 628,
    category: "Noci e Mandorle"
  },
  {
    id: "peanut",
    name: "Arachidi",
    protein: 25.80,
    fat: 49.24,
    carbs: 16.13,
    fiber: 8.5,
    calories: 567,
    category: "Arachidi"
  },
  {
    id: "walnut",
    name: "Noci",
    protein: 15.23,
    fat: 65.21,
    carbs: 13.71,
    fiber: 6.7,
    calories: 654,
    category: "Noci e Mandorle"
  },
  {
    id: "pistachio",
    name: "Pistacchi",
    protein: 20.16,
    fat: 45.32,
    carbs: 27.17,
    fiber: 10.6,
    calories: 560,
    category: "Noci e Mandorle"
  },
  {
    id: "brazil",
    name: "Noci del Brasile",
    protein: 14.32,
    fat: 67.10,
    carbs: 11.74,
    fiber: 7.5,
    calories: 659,
    category: "Noci e Mandorle"
  },
  {
    id: "macadamia",
    name: "Noci di Macadamia",
    protein: 7.91,
    fat: 75.77,
    carbs: 13.82,
    fiber: 8.6,
    calories: 718,
    category: "Noci e Mandorle"
  },
  {
    id: "pecan",
    name: "Noci Pecan",
    protein: 9.17,
    fat: 71.97,
    carbs: 13.86,
    fiber: 9.6,
    calories: 691,
    category: "Noci e Mandorle"
  },
  
  // SEEDS - BASIC
  {
    id: "pine_nut",
    name: "Pinoli",
    protein: 13.69,
    fat: 68.37,
    carbs: 13.08,
    fiber: 3.7,
    calories: 673,
    category: "Semi"
  },
  {
    id: "sunflower_seed",
    name: "Semi di Girasole",
    protein: 20.78,
    fat: 51.46,
    carbs: 20.0,
    fiber: 8.6,
    calories: 584,
    category: "Semi"
  },
  {
    id: "pumpkin_seed",
    name: "Semi di Zucca",
    protein: 30.23,
    fat: 49.05,
    carbs: 10.71,
    fiber: 6.0,
    calories: 559,
    category: "Semi"
  },
  {
    id: "chia_seed",
    name: "Semi di Chia",
    protein: 16.54,
    fat: 30.74,
    carbs: 42.12,
    fiber: 34.4,
    calories: 486,
    category: "Semi"
  },
  {
    id: "sesame_seed",
    name: "Semi di Sesamo",
    protein: 17.73,
    fat: 49.67,
    carbs: 23.45,
    fiber: 11.8,
    calories: 573,
    category: "Semi"
  },
  {
    id: "flaxseed",
    name: "Semi di Lino",
    protein: 18.29,
    fat: 42.16,
    carbs: 28.88,
    fiber: 27.3,
    calories: 534,
    category: "Semi"
  },
  
  // COCONUT PRODUCTS
  {
    id: "coconut",
    name: "Cocco",
    protein: 3.33,
    fat: 33.49,
    carbs: 15.23,
    fiber: 9.0,
    calories: 354,
    category: "Cocco"
  },
  
  // ROASTED NUTS
  {
    id: "pistachio_roasted",
    name: "Pistacchi Tostati",
    protein: 21.05,
    fat: 45.39,
    carbs: 27.97,
    fiber: 9.9,
    calories: 557,
    category: "Tostati"
  },
  {
    id: "macadamia_roasted",
    name: "Noci Macadamia Tostate",
    protein: 7.91,
    fat: 76.08,
    carbs: 13.38,
    fiber: 8.6,
    calories: 716,
    category: "Tostati"
  },
  {
    id: "pine_nut_roasted",
    name: "Pinoli Tostati",
    protein: 13.69,
    fat: 68.37,
    carbs: 13.08,
    fiber: 3.7,
    calories: 673,
    category: "Tostati"
  },
  
  // MORE SEEDS
  {
    id: "hemp_seed",
    name: "Semi di Canapa",
    protein: 31.56,
    fat: 48.75,
    carbs: 8.67,
    fiber: 4.0,
    calories: 553,
    category: "Semi"
  },
  {
    id: "poppy_seed",
    name: "Semi di Papavero",
    protein: 17.99,
    fat: 41.56,
    carbs: 28.13,
    fiber: 19.5,
    calories: 525,
    category: "Semi"
  },
  {
    id: "watermelon_seed",
    name: "Semi di Anguria",
    protein: 28.33,
    fat: 47.37,
    carbs: 15.31,
    fiber: 5.9,
    calories: 557,
    category: "Semi"
  },
  
  // MORE ROASTED NUTS
  {
    id: "cashew_roasted",
    name: "Anacardi Tostati",
    protein: 15.31,
    fat: 46.35,
    carbs: 32.69,
    fiber: 3.3,
    calories: 574,
    category: "Tostati"
  },
  {
    id: "pecan_roasted",
    name: "Noci Pecan Tostate",
    protein: 9.17,
    fat: 71.97,
    carbs: 13.86,
    fiber: 9.6,
    calories: 691,
    category: "Tostati"
  },
  {
    id: "almond_roasted",
    name: "Mandorle Tostate",
    protein: 21.55,
    fat: 50.62,
    carbs: 19.51,
    fiber: 11.8,
    calories: 598,
    category: "Tostati"
  },
  {
    id: "walnut_roasted",
    name: "Noci Tostate",
    protein: 15.23,
    fat: 65.21,
    carbs: 13.71,
    fiber: 6.7,
    calories: 654,
    category: "Tostati"
  },
  {
    id: "hazelnut_roasted",
    name: "Nocciole Tostate",
    protein: 15.03,
    fat: 60.83,
    carbs: 16.70,
    fiber: 9.4,
    calories: 646,
    category: "Tostati"
  },
  {
    id: "peanut_roasted",
    name: "Arachidi Tostate",
    protein: 26.15,
    fat: 49.66,
    carbs: 16.23,
    fiber: 8.0,
    calories: 585,
    category: "Tostati"
  },
  
  // NUT BUTTERS
  {
    id: "almond_butter",
    name: "Burro di Mandorle",
    protein: 21.26,
    fat: 56.29,
    carbs: 19.15,
    fiber: 10.5,
    calories: 614,
    category: "Burri"
  },
  {
    id: "peanut_butter",
    name: "Burro di Arachidi",
    protein: 24.06,
    fat: 50.33,
    carbs: 19.66,
    fiber: 6.0,
    calories: 589,
    category: "Burri"
  },
  {
    id: "cashew_butter",
    name: "Burro di Anacardi",
    protein: 18.25,
    fat: 46.38,
    carbs: 29.16,
    fiber: 3.0,
    calories: 574,
    category: "Burri"
  },
  {
    id: "hazelnut_butter",
    name: "Burro di Nocciole",
    protein: 14.19,
    fat: 61.55,
    carbs: 17.32,
    fiber: 9.7,
    calories: 628,
    category: "Burri"
  },
  {
    id: "sunflower_butter",
    name: "Burro di Semi di Girasole",
    protein: 19.33,
    fat: 53.36,
    carbs: 19.41,
    fiber: 6.0,
    calories: 617,
    category: "Burri"
  },
  
  // NUT OILS
  {
    id: "walnut_oil",
    name: "Olio di Noci",
    protein: 0.0,
    fat: 100.0,
    carbs: 0.0,
    fiber: 0.0,
    calories: 884,
    category: "Oli"
  },
  {
    id: "almond_oil",
    name: "Olio di Mandorle",
    protein: 0.0,
    fat: 100.0,
    carbs: 0.0,
    fiber: 0.0,
    calories: 884,
    category: "Oli"
  },
  {
    id: "hazelnut_oil",
    name: "Olio di Nocciole",
    protein: 0.0,
    fat: 100.0,
    carbs: 0.0,
    fiber: 0.0,
    calories: 884,
    category: "Oli"
  },
  {
    id: "coconut_oil",
    name: "Olio di Cocco",
    protein: 0.0,
    fat: 99.06,
    carbs: 0.0,
    fiber: 0.0,
    calories: 862,
    category: "Oli"
  },
  
  // NUT FLOURS
  {
    id: "almond_flour",
    name: "Farina di Mandorle",
    protein: 21.94,
    fat: 49.93,
    carbs: 19.94,
    fiber: 10.4,
    calories: 576,
    category: "Farine"
  },
  {
    id: "coconut_flour",
    name: "Farina di Cocco",
    protein: 19.3,
    fat: 14.2,
    carbs: 58.9,
    fiber: 39.0,
    calories: 411,
    category: "Farine"
  },
  {
    id: "hazelnut_flour",
    name: "Farina di Nocciole",
    protein: 14.95,
    fat: 60.75,
    carbs: 16.70,
    fiber: 9.4,
    calories: 628,
    category: "Farine"
  },
  {
    id: "flaxseed_meal",
    name: "Farina di Semi di Lino",
    protein: 18.29,
    fat: 42.16,
    carbs: 28.88,
    fiber: 27.3,
    calories: 534,
    category: "Farine"
  },
  {
    id: "walnut_meal",
    name: "Farina di Noci",
    protein: 15.23,
    fat: 63.21,
    carbs: 14.71,
    fiber: 6.7,
    calories: 654,
    category: "Farine"
  },
  
  // COCONUT PRODUCTS
  {
    id: "coconut_dried",
    name: "Cocco Essiccato",
    protein: 6.88,
    fat: 62.27,
    carbs: 23.65,
    fiber: 16.3,
    calories: 660,
    category: "Cocco"
  },
  {
    id: "coconut_fresh",
    name: "Cocco Fresco",
    protein: 3.33,
    fat: 33.49,
    carbs: 15.23,
    fiber: 9.0,
    calories: 354,
    category: "Cocco"
  },
  {
    id: "coconut_cream",
    name: "Crema di Cocco",
    protein: 2.3,
    fat: 23.6,
    carbs: 6.7,
    fiber: 2.2,
    calories: 330,
    category: "Cocco"
  },
  
  // SEED PASTES
  {
    id: "tahini",
    name: "Tahini (Crema di Sesamo)",
    protein: 17.0,
    fat: 53.76,
    carbs: 21.19,
    fiber: 9.3,
    calories: 595,
    category: "Burri"
  },
  
  // TIGER NUTS
  {
    id: "tiger_nut",
    name: "Chufa (Nocciola di Terra)",
    protein: 4.82,
    fat: 24.49,
    carbs: 43.82,
    fiber: 17.4,
    calories: 400,
    category: "Tuberi"
  },
  {
    id: "tiger_nut_flour",
    name: "Farina di Chufa",
    protein: 2.45,
    fat: 24.15,
    carbs: 47.23,
    fiber: 27.0,
    calories: 407,
    category: "Farine"
  },
  {
    id: "tiger_nut_milk",
    name: "Horchata (Latte di Chufa)",
    protein: 0.59,
    fat: 2.33,
    carbs: 11.46,
    fiber: 0.2,
    calories: 67,
    category: "Bevande"
  },
  
  // CHESTNUTS
  {
    id: "chestnut",
    name: "Castagne",
    protein: 2.42,
    fat: 1.25,
    carbs: 43.71,
    fiber: 8.1,
    calories: 196,
    category: "Castagne"
  },
  {
    id: "chestnut_flour",
    name: "Farina di Castagne",
    protein: 6.4,
    fat: 3.4,
    carbs: 78.4,
    fiber: 16.2,
    calories: 371,
    category: "Farine"
  },
  {
    id: "chestnut_roasted",
    name: "Castagne Arrostite",
    protein: 3.17,
    fat: 2.20,
    carbs: 44.17,
    fiber: 8.1,
    calories: 213,
    category: "Castagne"
  },
  
  // EXOTIC SEEDS AND NUTS
  {
    id: "ginkgo",
    name: "Semi di Ginkgo",
    protein: 10.35,
    fat: 1.77,
    carbs: 37.60,
    fiber: 3.4,
    calories: 182,
    category: "Semi Esotici"
  },
  {
    id: "acorn",
    name: "Ghiande",
    protein: 6.15,
    fat: 23.86,
    carbs: 40.75,
    fiber: 15.3,
    calories: 387,
    category: "Semi Esotici"
  },
  {
    id: "acorn_flour",
    name: "Farina di Ghiande",
    protein: 6.70,
    fat: 30.17,
    carbs: 54.65,
    fiber: 13.8,
    calories: 501,
    category: "Farine"
  },
  
  // PSEUDOCEREALS
  {
    id: "amaranth",
    name: "Semi di Amaranto",
    protein: 13.56,
    fat: 7.02,
    carbs: 65.25,
    fiber: 6.7,
    calories: 371,
    category: "Pseudocereali"
  },
  {
    id: "quinoa",
    name: "Semi di Quinoa",
    protein: 14.12,
    fat: 6.07,
    carbs: 64.16,
    fiber: 7.0,
    calories: 368,
    category: "Pseudocereali"
  },
  {
    id: "millet",
    name: "Semi di Miglio",
    protein: 11.02,
    fat: 4.22,
    carbs: 72.85,
    fiber: 8.5,
    calories: 378,
    category: "Pseudocereali"
  },
  {
    id: "buckwheat",
    name: "Grano Saraceno",
    protein: 13.25,
    fat: 3.40,
    carbs: 71.50,
    fiber: 10.0,
    calories: 343,
    category: "Pseudocereali"
  },
  
  // RARE NUTS
  {
    id: "pili_nut",
    name: "Noci Pili",
    protein: 10.80,
    fat: 79.55,
    carbs: 3.98,
    fiber: 0.6,
    calories: 719,
    category: "Noci Rare"
  },
  {
    id: "paradise_nut",
    name: "Noci del Paradiso",
    protein: 14.32,
    fat: 66.43,
    carbs: 12.27,
    fiber: 7.5,
    calories: 659,
    category: "Noci Rare"
  },
  {
    id: "baru_nut",
    name: "Noci Baru",
    protein: 23.90,
    fat: 38.20,
    carbs: 15.80,
    fiber: 13.4,
    calories: 502,
    category: "Noci Rare"
  },
  {
    id: "mongongo_nut",
    name: "Noci Mongongo",
    protein: 24.30,
    fat: 57.50,
    carbs: 10.7,
    fiber: 3.7,
    calories: 642,
    category: "Noci Rare"
  },
  {
    id: "kola_nut",
    name: "Noci di Cola",
    protein: 8.65,
    fat: 0.82,
    carbs: 54.05,
    fiber: 1.9,
    calories: 277,
    category: "Noci Rare"
  },
  
  // CACAO PRODUCTS
  {
    id: "cacao_nibs",
    name: "Fave di Cacao",
    protein: 14.29,
    fat: 42.34,
    carbs: 32.44,
    fiber: 21.7,
    calories: 499,
    category: "Cacao"
  },
  {
    id: "cacao_butter",
    name: "Burro di Cacao",
    protein: 0.0,
    fat: 100.0,
    carbs: 0.0,
    fiber: 0.0,
    calories: 884,
    category: "Cacao"
  },
  
  // FLAVORED NUTS
  {
    id: "pecans_honey_roasted",
    name: "Noci Pecan Tostate al Miele",
    protein: 8.34,
    fat: 60.22,
    carbs: 26.54,
    fiber: 8.4,
    calories: 655,
    category: "Aromatizzati"
  },
  {
    id: "almonds_honey_roasted",
    name: "Mandorle Tostate al Miele",
    protein: 19.47,
    fat: 46.95,
    carbs: 28.63,
    fiber: 10.5,
    calories: 597,
    category: "Aromatizzati"
  },
  {
    id: "cashews_honey_roasted",
    name: "Anacardi Tostati al Miele",
    protein: 15.31,
    fat: 38.95,
    carbs: 41.45,
    fiber: 3.1,
    calories: 568,
    category: "Aromatizzati"
  },
  
  // CHOCOLATE COVERED
  {
    id: "hazelnuts_chocolate_covered",
    name: "Nocciole Ricoperte di Cioccolato",
    protein: 8.97,
    fat: 45.45,
    carbs: 42.50,
    fiber: 6.4,
    calories: 590,
    category: "Ricoperti di Cioccolato"
  },
  {
    id: "almonds_chocolate_covered",
    name: "Mandorle Ricoperte di Cioccolato",
    protein: 12.77,
    fat: 42.47,
    carbs: 42.41,
    fiber: 7.6,
    calories: 575,
    category: "Ricoperti di Cioccolato"
  },
  
  // COFFEE BEANS
  {
    id: "coffee_beans",
    name: "Chicchi di Caffè",
    protein: 11.74,
    fat: 15.34,
    carbs: 65.82,
    fiber: 43.9,
    calories: 416,
    category: "Caffè"
  },
  
  // MORINGA
  {
    id: "moringa_seeds",
    name: "Semi di Moringa",
    protein: 17.5,
    fat: 38.67,
    carbs: 33.90,
    fiber: 12.5,
    calories: 540,
    category: "Semi Esotici"
  },
  
  // PINE NUTS VARIANTS
  {
    id: "pine_nuts_chinese",
    name: "Pinoli Cinesi",
    protein: 11.57,
    fat: 68.37,
    carbs: 13.08,
    fiber: 3.7,
    calories: 673,
    category: "Semi"
  },
  
  // MORE CHOCOLATE COVERED
  {
    id: "macadamia_chocolate_covered",
    name: "Macadamia Ricoperte di Cioccolato",
    protein: 6.15,
    fat: 58.35,
    carbs: 32.17,
    fiber: 5.9,
    calories: 665,
    category: "Ricoperti di Cioccolato"
  },
  
  // BLACK WALNUTS
  {
    id: "black_walnuts",
    name: "Noci Nere",
    protein: 24.10,
    fat: 59.00,
    carbs: 9.91,
    fiber: 6.8,
    calories: 628,
    category: "Noci e Mandorle"
  },
  
  // CHIA VARIANTS
  {
    id: "white_chia_seeds",
    name: "Semi di Chia Bianchi",
    protein: 16.54,
    fat: 31.27,
    carbs: 42.12,
    fiber: 34.4,
    calories: 490,
    category: "Semi"
  },
  {
    id: "black_chia_seeds",
    name: "Semi di Chia Neri",
    protein: 16.54,
    fat: 30.74,
    carbs: 42.12,
    fiber: 34.4,
    calories: 486,
    category: "Semi"
  },
  
  // LOTUS SEEDS
  {
    id: "lotus_seeds",
    name: "Semi di Loto",
    protein: 17.23,
    fat: 1.93,
    carbs: 67.23,
    fiber: 10.1,
    calories: 350,
    category: "Semi Esotici"
  },
  
  // ADDITIONAL NUTS AND SEEDS
  {
    id: "hickory_nut",
    name: "Noci Hickory",
    protein: 13.2,
    fat: 68.7,
    carbs: 13.9,
    fiber: 6.4,
    calories: 673,
    category: "Noci Rare"
  },
  {
    id: "butternut",
    name: "Noci Bianche",
    protein: 23.7,
    fat: 57.4,
    carbs: 12.1,
    fiber: 4.7,
    calories: 628,
    category: "Noci Rare"
  },
  {
    id: "gingko_roasted",
    name: "Semi di Ginkgo Tostati",
    protein: 10.6,
    fat: 2.2,
    carbs: 37.8,
    fiber: 3.6,
    calories: 198,
    category: "Semi Esotici"
  },
  {
    id: "breadnut",
    name: "Noci del Pane",
    protein: 7.9,
    fat: 3.8,
    carbs: 77.2,
    fiber: 7.9,
    calories: 351,
    category: "Noci Rare"
  },
  {
    id: "candlenut",
    name: "Noci Candle",
    protein: 19.0,
    fat: 65.0,
    carbs: 11.0,
    fiber: 3.0,
    calories: 680,
    category: "Noci Rare"
  },
  
  // SEED VARIANTS
  {
    id: "pumpkin_seeds_roasted",
    name: "Semi di Zucca Tostati",
    protein: 30.0,
    fat: 50.0,
    carbs: 10.5,
    fiber: 6.0,
    calories: 574,
    category: "Tostati"
  },
  {
    id: "watermelon_seeds_roasted",
    name: "Semi di Anguria Tostati",
    protein: 28.3,
    fat: 47.4,
    carbs: 15.3,
    fiber: 5.9,
    calories: 557,
    category: "Tostati"
  },
  {
    id: "sunflower_seeds_roasted",
    name: "Semi di Girasole Tostati",
    protein: 21.0,
    fat: 51.5,
    carbs: 20.0,
    fiber: 8.6,
    calories: 584,
    category: "Tostati"
  },
  
  // PINE NUT VARIANTS
  {
    id: "siberian_pine_nuts",
    name: "Pinoli Siberiani",
    protein: 13.7,
    fat: 68.4,
    carbs: 13.1,
    fiber: 3.7,
    calories: 673,
    category: "Semi"
  },
  {
    id: "korean_pine_nuts",
    name: "Pinoli Coreani",
    protein: 13.7,
    fat: 68.4,
    carbs: 13.1,
    fiber: 3.7,
    calories: 673,
    category: "Semi"
  },
  
  // SPROUTS
  {
    id: "sprouted_almonds",
    name: "Mandorle Germogliate",
    protein: 21.2,
    fat: 49.9,
    carbs: 21.7,
    fiber: 12.5,
    calories: 579,
    category: "Germogliati"
  },
  {
    id: "sprouted_sunflower_seeds",
    name: "Semi di Girasole Germogliati",
    protein: 21.0,
    fat: 51.5,
    carbs: 20.0,
    fiber: 8.7,
    calories: 584,
    category: "Germogliati"
  },
  {
    id: "sprouted_pumpkin_seeds",
    name: "Semi di Zucca Germogliati",
    protein: 30.2,
    fat: 49.1,
    carbs: 10.7,
    fiber: 6.1,
    calories: 559,
    category: "Germogliati"
  },
  
  // SPECIAL MIXES
  {
    id: "trail_mix_basic",
    name: "Mix Base Escursionismo",
    protein: 15.0,
    fat: 55.0,
    carbs: 25.0,
    fiber: 7.0,
    calories: 610,
    category: "Mix Pronti"
  },
  {
    id: "trail_mix_tropical",
    name: "Mix Tropicale",
    protein: 12.0,
    fat: 45.0,
    carbs: 35.0,
    fiber: 9.0,
    calories: 580,
    category: "Mix Pronti"
  },
  {
    id: "trail_mix_protein",
    name: "Mix Proteico",
    protein: 25.0,
    fat: 50.0,
    carbs: 20.0,
    fiber: 6.0,
    calories: 590,
    category: "Mix Pronti"
  },
  
  // FLAVORED MIXES
  {
    id: "spiced_almonds",
    name: "Mandorle Speziate",
    protein: 21.0,
    fat: 50.0,
    carbs: 22.0,
    fiber: 12.5,
    calories: 580,
    category: "Aromatizzati"
  },
  {
    id: "salt_roasted_cashews",
    name: "Anacardi Tostati Salati",
    protein: 18.2,
    fat: 43.9,
    carbs: 30.2,
    fiber: 3.3,
    calories: 553,
    category: "Aromatizzati"
  },
  {
    id: "cinnamon_walnuts",
    name: "Noci alla Cannella",
    protein: 15.2,
    fat: 65.2,
    carbs: 14.7,
    fiber: 6.7,
    calories: 654,
    category: "Aromatizzati"
  },
  
  // MORE BUTTERS
  {
    id: "pistachio_butter",
    name: "Burro di Pistacchi",
    protein: 20.2,
    fat: 44.0,
    carbs: 27.2,
    fiber: 10.6,
    calories: 558,
    category: "Burri"
  },
  {
    id: "walnut_butter",
    name: "Burro di Noci",
    protein: 15.2,
    fat: 65.2,
    carbs: 13.7,
    fiber: 6.7,
    calories: 654,
    category: "Burri"
  },
  {
    id: "brazil_nut_butter",
    name: "Burro di Noci del Brasile",
    protein: 14.3,
    fat: 66.4,
    carbs: 12.3,
    fiber: 7.5,
    calories: 659,
    category: "Burri"
  },
  
  // NUT MILKS
  {
    id: "almond_milk",
    name: "Latte di Mandorle",
    protein: 1.1,
    fat: 2.5,
    carbs: 3.3,
    fiber: 0.7,
    calories: 39,
    category: "Bevande"
  },
  {
    id: "cashew_milk",
    name: "Latte di Anacardi",
    protein: 1.0,
    fat: 2.0,
    carbs: 4.0,
    fiber: 0.5,
    calories: 37,
    category: "Bevande"
  },
  {
    id: "hazelnut_milk",
    name: "Latte di Nocciole",
    protein: 0.9,
    fat: 2.8,
    carbs: 2.5,
    fiber: 0.6,
    calories: 38,
    category: "Bevande"
  },
  
  // MORE VARIANTS
  {
    id: "fermented_cashews",
    name: "Anacardi Fermentati",
    protein: 18.2,
    fat: 43.9,
    carbs: 30.2,
    fiber: 3.3,
    calories: 553,
    category: "Fermentati"
  },
  {
    id: "fermented_almonds",
    name: "Mandorle Fermentate",
    protein: 21.2,
    fat: 49.9,
    carbs: 21.6,
    fiber: 12.5,
    calories: 579,
    category: "Fermentati"
  },
  {
    id: "cashew_yogurt",
    name: "Yogurt di Anacardi",
    protein: 4.5,
    fat: 12.0,
    carbs: 9.0,
    fiber: 1.0,
    calories: 160,
    category: "Fermentati"
  },
  
  // REGIONAL SPECIALTIES
  {
    id: "marcona_almonds",
    name: "Mandorle Marcona",
    protein: 22.0,
    fat: 53.0,
    carbs: 19.5,
    fiber: 10.5,
    calories: 609,
    category: "Specialità Regionali"
  },
  {
    id: "sicilian_pistachios",
    name: "Pistacchi di Sicilia",
    protein: 20.6,
    fat: 44.4,
    carbs: 27.2,
    fiber: 10.8,
    calories: 562,
    category: "Specialità Regionali"
  },
  {
    id: "piedmont_hazelnuts",
    name: "Nocciole del Piemonte",
    protein: 14.2,
    fat: 64.1,
    carbs: 16.7,
    fiber: 9.7,
    calories: 655,
    category: "Specialità Regionali"
  },
  
  // RAW VS ROASTED COMPARISONS
  {
    id: "almonds_raw",
    name: "Mandorle Crude",
    protein: 21.2,
    fat: 49.9,
    carbs: 21.6,
    fiber: 12.5,
    calories: 579,
    category: "Crudi"
  },
  {
    id: "cashews_raw",
    name: "Anacardi Crudi",
    protein: 18.2,
    fat: 43.9,
    carbs: 30.2,
    fiber: 3.3,
    calories: 553,
    category: "Crudi"
  },
  {
    id: "walnuts_raw",
    name: "Noci Crude",
    protein: 15.2,
    fat: 65.2,
    carbs: 13.7,
    fiber: 6.7,
    calories: 654,
    category: "Crudi"
  },
  
  // ADDITIONAL SEED VARIETIES
  {
    id: "niger_seed",
    name: "Semi di Niger",
    protein: 18.0,
    fat: 38.0,
    carbs: 32.0,
    fiber: 17.0,
    calories: 534,
    category: "Semi"
  },
  {
    id: "camelina_seeds",
    name: "Semi di Camelina",
    protein: 30.0,
    fat: 38.0,
    carbs: 28.0,
    fiber: 12.0,
    calories: 560,
    category: "Semi"
  },
  {
    id: "perilla_seeds",
    name: "Semi di Perilla",
    protein: 16.0,
    fat: 51.0,
    carbs: 24.0,
    fiber: 25.0,
    calories: 570,
    category: "Semi"
  },
  
  // ADDITIONAL EXOTIC NUTS
  {
    id: "canarium_nut",
    name: "Noci Canarium",
    protein: 8.0,
    fat: 75.0,
    carbs: 13.0,
    fiber: 3.8,
    calories: 742,
    category: "Noci Rare"
  },
  {
    id: "cempedak_seed",
    name: "Semi di Cempedak",
    protein: 13.0,
    fat: 3.0,
    carbs: 76.0,
    fiber: 7.0,
    calories: 389,
    category: "Semi Esotici"
  },
  {
    id: "jackfruit_seeds",
    name: "Semi di Jackfruit",
    protein: 6.6,
    fat: 0.4,
    carbs: 38.4,
    fiber: 1.5,
    calories: 184,
    category: "Semi Esotici"
  },
  
  // FRUIT SEED OILS
  {
    id: "grape_seed_oil",
    name: "Olio di Semi d'Uva",
    protein: 0.0,
    fat: 100.0,
    carbs: 0.0,
    fiber: 0.0,
    calories: 884,
    category: "Oli"
  },
  {
    id: "raspberry_seed_oil",
    name: "Olio di Semi di Lampone",
    protein: 0.0,
    fat: 100.0,
    carbs: 0.0,
    fiber: 0.0,
    calories: 884,
    category: "Oli"
  },
  {
    id: "blackcurrant_seed_oil",
    name: "Olio di Semi di Ribes Nero",
    protein: 0.0,
    fat: 100.0,
    carbs: 0.0,
    fiber: 0.0,
    calories: 884,
    category: "Oli"
  },
  
  // SPROUTED VARIANTS
  {
    id: "sprouted_buckwheat",
    name: "Grano Saraceno Germogliato",
    protein: 13.3,
    fat: 3.4,
    carbs: 71.5,
    fiber: 10.0,
    calories: 343,
    category: "Germogliati"
  },
  {
    id: "sprouted_quinoa",
    name: "Quinoa Germogliata",
    protein: 14.1,
    fat: 6.1,
    carbs: 64.2,
    fiber: 7.0,
    calories: 368,
    category: "Germogliati"
  },
  {
    id: "sprouted_flaxseed",
    name: "Semi di Lino Germogliati",
    protein: 18.3,
    fat: 42.2,
    carbs: 28.9,
    fiber: 27.3,
    calories: 534,
    category: "Germogliati"
  },
  
  // SPECIAL FLAVORED VARIANTS
  {
    id: "chocolate_almonds",
    name: "Mandorle al Cioccolato",
    protein: 17.0,
    fat: 47.0,
    carbs: 29.0,
    fiber: 11.0,
    calories: 590,
    category: "Aromatizzati"
  },
  {
    id: "vanilla_cashews",
    name: "Anacardi alla Vaniglia",
    protein: 18.0,
    fat: 44.0,
    carbs: 31.0,
    fiber: 3.3,
    calories: 560,
    category: "Aromatizzati"
  },
  {
    id: "cinnamon_pecans",
    name: "Noci Pecan alla Cannella",
    protein: 9.2,
    fat: 72.0,
    carbs: 14.0,
    fiber: 9.6,
    calories: 691,
    category: "Aromatizzati"
  },
  
  // SEED MEALS
  {
    id: "hemp_protein",
    name: "Proteine di Canapa",
    protein: 50.0,
    fat: 11.0,
    carbs: 20.0,
    fiber: 8.0,
    calories: 380,
    category: "Proteine Vegetali"
  },
  {
    id: "pumpkin_seed_protein",
    name: "Proteine di Semi di Zucca",
    protein: 60.0,
    fat: 10.0,
    carbs: 10.0,
    fiber: 8.0,
    calories: 370,
    category: "Proteine Vegetali"
  },
  {
    id: "sunflower_protein",
    name: "Proteine di Girasole",
    protein: 53.0,
    fat: 9.0,
    carbs: 18.0,
    fiber: 8.0,
    calories: 365,
    category: "Proteine Vegetali"
  },
  
  // SEED AND NUT SPROUTS
  {
    id: "alfalfa_sprouts",
    name: "Germogli di Erba Medica",
    protein: 4.0,
    fat: 0.7,
    carbs: 2.1,
    fiber: 1.9,
    calories: 31,
    category: "Germogli"
  },
  {
    id: "broccoli_sprouts",
    name: "Germogli di Broccoli",
    protein: 3.0,
    fat: 0.6,
    carbs: 4.0,
    fiber: 2.4,
    calories: 35,
    category: "Germogli"
  },
  {
    id: "radish_sprouts",
    name: "Germogli di Ravanello",
    protein: 3.8,
    fat: 0.5,
    carbs: 3.6,
    fiber: 2.0,
    calories: 32,
    category: "Germogli"
  },
  
  // SPECIAL SEED VARIETIES
  {
    id: "black_sesame_seeds",
    name: "Semi di Sesamo Nero",
    protein: 17.7,
    fat: 49.7,
    carbs: 23.5,
    fiber: 11.8,
    calories: 573,
    category: "Semi"
  },
  {
    id: "black_cumin_seeds",
    name: "Semi di Cumino Nero",
    protein: 20.8,
    fat: 38.7,
    carbs: 31.0,
    fiber: 8.4,
    calories: 550,
    category: "Semi"
  },
  {
    id: "fenugreek_seeds",
    name: "Semi di Fieno Greco",
    protein: 23.0,
    fat: 6.4,
    carbs: 58.0,
    fiber: 25.0,
    calories: 323,
    category: "Semi"
  },
  
  // SPECIALTY NUT PRODUCTS
  {
    id: "hazelnut_praline",
    name: "Pralinato di Nocciole",
    protein: 8.0,
    fat: 49.0,
    carbs: 40.0,
    fiber: 3.0,
    calories: 625,
    category: "Specialità"
  },
  {
    id: "pistachio_paste",
    name: "Pasta di Pistacchio",
    protein: 19.0,
    fat: 43.0,
    carbs: 29.0,
    fiber: 10.0,
    calories: 550,
    category: "Specialità"
  },
  {
    id: "almond_paste",
    name: "Pasta di Mandorle",
    protein: 15.0,
    fat: 47.0,
    carbs: 35.0,
    fiber: 9.0,
    calories: 590,
    category: "Specialità"
  },
  
  // COFFEE RELATIVES
  {
    id: "guarana_seeds",
    name: "Semi di Guaranà",
    protein: 15.0,
    fat: 3.0,
    carbs: 70.0,
    fiber: 7.0,
    calories: 370,
    category: "Semi Esotici"
  },
  {
    id: "cola_seeds",
    name: "Semi di Cola",
    protein: 7.2,
    fat: 1.0,
    carbs: 88.0,
    fiber: 1.5,
    calories: 390,
    category: "Semi Esotici"
  },
  {
    id: "cacao_powder",
    name: "Cacao in Polvere",
    protein: 20.0,
    fat: 12.0,
    carbs: 58.0,
    fiber: 33.0,
    calories: 370,
    category: "Cacao"
  },
  
  // ADDITIONAL COCONUT PRODUCTS
  {
    id: "coconut_butter",
    name: "Burro di Cocco",
    protein: 6.9,
    fat: 62.3,
    carbs: 23.7,
    fiber: 16.3,
    calories: 660,
    category: "Cocco"
  },
  {
    id: "coconut_nectar",
    name: "Nettare di Cocco",
    protein: 0.5,
    fat: 0.3,
    carbs: 75.0,
    fiber: 0.0,
    calories: 310,
    category: "Cocco"
  },
  {
    id: "coconut_amino",
    name: "Amino di Cocco",
    protein: 6.0,
    fat: 0.0,
    carbs: 6.0,
    fiber: 0.0,
    calories: 48,
    category: "Cocco"
  },
  
  // SEED AND NUT CHEESES
  {
    id: "cashew_cheese",
    name: "Formaggio di Anacardi",
    protein: 12.0,
    fat: 30.0,
    carbs: 13.0,
    fiber: 2.0,
    calories: 375,
    category: "Formaggi Vegetali"
  },
  {
    id: "almond_cheese",
    name: "Formaggio di Mandorle",
    protein: 15.0,
    fat: 35.0,
    carbs: 10.0,
    fiber: 8.0,
    calories: 410,
    category: "Formaggi Vegetali"
  },
  {
    id: "sunflower_cheese",
    name: "Formaggio di Girasole",
    protein: 14.0,
    fat: 32.0,
    carbs: 12.0,
    fiber: 6.0,
    calories: 390,
    category: "Formaggi Vegetali"
  },
  
  // MEDICINAL SEEDS
  {
    id: "milk_thistle_seeds",
    name: "Semi di Cardo Mariano",
    protein: 26.0,
    fat: 31.0,
    carbs: 38.0,
    fiber: 20.0,
    calories: 520,
    category: "Semi Medicinali"
  },
  {
    id: "pumpkin_seeds_medicinal",
    name: "Semi di Zucca Medicinali",
    protein: 30.2,
    fat: 49.1,
    carbs: 10.7,
    fiber: 6.0,
    calories: 559,
    category: "Semi Medicinali"
  },
  {
    id: "fennel_seeds",
    name: "Semi di Finocchio",
    protein: 15.8,
    fat: 14.9,
    carbs: 52.3,
    fiber: 39.8,
    calories: 345,
    category: "Semi Medicinali"
  },
  
  // ANCIENT GRAINS
  {
    id: "teff",
    name: "Teff",
    protein: 13.3,
    fat: 2.4,
    carbs: 73.1,
    fiber: 8.0,
    calories: 367,
    category: "Pseudocereali"
  },
  {
    id: "sorghum",
    name: "Sorgo",
    protein: 10.6,
    fat: 3.5,
    carbs: 72.1,
    fiber: 6.7,
    calories: 339,
    category: "Pseudocereali"
  },
  {
    id: "fonio",
    name: "Fonio",
    protein: 9.0,
    fat: 3.8,
    carbs: 75.0,
    fiber: 3.3,
    calories: 378,
    category: "Pseudocereali"
  },
  
  // ADDITIONAL SPECIALTY NUTS
  {
    id: "katemfe_seeds",
    name: "Semi di Katemfe",
    protein: 18.0,
    fat: 12.0,
    carbs: 60.0,
    fiber: 15.0,
    calories: 380,
    category: "Semi Esotici"
  },
  {
    id: "baobab_seeds",
    name: "Semi di Baobab",
    protein: 15.0,
    fat: 33.0,
    carbs: 30.0,
    fiber: 22.0,
    calories: 490,
    category: "Semi Esotici"
  },
  {
    id: "marula_nuts",
    name: "Noci di Marula",
    protein: 28.2,
    fat: 57.3,
    carbs: 6.1,
    fiber: 3.5,
    calories: 635,
    category: "Noci Rare"
  },
  
  // ADDITIONAL SPECIALTY PRODUCTS
  {
    id: "nori_flakes",
    name: "Alga Nori in Scaglie",
    protein: 41.0,
    fat: 4.0,
    carbs: 44.0,
    fiber: 34.0,
    calories: 350,
    category: "Alghe"
  },
  {
    id: "spirulina",
    name: "Spirulina",
    protein: 57.0,
    fat: 7.5,
    carbs: 24.0,
    fiber: 3.6,
    calories: 290,
    category: "Alghe"
  },
  {
    id: "chlorella",
    name: "Clorella",
    protein: 58.0,
    fat: 9.0,
    carbs: 23.0,
    fiber: 2.0,
    calories: 325,
    category: "Alghe"
  },
  
  // UNIQUE SPECIALTY SEEDS
  {
    id: "sacha_inchi",
    name: "Semi di Sacha Inchi",
    protein: 27.0,
    fat: 35.0,
    carbs: 18.0,
    fiber: 15.0,
    calories: 486,
    category: "Semi Esotici"
  },
  {
    id: "cacao_beans_whole",
    name: "Fave di Cacao Intere",
    protein: 12.5,
    fat: 46.3,
    carbs: 34.7,
    fiber: 30.0,
    calories: 559,
    category: "Cacao"
  },
  {
    id: "maca_powder",
    name: "Maca in Polvere",
    protein: 14.0,
    fat: 2.2,
    carbs: 72.5,
    fiber: 8.5,
    calories: 336,
    category: "Superfood"
  },
  
  // ADDITIONAL SPECIALTY BUTTERS
  {
    id: "macadamia_coconut_butter",
    name: "Burro di Macadamia e Cocco",
    protein: 5.0,
    fat: 70.0,
    carbs: 15.0,
    fiber: 8.0,
    calories: 695,
    category: "Burri"
  },
  {
    id: "pistachio_hazelnut_butter",
    name: "Burro di Pistacchio e Nocciola",
    protein: 17.0,
    fat: 53.0,
    carbs: 22.0,
    fiber: 10.0,
    calories: 610,
    category: "Burri"
  },
  {
    id: "walnut_brazil_butter",
    name: "Burro di Noci e Brasile",
    protein: 14.8,
    fat: 65.9,
    carbs: 13.0,
    fiber: 7.1,
    calories: 657,
    category: "Burri"
  }
];
