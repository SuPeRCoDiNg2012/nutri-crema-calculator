
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalculationResult } from "@/utils/calculator";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { PieChartIcon, BarChartIcon, ActivityIcon, ClipboardCopyIcon, CheckIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ResultsDisplayProps {
  result: CalculationResult | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [chartType, setChartType] = useState<"pie" | "bar" | "radar">("pie");
  
  if (!result) return null;

  // Arrotonda a 1 decimale
  const formatNumber = (num: number) => Math.round(num * 10) / 10;
  
  // Prepara i dati per il grafico a torta
  const pieData = result.mix.map((item) => ({
    name: item.nut.name,
    value: item.percentage,
  }));
  
  // Prepara i dati per il grafico a barre
  const barData = result.mix.map((item) => ({
    name: item.nut.name,
    percentage: item.percentage,
    weight: formatNumber((item.percentage * result.totalWeight) / 100),
  }));

  // Prepara i dati per il grafico a radar
  const radarData = [
    {
      subject: "Proteine",
      A: formatNumber(result.actualNutrition.protein),
      B: formatNumber(result.actualNutrition.protein - result.targetDifference.protein),
      fullMark: Math.max(formatNumber(result.actualNutrition.protein), formatNumber(result.actualNutrition.protein - result.targetDifference.protein)) * 1.2,
    },
    {
      subject: "Grassi",
      A: formatNumber(result.actualNutrition.fat),
      B: formatNumber(result.actualNutrition.fat - result.targetDifference.fat),
      fullMark: Math.max(formatNumber(result.actualNutrition.fat), formatNumber(result.actualNutrition.fat - result.targetDifference.fat)) * 1.2,
    },
    {
      subject: "Carboidrati",
      A: formatNumber(result.actualNutrition.carbs),
      B: formatNumber(result.actualNutrition.carbs - result.targetDifference.carbs),
      fullMark: Math.max(formatNumber(result.actualNutrition.carbs), formatNumber(result.actualNutrition.carbs - result.targetDifference.carbs)) * 1.2,
    },
    {
      subject: "Fibre",
      A: formatNumber(result.actualNutrition.fiber),
      B: formatNumber(result.actualNutrition.fiber - result.targetDifference.fiber),
      fullMark: Math.max(formatNumber(result.actualNutrition.fiber), formatNumber(result.actualNutrition.fiber - result.targetDifference.fiber)) * 1.2,
    },
    {
      subject: "Calorie",
      A: formatNumber(result.actualNutrition.calories / 10),
      B: formatNumber((result.actualNutrition.calories - result.targetDifference.calories) / 10),
      fullMark: Math.max(formatNumber(result.actualNutrition.calories / 10), formatNumber((result.actualNutrition.calories - result.targetDifference.calories) / 10)) * 1.2,
    },
  ];
  
  // Colori per i grafici
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
    setCopied(true);
    toast({
      title: "Ricetta copiata!",
      description: "La ricetta è stata copiata negli appunti."
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const renderMixChart = () => {
    switch (chartType) {
      case "pie":
        return (
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
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${formatNumber(Number(value))}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={barData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 60,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" label={{ value: '%', angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" label={{ value: 'g', angle: -90, position: 'insideRight' }} />
              <Tooltip 
                formatter={(value, name) => {
                  return [`${formatNumber(Number(value))}${name === 'percentage' ? '%' : 'g'}`, name === 'percentage' ? 'Percentuale' : 'Peso'];
                }}
              />
              <Legend />
              <Bar yAxisId="left" dataKey="percentage" name="Percentuale" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="weight" name="Peso (g)" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "radar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Tooltip formatter={(value) => `${formatNumber(Number(value))}${value === radarData[4].A || value === radarData[4].B ? ' kcal/10' : 'g'}`} />
              <Radar name="Valori Attuali" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Valori Target" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
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
          <Tabs defaultValue="mix" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mix">Composizione</TabsTrigger>
              <TabsTrigger value="charts">Visualizzazione</TabsTrigger>
            </TabsList>
            <TabsContent value="mix" className="mt-4">
              <div className="space-y-4">
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
                    <Progress 
                      value={item.percentage} 
                      className="h-2"
                      style={{
                        "--progress-background": COLORS[result.mix.indexOf(item) % COLORS.length]
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="charts" className="mt-4">
              <div className="flex justify-center mb-4 gap-2">
                <Button 
                  variant={chartType === "pie" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setChartType("pie")}
                >
                  <PieChartIcon className="h-4 w-4 mr-1" />
                  Torta
                </Button>
                <Button 
                  variant={chartType === "bar" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setChartType("bar")}
                >
                  <BarChartIcon className="h-4 w-4 mr-1" />
                  Barre
                </Button>
                <Button 
                  variant={chartType === "radar" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setChartType("radar")}
                >
                  <ActivityIcon className="h-4 w-4 mr-1" />
                  Radar
                </Button>
              </div>
              <div className="h-80">
                {renderMixChart()}
              </div>
            </TabsContent>
          </Tabs>
          
          <Button className="w-full" onClick={copyToClipboard}>
            {copied ? (
              <>
                <CheckIcon className="h-4 w-4 mr-2" />
                Copiato!
              </>
            ) : (
              <>
                <ClipboardCopyIcon className="h-4 w-4 mr-2" />
                Copia Ricetta negli Appunti
              </>
            )}
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
            <ChartContainer 
              className="h-48 mb-4"
              config={{
                protein: { color: "#8884d8" },
                fat: { color: "#82ca9d" },
                carbs: { color: "#ffc658" },
                fiber: { color: "#ff8042" }
              }}
            >
              <BarChart
                data={[
                  { name: "Proteine", value: formatNumber(result.actualNutrition.protein), color: "protein" },
                  { name: "Grassi", value: formatNumber(result.actualNutrition.fat), color: "fat" },
                  { name: "Carboidrati", value: formatNumber(result.actualNutrition.carbs), color: "carbs" },
                  { name: "Fibre", value: formatNumber(result.actualNutrition.fiber), color: "fiber" },
                ]}
                margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="font-medium">{payload[0].payload.name}</div>
                            <div className="font-medium">{payload[0].value}g</div>
                          </div>
                        </div>
                      )
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value">
                  {[
                    { name: "Proteine", value: formatNumber(result.actualNutrition.protein), color: "protein" },
                    { name: "Grassi", value: formatNumber(result.actualNutrition.fat), color: "fat" },
                    { name: "Carboidrati", value: formatNumber(result.actualNutrition.carbs), color: "carbs" },
                    { name: "Fibre", value: formatNumber(result.actualNutrition.fiber), color: "fiber" },
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`var(--color-${entry.color})`} />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
            
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
            <ChartContainer 
              className="h-48 mb-4"
              config={{
                positive: { color: "#82ca9d" },
                negative: { color: "#ff8042" },
              }}
            >
              <BarChart
                data={[
                  { 
                    name: "Proteine", 
                    value: formatNumber(Math.abs(result.targetDifference.protein)),
                    direction: result.targetDifference.protein > 0 ? "positive" : "negative",
                    sign: result.targetDifference.protein > 0 ? "+" : "-"
                  },
                  { 
                    name: "Grassi", 
                    value: formatNumber(Math.abs(result.targetDifference.fat)),
                    direction: result.targetDifference.fat > 0 ? "positive" : "negative",
                    sign: result.targetDifference.fat > 0 ? "+" : "-"
                  },
                  { 
                    name: "Carboidrati", 
                    value: formatNumber(Math.abs(result.targetDifference.carbs)),
                    direction: result.targetDifference.carbs > 0 ? "positive" : "negative",
                    sign: result.targetDifference.carbs > 0 ? "+" : "-"
                  },
                  { 
                    name: "Fibre", 
                    value: formatNumber(Math.abs(result.targetDifference.fiber)),
                    direction: result.targetDifference.fiber > 0 ? "positive" : "negative",
                    sign: result.targetDifference.fiber > 0 ? "+" : "-"
                  },
                ]}
                margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="font-medium">{payload[0].payload.name}</div>
                            <div className="font-medium">
                              {payload[0].payload.sign}{payload[0].value}g
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value">
                  {[
                    { 
                      name: "Proteine", 
                      value: formatNumber(Math.abs(result.targetDifference.protein)),
                      direction: result.targetDifference.protein > 0 ? "positive" : "negative",
                    },
                    { 
                      name: "Grassi", 
                      value: formatNumber(Math.abs(result.targetDifference.fat)),
                      direction: result.targetDifference.fat > 0 ? "positive" : "negative",
                    },
                    { 
                      name: "Carboidrati", 
                      value: formatNumber(Math.abs(result.targetDifference.carbs)),
                      direction: result.targetDifference.carbs > 0 ? "positive" : "negative",
                    },
                    { 
                      name: "Fibre", 
                      value: formatNumber(Math.abs(result.targetDifference.fiber)),
                      direction: result.targetDifference.fiber > 0 ? "positive" : "negative",
                    },
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`var(--color-${entry.direction})`} />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
            
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
