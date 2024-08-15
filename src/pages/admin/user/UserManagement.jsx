import React, { useState } from "react";
import { HiOutlineTrash, HiOutlinePlus } from "react-icons/hi2";
import { IoFilter } from "react-icons/io5";
import { FiDownloadCloud } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import TableUser from "./TableUser";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "@mui/material";

const UserManagement = () => {
  const navigate = useNavigate(); 

  const [openModal, setOpenModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleDeleteOpen = () => {
    setOpenModal(true);
  };

  const handleDeleteClose = () => {
    setOpenModal(false);
  };

  const [rows, setRows] = useState([
    {
      id: "1",
      email: "Regular text column",
      password: "Regular text column",
      role: "Regular text column",
      registrationDate: "Regular text column",
      user_status: "Active",
    },
    {
      id: "2",
      email: "Regular text column",
      password: "Regular text column",
      role: "Regular text column",
      registrationDate: "Regular text column",
      user_status: "Inactive",
    },
  ]);

  const handleDeleteConfirm = () => {
    const updatedRows = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(updatedRows); 
    console.log(`Deleted items with IDs: ${selectedRows}`);
    handleDeleteClose();
  };

  return (
    <div className="flex flex-col w-auto h-fit bg-gray-100 pt-0.5 mt-20">
      <div className="flex justify-center items-center h-12 bg-gray-100 pb-6 border-b-4 border-gray-300">
        <span className="font-bold text-3xl">User Management</span>
      </div>

      <div className="p-4">
        {/* Search and Actions */}
        <div className="flex justify-between items-center mb-4">
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
              <HiOutlineTrash
                className="text-xl cursor-pointer"
                title="Delete"
                onClick={handleDeleteOpen}
              />
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
            <button
              onClick={() => navigate("/admin/bodyguard/add")}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              <HiOutlinePlus className="mr-2" />
              Add new
            </button>
          </div>
        </div>

        {/* Table */}

        <TableUser
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          rows={rows}
          setRows={setRows} 
        />

        <Modal
          open={openModal}
          onClose={handleDeleteClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="flex items-center justify-center h-screen bg-gray-200 bg-opacity-50">
            <div className="bg-white rounded-lg w-5/12 h-44 p-6 relative">
              <IoIosCloseCircleOutline
                onClick={handleDeleteClose}
                className="absolute text-2xl top-2 right-2 cursor-pointer"
              />
              <h3
                id="modal-title"
                className="font-bold text-xl flex text-center justify-center"
              >
                Are you sure you want to delete these items?
              </h3>
              <div className="flex items-center justify-center mt-8 ">
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDeleteClose}
                  sx={{
                    color: "#000",
                    width: "30%",
                    marginRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  No
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleDeleteConfirm}
                  sx={{
                    color: "#000",
                    backgroundColor: "#66FFCC",
                    width: "30%",
                    fontWeight: "bold",
                  }}
                >
                  Yes
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default UserManagement;
