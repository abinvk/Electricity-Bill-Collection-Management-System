import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Rahul", bills: 120 },
  { name: "Arun", bills: 95 },
  { name: "Anu", bills: 150 },
  { name: "Vishnu", bills: 80 },
];

function PerformanceChart() {
  return (
    <div className="chart-card">
      <h2>Collector Performance</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="bills" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;