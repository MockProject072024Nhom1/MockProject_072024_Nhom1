// Header.jsx
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TbArrowLeftFromArc } from "react-icons/tb";
import logo from "../../assets/images/logo.png";

const AdminHeader = () => {
  return (
    <header className="bg-black text-white p-2 flex justify-between items-center">
      <div className="ml-6">
        <img
          src={logo}
          alt=""
          className="h-12"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="flex items-center">
        <span className="text-xl mr-8">Dashboard</span>
        <HiOutlineUserCircle className="text-3xl mr-8" />
        <TbArrowLeftFromArc className="text-3xl mr-6" />
      </div>
    </header>
  );
};

export default AdminHeader;
