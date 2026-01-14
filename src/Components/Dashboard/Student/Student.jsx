import React, { useState } from "react";
import { Users, GraduationCap, UserMinus } from "lucide-react";

const Student = () => {
  // Stats
  const [students, setStudents] = useState([
    { id: 1, name: "Ali Raza", email: "ali.raza@gmail.com" },
    { id: 2, name: "Sara Khan", email: "sara.khan@gmail.com" },
    { id: 3, name: "Ahmed Hassan", email: "ahmed.hassan@gmail.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Toast state
  const [toast, setToast] = useState("");

  // CRUD Functions
  const handleAddOrUpdate = () => {
    if (!name || !email) return;

    if (editingId) {
      // Update
      setStudents((prev) =>
        prev.map((stu) =>
          stu.id === editingId ? { ...stu, name, email } : stu
        )
      );
      setEditingId(null);
    } else {
      // Add
      const newStudent = {
        id: Date.now(),
        name,
        email,
      };
      setStudents((prev) => [...prev, newStudent]);
    }

    setName("");
    setEmail("");
  };

  const handleEdit = (student) => {
    setName(student.name);
    setEmail(student.email);
    setEditingId(student.id);
  };

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((stu) => stu.id !== id));
    setToast("Student deleted successfully!");

    // Remove toast after 3 seconds
    setTimeout(() => setToast(""), 3000);
  };

  // Stats Calculation
  const totalStudents = students.length;
  const activeStudents = students.length;
  const removedStudents = 0;

  const stats = [
    { title: "Total Students", value: totalStudents, icon: <Users size={26} /> },
    {
      title: "Active Students",
      value: activeStudents,
      icon: <GraduationCap size={26} />,
    },
    { title: "Removed Students", value: removedStudents, icon: <UserMinus size={26} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:ml-64 relative">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#006045]">Students Management</h1>
        <p className="text-sm text-gray-500">Manage students, accounts & records</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-[#AF864C] flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-3xl font-bold text-[#006045]">{item.value}</h2>
            </div>
            <div className="bg-[#006045]/10 text-[#006045] p-3 rounded-xl">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Add / Edit Form */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
        <h2 className="text-lg font-semibold text-[#006045] mb-4">
          {editingId ? "Edit Student" : "Add Student"}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AF864C]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AF864C]"
          />
          <button
            onClick={handleAddOrUpdate}
            className="bg-[#006045] text-white px-4 py-2 rounded-lg hover:bg-[#004733] transition"
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-[#006045]">Student List</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#006045] text-white">
              <tr>
                <th className="px-6 py-3 text-sm font-medium">Name</th>
                <th className="px-6 py-3 text-sm font-medium">Email</th>
                <th className="px-6 py-3 text-sm font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{student.name}</td>
                  <td className="px-6 py-4 text-gray-600">{student.email}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(student)}
                      className="px-3 py-1 rounded-lg text-sm bg-[#AF864C]/10 text-[#AF864C] hover:bg-[#AF864C]/20"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="px-3 py-1 rounded-lg text-sm bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      Delete
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
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-2"
          >
            <h3 className="font-semibold text-[#006045]">{student.name}</h3>
            <p className="text-sm text-gray-500">{student.email}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(student)}
                className="flex-1 px-3 py-1 rounded-lg text-sm bg-[#AF864C]/10 text-[#AF864C] hover:bg-[#AF864C]/20"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(student.id)}
                className="flex-1 px-3 py-1 rounded-lg text-sm bg-red-100 text-red-600 hover:bg-red-200"
              >
                Delete
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

export default Student;
