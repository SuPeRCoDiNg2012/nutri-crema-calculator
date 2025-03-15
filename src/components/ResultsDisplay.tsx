
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CalculationResult } from "@/utils/calculator";

interface ResultsDisplayProps {
  result: CalculationResult | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  if (!result) return null;

  // Round to 1 decimal place
  const formatNumber = (num: number) => Math.round(num * 10) / 10;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Optimal Nut Mix Composition</CardTitle>
          <CardDescription>
            Based on your nutritional targets, here's the optimal mix
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Nutritional Composition</CardTitle>
            <CardDescription>
              What you'll get from this mixture
            </CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt>Protein:</dt>
                <dd>{formatNumber(result.actualNutrition.protein)}g</dd>
              </div>
              <div className="flex justify-between">
                <dt>Fat:</dt>
                <dd>{formatNumber(result.actualNutrition.fat)}g</dd>
              </div>
              <div className="flex justify-between">
                <dt>Carbs:</dt>
                <dd>{formatNumber(result.actualNutrition.carbs)}g</dd>
              </div>
              <div className="flex justify-between">
                <dt>Fiber:</dt>
                <dd>{formatNumber(result.actualNutrition.fiber)}g</dd>
              </div>
              <div className="flex justify-between">
                <dt>Calories:</dt>
                <dd>{formatNumber(result.actualNutrition.calories)} kcal</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Difference from Target</CardTitle>
            <CardDescription>
              How close this mixture is to your targets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt>Protein:</dt>
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
                <dt>Fat:</dt>
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
                <dt>Carbs:</dt>
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
                <dt>Fiber:</dt>
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
                <dt>Calories:</dt>
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
