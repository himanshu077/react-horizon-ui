import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'SEP', uv: 1000, pv: 3400, amt: 2400 },
  { name: 'OCT', uv: 3000, pv: 5398, amt: 2210 },
  { name: 'NOV', uv: 2000, pv: 3800, amt: 2290 },
  { name: 'DEC', uv: 3780, pv: 4908, amt: 2000 },
  { name: 'JAN', uv: 1490, pv: 2800, amt: 2181 },
  { name: 'FEB', uv: 2390, pv: 3800, amt: 2500 },
];

const SpendLineChart = () => (
  <ResponsiveContainer width="70%" height={200}>
    <LineChart
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <Line type="monotone" dataKey="pv" stroke="#4318FF" activeDot={{ r: 8 }}/>
      <Line type="monotone" dataKey="uv" stroke="#6AD2FF" />
    </LineChart>
  </ResponsiveContainer>
);

export default SpendLineChart;
