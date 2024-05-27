import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicPie() {
  return (
    <PieChart
      sx={{ display: "flex", flexDirection: "column" }}
      colors={["lightgreen", "green", "teal"]}
      series={[
        {
          data: [
            { id: 0, value: 15, label: "Income" },
            { id: 1, value: 15, label: "Spent" },
            { id: 2, value: 15, label: "Savings" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export function SimpleLineChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: "pv" },
        { data: uData, label: "uv" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
