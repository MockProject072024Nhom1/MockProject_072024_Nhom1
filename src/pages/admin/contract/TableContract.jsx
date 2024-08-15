import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "No", width: 100 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "salary", headerName: "Salary (Per Hour)", width: 250 },
  { field: "service", headerName: "Service", width: 250 },
];

const rows = [
  { id: 1, name: "Jon", salary: 10, service: "Event" },
  { id: 2, name: "Cersei", salary: 10, service: "Event" },
  { id: 3, name: "Jaime", salary: 10, service: "Event" },
  { id: 4, name: "Arya", salary: 10, service: "Event" },
  { id: 5, name: "Daenerys", salary: 10, service: "Event" },
  { id: 6, name: null, salary: 10, service: "Event" },
  { id: 7, name: "Ferrara", salary: 10, service: "Event" },
  { id: 8, name: "Rossini", salary: 10, service: "Event" },
  { id: 9, name: "Harvey", salary: 10, service: "Event" },
];

export default function TableContract() {
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
