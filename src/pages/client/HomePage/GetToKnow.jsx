import React from 'react';
import union from '../../../assets/images/Union.png';
import { Link } from 'react-scroll';
const GetToKnow = () => {
  return (
    <section className="py-20 px-10">
      <h2 className=" font-bold text-3xl text-white text-center ">
        Get To Know <span className="text-red">Who We Are ?</span>
      </h2>
      <div className=" grid grid-cols-3 gap-8 mt-10">
        <div className=" col-span-2 text-white">
          <p className="  font-semibold font-base">
            USA is a company offering a wide range of security services,
            including personal protection, commercial security, and corporate
            protection. Established in 2000, with over 20 years of experience in
            the field of security and safety services, we aim to enhance the
            quality of our customers' lives while preventing potential threats
            in situations where people are most vulnerable. With a commitment to
            respecting and prioritizing customer safety, we continuously improve
            our company's services, enhance the professionalism of our security
            personnel, and refine our customer care processes to ensure we are
            always available when needed. Choose USA to experience high-quality
            services from us.
          </p>
          <Link
            to="service-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className=" inline-block bg-red font-semibold rounded-full px-3 py-2 mt-3 cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </div>
      <div className="">
        <img src={union} alt="" />
      </div>
    </section>
  );
};

export default GetToKnow;
