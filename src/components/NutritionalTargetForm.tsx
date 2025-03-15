
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
  const handleChange = (field: keyof NutritionalTarget, value: string) => {
    const numValue = parseFloat(value) || 0;
    onChange({
      ...target,
      [field]: numValue,
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

      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="total-weight">Peso Totale (g)</Label>
          <Input
            id="total-weight"
            type="number"
            min="0"
            value={totalWeight}
            onChange={(e) => onWeightChange(parseFloat(e.target.value) || 100)}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="protein">Proteine (g)</Label>
          <Input
            id="protein"
            type="number"
            min="0"
            step="0.1"
            value={target.protein}
            onChange={(e) => handleChange("protein", e.target.value)}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fat">Grassi (g)</Label>
          <Input
            id="fat"
            type="number"
            min="0"
            step="0.1"
            value={target.fat}
            onChange={(e) => handleChange("fat", e.target.value)}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="carbs">Carboidrati (g)</Label>
          <Input
            id="carbs"
            type="number"
            min="0"
            step="0.1"
            value={target.carbs}
            onChange={(e) => handleChange("carbs", e.target.value)}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fiber">Fibre (g)</Label>
          <Input
            id="fiber"
            type="number"
            min="0"
            step="0.1"
            value={target.fiber}
            onChange={(e) => handleChange("fiber", e.target.value)}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="calories">Calorie (kcal)</Label>
          <Input
            id="calories"
            type="number"
            min="0"
            step="1"
            value={target.calories}
            onChange={(e) => handleChange("calories", e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NutritionalTargetForm;
