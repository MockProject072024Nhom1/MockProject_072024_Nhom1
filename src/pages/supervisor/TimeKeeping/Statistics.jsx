import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import InputSelect from '../../../components/Input/InputSelect';
import TimeTable from '../../../components/TimeTable/TimeTable';

const Statistics = () => {
  const scheduleData = [
    {
      name: 'John William',
      hours: [
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
        ['09:00', '18:00']
      ]
    },
    {
      name: 'Nick William',
      hours: [
        ['18:00', '18:00'],
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
        ['09:00', '18:00']
      ]
    }
  ];
  const data = [
    {
      title: ' Real Work Time'
    },
    {
      title: 'Scheduled Work Time'
    },
    {
      title: 'Hours Of Lateness'
    },
    {
      title: 'Overtime Hours'
    },
    {
      title: 'Paid Hours'
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
    <div className="flex-1  bg-white">
      <h2 className="text-xl font-bold mt-24">Statistics</h2>

      <div className="p-6 bg-blue-50 rounded-lg">
        <div className="flex justify-start items-center space-x-8 mb-8">
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

          <InputSelect name="" options={['CT001', 'CT002']} />
        </div>
        <TimeTable
          scheduleData={schedule}
          calendarData={data}
          name="bodyguard"
        />
      </div>
    </div>
  );
};

export default Statistics;
