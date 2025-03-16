
import React from "react";
import { Leaf, Weight, Flame, Beef, Wheat, Apple } from "lucide-react";
import { NutritionalTarget } from "@/utils/calculator";
import PresetSelector from "./nutritional-target/PresetSelector";
import NutrientSlider from "./nutritional-target/NutrientSlider";

interface NutritionalTargetFormProps {
  target: NutritionalTarget;
  onChange: (target: NutritionalTarget) => void;
  totalWeight: number;
  onWeightChange: (weight: number) => void;
}

const NutritionalTargetForm: React.FC<NutritionalTargetFormProps> = ({
  target,
  onChange,
  totalWeight,
  onWeightChange,
}) => {
  const handleChange = (field: keyof NutritionalTarget, value: number) => {
    onChange({
      ...target,
      [field]: value,
    });
  };

  // Max values for sliders
  const maxValues = {
    protein: 50,
    fat: 100,
    carbs: 50,
    fiber: 40,
    calories: 1000
  };

  return (
    <div className="space-y-6">
      <PresetSelector onChange={onChange} />

      <div className="space-y-6">
        <NutrientSlider
          id="total-weight"
          label="Peso Totale (g)"
          value={totalWeight}
          onChange={onWeightChange}
          max={500}
          step={10}
          icon={<Weight className="h-5 w-5 text-primary" />}
        />

        <NutrientSlider
          id="protein"
          label="Proteine (g)"
          value={target.protein}
          onChange={(value) => handleChange("protein", value)}
          max={maxValues.protein}
          icon={<Beef className="h-5 w-5 text-amber-600" />}
        />

        <NutrientSlider
          id="fat"
          label="Grassi (g)"
          value={target.fat}
          onChange={(value) => handleChange("fat", value)}
          max={maxValues.fat}
          icon={
            <div className="h-5 w-5 flex items-center justify-center bg-yellow-200 rounded-full text-yellow-700">
              <span className="text-xs font-bold">G</span>
            </div>
          }
        />

        <NutrientSlider
          id="carbs"
          label="Carboidrati (g)"
          value={target.carbs}
          onChange={(value) => handleChange("carbs", value)}
          max={maxValues.carbs}
          icon={<Wheat className="h-5 w-5 text-amber-400" />}
        />

        <NutrientSlider
          id="fiber"
          label="Fibre (g)"
          value={target.fiber}
          onChange={(value) => handleChange("fiber", value)}
          max={maxValues.fiber}
          icon={<Leaf className="h-5 w-5 text-green-500" />}
        />

        <NutrientSlider
          id="calories"
          label="Calorie (kcal)"
          value={target.calories}
          onChange={(value) => handleChange("calories", value)}
          max={maxValues.calories}
          step={10}
          icon={<Flame className="h-5 w-5 text-orange-500" />}
        />
      </div>
    </div>
  );
};

export default NutritionalTargetForm;
