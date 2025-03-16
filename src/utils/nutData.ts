export interface NutType {
  id: string;
  name: string;
  protein: number; // g per 100g
  fat: number; // g per 100g
  carbs: number; // g per 100g
  fiber: number; // g per 100g
  calories: number; // kcal per 100g
}

export const nuts: NutType[] = [
  {
    id: "almond",
    name: "Mandorle",
    protein: 21.15,
    fat: 49.93,
    carbs: 21.55,
    fiber: 12.5,
    calories: 579,
  },
  {
    id: "cashew",
    name: "Anacardi",
    protein: 18.22,
    fat: 43.85,
    carbs: 30.19,
    fiber: 3.3,
    calories: 553,
  },
  {
    id: "hazelnut",
    name: "Nocciole",
    protein: 14.95,
    fat: 60.75,
    carbs: 16.70,
    fiber: 9.7,
    calories: 628,
  },
  {
    id: "peanut",
    name: "Arachidi",
    protein: 25.80,
    fat: 49.24,
    carbs: 16.13,
    fiber: 8.5,
    calories: 567,
  },
  {
    id: "walnut",
    name: "Noci",
    protein: 15.23,
    fat: 65.21,
    carbs: 13.71,
    fiber: 6.7,
    calories: 654,
  },
  {
    id: "pistachio",
    name: "Pistacchi",
    protein: 20.16,
    fat: 45.32,
    carbs: 27.17,
    fiber: 10.6,
    calories: 560,
  },
  {
    id: "brazil",
    name: "Noci del Brasile",
    protein: 14.32,
    fat: 67.10,
    carbs: 11.74,
    fiber: 7.5,
    calories: 659,
  },
  {
    id: "macadamia",
    name: "Noci di Macadamia",
    protein: 7.91,
    fat: 75.77,
    carbs: 13.82,
    fiber: 8.6,
    calories: 718,
  },
  {
    id: "pecan",
    name: "Noci Pecan",
    protein: 9.17,
    fat: 71.97,
    carbs: 13.86,
    fiber: 9.6,
    calories: 691,
  },
  {
    id: "pine_nut",
    name: "Pinoli",
    protein: 13.69,
    fat: 68.37,
    carbs: 13.08,
    fiber: 3.7,
    calories: 673,
  },
  {
    id: "sunflower_seed",
    name: "Semi di Girasole",
    protein: 20.78,
    fat: 51.46,
    carbs: 20.0,
    fiber: 8.6,
    calories: 584,
  },
  {
    id: "pumpkin_seed",
    name: "Semi di Zucca",
    protein: 30.23,
    fat: 49.05,
    carbs: 10.71,
    fiber: 6.0,
    calories: 559,
  },
  {
    id: "chia_seed",
    name: "Semi di Chia",
    protein: 16.54,
    fat: 30.74,
    carbs: 42.12,
    fiber: 34.4,
    calories: 486,
  },
  {
    id: "sesame_seed",
    name: "Semi di Sesamo",
    protein: 17.73,
    fat: 49.67,
    carbs: 23.45,
    fiber: 11.8,
    calories: 573,
  },
  {
    id: "flaxseed",
    name: "Semi di Lino",
    protein: 18.29,
    fat: 42.16,
    carbs: 28.88,
    fiber: 27.3,
    calories: 534,
  },
  {
    id: "coconut",
    name: "Cocco",
    protein: 3.33,
    fat: 33.49,
    carbs: 15.23,
    fiber: 9.0,
    calories: 354,
  },
  {
    id: "pistachio_roasted",
    name: "Pistacchi Tostati",
    protein: 21.05,
    fat: 45.39,
    carbs: 27.97,
    fiber: 9.9,
    calories: 557,
  },
  {
    id: "macadamia_roasted",
    name: "Noci Macadamia Tostate",
    protein: 7.91,
    fat: 76.08,
    carbs: 13.38,
    fiber: 8.6,
    calories: 716,
  },
  {
    id: "pine_nut_roasted",
    name: "Pinoli Tostati",
    protein: 13.69,
    fat: 68.37,
    carbs: 13.08,
    fiber: 3.7,
    calories: 673,
  },
  {
    id: "hemp_seed",
    name: "Semi di Canapa",
    protein: 31.56,
    fat: 48.75,
    carbs: 8.67,
    fiber: 4.0,
    calories: 553,
  },
  {
    id: "poppy_seed",
    name: "Semi di Papavero",
    protein: 17.99,
    fat: 41.56,
    carbs: 28.13,
    fiber: 19.5,
    calories: 525,
  },
  {
    id: "watermelon_seed",
    name: "Semi di Anguria",
    protein: 28.33,
    fat: 47.37,
    carbs: 15.31,
    fiber: 5.9,
    calories: 557,
  },
  {
    id: "cashew_roasted",
    name: "Anacardi Tostati",
    protein: 15.31,
    fat: 46.35,
    carbs: 32.69,
    fiber: 3.3,
    calories: 574,
  },
  {
    id: "pecan_roasted",
    name: "Noci Pecan Tostate",
    protein: 9.17,
    fat: 71.97,
    carbs: 13.86,
    fiber: 9.6,
    calories: 691,
  }
];
