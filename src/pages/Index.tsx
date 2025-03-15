
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Leaf, NutOff } from "lucide-react";
import { nuts } from "@/utils/nutData";
import { calculateNutMix, CalculationResult, NutritionalTarget } from "@/utils/calculator";
import NutSelector from "@/components/NutSelector";
import NutritionalTargetForm from "@/components/NutritionalTargetForm";
import ResultsDisplay from "@/components/ResultsDisplay";

const Index = () => {
  const { toast } = useToast();
  const [selectedNuts, setSelectedNuts] = useState(nuts.slice(0, 3));
  const [totalWeight, setTotalWeight] = useState(100);
  const [nutritionalTarget, setNutritionalTarget] = useState<NutritionalTarget>({
    protein: 20,
    fat: 50,
    carbs: 20,
    fiber: 10,
    calories: 600,
  });
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    try {
      if (selectedNuts.length === 0) {
        toast({
          title: "No nuts selected",
          description: "Please select at least one type of nut for your mixture.",
          variant: "destructive",
        });
        return;
      }

      const result = calculateNutMix(selectedNuts, nutritionalTarget, totalWeight);
      setCalculationResult(result);
      
      toast({
        title: "Calculation complete",
        description: "Your optimal nut cream mixture has been calculated.",
      });
    } catch (error) {
      toast({
        title: "Calculation error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-6 px-4 md:px-6">
      <header className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Leaf className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">NutriCrema Calculator</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Calculate the perfect mixture of nuts to reach your desired nutritional profile for homemade nut butter and creams.
        </p>
      </header>

      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">1. Select Nuts</h2>
          <p className="text-muted-foreground mb-4">
            Choose the nuts you want to include in your mixture.
          </p>
          <NutSelector
            nuts={nuts}
            selectedNuts={selectedNuts}
            onChange={setSelectedNuts}
          />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">2. Set Nutritional Targets</h2>
          <p className="text-muted-foreground mb-4">
            Enter your desired nutritional values for the final mixture.
          </p>
          <NutritionalTargetForm
            target={nutritionalTarget}
            onChange={setNutritionalTarget}
            totalWeight={totalWeight}
            onWeightChange={setTotalWeight}
          />
        </Card>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleCalculate}
            className="bg-primary hover:bg-primary/90"
          >
            Calculate Optimal Mixture
          </Button>
        </div>

        {calculationResult ? (
          <ResultsDisplay result={calculationResult} />
        ) : (
          <div className="text-center p-8 border border-dashed rounded-lg bg-muted/40">
            <NutOff className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-muted-foreground">
              Your calculation results will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
