import React from "react";
import { HiOutlineUser, HiOutlineTrash, HiOutlinePlus } from "react-icons/hi2";
import { IoFilter } from "react-icons/io5";
import { FiDownloadCloud } from "react-icons/fi";
import Sidebar from "../SideBar";
import TableCustomer from "./TableCustomer";

const CustomerManagement = () => {
  return (
    <div className="flex flex-col w-auto h-screen p-6 bg-gray-100">
      {/* Header */}
      <div className="flex justify-center items-center h-12 bg-gray-100 pb-6 border-b-2 border-gray-300">
        <span className="font-bold text-3xl">Customer Management</span>
      </div>

      {/* Search and Actions */}
      <div className="flex justify-between items-center mb-4 mt-4 ">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Enter search keywords ..."
            className="flex-1 p-2 border border-black rounded-3xl mr-4"
          />
          <button className="bg-blue-500 text-white p-2 rounded-md">
            Search
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex gap-2 mr-2">
            <HiOutlineTrash className="text-xl cursor-pointer" title="Delete" />
            <span>Delete</span>
          </div>
          <div className="flex gap-2 mr-2">
            <IoFilter className="text-xl cursor-pointer" title="Filters" />
            <span>Filters</span>
          </div>
          <button className="flex items-center bg-white text-black border-2 border-gray-300 px-4 py-2 rounded-md">
            <FiDownloadCloud
              className="text-xl cursor-pointer mr-2"
              title="Export"
            />
            Export
          </button>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md">
            <HiOutlinePlus className="mr-2" />
            Add new
          </button>
        </div>
      </div>

      {/* Table */}

      <TableCustomer/>
    </div>
  );
};

export default CustomerManagement;
