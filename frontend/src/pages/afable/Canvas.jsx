// install this -> npm install chart.js react-chartjs-2
// install this -> npm install @fortawesome/fontawesome-free@6.7.2

// styles
import "./canvas.css";

// components
import TableDemo from "./TableDemo";
import FilterDemo from "./FilterDemo";

// charts
import BarChart from "./Bar";
import LineChart from "./Line";
import PieChart from "./Pie";
import DoughnutChart from "./Doughnut";

export default function Canvas() {
  return (
    <div className="canvasContainer">
      <h1>Canvas Page</h1>
      <br />

      {/* filter here */}
      <FilterDemo /> <br />

      {/* table here*/}
      <TableDemo /> <br />

      {/* charts here */}
      <div className="charts">
        <div className="chart">
          <BarChart />
          <LineChart />
          <PieChart />
          <DoughnutChart />
        </div>
        {/* Add more charts as needed */}
      </div>
    </div>
  );
}