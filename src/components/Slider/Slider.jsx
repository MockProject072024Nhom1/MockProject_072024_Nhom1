import React, { useEffect, useState } from 'react';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi2';
import './style.css';
import { getSliders } from '../../api/apifunction';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [transform, setTransform] = useState('');
  // fetch api
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const data = await getSliders();
        setData(data);
      } catch (error) {
        console.error('Error fetching sliders:', error);
      }
    };

    fetchSliders();
  }, []);

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % data.length;
    setCurrentSlide(newSlide);
    setSlideDirection('next');
    setTransform('animation-showContent');
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + data.length) % data.length;
    setCurrentSlide(newSlide);
    setSlideDirection('prev');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideDirection('');
    }, 500); // assuming animation duration is 0.5s

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className={`carousel ${slideDirection} ${transform}`}>
      <div className={`list `}>
        {data.map((item, index) => (
          <div
            onClick={() => setCurrentSlide(index)}
            className={`item`}
            key={index}
            style={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : -1
            }}
          >
            <img src={item.image} alt={item.member} loading="lazy" />
            <div className={`content  md:top-[15%] pm:top-[6%]`}>
              <div className="topic md:text-[4rem] text-center pm:text-[50px]">
                {item.member}
              </div>
              <div className="  justify-center items-center rounded-full py-5">
                <div className="flex flex-col items-start  ml-20">
                  <div className="des">{item.description}</div>
                  {item.listJob.map((job, idx) => (
                    <h3
                      className=" bg-yellow-200 text-black px-4 py-2 rounded-lg mb-2 font-medium text-[18px]"
                      key={idx}
                    >
                      {job}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={prevSlide}>
          <HiOutlineChevronLeft size={36} />
        </button>
        <button id="next" onClick={nextSlide}>
          <HiOutlineChevronRight size={36} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
