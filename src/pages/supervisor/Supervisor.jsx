import React from "react";
import Sidebar from "./SupervisorSideBar";
import AdminHeader from "../admin/AdminHeader";
import { Route, Routes, useLocation } from "react-router-dom";
import Contract from "./contract/Contract";
import Notification from "./notification/Notification";
import PersonalInfo from "./personal/PersonalInfo";
import Schedule from "./schedule/Schedule";
import EditSchedule from "./schedule/EditSchedule";
import TimeKeeping from "./timekeeping/TimeKeeping";

const Supervisor = () => {
  const location = useLocation(); 
  const handleClose = () => {};

  return (
    <div>
      <AdminHeader />
      <div className="lg:flex justify-between">
        <div>
          <Sidebar activePath={location.pathname} handleClose={handleClose} /> 
        </div>
        <div className="lg:w-[80%]">
          <Routes>
            <Route path="/" element={<Contract />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/notify" element={<Notification />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/schedule/edit" element={<EditSchedule />} />
            <Route path="/timekeeping" element={<TimeKeeping />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Supervisor;