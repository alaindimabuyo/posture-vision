// pages/index.js
'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TeaserPage from '../components/pages/TeaserPage'
import Services from '../components/pages/Services';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';
import Testimonials from '../components/pages/Testimonials';
import FormComponent from '@/components/pages/Form';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <div
        className="relative min-h-screen"
        id="home">
        <TeaserPage />
      </div>
    // <div>
    // <Navbar />
    //   <div
    //     className="relative min-h-screen"
    //     id="home">
    //     <VideoBackground />
    //   </div>
    //   <div className="min-h-screen bg-white">
    //     <div id="services">
    //       <Services />
    //     </div>
    //     <div id="contact">
    //       <FormComponent />
    //     </div>
    //     <div id="testimonials">
    //       <Testimonials />
    //     </div>
       
    //   </div>

    //   <Footer />
    // </div>
  );
}
