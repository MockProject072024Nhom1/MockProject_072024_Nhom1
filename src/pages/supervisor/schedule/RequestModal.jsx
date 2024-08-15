import React from 'react';
import { Modal} from '@mui/material';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import TableSchedule from './TableSchedule';

const RequestModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="flex items-center justify-center h-screen pl-24 bg-gray-200 bg-opacity-50"> {/* Làm mờ phần nội dung phía sau */}
        <div className="bg-white rounded-lg w-11/12 p-4 relative">
          <IoIosCloseCircleOutline
            onClick={handleClose}
            className="absolute text-2xl top-2 right-4 cursor-pointer"
          />
          <h2 className="text-center font-bold mb-4">REQUEST FOR DAY OFF OF BODYGUARD</h2>
          <TableSchedule/>
        </div>
      </div>
    </Modal>
  );
};

export default RequestModal;