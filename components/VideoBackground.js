// components/VideoBackground.js
'use client';
import styles from '../styles/VideoBackground.module.css';
import VideoBackgroundMp4 from '../assets/posture_vision_detect.mp4';
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
        <h2 className="text-[1rem] font-bold mb-1">
          MAINTAINING GOOD POSTURE IS KEY TO YOUR WELL-BEING
        </h2>
        <h1 className="text-[4rem] font-bold mb-8">
          Advanced Posture Detection for a Healthier Life
        </h1>
        <ScrollLink
          to="features"
          smooth={true}
          duration={500}>
          <div>
            <button className="bg-[#FFCE66] text-black px-10 py-4 text-xl">
              Learn More
            </button>
          </div>
        </ScrollLink>

      </div>
    </div>
  );
};

export default VideoBackground;
