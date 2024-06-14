'use client';
import Image from 'next/image';
import BackgroundImage from '../../assets/light-brown.jpg';
import styles from '../../styles/VideoBackground.module.css';
export default function Home() {
  return (
    <div className={styles.imageBackground}>
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
}
