import React from "react";
import { useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader"; 
import MainContent from "./MainContent";
import AdminSideBar from "./AdminSideBar";

const Admin = () => {
  const location = useLocation(); 
  const handleClose = () => {};
  return (
    <div>
      <AdminHeader />
      <div className="lg:flex justify-between">
        <div>
          <AdminSideBar activePath={location.pathname} handleClose={handleClose} /> 
        </div>
        <MainContent/>
      </div>
    </div>
  );
};

export default Admin;
