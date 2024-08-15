import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputContact from '../../../components/Input/InputContact';
import AlertSucess from './AlertSucess';
import { getBodyguards, getContracts } from '../../../api/apifunction';

function createDataContract(id, startdate, finishdate, supervior, status) {
  return { id, startdate, finishdate, supervior, status };
}

const Contract = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

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
      <div className={`p-10 flex flex-col gap-1 ${toggle ? 'blur-[2px]' : ''}`}>
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
                    <TableCell align="right">Supervisor</TableCell>
                    <TableCell align="right">Status</TableCell>
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
                      <TableCell align="right">{row.supervisor}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
        {filteredContract.map((row) => (
          <form className="" key={row.contractId}>
            <h2 className=" font-semibold text-xl">Detail Of Contract</h2>
            <div className=" grid grid-cols-2 gap-x-20 gap-y-5 px-20 mt-4">
              <InputContact
                name={'Contract ID'}
                id={'contractID'}
                placeholder={row.contractId}
                type={'text'}
                readOnly
              />
              <InputContact
                name={'Service'}
                id={'service'}
                placeholder={row.service}
                type={'text'}
                readOnly
              />
              <InputContact
                name={'Venue'}
                id={'venue'}
                placeholder={row.venue}
                type={'text'}
                readOnly
              />
              <InputContact
                name={'Signing Date'}
                id={'signingDate'}
                placeholder={row.signingDate}
                type={'text'}
                readOnly
              />
              <InputContact
                name={'Man Quantity'}
                id={'manQuantity'}
                placeholder={row.manQuantity}
                type={'text'}
                readOnly
              />
              <InputContact
                name={'Woman Quantity'}
                id={'womanQuantity'}
                placeholder={row.womanQuantity}
                type={'text'}
                readOnly
              />
              <InputContact
                name={'Contract Cost'}
                id={'contractCost'}
                placeholder={row.contractCost + ' ' + 'USD'}
                type={'text'}
                readOnly
              />
              <InputContact
                name={'Payment Status'}
                id={'paymentStatus'}
                placeholder={row.status}
                type={'text'}
                readOnly
              />
            </div>
          </form>
        ))}
        <div className=" grid grid-cols-5 gap-10 mt-4">
          <div className=" col-span-3">
            <h2 className=" font-semibold text-xl ">List Of BodyGuard</h2>
            <div className=" px-10 mt-4">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 640 }} aria-label="simple table">
                  <TableHead className=" shadow-md bg-neutral-300 ">
                    <TableRow className="font-bold text-2xl">
                      <TableCell>No</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Cost (/hour)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 }
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.cost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className=" mt-5 ">
              <h2 className=" font-semibold text-xl mb-3  ">Contract Cost</h2>
              <InputContact type={'text'} readOnly placeholder={'4000USD'} />
            </div>
          </div>
          <div className=" col-span-2">
            <div className=" w-[200px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfolPWopR4-pKV8nGkRoYcbkom6oestleLRw&s"
                alt=""
              />
            </div>
            <div onClick={handleToggle}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {toggle && <AlertSucess />}
    </div>
  );
};

export default Contract;
