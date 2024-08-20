import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { GoPencil } from 'react-icons/go';
import { LuUploadCloud } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import ContractCpn from '../../../components/Contract/ContractCpn';
import TimeTable from '../../../components/TimeTable/TimeTable';

const Schedule = () => {
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
        ['09:00', '18:00']
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

  const navigate = useNavigate();

  return (
    <div className=" pr-10 p-10 bg-white">
      <ContractCpn name1="Supervisor" value1={'supervisor'} />

      <div className=" ">
        <h2 className="text-xl font-semibold mb-4 mt-12">Schedule</h2>
        <div className="flex mb-4 py-2 justify-end">
          <div className="flex gap-2">
            <Button
              variant="contained"
              sx={{
                width: '130px',
                borderRadius: 3
              }}
            >
              Export
              <LuUploadCloud className="ml-2" />
            </Button>
            <Button
              variant="contained"
              sx={{
                marginLeft: 2,
                width: '130px',
                borderRadius: 3
              }}
              onClick={() => navigate('/edit-schedule-supervisor')}
            >
              Edit
              <GoPencil className="ml-2" />
            </Button>
          </div>
        </div>

        <TimeTable
          scheduleData={scheduleData}
          calendarData={data}
          name="bodyguard"
        />
      </div>
    </div>
  );
};

export default Schedule;
