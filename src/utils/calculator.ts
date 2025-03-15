
import { NutType } from "./nutData";

export interface NutritionalTarget {
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
  calories: number;
}

export interface NutMixItem {
  nut: NutType;
  percentage: number;
}

export interface CalculationResult {
  mix: NutMixItem[];
  totalWeight: number; // in grams
  actualNutrition: NutritionalTarget;
  targetDifference: NutritionalTarget;
}

// Simple linear optimization to find the best mix
export const calculateNutMix = (
  selectedNuts: NutType[],
  target: NutritionalTarget,
  totalWeight: number = 100 // Default to percentages
): CalculationResult => {
  if (selectedNuts.length === 0) {
    throw new Error("No nuts selected for calculation");
  }

  // Simple case: if only one nut is selected, it's 100%
  if (selectedNuts.length === 1) {
    const nut = selectedNuts[0];
    const percentage = 100;
    
    const actualNutrition = {
      protein: (nut.protein * totalWeight) / 100,
      fat: (nut.fat * totalWeight) / 100,
      carbs: (nut.carbs * totalWeight) / 100,
      fiber: (nut.fiber * totalWeight) / 100,
      calories: (nut.calories * totalWeight) / 100,
    };
    
    return {
      mix: [{ nut, percentage }],
      totalWeight,
      actualNutrition,
      targetDifference: {
        protein: actualNutrition.protein - target.protein,
        fat: actualNutrition.fat - target.fat,
        carbs: actualNutrition.carbs - target.carbs,
        fiber: actualNutrition.fiber - target.fiber,
        calories: actualNutrition.calories - target.calories,
      }
    };
  }

  // For multiple nuts, we'll use a simple optimization approach
  // This is a simplified version that tries to minimize the sum of squared differences
  // from the target nutritional values

  // Initialize with equal distribution
  let bestMix: NutMixItem[] = selectedNuts.map(nut => ({
    nut,
    percentage: 100 / selectedNuts.length
  }));
  
  // Function to calculate nutrition for a given mix
  const calculateNutrition = (mix: NutMixItem[]): NutritionalTarget => {
    return {
      protein: mix.reduce((sum, item) => sum + (item.nut.protein * item.percentage) / 100, 0) * totalWeight / 100,
      fat: mix.reduce((sum, item) => sum + (item.nut.fat * item.percentage) / 100, 0) * totalWeight / 100,
      carbs: mix.reduce((sum, item) => sum + (item.nut.carbs * item.percentage) / 100, 0) * totalWeight / 100,
      fiber: mix.reduce((sum, item) => sum + (item.nut.fiber * item.percentage) / 100, 0) * totalWeight / 100,
      calories: mix.reduce((sum, item) => sum + (item.nut.calories * item.percentage) / 100, 0) * totalWeight / 100,
    };
  };

  // Function to calculate error (sum of squared differences)
  const calculateError = (nutrition: NutritionalTarget): number => {
    return Math.pow(nutrition.protein - target.protein, 2) +
           Math.pow(nutrition.fat - target.fat, 2) +
           Math.pow(nutrition.carbs - target.carbs, 2) +
           Math.pow(nutrition.fiber - target.fiber, 2) +
           Math.pow(nutrition.calories - target.calories, 2);
  };

  // Simple hill climbing optimization (very basic)
  let bestError = Infinity;
  const iterations = 1000;
  const stepSize = 5; // Percentage points to adjust

  for (let i = 0; i < iterations; i++) {
    // Create a copy of the current best mix
    const currentMix = [...bestMix];
    
    // Randomly adjust two nuts in the mixture
    const idx1 = Math.floor(Math.random() * currentMix.length);
    let idx2 = Math.floor(Math.random() * currentMix.length);
    while (idx2 === idx1 && currentMix.length > 1) {
      idx2 = Math.floor(Math.random() * currentMix.length);
    }
    
    // Skip adjustment if we only have one nut
    if (currentMix.length > 1) {
      // Adjust percentages
      const adjustAmount = Math.random() * stepSize;
      currentMix[idx1].percentage -= adjustAmount;
      currentMix[idx2].percentage += adjustAmount;
      
      // Ensure percentages are valid
      currentMix.forEach(item => {
        item.percentage = Math.max(0, Math.min(100, item.percentage));
      });
      
      // Normalize to ensure sum is 100%
      const totalPercentage = currentMix.reduce((sum, item) => sum + item.percentage, 0);
      currentMix.forEach(item => {
        item.percentage = (item.percentage / totalPercentage) * 100;
      });
    }
    
    // Calculate nutrition and error
    const nutrition = calculateNutrition(currentMix);
    const error = calculateError(nutrition);
    
    // Update best mix if error is lower
    if (error < bestError) {
      bestError = error;
      bestMix = currentMix;
    }
  }

  // Calculate final nutrition values
  const actualNutrition = calculateNutrition(bestMix);
  
  // Calculate differences from target
  const targetDifference = {
    protein: actualNutrition.protein - target.protein,
    fat: actualNutrition.fat - target.fat,
    carbs: actualNutrition.carbs - target.carbs,
    fiber: actualNutrition.fiber - target.fiber,
    calories: actualNutrition.calories - target.calories,
  };

  return {
    mix: bestMix,
    totalWeight,
    actualNutrition,
    targetDifference
  };
};
