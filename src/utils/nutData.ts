
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
];
