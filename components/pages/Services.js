// pages/index.js
import Image from 'next/image';
import BackgroundImage from '../../assets/light-brown.jpg';
import styles from '../../styles/VideoBackground.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import DoctorImage from '../../assets/dr_hutcheson.jpg';

export default function Services() {
  return (
    <div className={`${styles.containerServices} fadeIn`}>
      <div className="container mx-auto border border-white p-[9rem] rounded-br-[100px] rounded-tl-[100px] flex">
        <div className="w-1/2">
          <div className={styles.textServices}>
            <h2 className="text-4xl font-bold mb-1">
              Dr. Brian Hutcheson, D.C.
            </h2>
            <h1 className="text-xl font-normal mb-8 w-[600px]">
              With an instinct for innovation, Dr. Hutcheson continues to shed
              light on the modern human condition through his work. He is
              working on innovative solutions to take action against the side
              effect of our forward head, face down lifestyles.
            </h1>
            <h1 className="text-[1rem] font-normal mb-8 w-[600px]">
              Dr. Brian Hutcheson’s Three Health Tips For Higher Productivity
            </h1>
            <h2 className="text-[1.5rem] font-normal mb-1">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500"
              />{' '}
              Drink More Water
            </h2>
            <h2 className="text-[1.5rem] font-normal mb-1">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500"
              />{' '}
              Maintain Good Posture
            </h2>
            <h2 className="text-[1.5rem] font-normal mb-1">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500"
              />{' '}
              Look After Your Mental Health
            </h2>
            <button className="bg-[#8ab7ff] text-black px-10 py-4 text-xl mt-9">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[50rem]">
            <Image
              src={DoctorImage}
              alt="Doctor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
