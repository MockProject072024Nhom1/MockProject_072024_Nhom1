import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

const TimeTable = ({ scheduleData, calendarData, name }) => {
  return (
    <div>
      <TableContainer className="pb-24 px-10">
        <Table className="border-2 border-black">
          <TableHead className="border-2 border-black">
            <TableRow className="border-2 border-black">
              <TableCell className="bg-white border-2 border-black uppercase">
                {name}
              </TableCell>
              {calendarData.map((item, index) => (
                <TableCell
                  key={index}
                  className="bg-yellow-300 border-2 border-black"
                >
                  {item.title} <br /> {item.sub}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleData.map((bodyguard, index) => (
              <TableRow
                key={index}
                className={
                  index % 2 === 0
                    ? 'bg-gray-100 border-2 border-black'
                    : 'bg-white border-2 border-black'
                }
              >
                <TableCell className="bg-blue-200">{bodyguard.name}</TableCell>
                {bodyguard.hours.map((hour, idx) => (
                  <TableCell
                    key={idx}
                    sx={{
                      textAlign: 'center'
                    }}
                    className="border-2 border-black"
                  >
                    {hour[0]}
                    <br />
                    {hour[1]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TimeTable;
