// pages/index.js
'use client';
import { useState, useEffect } from 'react';
import Services from '../components/pages/Services';
import VideoBackground from '../components/VideoBackground';

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen">
        <VideoBackground />
      </div>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Services />
      </div>
    </div>
  );
}
