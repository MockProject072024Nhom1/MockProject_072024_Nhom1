import React from 'react';

const ButtonOutline = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" lg:px-8 md:px-6 md:py-2 pm:px-6 pm:py-2 border-2 border-black bg-white bg font-semibold text-black rounded-lg transition-all 
                  duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-black hover:text-white
                  before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
              before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear"
    >
      {name}
    </button>
  );
};

export default ButtonOutline;
