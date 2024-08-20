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
import ContractCpn from '../../../components/Contract/ContractCpn';
import { getBodyguards, getContracts } from '../../../api/apifunction';
import DetailContract from '../../../components/Contract/DetailContract';

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

  const contractIdToFind = '12348';

  const filteredContract = contract.filter(
    (row) => row.contractId === contractIdToFind
  );
  return (
    <div className=" relative ">
      <div className={`p-10 flex flex-col gap-1 ${toggle ? 'blur-[2px]' : ''}`}>
        <ContractCpn
          name1="Supervisor	"
          value1="supervisor"
          name2="Status	"
          value2="status"
        />
        <DetailContract
          name1="Signing Date"
          name2="Man Quantity"
          name3="Man Quantity"
          value1="signingDate"
          value2="manQuantity"
          value3="womanQuantity"
          id1="signingdate"
          id2="manquantity"
          id3="womanquantity"
          className="hidden"
        />
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
