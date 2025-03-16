
import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Leaf, Weight, Flame, Beef, Wheat, Apple } from "lucide-react";
import { NutritionalTarget } from "@/utils/calculator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

  const presetCategories = {
    "Stili Dietetici": [
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
      },
      {
        name: "Bilanciato",
        values: { protein: 25, fat: 45, carbs: 25, fiber: 15, calories: 550 }
      },
      {
        name: "Alta Fibra",
        values: { protein: 20, fat: 40, carbs: 25, fiber: 25, calories: 500 }
      },
      {
        name: "Energia",
        values: { protein: 15, fat: 55, carbs: 30, fiber: 8, calories: 650 }
      },
      {
        name: "Paleo",
        values: { protein: 28, fat: 60, carbs: 10, fiber: 8, calories: 680 }
      },
      {
        name: "Mediterraneo",
        values: { protein: 18, fat: 45, carbs: 35, fiber: 14, calories: 610 }
      },
      {
        name: "Basso Indice Glicemico",
        values: { protein: 20, fat: 50, carbs: 15, fiber: 15, calories: 580 }
      },
      {
        name: "Dieta Proteica",
        values: { protein: 40, fat: 35, carbs: 15, fiber: 10, calories: 530 }
      },
      {
        name: "Anti-Infiammatorio",
        values: { protein: 20, fat: 50, carbs: 20, fiber: 18, calories: 600 }
      },
      {
        name: "Diabetico",
        values: { protein: 25, fat: 45, carbs: 15, fiber: 15, calories: 550 }
      },
      {
        name: "Dieta Zona",
        values: { protein: 30, fat: 30, carbs: 40, fiber: 12, calories: 550 }
      },
      {
        name: "Vegano",
        values: { protein: 22, fat: 40, carbs: 30, fiber: 20, calories: 540 }
      },
      {
        name: "Vegetariano",
        values: { protein: 20, fat: 45, carbs: 28, fiber: 18, calories: 560 }
      },
      {
        name: "Pescetariano",
        values: { protein: 25, fat: 42, carbs: 25, fiber: 15, calories: 570 }
      },
      {
        name: "Crudista",
        values: { protein: 15, fat: 50, carbs: 30, fiber: 25, calories: 580 }
      },
      {
        name: "FODMAP",
        values: { protein: 22, fat: 45, carbs: 25, fiber: 12, calories: 565 }
      },
      {
        name: "Autoimmune",
        values: { protein: 25, fat: 48, carbs: 18, fiber: 15, calories: 575 }
      },
      {
        name: "Carnivoro",
        values: { protein: 35, fat: 65, carbs: 0, fiber: 0, calories: 700 }
      }
    ],
    "Sport e Fitness": [
      {
        name: "Sport",
        values: { protein: 35, fat: 35, carbs: 25, fiber: 12, calories: 580 }
      },
      {
        name: "Pre-Workout",
        values: { protein: 25, fat: 30, carbs: 40, fiber: 8, calories: 530 }
      },
      {
        name: "Post-Workout",
        values: { protein: 35, fat: 25, carbs: 35, fiber: 10, calories: 510 }
      },
      {
        name: "Vegano Sportivo",
        values: { protein: 25, fat: 35, carbs: 30, fiber: 20, calories: 530 }
      },
      {
        name: "Sportivo Resistenza",
        values: { protein: 22, fat: 30, carbs: 45, fiber: 12, calories: 540 }
      },
      {
        name: "Sportivo Forza",
        values: { protein: 35, fat: 40, carbs: 20, fiber: 10, calories: 580 }
      },
      {
        name: "Sportivo Vegano",
        values: { protein: 28, fat: 40, carbs: 25, fiber: 22, calories: 560 }
      },
      {
        name: "Pre-Gara",
        values: { protein: 20, fat: 30, carbs: 45, fiber: 5, calories: 530 }
      },
      {
        name: "Recovery",
        values: { protein: 30, fat: 25, carbs: 40, fiber: 10, calories: 505 }
      },
      {
        name: "Crossfit",
        values: { protein: 30, fat: 40, carbs: 25, fiber: 10, calories: 575 }
      },
      {
        name: "Ciclismo",
        values: { protein: 20, fat: 35, carbs: 40, fiber: 12, calories: 545 }
      },
      {
        name: "Running",
        values: { protein: 22, fat: 32, carbs: 42, fiber: 14, calories: 535 }
      },
      {
        name: "Nuoto",
        values: { protein: 25, fat: 35, carbs: 38, fiber: 10, calories: 550 }
      },
      {
        name: "Climbing",
        values: { protein: 27, fat: 40, carbs: 30, fiber: 12, calories: 570 }
      },
      {
        name: "Triathlon",
        values: { protein: 25, fat: 32, carbs: 40, fiber: 12, calories: 540 }
      }
    ],
    "Momenti della Giornata": [
      {
        name: "Colazione Proteica",
        values: { protein: 28, fat: 42, carbs: 18, fiber: 12, calories: 560 }
      },
      {
        name: "Merenda Energetica",
        values: { protein: 15, fat: 50, carbs: 30, fiber: 5, calories: 620 }
      },
      {
        name: "Snack Leggero",
        values: { protein: 20, fat: 35, carbs: 20, fiber: 15, calories: 450 }
      },
      {
        name: "Spuntino Pre-Notte",
        values: { protein: 20, fat: 45, carbs: 20, fiber: 10, calories: 550 }
      },
      {
        name: "Prima Colazione",
        values: { protein: 20, fat: 40, carbs: 35, fiber: 12, calories: 580 }
      },
      {
        name: "Pranzo Leggero",
        values: { protein: 25, fat: 35, carbs: 30, fiber: 15, calories: 520 }
      },
      {
        name: "Cena Nutriente",
        values: { protein: 30, fat: 45, carbs: 20, fiber: 12, calories: 580 }
      },
      {
        name: "Spuntino Pomeridiano",
        values: { protein: 18, fat: 40, carbs: 25, fiber: 10, calories: 520 }
      },
      {
        name: "Colazione Dolce",
        values: { protein: 15, fat: 38, carbs: 40, fiber: 8, calories: 550 }
      },
      {
        name: "Colazione Salata",
        values: { protein: 25, fat: 45, carbs: 20, fiber: 10, calories: 570 }
      },
      {
        name: "Pre-Sonno",
        values: { protein: 25, fat: 40, carbs: 15, fiber: 8, calories: 510 }
      },
      {
        name: "Merenda Bambini",
        values: { protein: 15, fat: 35, carbs: 45, fiber: 10, calories: 540 }
      }
    ],
    "Controllo Peso": [
      {
        name: "Alte Calorie",
        values: { protein: 25, fat: 60, carbs: 25, fiber: 10, calories: 730 }
      },
      {
        name: "Basse Calorie",
        values: { protein: 25, fat: 30, carbs: 20, fiber: 15, calories: 450 }
      },
      {
        name: "Bilanciato Leggero",
        values: { protein: 22, fat: 38, carbs: 28, fiber: 12, calories: 530 }
      },
      {
        name: "Controllo Peso",
        values: { protein: 30, fat: 35, carbs: 15, fiber: 20, calories: 480 }
      },
      {
        name: "Fase Bulking",
        values: { protein: 30, fat: 45, carbs: 25, fiber: 8, calories: 620 }
      },
      {
        name: "Fase Cutting",
        values: { protein: 35, fat: 30, carbs: 15, fiber: 15, calories: 460 }
      },
      {
        name: "Definizione",
        values: { protein: 35, fat: 38, carbs: 12, fiber: 12, calories: 520 }
      },
      {
        name: "Aumento Massa",
        values: { protein: 30, fat: 48, carbs: 22, fiber: 8, calories: 640 }
      },
      {
        name: "Dimagrimento",
        values: { protein: 35, fat: 32, carbs: 15, fiber: 18, calories: 470 }
      },
      {
        name: "Mantenimento",
        values: { protein: 25, fat: 42, carbs: 25, fiber: 12, calories: 565 }
      },
      {
        name: "Dieta Ipocalorica",
        values: { protein: 30, fat: 28, carbs: 18, fiber: 20, calories: 430 }
      },
      {
        name: "Dieta Ipercalorica",
        values: { protein: 28, fat: 55, carbs: 25, fiber: 8, calories: 695 }
      }
    ],
    "Fasi della Vita": [
      {
        name: "Bambini",
        values: { protein: 18, fat: 40, carbs: 35, fiber: 12, calories: 570 }
      },
      {
        name: "Anziani",
        values: { protein: 25, fat: 35, carbs: 30, fiber: 20, calories: 530 }
      },
      {
        name: "Adolescenti",
        values: { protein: 25, fat: 40, carbs: 30, fiber: 12, calories: 580 }
      },
      {
        name: "Gravidanza",
        values: { protein: 25, fat: 40, carbs: 25, fiber: 20, calories: 550 }
      },
      {
        name: "Allattamento",
        values: { protein: 28, fat: 45, carbs: 25, fiber: 18, calories: 610 }
      },
      {
        name: "Menopausa",
        values: { protein: 25, fat: 38, carbs: 22, fiber: 20, calories: 540 }
      },
      {
        name: "Crescita",
        values: { protein: 22, fat: 38, carbs: 35, fiber: 15, calories: 585 }
      },
      {
        name: "Over 50",
        values: { protein: 25, fat: 40, carbs: 25, fiber: 18, calories: 545 }
      },
      {
        name: "Sportivi Junior",
        values: { protein: 25, fat: 35, carbs: 35, fiber: 12, calories: 550 }
      },
      {
        name: "Terza Età",
        values: { protein: 25, fat: 38, carbs: 28, fiber: 22, calories: 540 }
      }
    ],
    "Caratteristiche Sensoriali": [
      {
        name: "Dolce Senza Zucchero",
        values: { protein: 15, fat: 55, carbs: 15, fiber: 10, calories: 600 }
      },
      {
        name: "Salato",
        values: { protein: 25, fat: 60, carbs: 10, fiber: 5, calories: 670 }
      },
      {
        name: "Cioccolato Lover",
        values: { protein: 12, fat: 65, carbs: 20, fiber: 12, calories: 700 }
      },
      {
        name: "Croccante",
        values: { protein: 20, fat: 50, carbs: 25, fiber: 5, calories: 620 }
      },
      {
        name: "Cremoso",
        values: { protein: 15, fat: 70, carbs: 10, fiber: 5, calories: 720 }
      },
      {
        name: "Dolce Naturale",
        values: { protein: 15, fat: 45, carbs: 35, fiber: 15, calories: 595 }
      },
      {
        name: "Dessert Protein",
        values: { protein: 25, fat: 45, carbs: 25, fiber: 8, calories: 590 }
      },
      {
        name: "Spalmabile Golosa",
        values: { protein: 18, fat: 60, carbs: 20, fiber: 8, calories: 680 }
      },
      {
        name: "Nocciola Intenso",
        values: { protein: 16, fat: 65, carbs: 15, fiber: 8, calories: 695 }
      },
      {
        name: "Cacao Forte",
        values: { protein: 15, fat: 60, carbs: 18, fiber: 14, calories: 660 }
      },
      {
        name: "Vaniglia Dolce",
        values: { protein: 15, fat: 55, carbs: 25, fiber: 8, calories: 645 }
      },
      {
        name: "Caramello",
        values: { protein: 12, fat: 58, carbs: 28, fiber: 6, calories: 670 }
      },
      {
        name: "Cocco Tropicale",
        values: { protein: 14, fat: 62, carbs: 20, fiber: 10, calories: 685 }
      },
      {
        name: "Pistacchio",
        values: { protein: 18, fat: 60, carbs: 15, fiber: 12, calories: 665 }
      },
      {
        name: "Fruttato",
        values: { protein: 15, fat: 45, carbs: 32, fiber: 14, calories: 585 }
      }
    ],
    "Salute e Benessere": [
      {
        name: "Carbs Lover",
        values: { protein: 15, fat: 30, carbs: 45, fiber: 10, calories: 510 }
      },
      {
        name: "Fibre Lover",
        values: { protein: 18, fat: 40, carbs: 22, fiber: 28, calories: 510 }
      },
      {
        name: "Immune Booster",
        values: { protein: 22, fat: 42, carbs: 25, fiber: 18, calories: 560 }
      },
      {
        name: "Gluten Free",
        values: { protein: 18, fat: 55, carbs: 22, fiber: 15, calories: 650 }
      },
      {
        name: "Detox",
        values: { protein: 22, fat: 38, carbs: 25, fiber: 25, calories: 520 }
      },
      {
        name: "Alta Energia",
        values: { protein: 20, fat: 55, carbs: 25, fiber: 8, calories: 670 }
      },
      {
        name: "Digestione Facile",
        values: { protein: 20, fat: 42, carbs: 22, fiber: 22, calories: 540 }
      },
      {
        name: "Antistress",
        values: { protein: 18, fat: 45, carbs: 28, fiber: 15, calories: 575 }
      },
      {
        name: "Anti-age",
        values: { protein: 22, fat: 45, carbs: 20, fiber: 20, calories: 555 }
      },
      {
        name: "Colesterolo OK",
        values: { protein: 20, fat: 40, carbs: 25, fiber: 22, calories: 530 }
      },
      {
        name: "Digestione Lenta",
        values: { protein: 22, fat: 45, carbs: 15, fiber: 25, calories: 535 }
      },
      {
        name: "Pelle e Capelli",
        values: { protein: 25, fat: 48, carbs: 18, fiber: 15, calories: 585 }
      },
      {
        name: "Intestino Sano",
        values: { protein: 20, fat: 40, carbs: 20, fiber: 28, calories: 520 }
      },
      {
        name: "Antiossidante",
        values: { protein: 18, fat: 45, carbs: 25, fiber: 20, calories: 560 }
      },
      {
        name: "Memoria",
        values: { protein: 20, fat: 52, carbs: 18, fiber: 15, calories: 610 }
      }
    ],
    "Nuovi Profili": [
      {
        name: "Super Proteico",
        values: { protein: 42, fat: 40, carbs: 10, fiber: 8, calories: 570 }
      },
      {
        name: "Zero Carb",
        values: { protein: 35, fat: 65, carbs: 0, fiber: 0, calories: 710 }
      },
      {
        name: "Attività Intensa",
        values: { protein: 30, fat: 45, carbs: 20, fiber: 10, calories: 595 }
      },
      {
        name: "Chetogenico Estremo",
        values: { protein: 15, fat: 80, carbs: 2, fiber: 3, calories: 770 }
      },
      {
        name: "Super Cremoso",
        values: { protein: 10, fat: 75, carbs: 15, fiber: 4, calories: 765 }
      },
      {
        name: "Atleta Elite",
        values: { protein: 35, fat: 38, carbs: 22, fiber: 8, calories: 565 }
      },
      {
        name: "Recupero Muscolare",
        values: { protein: 38, fat: 35, carbs: 25, fiber: 7, calories: 565 }
      },
      {
        name: "Breakfast Ricco",
        values: { protein: 25, fat: 50, carbs: 20, fiber: 10, calories: 630 }
      },
      {
        name: "Vegan Power",
        values: { protein: 28, fat: 45, carbs: 15, fiber: 20, calories: 565 }
      },
      {
        name: "Dukan Phase",
        values: { protein: 45, fat: 35, carbs: 5, fiber: 12, calories: 510 }
      },
      {
        name: "Omega-3 Plus",
        values: { protein: 20, fat: 60, carbs: 10, fiber: 12, calories: 650 }
      },
      {
        name: "Ultradolce",
        values: { protein: 10, fat: 50, carbs: 38, fiber: 5, calories: 650 }
      },
      {
        name: "Nutty Delight",
        values: { protein: 18, fat: 65, carbs: 12, fiber: 10, calories: 695 }
      },
      {
        name: "Cioccoloso",
        values: { protein: 15, fat: 60, carbs: 22, fiber: 12, calories: 680 }
      },
      {
        name: "Super Satiante",
        values: { protein: 25, fat: 50, carbs: 10, fiber: 18, calories: 590 }
      }
    ]
  };

  // Flatten for buttons display
  const presetProfiles = Object.values(presetCategories).flat();

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
        <p className="text-sm font-medium">Seleziona un profilo predefinito:</p>
        <Select
          onValueChange={(value) => {
            const selectedProfile = presetProfiles.find(profile => profile.name === value);
            if (selectedProfile) {
              applyPreset(selectedProfile);
            }
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Scegli un profilo nutrizionale" />
          </SelectTrigger>
          <SelectContent className="max-h-80">
            {Object.entries(presetCategories).map(([category, profiles]) => (
              <React.Fragment key={category}>
                <SelectItem value={category} disabled className="font-bold text-primary">
                  {category}
                </SelectItem>
                {profiles.map((profile) => (
                  <SelectItem key={profile.name} value={profile.name} className="pl-6">
                    {profile.name}
                  </SelectItem>
                ))}
              </React.Fragment>
            ))}
          </SelectContent>
        </Select>
        
        <p className="text-sm font-medium mt-4">Profili Popolari:</p>
        <ScrollArea className="h-32 w-full rounded-md border">
          <div className="flex flex-wrap gap-2 p-2">
            {presetProfiles.map((preset) => (
              <Button
                key={preset.name}
                variant="outline"
                size="sm"
                onClick={() => applyPreset(preset)}
                className="text-xs whitespace-nowrap"
              >
                {preset.name}
              </Button>
            ))}
          </div>
        </ScrollArea>
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
