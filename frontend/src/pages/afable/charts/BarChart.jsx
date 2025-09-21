import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// style
import styles from "./chart.module.css";

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({
  labels = [],
  dataPoints = [],
  chartLabel = "Data",
  chartTitle = "Bar Chart",
}) {
  const data = {
    labels,
    datasets: [
      {
        label: chartLabel,
        data: dataPoints,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: chartTitle },
    },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className={styles.chartCardCont}>
      {labels.length && dataPoints.length ? (
        <Bar data={data} options={options} />
      ) : (
        <div className={styles.noDataText}>No data available for this chart.</div>
      )}
    </div>
  );
}
