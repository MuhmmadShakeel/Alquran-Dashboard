import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const UserChart = () => {
  // Line chart data (User growth over months)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Active Users",
        data: [120, 150, 180, 200, 170, 220, 250],
        fill: false,
        borderColor: "#006045",
        backgroundColor: "#AF864C",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { color: "#006045", font: { weight: "bold" } } },
      title: {
        display: true,
        text: "Monthly Active Users",
        color: "#006045",
        font: { size: 20, weight: "bold" },
      },
      tooltip: { mode: "index", intersect: false },
    },
    interaction: { mode: "nearest", intersect: false },
    scales: {
      x: { ticks: { color: "#006045", font: { weight: "500" } }, grid: { color: "#e0e0e0" } },
      y: { ticks: { color: "#006045", font: { weight: "500" } }, grid: { color: "#e0e0e0" } },
    },
  };

  // Pie chart data (User type distribution)
  const pieData = {
    labels: ["Students", "Teachers", "Admins"],
    datasets: [
      {
        label: "User Types",
        data: [250, 50, 10],
        backgroundColor: ["#AF864C", "#006045", "#FFB74D"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { color: "#006045", font: { weight: "bold" } } },
      title: {
        display: true,
        text: "User Type Distribution",
        color: "#006045",
        font: { size: 20, weight: "bold" },
      },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="min-h-screen md:ml-64 p-4 sm:p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-[#006045] mb-6">User Analytics</h1>

      {/* Charts Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg h-80 md:h-[400px]">
          <Line data={lineData} options={lineOptions} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg h-80 md:h-[400px]">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default UserChart;
