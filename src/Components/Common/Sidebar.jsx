import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  UserCheck,
  Wallet,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <Users size={20} />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <GraduationCap size={20} />,
    },
    {
      name: "Teachers",
      path: "/teachers",
      icon: <UserCheck size={20} />,
    },
    {
      name: "Fee Section",
      path: "/fees",
      icon: <Wallet size={20} />,
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 md:hidden bg-[#006045] text-white p-2 rounded-lg shadow-lg"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-[#006045] text-white
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/20">
          <h1 className="text-2xl font-bold tracking-wide">
            Edu<span className="text-[#AF864C]">Panel</span>
          </h1>
          <p className="text-sm text-white/70 mt-1">
            Admin Dashboard
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-[#AF864C] shadow-md"
                    : "text-white hover:bg-[#AF864C] hover:text-[#006045]"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-4 left-0 w-full px-6 text-sm text-white/60">
          © 2026 EduPanel
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
