import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TbArrowLeftFromArc } from "react-icons/tb";
import logo from "../../assets/images/logo.png";
import { useLocation } from "react-router-dom";

const AdminHeader = () => {
  const location = useLocation();

  const isDashboardPath =
    location.pathname === "/admin/" || location.pathname === "/admin/dashboard";

  return (
    <header className="bg-black text-white p-2 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="ml-6">
        <img
          src={logo}
          alt=""
          className="h-12"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="flex items-center">
        <span
          className={`text-xl mr-8 ${isDashboardPath ? "text-red-500" : ""}`}
        >
          Dashboard
        </span>
        <HiOutlineUserCircle className="text-3xl mr-8" />
        <TbArrowLeftFromArc className="text-3xl mr-6" />
      </div>
    </header>
  );
};

export default AdminHeader;
