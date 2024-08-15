import React, { useState } from 'react';

const InputIconInside = ({
  name,
  type,
  id,
  placeholder,
  onClick,
  icon,
  ...next
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className=" flex flex-col">
      <div className=" flex items-center text-center text-black">
        <label
          htmlFor={id}
          color="blue-gray"
          className=" font-semibold capitalize"
        >
          {name}
        </label>
      </div>
      <div className="bg-white flex justify-center items-center border px-3 py-2 rounded-lg focus-within:border-2 focus-within:border-gray-900 text-black border-black">
        <input
          type={type}
          id={id}
          name={id}
          {...next}
          readOnly={!isEditable}
          className=" grow focus:outline-none bg-white font-semibold placeholder:text-gray-600 placeholder:font-semibold"
          placeholder={placeholder}
        />
        <div
          onClick={handleEditClick}
          className=" rounded-full p-2 hover:bg-slate-200 duration-200 text-gray-500 hover:text-black text-2xl"
          name="hidden"
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default InputIconInside;
