import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

// const data01 = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 }
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Device({ stats }) {

  const deviceCount = stats.reduce((acc, item) => {
    if (!acc[item.device]) {
      acc[item.device] = 0;
    }
    acc[item.device]++;
    return acc;
  }, {});

  const result = Object.keys(deviceCount).map((device) => ({
    device,
    count: deviceCount[device]
  }));

  return (
    <div>
      <ResponsiveContainer width={"100%"} height={300}>
        <PieChart width={700} height={400}>
          <Pie
            data={result}
            // fill="#8884d8"
            labelLine={false}
            label={({ device, percent }) =>
              `${device}:${(percent * 100).toFixed(0)}%`
            }
            dataKey="count"
          >
            {result.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
