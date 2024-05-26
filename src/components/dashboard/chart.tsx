import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
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
