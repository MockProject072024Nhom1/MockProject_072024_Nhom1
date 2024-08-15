import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LiaFileContractSolid } from "react-icons/lia";
import { GrFormSchedule } from "react-icons/gr";
import { MdMoreTime } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activePath }) => {
  const navigate = useNavigate(); 

  const menuItems = [
    { path: "/supervisor/contract", icon: <LiaFileContractSolid className="mr-2 text-3xl" />, label: "Contracts" },
    { path: "/supervisor/schedule", icon: <GrFormSchedule className="mr-2 text-3xl" />, label: "Schedule" },
    { path: "/supervisor/timekeeping", icon: <MdMoreTime className="mr-2 text-3xl" />, label: "Timekeeping" },
    { path: "/supervisor/notify", icon: <IoMdNotificationsOutline className="mr-2 text-3xl" />, label: "Notification" },
    { path: "/supervisor/personal-info", icon: <FaRegUser className="mr-2 text-3xl" />, label: "Personal Info" },
  ];

  return (
    <div className="fixed top-16 left-0 w-60 h-full bg-gray-100 shadow-md border-r-4 border-gray-300">
      <div className="p-4 text-lg font-semibold flex items-center border-b-4 border-gray-300">
        <IoIosArrowBack style={{ marginRight: 24 }} />
        Management
      </div>
      <ul className="p-2">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`flex items-center py-2 px-4 mt-4 cursor-pointer text-lg font-bold ${activePath === item.path || activePath.startsWith(item.path + '/') ? 'text-red-500' : ''}`}
            onClick={() => navigate(item.path)} 
          >
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;