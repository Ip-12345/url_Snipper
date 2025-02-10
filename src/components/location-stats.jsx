import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
} from "recharts";

// const data = [
//     {
//         name: "Page A",
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: "Page B",
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: "Page C",
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: "Page D",
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: "Page E",
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: "Page F",
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: "Page G",
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];

export default function Location({ stats }) {

    const cityCount= stats.reduce((acc, item)=>{
        if(acc[item.city]){
            acc[item.city]+=1;
        }
        else acc[item.city]=1;
        return acc;
    }, {});

    const cities= Object.entries(cityCount).map(([city, count])=>({
        city, 
        count
    }));

    return (
        <div>
            <ResponsiveContainer width={"100%"} height={300}>
                <LineChart data={cities.slice(0, 5)} margin={{ top: 20 }} accessibilityLayer>
                    <XAxis dataKey="city" padding={{ left: 20, right: 20 }} />
                    <YAxis />
                    <Tooltip labelStyle={{ color: 'green' }} />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="count"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    ></Line>
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d"></Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}