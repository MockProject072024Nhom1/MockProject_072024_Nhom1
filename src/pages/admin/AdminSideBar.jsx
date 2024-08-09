// AdminSideBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiDashboard3Fill } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbUserQuestion } from "react-icons/tb";
import { Collapse } from "@mui/material";

const AdminSideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white text-black w-64 min-h-screen border-r-4 border-gray-300 flex flex-col">
      <div className="p-4 flex items-center justify-center border-b-4 border-gray-300">
        <button onClick={handleToggle}>
          <MdKeyboardArrowLeft className="text-3xl" />
        </button>
        <h2 className="text-xl font-bold ml-4">Management</h2>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <Collapse in={isExpanded}>
          <nav className="mt-4">
            <Link
              to="/add-contract"
              className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <IoMenuSharp className="text-3xl mr-2" />
              Management
            </Link>
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <RiDashboard3Fill className="text-3xl mr-2" />
              Dashboard
            </Link>
            <Link
              to="/notifications"
              className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <IoMdNotificationsOutline className="text-3xl mr-2" />
              Notification
            </Link>
            <Link
              to="/feedback"
              className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <TbUserQuestion className="text-3xl mr-2" />
              Feedback
            </Link>
          </nav>
        </Collapse>
      </div>
    </div>
  );
};

export default AdminSideBar;
