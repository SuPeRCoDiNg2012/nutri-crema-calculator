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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { findBestNuts } from "@/utils/calculator";

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
  const [calculationMode, setCalculationMode] = useState<"manual" | "auto">("manual");
  
  const handleCalculate = () => {
    try {
      if (calculationMode === "auto") {
        const bestNuts = findBestNuts(nuts, nutritionalTarget, 5);
        setSelectedNuts(bestNuts);
      }

      if (selectedNuts.length === 0) {
        toast({
          title: "Nessuna frutta secca selezionata",
          description: "Seleziona almeno un tipo di frutta secca per la tua miscela.",
          variant: "destructive",
        });
        return;
      }

      const result = calculateNutMix(selectedNuts, nutritionalTarget, totalWeight);
      setCalculationResult(result);
      
      toast({
        title: "Calcolo completato",
        description: "La tua miscela ottimale di frutta secca è stata calcolata.",
      });
    } catch (error) {
      toast({
        title: "Errore di calcolo",
        description: error instanceof Error ? error.message : "Si è verificato un errore imprevisto",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Calcolatore NutriCrema</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Calcola la miscela perfetta di frutta secca per ottenere il profilo nutrizionale desiderato per le tue creme spalmabili fatte in casa.
        </p>
      </header>

      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">1. Modalità di Selezione</h2>
          <RadioGroup
            value={calculationMode}
            onValueChange={(value) => setCalculationMode(value as "manual" | "auto")}
            className="flex flex-col space-y-2 mb-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="manual" id="manual" />
              <label htmlFor="manual" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Selezione Manuale
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="auto" id="auto" />
              <label htmlFor="auto" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Selezione Automatica
              </label>
            </div>
          </RadioGroup>

          {calculationMode === "manual" && (
            <>
              <p className="text-muted-foreground mb-4">
                Scegli la frutta secca che vuoi includere nella tua miscela.
              </p>
              <NutSelector
                nuts={nuts}
                selectedNuts={selectedNuts}
                onChange={setSelectedNuts}
              />
            </>
          )}
          {calculationMode === "auto" && (
            <p className="text-muted-foreground">
              Il sistema selezionerà automaticamente le 5 migliori opzioni in base ai tuoi obiettivi nutrizionali.
            </p>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">2. Imposta Obiettivi Nutrizionali</h2>
          <p className="text-muted-foreground mb-4">
            Inserisci i valori nutrizionali desiderati per la miscela finale.
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
            Calcola Miscela Ottimale
          </Button>
        </div>

        {calculationResult ? (
          <ResultsDisplay result={calculationResult} />
        ) : (
          <div className="text-center p-8 border border-dashed rounded-lg bg-muted/40">
            <NutOff className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-muted-foreground">
              I risultati del calcolo appariranno qui
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
