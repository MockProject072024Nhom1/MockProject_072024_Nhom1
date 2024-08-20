import React from 'react';
import ContractCpn from '../../../components/Contract/ContractCpn';
import DetailContract from '../../../components/Contract/DetailContract';

const Contract = () => {
  return (
    <div className=" relative ">
      <div className={`p-10 flex flex-col gap-6 `}>
        <ContractCpn name1="Customer" value1="customer" />
        <DetailContract
          name1="On-going date"
          name2="Quantity"
          name3="Staff"
          value1="startDate"
          value2="manQuantity"
          value3="supervisor"
          id1="ongoingdate"
          id2="quantity"
          id3="staff"
        />
      </div>
    </div>
  );
};

export default Contract;
