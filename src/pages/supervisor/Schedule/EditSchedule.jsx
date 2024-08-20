import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
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
// import RequestModal from './RequestModal';
import { getSchedules } from '../../../api/apifunction';
import TimeTable from '../../../components/TimeTable/TimeTable';

const EditSchedule = () => {
  const [calendar, setCalendar] = useState([]);
  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const data = await getSchedules();
        setCalendar(data);
      } catch (error) {
        console.error('Error fetching getSchedules:', error);
      }
    };

    fetchContracts();
  }, []);
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
    <div className="flex-1 pr-10 bg-white">
      <h2 className="text-xl font-bold mt-24">Schedule</h2>
      <div className="flex mb-2 py-2 justify-end">
        <div className="flex gap-2">
          <Button
            variant="contained"
            sx={{
              width: '130px',
              borderRadius: 3
            }}
            onClick={handleOpenRequestModal}
          >
            <TfiMenuAlt className="mr-2" />
            Request
          </Button>
          {/* <RequestModal
            open={openRequestModal}
            handleClose={handleCloseRequestModal}
          /> */}
          <Button
            variant="contained"
            sx={{
              marginLeft: 2,
              width: '130px',
              borderRadius: 3
            }}
            onClick={handleAddTime}
          >
            <FaPlus className="mr-2" />
            Add Time
          </Button>
        </div>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg">
        <div className="flex justify-between items-center mb-8">
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

          <div className="flex gap-2">
            <FaRegArrowAltCircleLeft className="text-2xl mr-4" />

            <FaRegArrowAltCircleRight className="text-2xl mr-4" />
          </div>
        </div>

        <TimeTable scheduleData={scheduleData} calendarData={data} />

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
  );
};

export default EditSchedule;
