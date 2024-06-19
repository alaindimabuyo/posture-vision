// pages/index.js
'use client';
import { useState, useEffect } from 'react';
import Services from '../components/pages/Services';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';
import Testimonials from '../components/pages/Testimonials';
import FormComponent from '@/components/pages/Form';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen">
        <VideoBackground />
      </div>
      <div className="min-h-screen bg-white">
        <Services />
        <Testimonials />
        <AnimatePresence initial={false}>
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}>
            <FormComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
