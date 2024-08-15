import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnTwoToneIcon from '@mui/icons-material/ToggleOnTwoTone';

const initialRows = [
  {
    id: 1,
    fullName: "John William",
    date: "08/08/2024",
    time: "09:00 - 18:00",
    subject: "Sick Leave",
    reason: "I'd like to take a day off",
    permission: "Active",
  },
  {
    id: 2,
    fullName: "Jane Doe",
    date: "08/09/2024",
    time: "09:00 - 18:00",
    subject: "Annual Leave",
    reason: "Family trip",
    permission: "Inactive",
  },
  {
    id: 3,
    fullName: "Alice Smith",
    date: "08/10/2024",
    time: "09:00 - 18:00",
    subject: "Personal Leave",
    reason: "Medical appointment",
    permission: "Active",
  },
  {
    id: 4,
    fullName: "Bob Johnson",
    date: "08/11/2024",
    time: "09:00 - 18:00",
    subject: "Sick Leave",
    reason: "Fever",
    permission: "Inactive",
  },
];

export default function TableSchedule() {
  const [rows, setRows] = useState(initialRows);

  const togglePermission = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? { ...row, permission: row.permission === "Active" ? "Inactive" : "Active" }
          : row
      )
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "fullName", headerName: "Name", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
    { field: "time", headerName: "Time", width: 200 },
    { field: "subject", headerName: "Subject", width: 200 },
    { field: "reason", headerName: "Reason", width: 250 },
    {
      field: "permission",
      headerName: "Permission",
      width: 130,
      renderCell: (params) => {
        const isActive = params.value === "Active";
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              e.stopPropagation(); 
              togglePermission(params.id);
            }}
          >
            {isActive ? (
              <ToggleOnTwoToneIcon style={{ color: '#99FF99', fontSize: "45px" }} />
            ) : (
              <ToggleOffOutlinedIcon style={{ color: '#000', fontSize: "45px", }} />
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        columnVisibilityModel={{
          id: false,
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}