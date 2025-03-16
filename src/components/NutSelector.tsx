
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Search, Nut, CheckCheck, X, ChevronDown, ChevronUp } from "lucide-react";
import { NutType } from "@/utils/nutData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  
  // Extract unique categories from nuts
  const categories = ["all", ...Array.from(new Set(nuts.map(nut => nut.category || "Altro")))].sort();
  
  // Group nuts by category
  const nutsByCategory = nuts.reduce((acc, nut) => {
    const category = nut.category || "Altro";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(nut);
    return acc;
  }, {} as Record<string, NutType[]>);
  
  // Filter nuts based on search term and category
  const filteredNuts = nuts.filter(nut => {
    const matchesSearch = nut.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || nut.category === categoryFilter || (categoryFilter === "Altro" && !nut.category);
    return matchesSearch && matchesCategory;
  });

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
  
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };
  
  const renderCategoryNuts = (category: string, nutsInCategory: NutType[]) => {
    const isExpanded = expandedCategories[category] !== false; // Default to expanded
    const filtered = nutsInCategory.filter(nut => 
      nut.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (filtered.length === 0) return null;
    
    return (
      <div key={category} className="mb-6">
        <div 
          className="flex items-center justify-between mb-2 cursor-pointer hover:bg-accent/50 rounded-md p-2"
          onClick={() => toggleCategory(category)}
        >
          <h3 className="font-medium text-lg flex items-center">
            <Nut className="h-5 w-5 mr-2 text-amber-600" />
            {category}
            <span className="ml-2 text-sm text-muted-foreground">({filtered.length})</span>
          </h3>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
        
        {isExpanded && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filtered.map((nut) => (
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
                    className="cursor-pointer flex-1 text-sm"
                  >
                    {nut.name}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
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
        <div className="hidden sm:block w-48">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "Tutte le Categorie" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
      
      <div className="block sm:hidden mb-4">
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category === "all" ? "Tutte le Categorie" : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {categoryFilter === "all" ? (
        // Render by category when no specific category is selected
        Object.entries(nutsByCategory)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([category, nutsInCategory]) => 
            renderCategoryNuts(category, nutsInCategory)
          )
      ) : (
        // Render filtered nuts when a specific category is selected
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
                  className="cursor-pointer flex-1 text-sm"
                >
                  {nut.name}
                </Label>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {filteredNuts.length === 0 && (
        <div className="text-center p-4 border border-dashed rounded-md">
          <p className="text-muted-foreground">Nessun risultato trovato</p>
        </div>
      )}
    </div>
  );
};

export default NutSelector;
