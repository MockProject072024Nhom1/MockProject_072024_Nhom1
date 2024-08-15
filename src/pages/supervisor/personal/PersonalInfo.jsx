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

const PersonalInfo = () => {
  const initialSupervisorData = {
    firstName: "John",
    lastName: "Mircle",
    email: "Mircle@gmail.com",
    gender: "male",
    certificate: null,
    experience: "5 years",
    phoneNumber: "123456789",
    service: "Event Security",
    state: "John",
    city: "Mircle",
    password: "***************",
  };

  const [isModified, setIsModified] = useState(false); 
  const [supervisor, setSupervisor] = useState(initialSupervisorData);
  const [originalSupervisor, setOriginalSupervisor] = useState(
    initialSupervisorData
  ); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupervisor({ ...supervisor, [name]: value });
    setIsModified(true); 
  };

  const handleFileUpload = (e) => {
    setSupervisor({ ...supervisor, certificate: e.target.files[0] });
    setIsModified(true); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(supervisor);
  };

  const handleCancel = () => {
    setSupervisor(originalSupervisor); 
    setIsModified(false); 
  };

  return (
    <div className="flex justify-center p-4 mt-20">
      <div className="w-4/6 mr-20">
        <form
          className="bg-white rounded w-full max-w-4xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
          <div className="flex gap-4">
            <div className="w-11/12">
              <div className="flex gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">First Name</label>
                  <TextField
                    name="firstName"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={supervisor.firstName}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: <LuPencil />,
                    }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Last Name</label>
                  <TextField
                    name="lastName"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={supervisor.lastName}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: <LuPencil />,
                    }}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium mb-1">Email</label>
                <TextField
                  name="email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.email}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: <LuPencil />,
                  }}
                />
              </div>

              <div className="mt-2 flex items-center gap-4">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={supervisor.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </div>

              <div className="mt-2 flex gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">
                    Certificate
                  </label>
                  <Button
                    variant="outlined"
                    component="label"
                    fullWidth
                    style={{ height: "40px" }}
                  >
                    <FaUpload className="mr-2" />
                    Upload Certificate
                    <input type="file" hidden onChange={handleFileUpload} />
                  </Button>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Experience</label>
                  <TextField
                    name="experience"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={supervisor.experience}
                    onChange={handleChange}
                  />
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
                  <label className="text-sm font-medium mb-1">State</label>
                  <TextField
                    name="state"
                    select
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={supervisor.state}
                    onChange={handleChange}
                  >
                    <MenuItem value="John">John</MenuItem>
                    <MenuItem value="Doe">Doe</MenuItem>
                  </TextField>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">City</label>
                  <TextField
                    name="city"
                    variant="outlined"
                    select
                    size="small"
                    fullWidth
                    value={supervisor.city}
                    onChange={handleChange}
                  >
                    <MenuItem value="John">Mircle</MenuItem>
                    <MenuItem value="Doe">New York</MenuItem>
                  </TextField>
                </div>
              </div>

              <div className="flex flex-col w-full mt-4 mb-4">
                <label className="text-sm font-medium mb-1">Password</label>
                <TextField
                  name="password"
                  type="password"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={supervisor.password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: <LuPencil />,
                  }}
                />
              </div>
            </div>
          </div>

          {isModified && (
            <div className="mt-4">
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  width: "17%",
                  borderRadius: 2,
                  border: "2px solid black",
                }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginLeft: 4,
                  color: "white",
                  backgroundColor: "black",
                  width: "17%",
                  borderRadius: 2,
                }}
                onClick={() => console.log("Edit button clicked")}
              >
                Edit
              </Button>
            </div>
          )}
        </form>
      </div>

      <div className="flex flex-col  border-w border-black">
        <div className="flex flex-col w-24 h-24 ml-16 items-center justify-center border p-4 bg-gray-300">
          <div className="p-4 rounded-full w-24 h-12 mt-3 flex items-center justify-center mb-4  border-4 border-gray-300">
            <FaRegCircleUser className="text-9xl text-gray-50 w-auto" />
          </div>
        </div>
        <div className="text-center mt-2 ml-1 items-center justify-center">
          <p>User ID: CL001</p>
        </div>

        <div className="flex flex-col  ml-2 mt-8 items-center justify-center p-4">
          <div className="text-center  ">
            <p>My QR</p>
          </div>
          <div className="p-4 w-44 h-44 mt-3 flex items-center justify-center mb-4 bg-gray-300 border border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
