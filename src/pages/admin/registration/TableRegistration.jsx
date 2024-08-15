import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ToggleOnTwoToneIcon from "@mui/icons-material/ToggleOnTwoTone";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import { useState } from "react";

// const initialRows = [
//   {
//     id: 1,
//     customerId: "CM001",
//     serviceId: "SV1",
//     requirement: "Fire aim certificate",
//     manQuantity: "8",
//     womanQuantity: "0",
//     venue: "Train Station",
//     registration_status: "Active",
//   },
//   {
//     id: 2,
//     customerId: "CM002",
//     serviceId: "SV2",
//     requirement: "Fire aim certificate",
//     manQuantity: "8",
//     womanQuantity: "0",
//     venue: "Train Station",
//     registration_status: "Inactive",
//   },
// ];

export default function TableRegistration({
  selectedRows,
  setSelectedRows,
  rows,
  setRows,
}) {

  const togglePermission = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? {
              ...row,
              registration_status:
                row.registration_status === "Active" ? "Inactive" : "Active",
            }
          : row
      )
    );
  };

  const handleRowSelection = (newSelection) => {
    const selectedIds = newSelection;
    setSelectedRows(selectedIds);
    console.log(`Selected IDs: ${selectedIds}`); 
  };

  const columns = [
    { field: "id", headerName: "Registration ID", width: 140 },
    { field: "customerId", headerName: "Customer ID", width: 140 },
    { field: "serviceId", headerName: "Service ID", width: 140 },
    { field: "requirement", headerName: "Requirement", width: 180 },
    { field: "manQuantity", headerName: "Man Quantity", width: 140 },
    { field: "womanQuantity", headerName: "Woman Quantity", width: 140 },
    { field: "venue", headerName: "Venue", width: 160 },
    {
      field: "registration_status",
      headerName: "Status",
      width: 110,
      renderCell: (params) => {
        const isActive = params.value === "Active";
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation(); 
              togglePermission(params.id);
            }}
          >
            {isActive ? (
              <ToggleOnTwoToneIcon
                style={{ color: "#99FF99", fontSize: "45px" }}
              />
            ) : (
              <ToggleOffOutlinedIcon
                style={{ color: "#000", fontSize: "45px" }}
              />
            )}
          </div>
        );
      },
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
