import React from "react";
import { Route, Routes } from "react-router-dom";
import AddSupervisor from "./supervisor/AddSupervisor";
import AddContract from "./contract/AddContract";
import Dashboard from "./Dashboard";
import CustomerManagement from "./customer/CustomerManagement";
import Chat from "./Chat";
import Notification from "../supervisor/notification/Notification";
import ContractManagement from "./contract/ContractManagement";
import BodyguardManagement from "./bodyguard/BodyguardManagement";
import AddBodyguard from "./bodyguard/AddBodyguard";
import EditBodyguard from "./bodyguard/EditBodyguard";
import SupervisorManagement from "./supervisor/SupervisorManagement";
import EditSupervisor from "./supervisor/EditSupervisor";
import UserManagement from "./user/UserManagement";
import CustomerRegistrationManagement from "./registration/CustomerRegistrationManagement";

const MainContent = () => {
  return (
    <div className="lg:w-[85%]">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerManagement />} />

        <Route path="/contract" element={<ContractManagement />} />
        <Route path="/contract/add" element={<AddContract />} />

        <Route path="/bodyguard" element={<BodyguardManagement />} />
        <Route path="/bodyguard/add" element={<AddBodyguard />} />
        <Route path="/bodyguard/edit" element={<EditBodyguard />} />

        <Route path="/supervisor" element={<SupervisorManagement />} />
        <Route path="/supervisor/add" element={<AddSupervisor />} />
        <Route path="/supervisor/edit" element={<EditSupervisor />} />

        <Route path="/user" element={<UserManagement />} />

        <Route
          path="/customer-registration"
          element={<CustomerRegistrationManagement />}
        />

        <Route path="/feedback" element={<Chat />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </div>
  );
};

export default MainContent;
