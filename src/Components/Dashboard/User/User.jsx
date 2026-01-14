import React, { useState } from "react";
import { UserCheck, UserMinus } from "lucide-react";

const User = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Ali Raza", email: "ali.raza@gmail.com" },
    { id: 2, name: "Sara Khan", email: "sara.khan@gmail.com" },
    { id: 3, name: "Ahmed Hassan", email: "ahmed.hassan@gmail.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [toast, setToast] = useState({ message: "", type: "" });

  const handleAddOrUpdate = () => {
    if (!name || !email) return;

    if (editingId) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingId ? { ...user, name, email } : user
        )
      );
      setToast({ message: "User updated successfully!", type: "success" });
      setEditingId(null);
    } else {
      // Add
      const newUser = {
        id: Date.now(),
        name,
        email,
      };
      setUsers((prev) => [...prev, newUser]);
      setToast({ message: "User added successfully!", type: "success" });
    }

    setName("");
    setEmail("");

    // Remove toast after 3 seconds
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditingId(user.id);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    setToast({ message: "User deleted successfully!", type: "error" });

    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  return (
    <div className="min-h-screen md:ml-64  sm:p-6 bg-gray-50 relative">
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#006045]">User Management</h1>
        <p className="text-sm text-gray-500">Manage all users of the system</p>
      </div>

      {/* Add / Edit Form */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
        <h2 className="text-lg font-semibold text-[#006045] mb-4">
          {editingId ? "Edit User" : "Add User"}
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
          <h2 className="text-lg font-semibold text-[#006045]">User List</h2>
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
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="px-3 py-1 rounded-lg text-sm bg-[#AF864C]/10 text-[#AF864C] hover:bg-[#AF864C]/20"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
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
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-2"
          >
            <h3 className="font-semibold text-[#006045]">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(user)}
                className="flex-1 px-3 py-1 rounded-lg text-sm bg-[#AF864C]/10 text-[#AF864C] hover:bg-[#AF864C]/20"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
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

export default User;
