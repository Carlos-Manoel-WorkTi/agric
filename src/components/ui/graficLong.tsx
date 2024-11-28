"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  { date: "2019-01-01", last: 80, current: 60 },
  { date: "2019-02-01", last: 90, current: 70 },
  { date: "2019-03-01", last: 100, current: 75 },
  { date: "2019-04-01", last: 110, current: 80 },
  { date: "2019-05-01", last: 120, current: 85 },
  { date: "2019-06-01", last: 130, current: 90 },
  { date: "2019-07-01", last: 140, current: 100 },
  { date: "2019-08-01", last: 150, current: 110 },
  { date: "2019-09-01", last: 160, current: 120 },
  { date: "2019-10-01", last: 170, current: 130 },
  { date: "2019-11-01", last: 180, current: 140 },
  { date: "2019-12-01", last: 190, current: 150 },

  { date: "2020-01-01", last: 100, current: 70 },
  { date: "2020-02-01", last: 110, current: 80 },
  { date: "2020-03-01", last: 120, current: 85 },
  { date: "2020-04-01", last: 130, current: 90 },
  { date: "2020-05-01", last: 140, current: 100 },
  { date: "2020-06-01", last: 150, current: 110 },
  { date: "2020-07-01", last: 160, current: 120 },
  { date: "2020-08-01", last: 170, current: 130 },
  { date: "2020-09-01", last: 180, current: 140 },
  { date: "2020-10-01", last: 190, current: 150 },
  { date: "2020-11-01", last: 200, current: 160 },
  { date: "2020-12-01", last: 210, current: 170 },

  { date: "2021-01-01", last: 120, current: 80 },
  { date: "2021-02-01", last: 130, current: 90 },
  { date: "2021-03-01", last: 140, current: 95 },
  { date: "2021-04-01", last: 150, current: 100 },
  { date: "2021-05-01", last: 160, current: 110 },
  { date: "2021-06-01", last: 170, current: 120 },
  { date: "2021-07-01", last: 180, current: 130 },
  { date: "2021-08-01", last: 190, current: 140 },
  { date: "2021-09-01", last: 200, current: 150 },
  { date: "2021-10-01", last: 210, current: 160 },
  { date: "2021-11-01", last: 220, current: 170 },
  { date: "2021-12-01", last: 230, current: 180 },

  { date: "2022-01-01", last: 140, current: 100 },
  { date: "2022-02-01", last: 150, current: 110 },
  { date: "2022-03-01", last: 160, current: 120 },
  { date: "2022-04-01", last: 170, current: 130 },
  { date: "2022-05-01", last: 180, current: 140 },
  { date: "2022-06-01", last: 190, current: 150 },
  { date: "2022-07-01", last: 200, current: 160 },
  { date: "2022-08-01", last: 210, current: 170 },
  { date: "2022-09-01", last: 220, current: 180 },
  { date: "2022-10-01", last: 230, current: 190 },
  { date: "2022-11-01", last: 240, current: 200 },
  { date: "2022-12-01", last: 250, current: 210 },

  { date: "2023-01-01", last: 160, current: 110 },
  { date: "2023-02-01", last: 170, current: 120 },
  { date: "2023-03-01", last: 180, current: 130 },
  { date: "2023-04-01", last: 190, current: 140 },
  { date: "2023-05-01", last: 200, current: 150 },
  { date: "2023-06-01", last: 210, current: 160 },
  { date: "2023-07-01", last: 220, current: 170 },
  { date: "2023-08-01", last: 230, current: 180 },
  { date: "2023-09-01", last: 240, current: 190 },
  { date: "2023-10-01", last: 250, current: 200 },
  { date: "2023-11-01", last: 260, current: 210 },
  { date: "2023-12-01", last: 270, current: 220 },

  { date: "2024-01-01", last: 200, current: 150 },
  { date: "2024-02-01", last: 210, current: 160 },
  { date: "2024-03-01", last: 220, current: 170 },
  { date: "2024-04-01", last: 222, current: 150 },
  { date: "2024-05-01", last: 97, current: 180 },
  { date: "2024-06-01", last: 167, current: 120 },
  { date: "2024-07-01", last: 242, current: 260 },
  { date: "2024-08-01", last: 373, current: 290 },
  { date: "2024-09-01", last: 301, current: 340 },
  { date: "2024-10-01", last: 245, current: 180 },
  { date: "2024-11-01", last: 270, current: 200 },
  { date: "2024-12-01", last: 290, current: 280 },
];


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  last: {
    label: "last",
    color: "hsl(var(--chart-1))",
  },
  current: {
    label: "current",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function GraficLong() {
  const [timeRange, setTimeRange] = React.useState("5y");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30"); // Data de referência fixa
    const yearDifference = parseInt(timeRange.replace("y", ""), 10); // Extrai o número de anos do timeRange
    const startDate = new Date(referenceDate.getFullYear() - yearDifference, 0, 1); // Início do intervalo
    const endDate = new Date(referenceDate.getFullYear(), 11, 31); // Fim do intervalo (ano atual)
  
    if (date < startDate || date > endDate) {
      return false;
    }
  
    // Checar se a data é o último dia do mês
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return nextDay.getDate() === 1;
  });
  

  return (
    <Card className="w-full bg-[--bg-main]" style={{ border: "1px solid #0f3117" }}>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row " style={{borderBottom: "1px solid #0f3117"}}>
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className="text-stone-50"> Historico de capital</CardTitle>
          <CardDescription>
            Mostrando os valores de o dinheiro obtido
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto text-white"
            aria-label="Select a value"
          >
            <SelectValue placeholder="ultimos 5 anos" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="5a" className="rounded-lg ">
            ultimos 5 anos
            </SelectItem>
            <SelectItem value="3a" className="rounded-lg">
            ultimos 4 anos
            </SelectItem>
            <SelectItem value="3a" className="rounded-lg">
            ultimos 3 anos
            </SelectItem>
            <SelectItem value="2a" className="rounded-lg">
            ultimos 2 anos
            </SelectItem>
            <SelectItem value="1a" className="rounded-lg">
            ultimos 1 anos
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="filllast" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--last-year)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--last-year)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillcurrent" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="40%"
                  stopColor="var( --current-year)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--current-year)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("br", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("br", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="current"
              type="natural"
              fill="url(#fillcurrent)"
              stroke="var(--current-year)"
              stackId="a"
            />
            <Area
              dataKey="last"
              type="natural"
              fill="url(#filllast)"
              stroke="var(--last-year)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
