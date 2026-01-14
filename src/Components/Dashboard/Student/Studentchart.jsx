import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StudentChart = () => {
  // Chart Data
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Students Enrollment",
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: "#006045",
        backgroundColor: "#AF864C",
        tension: 0.4, // smooth curve
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#AF864C",
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#006045",
          font: { weight: "bold", size: 14 },
        },
      },
      title: {
        display: true,
        text: "Student Enrollment Over Months",
        color: "#006045",
        font: { size: 20, weight: "bold" },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    scales: {
      x: {
        ticks: { color: "#006045", font: { size: 14, weight: "500" } },
        grid: { color: "#e0e0e0" },
      },
      y: {
        min: 0,
        max: 100,
        ticks: { color: "#006045", font: { size: 14, weight: "500" } },
        grid: { color: "#e0e0e0" },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-3/4 lg:w-1/2 mx-auto">
      <Line data={data} options={options} height={300} />
    </div>
  );
};

export default StudentChart;
