import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["iOS", "Android", "Web"],
  datasets: [
    {
      label: "Platform Usage",
      data: [40, 35, 25],
      backgroundColor: ["#4BC0C0", "#FF9F40", "#9966FF"],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "right" },
    title: { display: true, text: "User Platforms" },
  },
};

export default function DoughnutChart() {
  return (
    <div className="chartCard">
      <Doughnut data={data} options={options} />
    </div>
  );
}
