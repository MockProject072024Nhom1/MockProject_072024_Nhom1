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
import Statistics from "./Statistics";

const TimeKeeping = () => {
  const scheduleData = [
    {
      name: "John William",
      hours: [
        ["09:00", "18:00"],
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
        ["09:00", "18:00"],
        ["09:00", "18:00"],
        ["", ""],
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
    <div>
      <div className="flex-1 pr-10 bg-white">
        <h2 className="text-xl font-bold mt-24">Time Keeping</h2>

        <div className="p-6 bg-blue-50 rounded-lg">
          <div className="flex justify-between items-center mb-8">
            <div className="flex justify-center items-center space-x-8">
              <TextField
                name="paymentStatus"
                select
                variant="outlined"
                size="small"
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
                <MenuItem value="CT001">CT002</MenuItem>
              </TextField>

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
            </div>

            <div className="flex gap-2">
              <FaRegArrowAltCircleLeft className="text-2xl mr-4" />

              <FaRegArrowAltCircleRight className="text-2xl mr-4" />
            </div>
          </div>

          <TableContainer className="pb-24 ">
            <Table className="border-2 border-black" sx={{ width: 370, height: 170 }}>
              <TableHead className="border-2 border-black">
                <TableRow className="border-2 border-black" sx={{ width: 100, height: 30 }}>
                  <TableCell sx={{ width: 100, height: 30 }} className="bg-white border-2 border-black">
                    BODYGUARD
                  </TableCell>
                  <TableCell sx={{ width: 100, height: 30 }} className="bg-yellow-300 border-2 border-black">
                    MON <br /> 31/07/2024
                  </TableCell>
                  <TableCell sx={{ width: 100, height: 30 }} className="bg-yellow-300 border-2 border-black">
                    TUE <br /> 31/07/2024
                  </TableCell>
                  <TableCell sx={{ width: 100, height: 30 }} className="bg-yellow-300 border-2 border-black">
                    WED <br /> 31/07/2024
                  </TableCell>
                  <TableCell sx={{ width: 100, height: 30 }} className="bg-yellow-300 border-2 border-black">
                    THURS <br /> 31/07/2024
                  </TableCell>
                  <TableCell sx={{ width: 100, height: 30 }} className="bg-yellow-300 border-2 border-black">
                    FRI <br /> 31/07/2024
                  </TableCell>
                  <TableCell sx={{ width: 100, height: 30 }} className="bg-yellow-300 border-2 border-black">
                    SAT <br /> 31/07/2024
                  </TableCell>
                  <TableCell sx={{ width: 100, height: 30 }} className="bg-yellow-300 border-2 border-black">
                    SUN <br /> 31/07/2024
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
                    <TableCell sx={{ width: 100, height: 30 }} className="bg-blue-200">
                      {bodyguard.name}
                    </TableCell>
                    {bodyguard.hours.map((hour, cellIndex) => (
                      <TableCell
                        key={cellIndex}
                        sx={{ textAlign: "center", width: 50, height: 30 }}
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
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    }}
                  />
                  <span>-</span>
                  <TextField
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)} 
                    className="mx-2"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
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
                      color: "#000",
                      backgroundColor: "#66FFCC",
                      width: "30%",
                      borderRadius: 2,
                      fontWeight: "bold",
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
