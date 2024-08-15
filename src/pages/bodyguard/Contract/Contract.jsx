import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getContracts } from '../../../api/apifunction';

const Contract = () => {
  const [contract, setContract] = useState([]);
  const [error, setError] = useState(null);

  //fetch api contract
  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const contract = await getContracts();
        setContract(contract);
      } catch (error) {
        console.error('Error fetching contracts:', error);
      }
    };

    fetchContracts();
  }, []);
  return (
    <div className=" relative ">
      <div className={`p-10 flex flex-col gap-1`}>
        <>
          <h2 className=" font-semibold text-xl">Contracts (1)</h2>
          <div className=" px-10">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className=" shadow-md bg-neutral-300 ">
                  <TableRow className="font-bold text-2xl">
                    <TableCell>Contract ID</TableCell>
                    <TableCell align="center">Start Date</TableCell>
                    <TableCell align="center">Finish Date</TableCell>
                    <TableCell align="right">Venue</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contract.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.contractId}
                      </TableCell>
                      <TableCell align="center">{row.startDate}</TableCell>
                      <TableCell align="center">{row.finishDate}</TableCell>
                      <TableCell align="right">{row.venue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      </div>
    </div>
  );
};

export default Contract;
