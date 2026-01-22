import React from "react";
import { FaUserCircle, FaCog } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-4 sm:px-6 py-3">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side – Logo / Title */}
        <div className="flex items-center gap-2">
          <span className="text-green-700 font-bold text-lg sm:text-xl">
            Al-Qur’an
          </span>
        </div>

        {/* Right Side – Profile & Settings */}
        <div className="flex items-center gap-4">
          
          {/* Settings */}
          <button
            className="text-gray-600 hover:text-green-700 transition text-xl"
            title="Settings"
          >
            <FaCog />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FaUserCircle className="text-3xl text-green-700" />
            <span className="hidden sm:block text-gray-700 font-medium">
              Admin
            </span>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
