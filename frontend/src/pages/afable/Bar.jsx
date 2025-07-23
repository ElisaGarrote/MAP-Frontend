// install this -> npm install chart.js react-chartjs-2

// style
import "./chartStyle.css";

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Revenue',
      data: [300, 500, 400, 600],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Monthly Revenue' },
  },
};

export default function BarChart() {
  return (
    <div className="chartCard">
      <Bar data={data} options={options} />
    </div>
  );
}

