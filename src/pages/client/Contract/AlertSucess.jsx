import React from 'react';
import { HiCheckBadge } from 'react-icons/hi2';
import Button from '../../../components/Button/Button';
const AlertSucess = () => {
  return (
    <div class="m-10 bg-white fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex max-w-lg flex-col items-center rounded-md border px-8 py-10 text-gray-800 shadow-lg">
      <HiCheckBadge size={40} color="#3DDC92" />

      <p class="mt-4 text-center text-xl font-bold">Successful payment</p>
      <p class="mt-2 text-center text-lg">
        Thank you for trusting and choosing our service{' '}
        <span class="truncate font-medium">James Keyser</span>?
      </p>
      <div class="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
        <a href="/">
          <Button name={'Continue on website'} />
        </a>
      </div>
    </div>
  );
};

export default AlertSucess;
