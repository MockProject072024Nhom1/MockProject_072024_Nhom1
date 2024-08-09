import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'No', width: 100 },
  { field: 'firstName', headerName: 'Name', width: 250 },
  { field: 'lastName', headerName: 'Salary (Per Hour)', width: 250 },
  { field: 'service', headerName: 'Service', width: 250 },
 
 
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
  { id: 1, lastName: 'Snow', firstName: 'Jon', service: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', service: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', service: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', service: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', service: null },
  { id: 6, lastName: 'Melisandre', firstName: null, service: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', service: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', service: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', service: 65 },
];

export default function TableContract() {
  return (
    <div style={{ height: 400, width: '100%' }}>
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
