"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
import { useAnalyticsRidesQuery } from "@/Redux/Features/AdminApi/adminApi"

export const description = "A simple area chart"



// { date: "2024-04-01", desktop: , mobile: 150 },
//     { date: "2024-04-02", desktop: , mobile: 180 },
//     { date: "2024-04-03", desktop: , mobile: 120 },
//     { date: "2024-04-04", desktop: , mobile: 260 },
//     { date: "2024-04-05", desktop: , mobile: 290 },
//     { date: "2024-04-06", desktop: , mobile: 340 },
//     { date: "2024-04-07", desktop:, mobile: 180 },
//     { date: "2024-04-08", desktop:, mobile: 320 },

export function ChartArea() {
  const { data: ride } = useAnalyticsRidesQuery(undefined)


  const chartData = [
    { month: "Accepted", desktop:ride?.data?.acceptedRides },
    { month: "Cancelled", desktop: ride?.data?.cancelledRides },
    { month: "Completed", desktop: ride?.data?.completedRides },
    { month: "In_progress", desktop: ride?.data?.inProgressRides},
    { month: "Requested", desktop: ride?.data?.requestedRides },
    { month: "Tatal Rides", desktop:  ride?.data?.totalRides },
  ]

  const chartConfig = {
    desktop: {
      label: "Ride",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig


  return (
    <Card>
      <CardHeader>
        <CardTitle>Anatytics Ride</CardTitle>
        <CardDescription>
          Showing the Ride Statistic Chart 
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 15)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
