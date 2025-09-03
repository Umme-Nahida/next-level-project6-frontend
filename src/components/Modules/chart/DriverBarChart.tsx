"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", monthly: 186, daily: 80 },
  { month: "February", monthly: 305, daily: 200 },
  { month: "March", monthly: 237, daily: 120 },
  { month: "April", monthly: 73, daily: 190 },
  { month: "May", monthly: 209, daily: 130 },
  { month: "June", monthly: 214, daily: 140 },
]

const chartConfig = {
  monthly: {
    label: "Monthly",
    color: "var(--chart-1)",
  },
  daily: {
    label: "daily",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function DriverBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Earning Analytics</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="monthly" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="daily" fill="var(--color-daily)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
