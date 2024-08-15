import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// const rows = [
//   {
//     id: "BG001",
//     fullName: "John",
//     gender: "Male",
//     address: "Seattle",
//     phone: "889977",
//     email: "John@gmail.com",
//     service: "Firearm certification",
//     contract: "William",
//     customer_status: "Active",
//   },
//   {
//     id: "BG002",
//     fullName: "Jane Doe",
//     gender: "Female",
//     address: "New York",
//     phone: "123456",
//     email: "jane@example.com",
//     service: "Martial Arts",
//     contract: "Mark",
//     customer_status: "Inactive",
//   },
// ];

export default function TableCustomer({
  selectedRows,
  setSelectedRows,
  rows,
  setRows,
}) {
  const handleRowSelection = (newSelection) => {
    const selectedIds = newSelection;
    setSelectedRows(selectedIds);
    console.log(`Selected IDs: ${selectedIds}`); 
  };

  const columns = [
    { field: "id", headerName: "Customer ID", width: 110 },
    { field: "fullName", headerName: "Full Name", width: 110 },
    { field: "gender", headerName: "Gender", width: 110 },
    { field: "address", headerName: "Address", width: 130 },
    { field: "phone", headerName: "Phone Number", width: 130 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "service", headerName: "Service", width: 140 },
    { field: "contract", headerName: "Contract", width: 120 },
    {
      field: "customer_status",
      headerName: "Status",
      width: 110,
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
  ];
  return (
    <div style={{ height: 400, width: "1230px" }}>
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
        onRowSelectionModelChange ={handleRowSelection}

        sx={{
          "& .MuiDataGrid-cell": {
            fontSize: "0.875rem",
          },
          "& .MuiDataGrid-columnHeader": {
            fontSize: "0.875rem",
          },
        }}
      />
    </div>
  );
}
