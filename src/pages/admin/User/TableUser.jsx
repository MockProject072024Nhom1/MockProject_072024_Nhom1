import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

// const rows = [
//   {
//     id: "BG001",
//     email: "Regular text column",
//     password: "Regular text column",
//     role: "Regular text column",
//     registrationDate: "Regular text column",
//     user_status: "Active",
//   },
//   {
//     id: "BG002",
//     email: "Regular text column",
//     password: "Regular text column",
//     role: "Regular text column",
//     registrationDate: "Regular text column",
//     user_status: "Inactive",
//   },
// ];

export default function TableUser({
  selectedRows,
  setSelectedRows,
  rows,
  setRows
}) {
  const navigate = useNavigate();

  const handleRowSelection = (newSelection) => {
    const selectedIds = newSelection;
    setSelectedRows(selectedIds);
    console.log(`Selected IDs: ${selectedIds}`);
  };

  const columns = (navigate) => [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'password', headerName: 'Password', width: 200 },
    { field: 'role', headerName: 'Role', width: 200 },
    { field: 'registrationDate', headerName: 'Registration Date', width: 200 },
    {
      field: 'user_status',
      headerName: 'Status',
      width: 110,
      renderCell: (params) => (
        <Chip
          label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor:
                    params.value === 'Active' ? 'green' : 'lightgray',
                  marginRight: 5
                }}
              />
              {params.value}
            </div>
          }
          style={{
            backgroundColor: params.value === 'Active' ? '#e0f7fa' : '#f0f0f0',
            borderRadius: '24px',
            border: '1px solid white'
          }}
          variant="outlined"
        />
      )
    },
    {
      field: 'edit',
      headerName: '',
      width: 50,
      renderCell: (params) => {
        const handleEditClick = () => {
          navigate('/admin/user/edit', { state: params.row });
        };

        return (
          <EditIcon style={{ cursor: 'pointer' }} onClick={handleEditClick} />
        );
      }
    }
  ];
  return (
    <div style={{ height: 400, width: '1230px' }}>
      <DataGrid
        rows={rows}
        columns={columns(navigate)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={handleRowSelection}
        sx={{
          '& .MuiDataGrid-cell': {
            fontSize: '0.875rem'
          },
          '& .MuiDataGrid-columnHeader': {
            fontSize: '0.875rem'
          }
        }}
      />
    </div>
  );
}
