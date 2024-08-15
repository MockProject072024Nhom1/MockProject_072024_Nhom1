// import React, { useState } from 'react';
// import { IoMenuSharp } from "react-icons/io5";
// import { RiDashboard3Fill } from "react-icons/ri";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { TbUserQuestion } from "react-icons/tb";
// import { Link, useNavigate } from 'react-router-dom';
// import { MdKeyboardArrowLeft } from "react-icons/md";

// const Sidebar = () => {

//   const [openMenu, setOpenMenu] = useState(false);
//   const navigate = useNavigate();
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const toggleMenu = () => {
//     setOpenMenu(!openMenu); // Đảo ngược trạng thái menu
//   };
//   return (
//     // <div className="flex flex-col w-16 bg-gray-800 text-white h-screen p-4 space-y-6">
//     //   <HiOutlineHome className="text-2xl cursor-pointer" title="Dashboard" />
//     //   <HiOutlineBell className="text-2xl cursor-pointer" title="Notifications" />
//     //   <HiOutlineUserCircle className="text-2xl cursor-pointer" title="Profile" />
//     //   <HiOutlineQuestionMarkCircle className="text-2xl cursor-pointer" title="Help" />
//     // </div>

//     <div className=" fixed top-16 left-0 flex flex-col w-16 bg-gray-800 text-white h-screen p-4 space-y-6">
//       <div className="p-4 flex items-center justify-center border-b-4 border-gray-300">
//         <button onClick={handleToggle}>
//           <MdKeyboardArrowLeft className="text-3xl" />
//         </button>
//       </div>
//       <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
//         <IoMenuSharp className="text-2xl" title="Dashboard" />
//       </div>
//       {openMenu && (
//         <div className="pl-4">
//           <Link to="/admin/customer" className="block p-2 hover:bg-gray-700">Customer</Link>
//           <Link to="/admin/bodyguard" className="block p-2 hover:bg-gray-700">Bodyguard</Link>
//           <Link to="/admin/supervisor" className="block p-2 hover:bg-gray-700">Supervisor</Link>
//           <Link to="/admin/contract" className="block p-2 hover:bg-gray-700">Contract</Link>
//           <Link to="/admin/user" className="block p-2 hover:bg-gray-700">User</Link>
//           <Link to="/admin/customer-registration" className="block p-2 hover:bg-gray-700">Customer Registration</Link>
//         </div>
//       )}
      
//       <div className="flex items-center cursor-pointer" onClick={() => navigate("/admin/notify")}>
//         <RiDashboard3Fill className="text-2xl" title="Notifications" />
//       </div>
//       <div className="flex items-center cursor-pointer" onClick={() => navigate("/admin/feedback")}>
//         <IoMdNotificationsOutline className="text-2xl" title="Profile" />
//       </div>
//       <div className="flex items-center cursor-pointer" onClick={() => navigate("/admin/help")}>
//         <TbUserQuestion className="text-2xl" title="Help" />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
