import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  TextField,
  MenuItem
} from '@mui/material';

import { styled } from '@mui/material/styles';
import { HiOutlineCamera } from 'react-icons/hi2';
import ButtonCpn from '../../components/Button/Button';
import ButtonOutline from '../../components/Button/ButtonOutline';
import { FaUpload } from 'react-icons/fa6';
import { LuPencil } from 'react-icons/lu';

const StyledFormControl = styled(FormControl)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gridColumn: 'span 2 / span 2'
});

const ProfileForm = ({ titleName, buttonName }) => {
  const location = useLocation();
  const [value, setValue] = useState('female');
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);

  //change state and city
  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    const selectedStateData = apiAddress.find((item) => item.state === state);
    setCities(selectedStateData ? selectedStateData.cities : []);
  };

  // change gender
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [avatar, setAvatar] = useState('https://via.placeholder.com/150');
  const fileInputRef = useRef(null);

  const handleChangeAvatar = () => {
    fileInputRef.current.click();
  };

  // select avt from computer
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const apiAddress = [
    {
      state: 'California',
      cities: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento']
    },
    {
      state: 'Texas',
      cities: ['Houston', 'Dallas', 'Austin', 'San Antonio']
    },
    {
      state: 'New York',
      cities: ['New York City', 'Buffalo', 'Rochester', 'Albany']
    },
    {
      state: 'Florida',
      cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville']
    },
    {
      state: 'Illinois',
      cities: ['Chicago', 'Springfield', 'Naperville', 'Peoria']
    }
  ];

  return (
    <div className=" grid grid-cols-5 px-10 pb-10 ml-10">
      <form action="" className=" col-span-3">
        <h2 className=" font-bold text-2xl my-5">{titleName}</h2>
        <div className=" grid-cols-2 grid gap-x-10 gap-y-2">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium mb-1">First Name</label>
            <TextField
              name="firstName"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: <LuPencil />
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
              InputProps={{
                endAdornment: <LuPencil />
              }}
            />
          </div>
          <div className=" col-span-2 grid grid-cols-2 gap-x-10">
            <div className="">
              <label className="text-sm font-medium mb-1">Email</label>
              <TextField
                name="email"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: <LuPencil />
                }}
              />
            </div>
            {location.pathname !== '/profile' && (
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium mb-1">Service</label>
                <TextField
                  name="service"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: <LuPencil />
                  }}
                />
              </div>
            )}
          </div>
          <StyledFormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{
                fontWeight: '600',
                fontSize: '1rem',
                color: '#000',
                fontFamily: 'Montserrat'
              }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={value}
              onChange={handleChange}
              style={{ marginLeft: '10px' }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </StyledFormControl>

          <div className="flex flex-col w-full">
            <label className="text-sm font-medium mb-1">Phone Number</label>
            <TextField
              name="phone"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: <LuPencil />
              }}
            />
          </div>
          <div className="flex flex-col w-full ">
            <label className="text-sm font-medium mb-1">Password</label>
            <TextField
              name="password"
              type="password"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: <LuPencil />
              }}
            />
          </div>
          {/* hidden when role=client */}
          {location.pathname !== '/profile' && (
            <>
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium mb-1">Certificate</label>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  style={{ height: '40px' }}
                >
                  <FaUpload className="mr-2" />
                  Upload Certificate
                  <input type="file" hidden />
                </Button>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm font-medium mb-1">Experience</label>
                <TextField
                  name="experience"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: <LuPencil />
                  }}
                />
              </div>
            </>
          )}

          <div className="flex flex-col w-full">
            <label className="text-sm font-medium mb-1">State</label>
            <TextField
              name="state"
              select
              variant="outlined"
              size="small"
              fullWidth
              value={selectedState}
              onChange={handleStateChange}
            >
              {apiAddress.map((item, index) => (
                <MenuItem value={item.state} key={index}>
                  {item.state}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium mb-1">City</label>
            <TextField
              name="city"
              select
              variant="outlined"
              size="small"
              fullWidth
              value=""
            >
              {cities.map((city, index) => (
                <MenuItem value={city} key={index}>
                  {city}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div className="flex mt-10 justify-between">
          <ButtonOutline name="Cancel" />
          <ButtonCpn name={buttonName} />
        </div>
      </form>
      <div className=" col-span-2  mt-10">
        <div className="relative flex justify-center">
          <img
            src={avatar}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-2 border-gray-300"
          />
          <button
            onClick={handleChangeAvatar}
            className="absolute top-[78%] bg-white p-1 text-black text-sm rounded-full "
          >
            <HiOutlineCamera size={20} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
        <h2 className=" text-center mt-5 font-medium">User ID: CL001</h2>
        {location.pathname !== '/profile' && (
          <div className="mt-10 ">
            <h2 className=" text-center mt-5 font-medium">My QR</h2>
            <div className="flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
