// pages/index.js
'use client';
import { useState, useEffect } from 'react';
import Services from '../components/pages/Services';
import VideoBackground from '../components/VideoBackground';

export default function Home() {
  const [showSecondPage, setShowSecondPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        setShowSecondPage(true);
      } else {
        setShowSecondPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative min-h-screen">
        <VideoBackground />
      </div>
      <div className="min-h-screen bg-white flex items-center justify-center">
        {showSecondPage && <Services />}
      </div>
    </div>
  );
}
