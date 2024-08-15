import React from 'react';
import { HiLockClosed, HiEyeSlash } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
const FormSetPassword = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  return (
    <form className="mt-8 mb-2 lg:p-20 md:p-10 pm:p-8 sm:p-20 bg-[#2e2e2e] rounded-xl shadow-[10px_10px_11px_0px_rgba(0,0,0,0.25)] ">
      <h2 className=" text-white text-3xl text-center">RESET PASSWORD</h2>

      <div className="mb-1 flex flex-col gap-4 mt-3">
        {/* -----input email------- */}

        <div className=" flex items-center text-center text-white">
          <HiLockClosed />
          <label htmlFor="password" color="blue-gray" className=" font-medium">
            Password
          </label>
        </div>
        <div className="bg-[#222121] flex justify-center items-center border px-3 py-2 rounded-lg focus-within:border-2 focus-within:border-gray-900 text-white">
          <input
            type="password"
            id="password"
            name="password"
            required
            className=" grow focus:outline-none bg-[#222121]"
            placeholder="••••••••"
          />
          <div
            className=" rounded-full p-2 hover:bg-slate-200 duration-200 text-gray-500 hover:text-black"
            name="hidden"
          >
            <HiEyeSlash />
          </div>
        </div>

        <div className=" flex items-center text-center text-white">
          <HiLockClosed />
          <label htmlFor="password" color="blue-gray" className=" font-medium">
            Confirm password
          </label>
        </div>
        <div className="bg-[#222121] flex justify-center items-center border px-3 py-2 rounded-lg focus-within:border-2 focus-within:border-gray-900 text-white">
          <input
            type="password"
            id="comfirmpassword"
            name="comfirmpassword"
            required
            className=" grow focus:outline-none bg-[#222121]"
            placeholder="••••••••"
          />
          <div
            className=" rounded-full p-2 hover:bg-slate-200 duration-200 text-gray-500 hover:text-black"
            name="hidden"
          >
            <HiEyeSlash />
          </div>
        </div>
      </div>

      <button
        // type="submit"
        onClick={handleClick}
        className="border-gradient-to-r  mt-6  bg-white border-2 border-black text-black py-2 px-auto font-bold  w-full rounded-lg"
      >
        Reset Password
      </button>
    </form>
  );
};

export default FormSetPassword;
