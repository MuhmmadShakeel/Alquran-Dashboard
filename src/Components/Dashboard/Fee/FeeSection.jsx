import React, { useState } from "react";

const FeeSection = () => {
  // Student fees data
  const [fees, setFees] = useState([
    { id: 1, name: "Ali Raza", status: "Pending" },
    { id: 2, name: "Sara Khan", status: "Paid" },
    { id: 3, name: "Ahmed Hassan", status: "Pending" },
  ]);

  const [toast, setToast] = useState({ message: "", type: "" });

  // Handle approve
  const handleApprove = (id) => {
    setFees((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: "Paid" } : f))
    );
    setToast({ message: "Payment approved!", type: "success" });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  // Handle reject
  const handleReject = (id) => {
    setFees((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: "Rejected" } : f))
    );
    setToast({ message: "Payment rejected!", type: "error" });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  // Stats
  const totalFees = fees.length;
  const paidFees = fees.filter((f) => f.status === "Paid").length;
  const pendingFees = fees.filter((f) => f.status === "Pending").length;

  const stats = [
    { title: "Total Fees", value: totalFees },
    { title: "Paid", value: paidFees },
    { title: "Pending", value: pendingFees },
  ];

  return (
    <div className="min-h-screen md:ml-64 pt-4 sm:pt-4 sm:px-6 sm:pb-6 bg-gray-50 relative">
      {/* Toast */}
      {toast.message && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          } animate-slide-down`}
        >
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#006045]">Fee Section</h1>
        <p className="text-sm text-gray-500">Manage student payments</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-[#AF864C] flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-3xl font-bold text-[#006045]">{item.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-[#006045]">Student Fee List</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#006045] text-white">
              <tr>
                <th className="px-6 py-3 text-sm font-medium">Student Name</th>
                <th className="px-6 py-3 text-sm font-medium">Status</th>
                <th className="px-6 py-3 text-sm font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee) => (
                <tr key={fee.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium">{fee.name}</td>
                  <td className="px-6 py-4 text-gray-600">{fee.status}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => handleApprove(fee.id)}
                      disabled={fee.status === "Paid"}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        fee.status === "Paid"
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-[#006045]/10 text-[#006045] hover:bg-[#006045]/20"
                      }`}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(fee.id)}
                      disabled={fee.status === "Rejected"}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        fee.status === "Rejected"
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-red-100 text-red-600 hover:bg-red-200"
                      }`}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">
        {fees.map((fee) => (
          <div
            key={fee.id}
            className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-2"
          >
            <h3 className="font-semibold text-[#006045]">{fee.name}</h3>
            <p className="text-sm text-gray-500">{fee.status}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleApprove(fee.id)}
                disabled={fee.status === "Paid"}
                className={`flex-1 px-3 py-1 rounded-lg text-sm ${
                  fee.status === "Paid"
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-[#006045]/10 text-[#006045] hover:bg-[#006045]/20"
                }`}
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(fee.id)}
                disabled={fee.status === "Rejected"}
                className={`flex-1 px-3 py-1 rounded-lg text-sm ${
                  fee.status === "Rejected"
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-red-100 text-red-600 hover:bg-red-200"
                }`}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind animation for toast */}
      <style>{`
        .animate-slide-down {
          animation: slideDown 0.5s ease forwards;
        }
        @keyframes slideDown {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FeeSection;
