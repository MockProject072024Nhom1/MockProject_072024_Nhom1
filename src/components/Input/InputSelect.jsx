import React, { useState } from 'react';
import { HiMiniChevronDown } from 'react-icons/hi2';
const InputSelect = ({ options, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block ">
      <div className=" flex items-center text-center text-black">
        <label
          htmlFor={name}
          color="blue-gray"
          className=" font-semibold capitalize"
        >
          {name}
        </label>
      </div>
      <div
        className="bg-white flex items-center justify-between border px-3 py-2 rounded-lg focus-within:border-2 focus-within:border-gray-900 text-black border-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className=" font-semibold ">{selectedOption}</span>
        <div
          className=" rounded-full p-2 hover:bg-slate-200 duration-200 text-gray-500 hover:text-black text-2xl"
          name="hidden"
        >
          <HiMiniChevronDown size={24} />
        </div>
      </div>
      {/* drop box to select */}
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-40 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {options.map((option) => (
            <li
              key={option}
              className="cursor-pointer font-semibold select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              <span className="block truncate">{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSelect;
