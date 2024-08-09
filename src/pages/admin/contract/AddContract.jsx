import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import {
  TextField,
  MenuItem,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TableContract from "./TableContract";

const AddContract = () => {
  const [supervisor, setSupervisor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    certificate: null,
    experience: "",
    phoneNumber: "",
    service: "",
    state: "",
    city: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupervisor({ ...supervisor, [name]: value });
  };

  const handleFileUpload = (e) => {
    setSupervisor({ ...supervisor, certificate: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(supervisor);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-4/6">
        <form
          className="bg-white rounded w-full max-w-4xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4">Add New Contract</h2>
          <div className="flex gap-4">
            <div className="w-11/12">
              <div className="flex flex-col w-full mt-4 mb-4">
                <label className="text-sm font-medium mb-1">
                  Contract Name
                </label>
                <TextField
                  name="contractName"
                  type="contractName"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.contractName}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: <LuPencil />,
                  }}
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm font-medium mb-1">
                  Customer FullName
                </label>
                <TextField
                  name="customerFullName"
                  select
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.customerFullName}
                  onChange={handleChange}
                >
                  <MenuItem value="Event Security">John</MenuItem>
                  <MenuItem value="Personal Security">Peter</MenuItem>
                </TextField>
              </div>

              <div className="mt-2 flex gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">
                    Certificate
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker label="Basic date picker" />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Experience</label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker label="Basic date picker" fullWidth />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <TextField
                    name="phoneNumber"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={supervisor.phoneNumber}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: <LuPencil />,
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Service</label>
                  <TextField
                    name="service"
                    select
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={supervisor.service}
                    onChange={handleChange}
                  >
                    <MenuItem value="Event Security">Event Security</MenuItem>
                    <MenuItem value="Personal Security">
                      Personal Security
                    </MenuItem>
                  </TextField>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Supervisor</label>
                  <TextField
                    name="supervisor"
                    select
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={supervisor.supervisor}
                    onChange={handleChange}
                  >
                    <MenuItem value="John">Apolo</MenuItem>
                    <MenuItem value="Doe">David</MenuItem>
                  </TextField>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Cost</label>
                  <TextField
                    name="cost"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={supervisor.cost}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: <LuPencil />,
                    }}
                  />
                </div>
              </div>

              <div className="mt-4 mb-4 flex gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Pay Method</label>
                  <TextField
                    name="payment"
                    select
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={supervisor.payment}
                    onChange={handleChange}
                  >
                    <MenuItem value="John">Paypal</MenuItem>
                    <MenuItem value="Doe">Cash</MenuItem>
                  </TextField>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Pay Status</label>
                  <TextField
                    name="paymentStatus"
                    select
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={supervisor.paymentStatus}
                    onChange={handleChange}
                  >
                    <MenuItem value="John">Success</MenuItem>
                    <MenuItem value="Doe">Fail</MenuItem>
                  </TextField>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" variant="contained" className="w-1/3">
            Create
          </Button>
        </form>
      </div>

      <div>
        <div className="mt-8 text-center text-3xl">
          <label>List Bodyguard</label>
        </div>

        <div className="mt-6">
          <TableContract/>
        </div>

      </div>
    </div>
  );
};

export default AddContract;
