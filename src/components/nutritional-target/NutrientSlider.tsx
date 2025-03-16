
import React from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";

interface NutrientSliderProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max: number;
  step?: number;
  icon?: React.ReactNode;
}

const NutrientSlider: React.FC<NutrientSliderProps> = ({
  id,
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 0.5,
  icon
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <Label htmlFor={id} className="text-base">{label}</Label>
      </div>
      <div className="flex gap-4 items-center">
        <Slider
          id={`${id}-slider`}
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(values) => onChange(values[0])}
          className="flex-1"
        />
        <Input
          id={id}
          type="number"
          min={min}
          step={step === 0.5 ? "0.1" : "1"}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-20"
        />
      </div>
    </div>
  );
};

export default NutrientSlider;
