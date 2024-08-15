import React, { useState } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';

const LeaveRequest = ({ onClick }) => {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    // Handle the submit logic here
    console.log({
      date,
      startTime,
      endTime,
      leaveType,
      note
    });
  };

  return (
    <div className="w-[500px] mx-auto p-6 bg-white shadow-lg rounded-lg absolute z-10 top-[10%] left-1/2 -translate-x-1/2">
      <h2 className="text-xl font-semibold mb-4">Request: John William</h2>
      <div
        className=" absolute bg-white top-1 right-1 rounded-full cursor-pointer"
        onClick={onClick}
      >
        <HiMiniXMark size={30} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Select Date</label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Start Time</label>
          <input
            type="time"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700">End Time</label>
          <input
            type="time"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Leave Type</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          placeholder="Reason off"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Reason</label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          rows="3"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write detail reason for off"
        />
      </div>
      <button
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </div>
  );
};

export default LeaveRequest;
