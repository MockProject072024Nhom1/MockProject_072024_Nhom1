import React, { useEffect, useState } from 'react';
import ModelCalendar from './ModelCalendar';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';
import {
  format,
  addDays,
  subWeeks,
  addWeeks,
  startOfWeek,
  endOfWeek
} from 'date-fns';
import { getSchedules } from '../../../api/apifunction';
import LeaveRequest from './LeaveRequest';

const Calendar = () => {
  const [toggle, setToggle] = useState(false);
  const [request, setRequest] = useState(false);
  const [contract, setContract] = useState([]);
  const [selectedContracts, setSelectedContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const data = await getSchedules();
        setContract(data);
      } catch (error) {
        console.error('Error fetching getSchedules:', error);
      }
    };

    fetchContracts();
  }, []);
  const handleRequest = () => {
    setRequest(!request);
  };

  // click contractId and show data from json have Id was click
  const handleToggle = (id) => {
    setToggle(!toggle);

    const updatedContracts = [];

    contract.forEach((day) => {
      const foundContracts = day.contracts.filter(
        (contract) => contract.id === id
      );
      if (foundContracts.length > 0) {
        updatedContracts.push(...foundContracts);
      }
    });

    setSelectedContracts(updatedContracts);
  };

  const [currentWeek, setCurrentWeek] = useState(new Date());

  const startDate = startOfWeek(currentWeek, { weekStartsOn: 1 }); // Week starts on Monday
  const endDate = endOfWeek(currentWeek, { weekStartsOn: 1 });

  // Generate the dates for the current week
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    weekDays.push(addDays(startDate, i));
  }

  const handlePrevWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1));
  };

  const handleNextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1));
  };

  const getDayData = (date) => {
    // Format the date to match the format used in your JSON data
    const formattedDate = format(date, 'yyyy-MM-dd');
    const dayData = contract.find((item) => item.date === formattedDate);
    return dayData ? dayData.contracts : [];
  };
  return (
    <div className={`relative `}>
      <div
        className={`mx-auto p-10 relative ${
          toggle || request ? 'blur-[2px]' : ''
        }`}
      >
        {/* nav for next and prev button */}
        <div className="flex  justify-between items-center mb-4">
          <div className=" flex flex-col">
            <h2 className="text-xl font-bold">Calendar</h2>
            <div>{format(startDate, 'MMMM, yyyy')}</div>
          </div>
          <div className=" flex gap-3">
            <button
              className=" p-3 rounded-full mx-auto bg-gray-200"
              onClick={handlePrevWeek}
            >
              <HiChevronLeft size={26} />
            </button>
            <button
              className=" p-3 rounded-full mx-auto bg-gray-200"
              onClick={handleNextWeek}
            >
              <HiChevronRight size={26} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
            (day, index) => (
              <div
                key={index}
                className="text-center font-bold py-2 bg-yellow-200"
              >
                {day.toUpperCase()}
              </div>
            )
          )}
          {weekDays.map((day, index) => {
            const contracts = getDayData(day);
            return (
              <div key={index}>
                <div className=" text-center border-b-2 py-2 bg-slate-400">
                  {format(day, 'dd')}
                </div>
                <div className="flex flex-col space-y-1 mt-2">
                  {contracts.map((contract, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-md text-center cursor-pointer ${
                        contract.id === 'Day off'
                          ? 'bg-red'
                          : contract.id === 'Pending'
                          ? 'bg-blue-400'
                          : 'bg-blue-100'
                      }`}
                      onClick={() => handleToggle(contract.id)}
                    >
                      <div className="font-bold text-lg ">{contract.id}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          {/* Filling up the rest of the grid for aesthetic purposes */}
        </div>
        <button
          className="mt-4 bg-blue-500 text-white p-2 rounded-md"
          onClick={handleRequest}
        >
          + Request
        </button>
      </div>
      {toggle && (
        <ModelCalendar data={selectedContracts} onClick={handleToggle} />
      )}
      {request && <LeaveRequest onClick={handleRequest} />}
    </div>
  );
};

export default Calendar;
