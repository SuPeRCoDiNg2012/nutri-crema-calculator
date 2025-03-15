
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CalculationResult } from "@/utils/calculator";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface ResultsDisplayProps {
  result: CalculationResult | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  if (!result) return null;

  // Arrotonda a 1 decimale
  const formatNumber = (num: number) => Math.round(num * 10) / 10;
  
  // Prepara i dati per il grafico a torta
  const pieData = result.mix.map((item) => ({
    name: item.nut.name,
    value: item.percentage,
  }));
  
  // Colori per il grafico a torta
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FD0', '#F87171', '#FB923C', '#FBBF24'];

  // Funzione per copiare la ricetta negli appunti
  const copyToClipboard = () => {
    const text = `Ricetta NutriCrema:\n\n` +
      `Peso totale: ${result.totalWeight}g\n\n` +
      result.mix.map(item => 
        `${item.nut.name}: ${formatNumber(item.percentage)}% (${formatNumber((item.percentage * result.totalWeight) / 100)}g)`
      ).join('\n') + 
      `\n\nValori nutrizionali per ${result.totalWeight}g:\n` +
      `Proteine: ${formatNumber(result.actualNutrition.protein)}g\n` +
      `Grassi: ${formatNumber(result.actualNutrition.fat)}g\n` +
      `Carboidrati: ${formatNumber(result.actualNutrition.carbs)}g\n` +
      `Fibre: ${formatNumber(result.actualNutrition.fiber)}g\n` +
      `Calorie: ${formatNumber(result.actualNutrition.calories)} kcal`;
    
    navigator.clipboard.writeText(text);
    alert("Ricetta copiata negli appunti!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Composizione Ottimale della Miscela</CardTitle>
          <CardDescription>
            In base ai tuoi obiettivi nutrizionali, ecco la miscela ottimale
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="md:flex gap-6">
            <div className="md:w-1/2 space-y-4">
              {result.mix.map((item) => (
                <div key={item.nut.id} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.nut.name}</span>
                    <span className="text-muted-foreground">
                      {formatNumber(item.percentage)}% (
                      {formatNumber((item.percentage * result.totalWeight) / 100)}
                      g)
                    </span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
            <div className="md:w-1/2 h-64 mt-4 md:mt-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${formatNumber(Number(value))}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <Button className="w-full" onClick={copyToClipboard}>
            Copia Ricetta negli Appunti
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Composizione Nutrizionale</CardTitle>
            <CardDescription>
              Ciò che otterrai da questa miscela
            </CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt>Proteine:</dt>
                <dd>{formatNumber(result.actualNutrition.protein)}g</dd>
              </div>
              <div className="flex justify-between">
                <dt>Grassi:</dt>
                <dd>{formatNumber(result.actualNutrition.fat)}g</dd>
              </div>
              <div className="flex justify-between">
                <dt>Carboidrati:</dt>
                <dd>{formatNumber(result.actualNutrition.carbs)}g</dd>
              </div>
              <div className="flex justify-between">
                <dt>Fibre:</dt>
                <dd>{formatNumber(result.actualNutrition.fiber)}g</dd>
              </div>
              <div className="flex justify-between">
                <dt>Calorie:</dt>
                <dd>{formatNumber(result.actualNutrition.calories)} kcal</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Differenza dall'Obiettivo</CardTitle>
            <CardDescription>
              Quanto questa miscela è vicina ai tuoi obiettivi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt>Proteine:</dt>
                <dd
                  className={
                    Math.abs(result.targetDifference.protein) < 1
                      ? "text-green-500"
                      : "text-yellow-500"
                  }
                >
                  {result.targetDifference.protein > 0 ? "+" : ""}
                  {formatNumber(result.targetDifference.protein)}g
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>Grassi:</dt>
                <dd
                  className={
                    Math.abs(result.targetDifference.fat) < 1
                      ? "text-green-500"
                      : "text-yellow-500"
                  }
                >
                  {result.targetDifference.fat > 0 ? "+" : ""}
                  {formatNumber(result.targetDifference.fat)}g
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>Carboidrati:</dt>
                <dd
                  className={
                    Math.abs(result.targetDifference.carbs) < 1
                      ? "text-green-500"
                      : "text-yellow-500"
                  }
                >
                  {result.targetDifference.carbs > 0 ? "+" : ""}
                  {formatNumber(result.targetDifference.carbs)}g
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>Fibre:</dt>
                <dd
                  className={
                    Math.abs(result.targetDifference.fiber) < 1
                      ? "text-green-500"
                      : "text-yellow-500"
                  }
                >
                  {result.targetDifference.fiber > 0 ? "+" : ""}
                  {formatNumber(result.targetDifference.fiber)}g
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>Calorie:</dt>
                <dd
                  className={
                    Math.abs(result.targetDifference.calories) < 10
                      ? "text-green-500"
                      : "text-yellow-500"
                  }
                >
                  {result.targetDifference.calories > 0 ? "+" : ""}
                  {formatNumber(result.targetDifference.calories)} kcal
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsDisplay;
