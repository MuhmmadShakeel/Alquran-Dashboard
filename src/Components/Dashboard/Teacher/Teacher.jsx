import React, { useState } from "react";
import { UserCheck, UserMinus, GraduationCap } from "lucide-react";

const Teacher = () => {
  // Teacher state
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Dr. Ali Raza", email: "ali.raza@gmail.com" },
    { id: 2, name: "Dr. Sara Khan", email: "sara.khan@gmail.com" },
    { id: 3, name: "Dr. Ahmed Hassan", email: "ahmed.hassan@gmail.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Toast state
  const [toast, setToast] = useState({ message: "", type: "" });

  // CRUD Functions
  const handleAddOrUpdate = () => {
    if (!name || !email) return;

    if (editingId) {
      setTeachers((prev) =>
        prev.map((t) => (t.id === editingId ? { ...t, name, email } : t))
      );
      setToast({ message: "Teacher updated successfully!", type: "success" });
      setEditingId(null);
    } else {
      const newTeacher = { id: Date.now(), name, email };
      setTeachers((prev) => [...prev, newTeacher]);
      setToast({ message: "Teacher added successfully!", type: "success" });
    }

    setName("");
    setEmail("");

    // Remove toast after 3 seconds
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  const handleEdit = (teacher) => {
    setName(teacher.name);
    setEmail(teacher.email);
    setEditingId(teacher.id);
  };

  const handleDelete = (id) => {
    setTeachers((prev) => prev.filter((t) => t.id !== id));
    setToast({ message: "Teacher deleted successfully!", type: "error" });

    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  // Stats
  const totalTeachers = teachers.length;
  const activeTeachers = teachers.length; // all active for now
  const removedTeachers = 0; // dynamic if you implement removed tracking

  const stats = [
    { title: "Total Teachers", value: totalTeachers, icon: <GraduationCap size={26} /> },
    { title: "Active Teachers", value: activeTeachers, icon: <UserCheck size={26} /> },
    { title: "Removed Teachers", value: removedTeachers, icon: <UserMinus size={26} /> },
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
        <h1 className="text-2xl font-bold text-[#006045]">Teacher Management</h1>
        <p className="text-sm text-gray-500">Manage all teachers in the system</p>
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
            <div className="bg-[#006045]/10 text-[#006045] p-3 rounded-xl">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Add / Edit Form */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
        <h2 className="text-lg font-semibold text-[#006045] mb-4">
          {editingId ? "Edit Teacher" : "Add Teacher"}
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
          <h2 className="text-lg font-semibold text-[#006045]">Teacher List</h2>
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
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium">{teacher.name}</td>
                  <td className="px-6 py-4 text-gray-600">{teacher.email}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(teacher)}
                      className="px-3 py-1 rounded-lg text-sm bg-[#AF864C]/10 text-[#AF864C] hover:bg-[#AF864C]/20"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(teacher.id)}
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
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-2"
          >
            <h3 className="font-semibold text-[#006045]">{teacher.name}</h3>
            <p className="text-sm text-gray-500">{teacher.email}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(teacher)}
                className="flex-1 px-3 py-1 rounded-lg text-sm bg-[#AF864C]/10 text-[#AF864C] hover:bg-[#AF864C]/20"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(teacher.id)}
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

export default Teacher;
