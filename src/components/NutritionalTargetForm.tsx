import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Leaf, Weight, Flame, Beef, Wheat, Apple } from "lucide-react";
import { NutritionalTarget } from "@/utils/calculator";

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

  const presetProfiles = [
    {
      name: "Alta Proteina",
      values: { protein: 30, fat: 40, carbs: 20, fiber: 10, calories: 600 }
    },
    {
      name: "Basso Contenuto di Grassi",
      values: { protein: 25, fat: 30, carbs: 35, fiber: 10, calories: 500 }
    },
    {
      name: "Keto",
      values: { protein: 20, fat: 70, carbs: 5, fiber: 5, calories: 700 }
    }
  ];

  const applyPreset = (preset: typeof presetProfiles[0]) => {
    onChange(preset.values);
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
      <div className="space-y-2">
        <p className="text-sm font-medium">Profili Predefiniti:</p>
        <div className="flex flex-wrap gap-2">
          {presetProfiles.map((preset) => (
            <Button
              key={preset.name}
              variant="outline"
              size="sm"
              onClick={() => applyPreset(preset)}
              className="text-xs"
            >
              {preset.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Weight className="h-5 w-5 text-primary" />
            <Label htmlFor="total-weight" className="text-base">Peso Totale (g)</Label>
          </div>
          <div className="flex gap-4 items-center">
            <Slider
              id="total-weight-slider"
              min={0}
              max={500}
              step={10}
              value={[totalWeight]}
              onValueChange={(values) => onWeightChange(values[0])}
              className="flex-1"
            />
            <Input
              id="total-weight"
              type="number"
              min="0"
              value={totalWeight}
              onChange={(e) => onWeightChange(parseFloat(e.target.value) || 100)}
              className="w-20"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Beef className="h-5 w-5 text-amber-600" />
            <Label htmlFor="protein" className="text-base">Proteine (g)</Label>
          </div>
          <div className="flex gap-4 items-center">
            <Slider
              id="protein-slider"
              min={0}
              max={maxValues.protein}
              step={0.5}
              value={[target.protein]}
              onValueChange={(values) => handleChange("protein", values[0])}
              className="flex-1"
            />
            <Input
              id="protein"
              type="number"
              min="0"
              step="0.1"
              value={target.protein}
              onChange={(e) => handleChange("protein", parseFloat(e.target.value) || 0)}
              className="w-20"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 flex items-center justify-center bg-yellow-200 rounded-full text-yellow-700">
              <span className="text-xs font-bold">G</span>
            </div>
            <Label htmlFor="fat" className="text-base">Grassi (g)</Label>
          </div>
          <div className="flex gap-4 items-center">
            <Slider
              id="fat-slider"
              min={0}
              max={maxValues.fat}
              step={0.5}
              value={[target.fat]}
              onValueChange={(values) => handleChange("fat", values[0])}
              className="flex-1"
            />
            <Input
              id="fat"
              type="number"
              min="0"
              step="0.1"
              value={target.fat}
              onChange={(e) => handleChange("fat", parseFloat(e.target.value) || 0)}
              className="w-20"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Wheat className="h-5 w-5 text-amber-400" />
            <Label htmlFor="carbs" className="text-base">Carboidrati (g)</Label>
          </div>
          <div className="flex gap-4 items-center">
            <Slider
              id="carbs-slider"
              min={0}
              max={maxValues.carbs}
              step={0.5}
              value={[target.carbs]}
              onValueChange={(values) => handleChange("carbs", values[0])}
              className="flex-1"
            />
            <Input
              id="carbs"
              type="number"
              min="0"
              step="0.1"
              value={target.carbs}
              onChange={(e) => handleChange("carbs", parseFloat(e.target.value) || 0)}
              className="w-20"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-500" />
            <Label htmlFor="fiber" className="text-base">Fibre (g)</Label>
          </div>
          <div className="flex gap-4 items-center">
            <Slider
              id="fiber-slider"
              min={0}
              max={maxValues.fiber}
              step={0.5}
              value={[target.fiber]}
              onValueChange={(values) => handleChange("fiber", values[0])}
              className="flex-1"
            />
            <Input
              id="fiber"
              type="number"
              min="0"
              step="0.1"
              value={target.fiber}
              onChange={(e) => handleChange("fiber", parseFloat(e.target.value) || 0)}
              className="w-20"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <Label htmlFor="calories" className="text-base">Calorie (kcal)</Label>
          </div>
          <div className="flex gap-4 items-center">
            <Slider
              id="calories-slider"
              min={0}
              max={maxValues.calories}
              step={10}
              value={[target.calories]}
              onValueChange={(values) => handleChange("calories", values[0])}
              className="flex-1"
            />
            <Input
              id="calories"
              type="number"
              min="0"
              step="1"
              value={target.calories}
              onChange={(e) => handleChange("calories", parseFloat(e.target.value) || 0)}
              className="w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionalTargetForm;
