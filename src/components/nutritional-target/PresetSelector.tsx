
import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NutritionalTarget } from "@/utils/calculator";
import { presetCategories, getAllPresetProfiles } from "@/utils/presetProfiles";

interface PresetSelectorProps {
  onChange: (target: NutritionalTarget) => void;
}

const PresetSelector: React.FC<PresetSelectorProps> = ({ onChange }) => {
  // Flatten for buttons display
  const presetProfiles = getAllPresetProfiles();

  const applyPreset = (preset: { name: string; values: NutritionalTarget }) => {
    onChange(preset.values);
  };

  return (
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
  );
};

export default PresetSelector;
