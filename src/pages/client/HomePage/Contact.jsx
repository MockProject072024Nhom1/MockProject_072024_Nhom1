import React from 'react';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin
} from 'react-icons/hi2';
const Contact = () => {
  const listContact = [
    {
      icon: <HiOutlineEnvelope size={30} />,
      title: 'Chat With Us',
      des: 'nsgsecurity@gmail.com'
    },
    {
      icon: <HiOutlinePhone size={30} />,
      title: 'Phone',
      des: '+91 9835467289'
    },
    {
      icon: <HiOutlineMapPin size={30} />,
      title: 'Office',
      des: 'W-9, Industrial Area,',
      des2: ' Near 200 Quarters,',
      des3: ' Yamunanagar, Haryana-135001'
    }
  ];
  return (
    <section className="py-20 px-10">
      <h2 className=" font-bold text-3xl text-white text-center ">
        How to <span className="text-red">Contact Us</span>
      </h2>
      <div className="  flex items-start justify-between mt-20 mx-auto px-20">
        {listContact.map((item, index) => (
          <div
            className=" flex gap-4 justify-start items-start text-white"
            key={index}
          >
            {item.icon}
            <div className=" flex flex-col ">
              <h2>{item.title}</h2>
              <span className="mt-2">{item.des}</span>
              <span>{item.des2}</span>
              <span>{item.des3}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
