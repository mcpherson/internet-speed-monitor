// ./components/LineChart.js
import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';

const finalData = [
  { x: new Date("2024-04-26T17:11:00.000Z"), y: 80 },
  { x: new Date("2024-04-26T18:11:00.000Z"), y: 71 },
  { x: new Date("2024-04-26T19:11:00.000Z"), y: 82 },
  { x: new Date("2024-04-26T20:11:00.000Z"), y: 85 },
  { x: new Date("2024-04-26T21:11:00.000Z"), y: 87 },
  { x: new Date("2024-04-26T22:11:00.000Z"), y: 80 },
  { x: new Date("2024-04-26T23:11:00.000Z"), y: 57 },
  { x: new Date("2024-04-27T00:11:00.000Z"), y: 76 },
  { x: new Date("2024-04-27T01:11:00.000Z"), y: 86 },
  { x: new Date("2024-04-27T02:11:00.000Z"), y: 75 },
  { x: new Date("2024-04-27T03:11:00.000Z"), y: 73 },
  { x: new Date("2024-04-27T04:11:00.000Z"), y: 76 },
  { x: new Date("2024-04-27T05:11:00.000Z"), y: 81 },
  { x: new Date("2024-04-27T06:11:00.000Z"), y: 74 },
  { x: new Date("2024-04-27T07:11:00.000Z"), y: 80 },
  { x: new Date("2024-04-27T08:11:00.000Z"), y: 79 },
  { x: new Date("2024-04-27T09:11:00.000Z"), y: 89 },
  { x: new Date("2024-04-27T10:11:00.000Z"), y: 89 },
  { x: new Date("2024-04-27T11:11:00.000Z"), y: 58 },
  { x: new Date("2024-04-27T12:11:00.000Z"), y: 91 },
  { x: new Date("2024-04-27T13:11:00.000Z"), y: 80 },
  { x: new Date("2024-04-27T14:11:00.000Z"), y: 64 },
  { x: new Date("2024-04-27T15:11:00.000Z"), y: 59 },
  { x: new Date("2024-04-27T16:11:00.000Z"), y: 69 },
  { x: new Date("2024-04-27T17:11:00.000Z"), y: 77 },
  { x: new Date("2024-04-27T18:11:00.000Z"), y: 85 },
  { x: new Date("2024-04-27T19:11:00.000Z"), y: 49 },
  { x: new Date("2024-04-27T20:11:00.000Z"), y: 80 },
  { x: new Date("2024-04-27T21:11:00.000Z"), y: 80 },
  { x: new Date("2024-04-27T22:11:00.000Z"), y: 75 },
  { x: new Date("2024-04-27T23:11:00.000Z"), y: 60 },
  { x: new Date("2024-04-28T00:11:00.000Z"), y: 68 },
]






const config = {
  type: "line",
  data: {
    datasets: [
      {
        label: "My Dataset",
        data: finalData,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: "Speed (Mbps)",
        }
      },
      x: {
        type: "time",
        time: {
          // Options for formatting the date labels
          unit: "day", // or 'month', 'year', etc.
          displayFormats: {
            day: "MMM dd", // Example format
          },
        },
        title: {
          display: true,
          text: "Date",
        },
      },
    },
  },
};
const LineChart = () => {
  return (
    <div>
      <Line data={config.data} options={config.options} />
    </div>
  );
};
export default LineChart;
