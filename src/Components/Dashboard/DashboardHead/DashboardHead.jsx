import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const usersData = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 200 },
  { name: "Wed", users: 150 },
  { name: "Thu", users: 280 },
  { name: "Fri", users: 220 },
];

const activityData = [
  { name: "Jan", activity: 400 },
  { name: "Feb", activity: 700 },
  { name: "Mar", activity: 500 },
  { name: "Apr", activity: 900 },
];

function DashboardHead() {
  return (
    <div className="bg-green-900 min-h-screen p-6 text-white">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-yellow-400">
          Al-Qur’an Dashboard
        </h1>
        <p className="text-green-200">
          Knowledge • Reflection • Guidance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-800 p-5 rounded-2xl shadow-lg">
          <h3 className="text-sm text-green-200">Total Users</h3>
          <p className="text-2xl font-bold text-yellow-400">2,450</p>
        </div>

        <div className="bg-green-800 p-5 rounded-2xl shadow-lg">
          <h3 className="text-sm text-green-200">Daily Recitations</h3>
          <p className="text-2xl font-bold text-yellow-400">780</p>
        </div>

        <div className="bg-green-800 p-5 rounded-2xl shadow-lg">
          <h3 className="text-sm text-green-200">Active Scholars</h3>
          <p className="text-2xl font-bold text-yellow-400">45</p>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Users Bar Chart */}
        <div className="bg-white p-5 rounded-2xl shadow-xl text-black">
          <h3 className="font-semibold mb-4 text-green-900">
            Weekly Users
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={usersData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#166534" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Line Chart */}
        <div className="bg-white p-5 rounded-2xl shadow-xl text-black">
          <h3 className="font-semibold mb-4 text-green-900">
            Monthly Activity
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={activityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="activity"
                stroke="#ca8a04"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardHead;
