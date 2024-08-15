import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InputIconInside from '../../../components/Input/InputIconInside';
import { HiOutlinePencilSquare, HiOutlineCamera } from 'react-icons/hi2';
import Button from '../../../components/Button/Button';
import ButtonOutline from '../../../components/Button/ButtonOutline';
import InputSelect from '../../../components/Input/InputSelect';

const StyledFormControl = styled(FormControl)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gridColumn: 'span 2 / span 2'
});

const Profile = () => {
  const location = useLocation();
  const [value, setValue] = useState('female');

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

  return (
    <div className=" grid grid-cols-5 px-10 pb-10">
      <form action="" className=" col-span-3">
        <h2 className=" font-bold text-2xl my-5">Profile</h2>
        <div className=" grid-cols-2 grid gap-x-10 gap-y-2">
          <InputIconInside
            name={'First Name'}
            type={'text'}
            id={'firstname'}
            placeholder={'John'}
            icon={<HiOutlinePencilSquare />}
          />
          <InputIconInside
            name={'Last Name'}
            type={'text'}
            id={'lastname'}
            placeholder={'Mircle'}
            icon={<HiOutlinePencilSquare />}
          />
          <div className=" col-span-2">
            <InputIconInside
              name={'Email'}
              type={'email'}
              id={'email'}
              placeholder={'mirclejohn@gmail.com'}
              icon={<HiOutlinePencilSquare />}
            />
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

          <InputIconInside
            name={'Phone Number'}
            type={'tel'}
            id={'phoneNumber'}
            placeholder={'123456789'}
            icon={<HiOutlinePencilSquare />}
          />
          <InputIconInside
            name={'Password'}
            type={'password'}
            id={'password'}
            placeholder={'***************'}
            icon={<HiOutlinePencilSquare />}
          />
          {/* hidden when role=client */}
          {location.pathname !== '/profile' && (
            <>
              <InputIconInside
                name={'Certificate'}
                type={'text'}
                id={'certificate'}
                placeholder={'Enter link here'}
                icon={<HiOutlinePencilSquare />}
              />

              <InputIconInside
                name={'Experience'}
                type={'text'}
                id={'experience'}
                placeholder={'years'}
                icon={<HiOutlinePencilSquare />}
              />
            </>
          )}
          <InputSelect
            name={'state'}
            options={['Hilton', 'Option 2', 'Option 3']}
          />

          <InputSelect
            name={'city'}
            options={['New York', 'Option 2', 'Option 3']}
          />
        </div>
        <div className="flex mt-10 justify-between">
          <ButtonOutline name="Cancel" />
          <Button name="Save" />
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

export default Profile;
