import React from 'react';
import image1 from '../../../assets/images/Rectangle28.png';
import image2 from '../../../assets/images/Rectangle29.png';
import image3 from '../../../assets/images/Rectangle30.png';
const CardService = () => {
  const serviceCard = [
    {
      image: image1,
      title: 'Effective',
      description:
        'We provide the most effective solutions for all customer requirements, ensuring that these solutions have a positive impact on the users.'
    },
    {
      image: image2,
      title: 'Professional',
      description:
        'We have a well-trained team that is rigorously evaluated through reputable competitions and tests. Our team always strives for a professional working style and is dedicated to serving our customers.'
    },
    {
      image: image3,
      title: 'Diverse',
      description:
        'We offer a variety of services and have a team with diverse experience in security. We constantly strive to train based on the diverse needs of our customers.'
    }
  ];

  return (
    <section className="py-20 px-10">
      <h2 className=" font-bold text-3xl text-white text-center ">
        How We Provide <span className="text-red">Our Services</span>
      </h2>
      <div className=" grid grid-cols-3 gap-8 mt-10">
        {serviceCard.map((item) => (
          <div key={item.title} className=" col-span-1 flex flex-col gap-4">
            <img src={item.image} alt="" className=" rounded-lg bg-cover " />
            <h2 className=" text-white font-semibold text-[18px] text-center">
              {item.title}
            </h2>
            <p className=" text-white font-semibold text-base text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardService;
