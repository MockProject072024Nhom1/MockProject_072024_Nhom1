import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import Footer from '../Footer/Footer';
import FormForget from './FormForget';
import FormSetPassword from './FormSetPassword';
const ResetPass = () => {
  const [toggle, setToggle] = useState(false);
  const handleSend = () => {
    setToggle(true);
  };
  return (
    //start UI login
    <>
      <section className=" grid lg:grid-cols-12 md:grid-cols-8 pm:grid-cols-1  bg-[#2e2e2e] ">
        {/* ---------form reset passwork------------- */}
        <div className=" lg:col-span-5 md:col-span-4 pm:col-span-1 lg:p-14 md:p-10 sm:p-14 pm:p-8  bg-[#C8C8C8]">
          {!toggle && <FormForget onClick={handleSend} />}
          {toggle && <FormSetPassword />}
        </div>

        {/* ----------description on right-------- */}
        <div className="md:block pm:hidden lg:col-span-7 md:col-span-4 sm:col-span-1 border-l-2 py-14 ">
          <div className=" flex flex-col relative">
            <div className=" flex justify-center items-center">
              <img src={logo} alt="logo" className="w-1/2 " />
            </div>
            <h2 className=" text-white text-5xl text-center">
              Welcome to NSGSecure
            </h2>
            <h2 className="text-3xl mt-8 text-center text-[#E6F90B] text-decoration-underline animate-pulse">
              Enter into a NEW World of Surveillance
            </h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResetPass;
