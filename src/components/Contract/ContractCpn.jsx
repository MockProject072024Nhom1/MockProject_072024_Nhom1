import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getBodyguards, getContracts } from '../../api/apifunction';

const Contract = ({ name1, value1, name2, value2 }) => {
  const [data, setData] = useState([]);
  const [contract, setContract] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBodyguards = async () => {
      try {
        const data = await getBodyguards();
        setData(data);
      } catch (error) {
        console.error('Error fetching bodyguard:', error);
      }
    };

    fetchBodyguards();
  }, []);

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
  const contractIdToFind = '12348';

  const filteredContract = contract.filter(
    (row) => row.contractId === contractIdToFind
  );
  return (
    <div className=" relative ">
      <>
        <h2 className=" font-semibold text-xl">Contracts (1)</h2>
        <div className=" px-10">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className=" shadow-md bg-neutral-300 ">
                <TableRow className="font-bold text-2xl">
                  <TableCell>Contract ID</TableCell>
                  <TableCell align="right">Start Date</TableCell>
                  <TableCell align="right">Finish Date</TableCell>
                  <TableCell align="right">{name1}</TableCell>
                  <TableCell align="right">{name2}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredContract.map((row) => (
                  <TableRow
                    key={row.contractId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.contractId}
                    </TableCell>
                    <TableCell align="right">{row.startDate}</TableCell>
                    <TableCell align="right">{row.finishDate}</TableCell>
                    <TableCell align="right">{row[value1]}</TableCell>
                    <TableCell align="right">{row[value2]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    </div>
  );
};

export default Contract;
