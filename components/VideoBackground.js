// components/VideoBackground.js
'use client';
import styles from '../styles/VideoBackground.module.css';
import VideoBackgroundMp4 from '../assets/videoBackground4.mp4';
import { Link as ScrollLink } from 'react-scroll';
const VideoBackground = () => {
  return (
    <div className={`${styles.videoBackground} fadeIn`}>
      <video
        autoPlay
        loop
        muted>
        <source
          src={VideoBackgroundMp4}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className={styles.textOverlay}>
        <h2 className="text-[2rem] font-bold mb-1">
          HEALTH IS THE KEY TO STAYING CLOSE TO YOU LOVED ONES
        </h2>
        <h1 className="text-[4rem] font-bold mb-8">
          Exceptional care for all ages
        </h1>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}>
          <div>
            <button className="bg-[#FFCE66] text-black px-10 py-4 text-xl">
              Book Now
            </button>
          </div>
        </ScrollLink>
        <h1 className="text-xl font-bold mt-8">OR CALL 844-369-7297</h1>
      </div>
    </div>
  );
};

export default VideoBackground;
