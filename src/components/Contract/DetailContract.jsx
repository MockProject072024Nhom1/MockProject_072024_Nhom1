import React, { useEffect, useState } from 'react';
import InputContact from '../Input/InputContact';
import { getBodyguards, getContracts } from '../../api/apifunction';
import Button from '../Button/Button';

const DetailContract = ({
  name1,
  name2,
  name3,
  value1,
  value2,
  value3,
  id1,
  id2,
  id3,
  className
}) => {
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
    <div className=" mt-5">
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
              name={name1}
              id={id1}
              placeholder={row[value1]}
              type={'text'}
              readOnly
            />

            <InputContact
              name={name2}
              id={id2}
              placeholder={row[value2]}
              type={'text'}
              readOnly
            />
            <InputContact
              name={name3}
              id={id3}
              placeholder={row[value3]}
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
          <div className={`mt-4 ${className}`}>
            <Button name="Schedule" />
          </div>
        </form>
      ))}
    </div>
  );
};

export default DetailContract;
