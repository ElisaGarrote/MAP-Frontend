import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Electronics", "Furniture", "Clothing"],
  datasets: [
    {
      label: "Product Category Share",
      data: [300, 150, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "bottom" },
    title: { display: true, text: "Sales Distribution by Category" },
  },
};

export default function PieChart() {
  return (
    <div className="chartCard">
      <Pie data={data} options={options} />
    </div>
  );
}
