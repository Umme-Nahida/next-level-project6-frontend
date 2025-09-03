"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { useUserAnalyticsQuery } from "@/Redux/Features/AdminApi/adminApi"

export const description = "A pie chart with a legend"


export function Piechart() {

  const {data} = useUserAnalyticsQuery(undefined)
  // console.log("analytics", data)

  const chartData = [
    { browser: "chrome", visitors: data?.data?.totalUsers, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: data?.data?.totalAdmins, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: data?.data?.totalDrivers, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: data?.data?.totalRiders, fill: "var(--color-edge)" },
    { browser: "other", visitors: 10, fill: "var(--color-other)" },
  ]

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Total-User",
      color: "var(--chart-1)",
    },
    safari: {
      label: "Admin",
      color: "var(--chart-2)",
    },
    firefox: {
      label: "Drivers",
      color: "var(--chart-3)",
    },
    edge: {
      label: "Riders",
      color: "var(--chart-4)",
    },
    other: {
      label: "Visitors",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig


  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Analytics your site users</CardTitle>
        <CardDescription>Driver-Riders</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="visitors" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
