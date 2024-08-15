import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiDashboard3Fill } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbUserQuestion } from "react-icons/tb";
import { Collapse } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const AdminSideBar = ({ activePath }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const isBasePath = activePath.split("/").length <= 3;

  const getLinkClassName = (path) => {
    return activePath === path
      ? "flex items-center p-2 text-black font-bold hover:bg-gray-700 hover:text-white"
      : "flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white";
  };

  const isActive = () => {
    return [
      "/admin/customer",
      "/admin/bodyguard",
      "/admin/supervisor",
      "/admin/contract",
      "/admin/user",
      "/admin/customer-registration",
    ].includes(activePath);
  };

  return (
    <div className="fixed top-16 left-0 bg-white text-black lg:w-[15%] min-h-screen border-r-4 border-gray-300 flex flex-col">
      <div className="p-4 flex items-center justify-center border-b-4 border-gray-300 h-16 mt-0.5">
        {!isBasePath && (
          <button onClick={() => window.history.back()}>
            <MdKeyboardArrowLeft className="text-4xl" />
          </button>
        )}
      </div>

      <div className="flex flex-col justify-center items-center mt-8">
        <Collapse in={true}>
          <nav className="mt-4 px-8">
            <Link
              onClick={toggleMenu}
              className="flex items-center p-2 hover:bg-gray-700"
            >
              <IoMenuSharp
                className={`text-3xl mr-2 ${
                  isActive() ? "text-black font-bold" : "text-gray-400"
                }`}
              />
              <span
                className={`${
                  isActive() ? "text-black font-bold" : "text-gray-400"
                }`}
              >
                Management
              </span>
              {openMenu ? (
                <IoIosArrowUp
                  className={`ml-2 ${
                    isActive() ? "text-black font-bold" : "text-gray-400"
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`ml-2 ${
                    isActive() ? "text-black font-bold" : "text-gray-400"
                  }`}
                />
              )}
            </Link>
            {openMenu && (
              <div className="pl-4 ml-5">
                <Link
                  to="/admin/customer"
                  className={getLinkClassName("/admin/customer")}
                >
                  Customer
                </Link>
                <Link
                  to="/admin/bodyguard"
                  className={getLinkClassName("/admin/bodyguard")}
                >
                  Bodyguard
                </Link>
                <Link
                  to="/admin/supervisor"
                  className={getLinkClassName("/admin/supervisor")}
                >
                  Supervisor
                </Link>
                <Link
                  to="/admin/contract"
                  className={getLinkClassName("/admin/contract")}
                >
                  Contract
                </Link>
                <Link
                  to="/admin/user"
                  className={getLinkClassName("/admin/user")}
                >
                  User
                </Link>
                <Link
                  to="/admin/customer-registration"
                  className={getLinkClassName("/admin/customer-registration")}
                >
                  Registration
                </Link>
              </div>
            )}
            <Link
              to="/admin/dashboard"
              className={getLinkClassName("/admin/dashboard")}
            >
              <RiDashboard3Fill className="text-3xl mr-2" />
              Dashboard
            </Link>
            <Link
              to="/admin/notify"
              className={getLinkClassName("/admin/notify")}
            >
              <IoMdNotificationsOutline className="text-3xl mr-2" />
              Notification
            </Link>
            <Link
              to="/admin/feedback"
              className={getLinkClassName("/admin/feedback")}
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
