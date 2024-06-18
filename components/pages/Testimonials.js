import { useState, useEffect } from 'react';
import styles from '../../styles/VideoBackground.module.css';

const testimonials = [
  {
    name: 'Immy Tariq',
    role: 'Disrupt Magazine',
    text: '"Dr. Hutcheson is making a considerable impact on the healthcare industry, and many conventional health professionals may soon take notice of the productivity he helps his clients attain."',
  },
  {
    name: 'Natalie Roberts',
    role: 'London Daily Post',
    text: '"A doctor whose brand and treatment style revolutionizes the healthcare industry and helps thousands of patients reclaim their lives and embrace radical health."',
  },
  {
    name: 'Jennifer Ross',
    role: 'The American Reporter',
    text: '"The zest and tenacity that Dr. Hutcheson possesses for his work have helped him join a global platform and movement within the healthcare industry, making him a massive hit across all health circles."',
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
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center">
        <h2 className="text-5xl font-bold mb-8 lg:mb-0 lg:mr-12 text-[#363838] text-left lg:text-left">
          <p>“</p> Kind words from our client
        </h2>
        <div className="px-4 py-6 lg:py-3 border border-[#eae8ffe7] shadow-md rounded-xl w-full lg:w-2/3">
          <div
            className={`flex justify-center ${
              fade ? styles['fade-exit-active'] : styles['fade-enter-active']
            }`}>
            <div className="rounded-lg max-w-xl">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-black">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xl">
                {testimonials[currentIndex].text}
              </p>
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
    </div>
  );
};

export default Testimonials;
