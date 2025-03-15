
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { NutType } from "@/utils/nutData";

interface NutSelectorProps {
  nuts: NutType[];
  selectedNuts: NutType[];
  onChange: (nuts: NutType[]) => void;
}

const NutSelector: React.FC<NutSelectorProps> = ({
  nuts,
  selectedNuts,
  onChange,
}) => {
  const handleToggleNut = (nut: NutType) => {
    if (selectedNuts.find((n) => n.id === nut.id)) {
      onChange(selectedNuts.filter((n) => n.id !== nut.id));
    } else {
      onChange([...selectedNuts, nut]);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {nuts.map((nut) => (
        <div 
          key={nut.id} 
          className={`flex items-center space-x-2 p-3 rounded-lg border ${
            selectedNuts.find((n) => n.id === nut.id)
              ? "border-primary bg-primary/10"
              : "border-border"
          }`}
        >
          <Checkbox
            id={`nut-${nut.id}`}
            checked={selectedNuts.some((n) => n.id === nut.id)}
            onCheckedChange={() => handleToggleNut(nut)}
          />
          <Label
            htmlFor={`nut-${nut.id}`}
            className="cursor-pointer flex-1"
          >
            {nut.name}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default NutSelector;
