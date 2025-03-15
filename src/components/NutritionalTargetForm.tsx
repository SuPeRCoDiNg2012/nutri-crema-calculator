
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="space-y-2">
        <Label htmlFor="total-weight">Total Weight (g)</Label>
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
        <Label htmlFor="protein">Protein (g)</Label>
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
        <Label htmlFor="fat">Fat (g)</Label>
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
        <Label htmlFor="carbs">Carbs (g)</Label>
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
        <Label htmlFor="fiber">Fiber (g)</Label>
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
        <Label htmlFor="calories">Calories (kcal)</Label>
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
  );
};

export default NutritionalTargetForm;
