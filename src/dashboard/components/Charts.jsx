import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
} from "recharts";

import "./Charts.css";

const lineData = [
  { name: "Mon", sales: 400 },
  { name: "Tue", sales: 300 },
  { name: "Wed", sales: 500 },
  { name: "Thu", sales: 450 },
  { name: "Fri", sales: 600 },
  { name: "Sat", sales: 700 },
  { name: "Sun", sales: 650 },
];

const pieData = [
  { name: "Mint", value: 400 },
  { name: "Head & Shoulders", value: 300 },
  { name: "Pantene", value: 300 },
  { name: "Lettuce", value: 200 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#06b6d4"];

const Charts = () => {
  return (
    <div className="charts-grid">

     
      <div className="chart-card">
        <h3>Weekly Sales</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* PIE CHART */}
      <div className="chart-card">
        <h3>Best Selling Products</h3>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              dataKey="value"
            >
              {/* {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))} */}
            </Pie>

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;