import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { MdOutlineCameraAlt } from "react-icons/md";
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

const AddBodyguard = () => {
  const [bodyguard, setBodyguard] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    certificate: null,
    experience: "",
    phone: "",
    service: "",
    state: "",
    city: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBodyguard({ ...bodyguard, [name]: value });
  };

  const handleFileUpload = (e) => {
    setBodyguard({ ...bodyguard, certificate: e.target.files[0] });
  };

  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle logic later
    console.log(bodyguard);
  };

  return (
    <div className="flex justify-center p-6 mt-20">
      <div className="w-4/6">
        <form
          className="bg-white rounded w-full max-w-4xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4">Add New bodyguard</h2>
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
                    value={bodyguard.firstName}
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
                    value={bodyguard.lastName}
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
                  value={bodyguard.email}
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
                  value={bodyguard.gender}
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
                    value={bodyguard.experience}
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
                    name="phone"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={bodyguard.phone}
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
                    value={bodyguard.service}
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
                    value={bodyguard.state}
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
                    size="small"
                    fullWidth
                    value={bodyguard.city}
                    onChange={handleChange}
                  />
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
                  value={bodyguard.password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: <LuPencil />,
                  }}
                />
              </div>
            </div>
          </div>

          <Button
            sx={{ color: "#fff", backgroundColor: "#000", borderRadius: 2 }}
            type="submit"
            variant="contained"
            className="w-1/4"
          >
            Create
          </Button>
        </form>
      </div>

      <div className="flex flex-col ml-12 w-36 h-36 items-center justify-center border p-4 bg-gray-300">
        <div className="relative mt-16 pt-3"  onChange={handleImageChange}>
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="p-4 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            {image ? (
              <img
                src={image}
                alt="User"
                className="rounded-full w-full h-full object-cover"
              />
            ) : (
              <FaRegCircleUser className="text-9xl text-gray-50 w-auto" />
            )}
            <div className="absolute bottom-6 flex items-center justify-center bg-white rounded-full p-1">
              <MdOutlineCameraAlt className="text-gray-600" />
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <p>User ID: CL001</p>
        </div>
      </div>
    </div>
  );
};

export default AddBodyguard;
