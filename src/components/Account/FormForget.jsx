import React, { useState } from 'react';
import { HiMiniUser } from 'react-icons/hi2';

const FormForget = ({ onClick }) => {
  const [toggle, setToggle] = useState(false);
  const handleSend = () => {
    setToggle(true);
  };
  return (
    <form className="mt-8 mb-2 lg:p-20 md:p-10 pm:p-8 sm:p-20 bg-[#2e2e2e] rounded-xl shadow-[10px_10px_11px_0px_rgba(0,0,0,0.25)] ">
      <h2 className=" text-white text-3xl text-center">RESET PASSWORD</h2>
      {/* form sending email */}
      {!toggle && (
        <>
          <div className="mb-1 flex flex-col gap-4 mt-3">
            {/* -----input email------- */}
            <div className=" flex items-center text-center text-white ">
              <HiMiniUser />
              <label htmlFor="email" color="blue-gray" className=" font-medium">
                Email
              </label>
            </div>

            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="name@mail.com"
              className=" border p-3 rounded-lg bg-[#222121] focus:!border-gray-900 "
            />
            <h2 className="text-rose-600">
              We have emailed your password reset link.
            </h2>
          </div>

          <button
            onClick={handleSend}
            // type="submit"
            className="border-gradient-to-r  mt-6  bg-white border-2 border-black text-black py-2 px-auto font-bold  w-full rounded-lg"
          >
            Send Email
          </button>
        </>
      )}
      {/* form fill code from email */}
      {toggle && (
        <>
          <div className="mb-1 flex flex-col gap-4 mt-3">
            {/* -----input email------- */}
            <div className=" flex items-center text-center text-white ">
              <label
                htmlFor="code"
                color="blue-gray"
                className=" font-medium text-center"
              >
                Code
              </label>
            </div>

            <input
              type="text"
              id="code"
              name="code"
              required
              placeholder="*****"
              className=" border p-3 rounded-lg bg-[#222121] focus:!border-gray-900 "
            />
          </div>

          <button
            onClick={onClick}
            // type="submit"
            className="border-gradient-to-r  mt-6  bg-white border-2 border-black text-black py-2 px-auto font-bold  w-full rounded-lg"
          >
            Reset password
          </button>
        </>
      )}
    </form>
  );
};

export default FormForget;
