import React from "react";
import { Route, Routes } from "react-router-dom";
import AddSupervisor from "./AddSupervisor";
import AddContract from "./contract/AddContract";
import Dashboard from "./Dashboard";
import Sidebar from "./SideBar";
import CustomerManagement from "./customer/CustomerManagement";
import Chat from "./Chat";

// const Dashboard = () => <div>Dashboard Content</div>;
const Notification = () => <div>Notification Content</div>;
const Feedback = () => <div>Feedback Content</div>;

const MainContent = () => {
  return (
    <div className="lg:w-[100%]">
      <Routes>
        <Route path="/add-supervisor" element={<AddSupervisor />} />
        <Route path="/add-contract" element={<AddContract />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};

export default MainContent;
