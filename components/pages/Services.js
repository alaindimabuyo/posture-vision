import Image from 'next/image';
import BackgroundImage from '../../assets/light-brown.jpg';
import styles from '../../styles/VideoBackground.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import DoctorImage from '../../assets/dr_hutcheson.JPG';

export default function Services() {
  return (
    <div className={`${styles.containerServices} fadeIn`}>
      <div className="container mx-auto p-6 md:p-16 rounded-br-[50px] md:rounded-br-[100px] rounded-tl-[50px] md:rounded-tl-[100px] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className={styles.textServices}>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">
              Dr. Brian Hutcheson, D.C.
            </h2>
            <h1 className="text-lg md:text-xl font-normal mb-8 text-black">
              With an instinct for innovation, Dr. Hutcheson continues to shed
              light on the modern human condition through his work. He is
              working on innovative solutions to take action against the side
              effect of our forward head, face down lifestyles.
            </h1>
            <h1 className="text-[1rem] font-normal mb-8 text-black">
              Dr. Brian Hutcheson’s Three Health Tips For Higher Productivity
            </h1>
            <h2 className="text-lg md:text-[1.5rem] font-normal mb-4 text-black flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mr-2"
              />
              Drink More Water
            </h2>
            <h2 className="text-lg md:text-[1.5rem] font-normal mb-4 text-black flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mr-2"
              />
              Maintain Good Posture
            </h2>
            <h2 className="text-lg md:text-[1.5rem] font-normal mb-4 text-black flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 mr-2"
              />
              Look After Your Mental Health
            </h2>
            <button className="bg-[#8ab7ff] text-black px-6 md:px-10 py-3 md:py-4 text-lg md:text-xl mt-9">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <div className="w-full md:w-[30rem] lg:w-[40rem] xl:w-[50rem]">
            <Image
              src={DoctorImage}
              alt="Doctor"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
