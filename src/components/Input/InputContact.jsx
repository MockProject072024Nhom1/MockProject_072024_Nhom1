import React from 'react';

const InputContact = ({ name, type, id, placeholder, ...next }) => {
  return (
    <div className=" flex flex-col">
      <div className=" flex items-center text-center  text-black ">
        <label htmlFor={name} color="blue-gray" className=" font-semibold">
          {name}
        </label>
      </div>

      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        {...next}
        className=" border p-3 rounded-lg bg-secondary placeholder:text-black placeholder:font-semibold  border-black "
      />
    </div>
  );
};

export default InputContact;
