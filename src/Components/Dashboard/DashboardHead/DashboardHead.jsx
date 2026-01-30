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
    <div className=" lg:ml-64 min-h-screen w-full bg-slate-50 px-4 sm:px-6 lg:px-10 py-6">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-800">
            Al-Qur’an Dashboard
          </h1>
          <p className="text-slate-600 mt-1 text-sm sm:text-base">
            Knowledge • Reflection • Guidance
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-sm text-slate-500">Total Users</h3>
            <p className="text-3xl font-bold text-emerald-700 mt-2">2,450</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-sm text-slate-500">Daily Recitations</h3>
            <p className="text-3xl font-bold text-emerald-700 mt-2">780</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm text-slate-500">Active Scholars</h3>
            <p className="text-3xl font-bold text-emerald-700 mt-2">45</p>
          </div>

        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {/* WEEKLY USERS */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-emerald-800 mb-4 text-center lg:text-left">
              Weekly Users
            </h3>

            <div className="w-full h-[260px] lg:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={usersData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="users"
                    fill="#047857"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* MONTHLY ACTIVITY */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-emerald-800 mb-4 text-center lg:text-left">
              Monthly Activity
            </h3>

            <div className="w-full h-[260px] lg:h-[300px]">
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
