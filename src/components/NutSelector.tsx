
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Search, Nut, CheckCheck, X } from "lucide-react";
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
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredNuts = nuts.filter(nut => 
    nut.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleNut = (nut: NutType) => {
    if (selectedNuts.find((n) => n.id === nut.id)) {
      onChange(selectedNuts.filter((n) => n.id !== nut.id));
    } else {
      onChange([...selectedNuts, nut]);
    }
  };

  const handleSelectAll = () => {
    onChange([...nuts]);
  };

  const handleDeselectAll = () => {
    onChange([]);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cerca frutta secca..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSelectAll}
            className="flex items-center gap-1 text-sm text-primary hover:underline"
            type="button"
          >
            <CheckCheck className="h-4 w-4" />
            <span>Seleziona Tutto</span>
          </button>
          <button
            onClick={handleDeselectAll}
            className="flex items-center gap-1 text-sm text-destructive hover:underline"
            type="button"
          >
            <X className="h-4 w-4" />
            <span>Deseleziona Tutto</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filteredNuts.map((nut) => (
          <div 
            key={nut.id} 
            className={`flex items-center space-x-2 p-3 rounded-lg border ${
              selectedNuts.find((n) => n.id === nut.id)
                ? "border-primary bg-primary/10"
                : "border-border"
            } cursor-pointer hover:bg-accent transition-colors`}
            onClick={() => handleToggleNut(nut)}
          >
            <Checkbox
              id={`nut-${nut.id}`}
              checked={selectedNuts.some((n) => n.id === nut.id)}
              onCheckedChange={() => handleToggleNut(nut)}
            />
            <div className="flex items-center gap-2">
              <Nut className="h-4 w-4 text-amber-600" />
              <Label
                htmlFor={`nut-${nut.id}`}
                className="cursor-pointer flex-1"
              >
                {nut.name}
              </Label>
            </div>
          </div>
        ))}
      </div>
      
      {filteredNuts.length === 0 && (
        <div className="text-center p-4 border border-dashed rounded-md">
          <p className="text-muted-foreground">Nessun risultato trovato</p>
        </div>
      )}
    </div>
  );
};

export default NutSelector;
