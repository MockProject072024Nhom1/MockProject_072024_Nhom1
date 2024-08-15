import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { GoPencil } from "react-icons/go";
import { LuUploadCloud } from "react-icons/lu";
import TableContract from "../contract/TableContract";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
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
      ],
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex-1 pr-10 bg-white">
      <h2 className="text-lg font-bold mb-4 mt-24">Contracts (1)</h2>
      <div className="min-w-96 px-6 py-2 bg-white rounded-lg overflow-hidden">
        <TableContract />
      </div>

      <h2 className="text-xl font-bold mb-4 mt-12">Schedule</h2>
      <div className="flex mb-4 py-2 justify-end">
        <div className="flex gap-2">
          <Button
            variant="contained"
            sx={{
              width: "130px",
              borderRadius: 3,
            }}
          >
            Export
            <LuUploadCloud className="ml-2" />
          </Button>
          <Button
            variant="contained"
            sx={{
              marginLeft: 2,
              width: "130px",
              borderRadius: 3,
            }}
            onClick={() => navigate("/supervisor/schedule/edit")}
          >
            Edit
            <GoPencil className="ml-2" />
          </Button>
        </div>
      </div>

      <TableContainer className="pb-24 ">
        <Table className="border-2 border-black">
          <TableHead className="border-2 border-black">
            <TableRow className="border-2 border-black">
              <TableCell className="bg-white border-2 border-black">
                BODYGUARD
              </TableCell>
              <TableCell className="bg-yellow-300 border-2 border-black">
                MON <br /> 31/07/2024
              </TableCell>
              <TableCell className="bg-yellow-300 border-2 border-black">
                TUE <br /> 31/07/2024
              </TableCell>
              <TableCell className="bg-yellow-300 border-2 border-black">
                WED <br /> 31/07/2024
              </TableCell>
              <TableCell className="bg-yellow-300 border-2 border-black">
                THURS <br /> 31/07/2024
              </TableCell>
              <TableCell className="bg-yellow-300 border-2 border-black">
                FRI <br /> 31/07/2024
              </TableCell>
              <TableCell className="bg-yellow-300 border-2 border-black">
                SAT <br /> 31/07/2024
              </TableCell>
              <TableCell className="bg-yellow-300 border-2 border-black">
                SUN <br /> 31/07/2024
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleData.map((bodyguard, index) => (
              <TableRow
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-gray-100 border-2 border-black"
                    : "bg-white border-2 border-black"
                }
              >
                <TableCell className="bg-blue-200">{bodyguard.name}</TableCell>
                {bodyguard.hours.map((hour, idx) => (
                  <TableCell
                    key={idx}
                    sx={{
                      textAlign: "center",
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

export default Schedule;
