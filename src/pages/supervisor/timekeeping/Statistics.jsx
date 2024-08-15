import React, { useState } from "react";
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
  TextField,
} from "@mui/material";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Statistics = () => {
  const scheduleData = [
    {
      name: "John William",
      hours: [
        ["09:00", "18:00"],
        ["09:00", "18:00"],
        ["09:00", "18:00"],
        ["09:00", "18:00"],
        ["09:00", "18:00"],
      ],
    },
    {
      name: "Nick William",
      hours: [
        ["09:00", "18:00"],
        ["09:00", "18:00"],
        ["09:00", "18:00"],
        ["09:00", "18:00"],
        ["09:00", "18:00"],
      ],
    },
    {
      name: "Nick William",
      hours: [
        ["18:00", "18:00"],
        ["09:00", "18:00"],
        ["09:00", "18:00"],
        ["09:00", "18:00"],
      ],
    },
    {
      name: "John William",
      hours: [
        ["08:00", "18:00"],
        ["09:00", "18:00"],
        ["09:00", "18:00"],
        ["09:00", "18:00"],
      ],
    },
  ];

  const [selectedCell, setSelectedCell] = useState(null); 
  const [schedule, setSchedule] = useState(scheduleData);
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

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
        setStartTime("");
        setEndTime("");
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
      setStartTime("");
      setEndTime("");
    }
  };

  return (
    <div className="flex-1 pr-10 bg-white">
      <h2 className="text-xl font-bold mt-24">Statistics</h2>

      <div className="p-6 bg-blue-50 rounded-lg">
        <div className="flex justify-start items-center space-x-8 mb-8">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker", "DatePicker", "DatePicker"]}
            >
              <DatePicker
                views={["month", "year"]}
                sx={{
                  width: 350,
                  height: 40,
                  textAlign: "center",
                  border: "2px solid black",
                  borderRadius: 4,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& input": {
                    color: "#007BFF",
                    padding: "6px 12px",
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>

          <TextField
            name="paymentStatus"
            select
            variant="outlined"
            size="small"
            value="CT001"
            sx={{
              width: 200,
              height: 40,
              marginTop: "6px",
              border: "2px solid black",
              borderRadius: 4,
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& input": {
                color: "#007BFF",
                padding: "6px 12px",
              },
            }}
          >
            <MenuItem value="CT001">CT001</MenuItem>
            <MenuItem value="CT002">CT002</MenuItem>
          </TextField>
        </div>

        <TableContainer className="pb-24 ">
          <Table className="border-2 border-black">
            <TableHead className="border-2 border-black">
              <TableRow className="border-2 border-black">
                <TableCell className="bg-white border-2 border-black">
                  BODYGUARD
                </TableCell>
                <TableCell className="bg-yellow-300 border-2 border-black">
                  Real <br /> Work Time
                </TableCell>
                <TableCell className="bg-yellow-300 border-2 border-black">
                  Scheduled <br /> Work Time
                </TableCell>
                <TableCell className="bg-yellow-300 border-2 border-black">
                  Hour Of <br /> Lateness
                </TableCell>
                <TableCell className="bg-yellow-300 border-2 border-black">
                  Overtime <br /> Hours
                </TableCell>
                <TableCell className="bg-yellow-300 border-2 border-black">
                  Paid <br /> Hours
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((bodyguard, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className={
                    rowIndex % 2 === 0
                      ? "bg-gray-100 border-2 border-black"
                      : "bg-white border-2 border-black"
                  }
                >
                  <TableCell className="bg-blue-200">
                    {bodyguard.name}
                  </TableCell>
                  {bodyguard.hours.map((hour, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      sx={{ textAlign: "center" }}
                      className="border-2 border-gray-300"
                      style={{
                        border:
                          selectedCell?.rowIndex === rowIndex &&
                          selectedCell?.cellIndex === cellIndex
                            ? "2.5px solid black"
                            : "2px solid gray",
                      }}
                      onClick={() => handleCellClick(rowIndex, cellIndex)}
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
    </div>
  );
};

export default Statistics;
