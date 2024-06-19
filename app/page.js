// pages/index.js
'use client';
import { useState, useEffect } from 'react';
import Services from '../components/pages/Services';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';
import Testimonials from '../components/pages/Testimonials';

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen">
        <VideoBackground />
      </div>
      <div className="min-h-screen bg-white">
        <Services />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
