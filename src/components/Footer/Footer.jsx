import React from 'react';
import logo from '../../assets/images/logo.png';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
const Footer = () => {
  const listFooter = [
    'Legal',
    'Privacy Policy',
    'Terms and Conditions',
    'About us',
    'Navigation',
    'Home',
    'Our Services',
    'Our Human',
    'Contact us'
  ];
  return (
    <div className=" bg-primary py-12 relative z-10">
      <div className=" flex justify-center items-center">
        <img src={logo} alt="" className=" rounded-full w-20" />
      </div>
      <div className="flex justify-around">
        <ul>
          {listFooter.slice(0, 4).map((item, index) => (
            <li key={index} className=" text-white font-semibold">
              {item}
            </li>
          ))}
        </ul>
        <div className=" flex flex-col justify-center items-center mt-5 mr-16">
          <div className=" flex justify-around gap-10 text-white">
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <div className="w-[1px] h-20 bg-[#c4c4c4] mt-7"></div>
        </div>
        <ul>
          {listFooter.slice(4).map((item, index) => (
            <li key={index} className=" text-white font-semibold">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
