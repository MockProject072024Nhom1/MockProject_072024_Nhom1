import React from 'react';
import { HiOutlineHome, HiOutlineBell, HiOutlineUserCircle, HiOutlineQuestionMarkCircle } from 'react-icons/hi2';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-16 bg-gray-800 text-white h-screen p-4 space-y-6">
      <HiOutlineHome className="text-2xl cursor-pointer" title="Dashboard" />
      <HiOutlineBell className="text-2xl cursor-pointer" title="Notifications" />
      <HiOutlineUserCircle className="text-2xl cursor-pointer" title="Profile" />
      <HiOutlineQuestionMarkCircle className="text-2xl cursor-pointer" title="Help" />
    </div>
  );
};

export default Sidebar;
