import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/VideoBackground.module.css';
import billgates from '../../assets/billgates.jpg';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Company A',
    image: billgates,
    text: 'This service is fantastic! Highly recommend to anyone in need of quality work.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, Company B',
    image: billgates,
    text: 'Absolutely brilliant! The team was professional and delivered great results.',
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Manager, Company C',
    image: billgates,
    text: 'I am thoroughly impressed with the level of service and the results. Five stars!',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (fade) {
      const timer = setTimeout(() => setFade(false), 500); // Duration of fade-out
      return () => clearTimeout(timer);
    }
  }, [fade]);

  const handlePrevious = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }, 500); // Duration of fade-out
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // Duration of fade-out
  };

  const handleDotClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
    }, 500); // Duration of fade-out
  };

  return (
    <div className="bg-gray-100 py-40 fadeIn">
      <div className="container px-[18rem] py-[3rem] border border-[#9992FF]">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Testimonials
        </h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={handlePrevious}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Next
          </button>
        </div>
        <div
          className={`flex justify-center ${
            fade ? styles['fade-exit-active'] : styles['fade-enter-active']
          }`}>
          <div className="bg-white px-[10rem] py-[2rem] rounded-lg shadow-md max-w-xl">
            <div className="flex items-center mb-4">
              <Image
                src={testimonials[currentIndex].image}
                alt={`${testimonials[currentIndex].name}'s profile`}
                className="w-16 h-16 rounded-full mr-4"
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            <p className="text-gray-700">{testimonials[currentIndex].text}</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 mx-2 cursor-pointer rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
