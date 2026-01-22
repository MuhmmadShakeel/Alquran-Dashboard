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
    <div className="min-h-screen px-4 sm:px-6 py-6 bg-transparent">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-800">
            Al-Qur’an Dashboard
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Knowledge • Reflection • Guidance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          
          <div className="bg-white p-5 rounded-2xl shadow-md text-center sm:text-left">
            <h3 className="text-sm text-gray-500">Total Users</h3>
            <p className="text-2xl font-bold text-green-700">2,450</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md text-center sm:text-left">
            <h3 className="text-sm text-gray-500">Daily Recitations</h3>
            <p className="text-2xl font-bold text-green-700">780</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md text-center sm:text-left">
            <h3 className="text-sm text-gray-500">Active Scholars</h3>
            <p className="text-2xl font-bold text-green-700">45</p>
          </div>

        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Weekly Users Chart */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md">
            <h3 className="font-semibold mb-4 text-green-800 text-center sm:text-left">
              Weekly Users
            </h3>
            <div className="w-full h-[220px] sm:h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={usersData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="users"
                    fill="#15803d"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Activity Chart */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md">
            <h3 className="font-semibold mb-4 text-green-800 text-center sm:text-left">
              Monthly Activity
            </h3>
            <div className="w-full h-[220px] sm:h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="activity"
                    stroke="#ca8a04"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default DashboardHead;
