// components/VideoBackground.js
import styles from '../styles/VideoBackground.module.css';
import VideoBackgroundMp4 from '../assets/videobackground1.mp4';

const VideoBackground = () => {
  return (
    <div className={styles.videoBackground}>
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
          TRUSTED DENVER TECH CENTER DENTISTS
        </h2>
        <h1 className="text-[3rem] font-bold mb-8">
          Exceptional care for all ages
        </h1>
        <button className="bg-white text-black px-4 py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;
