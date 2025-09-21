// install this -> npm install chart.js react-chartjs-2
// install this -> npm install @fortawesome/fontawesome-free@6.7.2

// styles
import "./canvas.css";

// components
import TableDemo from "./TableDemo";
import FilterDemo from "./FilterDemo";

// charts
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import DoughnutChart from "./charts/DoughnutChart";
import ChartContainer from "./charts/ChartContainer";

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
          <ChartContainer title="Bar Chart">
            <BarChart />
          </ChartContainer>
          <ChartContainer title="Line Chart">
            <LineChart />
          </ChartContainer>
          <ChartContainer title="Pie Chart">
            <PieChart />
          </ChartContainer>
          <ChartContainer title="Doughnut Chart">
            <DoughnutChart />
          </ChartContainer>
        </div>
        {/* Add more charts as needed */}
      </div>
    </div>
  );
}