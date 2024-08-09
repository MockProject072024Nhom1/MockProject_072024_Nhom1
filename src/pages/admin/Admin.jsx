import React from "react";
import AdminSideBar from "./AdminSideBar";
import Header from "./AdminHeader";
import MainContent from "./MainContent";
import Sidebar from "./SideBar";


const Admin = () => {
  const handleClose = () => {};

  return (
    <div>
      <Header />
      <div className="lg:flex justify-between">
        <div>
          <Sidebar handleClose={handleClose} />
        </div>
        <MainContent />
      </div>
    </div>
  );
};

export default Admin;
