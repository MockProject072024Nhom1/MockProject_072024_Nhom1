import React from 'react';
import Button from '../../../components/Button/Button';
import InputService from './InputService';
import InputDate from './InputDate';
import InputSelect from '../../../components/Input/InputSelect';
import Slider from '../../../components/Slider/Slider';

const Service = () => {
  return (
    <div className="  pb-20 ">
      <Slider />
      {/* form fill infor contract of client */}
      <form action="" className=" px-20 ">
        <div className="flex flex-col gap-4 px-20 py-10 bg-[#515151]  rounded-lg">
          <InputSelect
            options={['Event', 'Personal', 'Shopping Mall']}
            name="Service"
          />

          <div className=" grid grid-cols-2 gap-5">
            <InputDate name="Start date" type="date" id="startdate" />
            <InputDate name="End date" type="date" id="endate" />
          </div>
          <div className=" grid grid-cols-2 gap-5">
            <InputService
              name="Man quantity"
              type="text"
              placeholder={0}
              id="manquantity"
            />
            <InputService
              name="Woman quantity"
              type="text"
              placeholder={0}
              id="womanquantity"
            />
          </div>
          <InputService
            name="Venue"
            type="text"
            placeholder={'Add your address'}
            id="venue"
          />

          <div className=" flex flex-col">
            <div className=" text-black font-semibold text-[18px]">
              <label
                htmlFor="requirement"
                color="blue-gray"
                className=" font-semibold"
              >
                Requirement
              </label>
            </div>

            <textarea
              type="text"
              id="requirement"
              name="requirement"
              className="h-[100px] overflow-hidden mt-2 block w-full border px-3 py-2 rounded-lg focus-within:border-2 focus-within:border-gray-900 text-black border-black "
            />
          </div>
        </div>
        <div className=" flex justify-center items-center mt-5">
          <Button name="Hire us" />
        </div>
      </form>
    </div>
  );
};

export default Service;
