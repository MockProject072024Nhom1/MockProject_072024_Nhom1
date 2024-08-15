import React from 'react';

const InputService = ({ name, id, type, placeholder }) => {
  return (
    <div className=" flex flex-col">
      <div className=" text-black font-semibold text-[18px]">
        <label htmlFor={id} color="blue-gray" className=" font-semibold">
          {name}
        </label>
      </div>

      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className=" mt-2 block w-full border px-3 py-2 rounded-lg focus-within:border-2 focus-within:border-gray-900 text-black border-black "
      />
    </div>
  );
};

export default InputService;
