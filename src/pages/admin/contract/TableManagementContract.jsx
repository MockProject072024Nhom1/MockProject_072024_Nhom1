import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// const rows = [
//   {
//     id: "Bold text column",
//     contractName: "Regular text column",
//     customerName: "Regular text column",
//     supervisorName: "Regular text column",
//     service: "Regular text column",
//     cost: "Regular text column",
//     createdAt: "Regular text column",
//     payment_status: "Active",
//   },
//   {
//     id: "Bold text column",
//     contractName: "Regular text column",
//     customerName: "Regular text column",
//     supervisorName: "Regular text column",
//     service: "Regular text column",
//     cost: "Regular text column",
//     createdAt: "Regular text column",
//     payment_status: "Inactive",
//   },
// ];

export default function TableManagementContract({
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
    { field: "id", headerName: "ID Contract", width: 110 },
    { field: "contractName", headerName: "Contract Name", width: 140 },
    { field: "customerName", headerName: "Customer Name", width: 140 },
    { field: "supervisorName", headerName: "Supervisor Name", width: 140 },
    { field: "service", headerName: "Service", width: 150 },
    { field: "cost", headerName: "Cost", width: 140 },
    { field: "createdAt", headerName: "Created At", width: 170 },
    {
      field: "payment_status",
      headerName: "Payment Status",
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
