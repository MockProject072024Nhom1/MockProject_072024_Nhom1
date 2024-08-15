import React, { useState } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';

const ModelCalendar = ({ onClick, data }) => {
  console.log(data);

  return (
    // model display detail calendar of bodyguard
    <div className=" bg-slate-200 px-20 py-10 rounded-xl w-[850px] absolute z-10 top-1/2 left-1/2 -translate-x-1/2">
      <h2 className="text-xl font-bold text-center mb-4 ">Calendar</h2>
      <div
        className=" absolute bg-white top-1 right-1 rounded-full cursor-pointer"
        onClick={onClick}
      >
        <HiMiniXMark size={30} />
      </div>
      <div className=" flex  flex-col border rounded-lg">
        <ul className=" grid grid-cols-5 bg-red justify-between text-center items-center text-white  rounded-t-lg  text-xl font-medium">
          <li className="border py-5 rounded-tl-lg">Start Day</li>
          <li className="border py-5">Finish Day</li>
          <li className="border py-5">Time</li>
          <li className="border py-5 rounded-tr-lg col-span-2">Venue</li>
        </ul>
        {data.map((item, index) => (
          <ul
            key={index}
            className=" grid grid-cols-5 bg-white justify-between text-center items-center text-black rounded-b-lg  text-xl font-medium"
          >
            <li className=" border py-5 rounded-bl-lg">{item.startdate}</li>
            <li className=" border py-5 ">{item.finishdate}</li>
            <li className=" border py-5 ">{item.time}</li>
            <li className=" border py-5 rounded-br-lg col-span-2">
              {item.venue}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ModelCalendar;
