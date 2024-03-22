import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis } from "recharts";

const data = [
  { name: "00", uv: 2000,  amt: 2400 },
  { name: "04", uv: 1600,  amt: 2210 },
  { name: "08", uv: 2000,  amt: 2290 },
  { name: "12", uv: 780,  amt: 2000 },
  { name: "16", uv: 1890,  amt: 2181 },
  { name: "18", uv: 1790,  amt: 2500 },
];

const WeeklyBarChart = () => (
  <ResponsiveContainer width="100%" height={230}>
    <BarChart data={data}>
      <defs>
        <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#4318FF" />
          <stop offset="100%" stopColor="rgba(67, 24, 255, 0.28)" />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <Bar dataKey="uv" fill="url(#gradientFill)" barSize={14} />
    </BarChart>
  </ResponsiveContainer>
);

export default WeeklyBarChart;
