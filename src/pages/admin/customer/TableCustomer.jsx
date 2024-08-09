import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

const columns = [
  { field: "id", headerName: "Bodyguard ID", width: 130 },
  { field: "fullName", headerName: "Full Name", width: 130 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "address", headerName: "Address", width: 150 },
  { field: "phone", headerName: "Phone Number", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "experience", headerName: "Experience", width: 150 },
  { field: "supervisor", headerName: "Supervisor", width: 150 },
  {
    field: "bodyguard_status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => (
      <Chip
        label={
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor:
                  params.value === "Active" ? "green" : "lightgray",
                marginRight: 5,
              }}
            />
            {params.value}
          </div>
        }
        style={{
          backgroundColor: params.value === "Active" ? "#e0f7fa" : "#f0f0f0",
          borderRadius: "24px",
          border: "1px solid white",
        }}
        variant="outlined"
      />
    ),
  },
  {
    field: "edit",
    headerName: "",
    width: 50,
    renderCell: () => (
      <EditIcon
        style={{ cursor: "pointer" }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      />
    ),
  },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];

const rows = [
  {
    id: "BG001",
    fullName: "John",
    firstName: "Jon",
    gender: "Male",
    address: "Seattle",
    phone: "889977",
    email: "John@gmail.com",
    experience: "Firearm certification",
    supervisor: "William",
    bodyguard_status: "Active",
  },
  {
    id: "Bold text column",
    fullName: "Bold text column",
    firstName: "Regular text column",
    gender: "Regular text column",
    address: "Regular text column",
    phone: "Regular text column",
    email: "Regular text column",
    experience: "Regular text column",
    supervisor: "Regular text column",
    bodyguard_status: "Inactive",
  },
];

export default function TableCustomer() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
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
