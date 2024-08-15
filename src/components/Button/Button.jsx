import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-inter lg:px-8 md:px-6  md:py-2 pm:px-6 pm:py-2 border-2 border-black bg-black bg font-semibold text-white rounded-lg transition-all 
                  duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-white hover:text-black
                  before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
              before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear"
    >
      {name}
    </button>
  );
};

export default Button;
