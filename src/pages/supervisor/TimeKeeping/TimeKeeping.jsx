import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  MenuItem,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import { TfiMenuAlt } from 'react-icons/tfi';
import { FaPlus } from 'react-icons/fa';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Statistics from './Statistics';
import InputSelect from '../../../components/Input/InputSelect';
import TimeTable from '../../../components/TimeTable/TimeTable';

const TimeKeeping = () => {
  const scheduleData = [
    {
      name: 'John William',
      hours: [
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00']
      ]
    },
    {
      name: 'Nick William',
      hours: [
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00']
      ]
    },
    {
      name: 'Nick William',
      hours: [
        ['18:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00']
      ]
    },
    {
      name: 'John William',
      hours: [
        ['08:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['09:00', '18:00'],
        ['', '']
      ]
    }
  ];
  const data = [
    {
      sub: '11/07/2024',
      title: 'Mon'
    },
    {
      sub: '12/07/2024',
      title: 'Tue'
    },
    {
      sub: '13/07/2024',
      title: 'Wed'
    },
    {
      sub: '14/07/2024',
      title: 'Thu'
    },
    {
      sub: '15/07/2024',
      title: 'Fri'
    },
    {
      sub: '16/07/2024',
      title: 'Sat'
    },
    {
      sub: '17/07/2024',
      title: 'Sun'
    }
  ];

  const [selectedCell, setSelectedCell] = useState(null);
  const [schedule, setSchedule] = useState(scheduleData);
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [openRequestModal, setOpenRequestModal] = useState(false);

  const handleOpenRequestModal = () => setOpenRequestModal(true);
  const handleCloseRequestModal = () => setOpenRequestModal(false);

  const handleCellClick = (rowIndex, cellIndex) => {
    setSelectedCell({ rowIndex, cellIndex });
  };

  const handleAddTime = () => {
    if (selectedCell) {
      const { rowIndex, cellIndex } = selectedCell;
      const hour = scheduleData[rowIndex].hours[cellIndex];

      if (hour) {
        setStartTime(hour[0]);
        setEndTime(hour[1]);
      } else {
        setStartTime('');
        setEndTime('');
      }

      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (selectedCell) {
      const { rowIndex, cellIndex } = selectedCell;
      const updatedSchedule = [...schedule];
      updatedSchedule[rowIndex].hours[cellIndex] = [startTime, endTime];

      setSchedule(updatedSchedule);
      setOpen(false);

      setSelectedCell(null);
      setStartTime('');
      setEndTime('');
    }
  };

  return (
    <div className="ml-10">
      <div className=" bg-white">
        <h2 className="text-xl font-bold mt-24">Time Keeping</h2>

        <div className="p-6 bg-blue-50 rounded-lg">
          <div className="flex justify-between items-center mb-8">
            <div className="flex justify-center items-center space-x-8">
              <InputSelect name="" options={['CT001', 'CT002']} />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={['DatePicker', 'DatePicker', 'DatePicker']}
                >
                  <DatePicker
                    views={['month', 'year']}
                    sx={{
                      width: 350,
                      height: 40,
                      textAlign: 'center',
                      border: '2px solid black',
                      borderRadius: 4,
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none'
                      },
                      '& input': {
                        color: '#007BFF',
                        padding: '6px 12px'
                      }
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className="flex gap-2">
              <FaRegArrowAltCircleLeft className="text-2xl mr-4" />

              <FaRegArrowAltCircleRight className="text-2xl mr-4" />
            </div>
          </div>

          {/* table */}
          <TimeTable
            scheduleData={schedule}
            calendarData={data}
            name="bodyguard"
          />

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <div className="flex items-center justify-center h-screen bg-gray-200 bg-opacity-50">
              <div className="bg-white rounded-lg w-2/6 p-6 relative">
                <IoIosCloseCircleOutline
                  onClick={handleClose}
                  className="absolute text-2xl top-2 right-2 cursor-pointer"
                />

                <div className="flex items-center mb-4 mt-4 font-bold">
                  <Checkbox />
                  <span className="font-bold mr-4">Work Time:</span>
                  <TextField
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="mx-2"
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none'
                      }
                    }}
                  />
                  <span>-</span>
                  <TextField
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="mx-2"
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none'
                      }
                    }}
                  />
                </div>
                <div className="flex items-center mb-4 font-bold">
                  <Checkbox />
                  <span>Day Off</span>
                </div>
                <div className="flex items-center justify-center ">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      color: '#000',
                      backgroundColor: '#66FFCC',
                      width: '30%',
                      borderRadius: 2,
                      fontWeight: 'bold'
                    }}
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      <div>
        <Statistics />
      </div>
    </div>
  );
};

export default TimeKeeping;
