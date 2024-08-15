import React from 'react';
import { GiCctvCamera } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const ServiceProvide = () => {
  const serviceProvide = [
    {
      name: 'Private Security Services',
      des: 'We provide personal security services, 24/7, until you feel safe.',
      link: '/services'
    },
    {
      name: 'Commercial Security Services',
      des: 'This service includes deploying security teams to commercial locations, ensuring smooth business operations.',
      link: '/services'
    },
    {
      name: 'Aviation Security Guard',
      des: 'The agreement between an airline or airport and a security company for the provision of aviation security guard services.',
      link: '/services'
    },
    {
      name: 'Event Security',
      des: 'USA security Services have operated event security services at events and venues from small to large scale. ',
      link: '/services'
    }
  ];
  return (
    <section className="py-20 px-10">
      <h2 className=" font-bold text-3xl text-white text-center ">
        Take A Look At <span className="text-red">Services We Provide</span>
      </h2>
      <div className=" grid grid-cols-4 gap-10 mt-20">
        {serviceProvide.map((item, index) => (
          <div
            className=" relative bg-transparent rounded-lg px-4 py-10 pb-20 hover:bg-black  text-white"
            key={index}
          >
            <GiCctvCamera size={38} color="#fff" />
            <h2 className="mt-5 font-bold text-xl">{item.name}</h2>
            <p className=" font-semibold text-[18px] mt-1">{item.des}</p>

            <Link
              to={item.link}
              className="absolute inline-block bg-red px-4 py-2 top-[85%] font-semibold rounded-full"
            >
              Know More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceProvide;
