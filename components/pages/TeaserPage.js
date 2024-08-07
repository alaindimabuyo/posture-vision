import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PhoneImage from '../../assets/phone-mock.webp'; 
import InnerImage from '../../assets/posture-correct.png'; 
import PostureVisionLogo from '../../assets/posture-vision-logo.png';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3, 
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 5, 
  }
};

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [display, setDisplay] = useState('none')
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#150734] via-[#321b63] to-[#4a2c8c] px-4 overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/zg8TArfujrfEzpmKyICA"
              style={{ display: `${display}`, width: '100%', height: '425px'}}
              id="popup-zg8TArfujrfEzpmKyICA" 
              data-layout="{'id':'POPUP'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="leadCollected"
              data-deactivation-value=""
              data-form-name="Posture Vision Teaser Form"
              data-height="425"
              data-layout-iframe-id="popup-zg8TArfujrfEzpmKyICA"
              data-form-id="zg8TArfujrfEzpmKyICA"
              title="Posture Vision Teaser Form"
                  >
            </iframe>

      <div className="w-full max-h-screen flex flex-col md:flex-row items-center justify-around">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center md:text-left mb-10 md:mb-0 md:w-1/2 max-w-lg" 
          onAnimationComplete={() => {
            document.getElementById('imageAnimation').style.opacity = 1;
            document.getElementById('imageAnimation').style.transform = 'translateX(0)';
          }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-extrabold text-white mb-4"
          >
            Posture Vision for Everyone.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-200 mb-6"
          >
            Enhance your posture with our advanced vision tools. Sign up to be notified when we launch and get exclusive early access.
          </motion.p>
          <motion.form
            variants={itemVariants}
            className="flex flex-col sm:flex-col items-center w-full"
          >
          <button
              type="submit"
              className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
              onClick={() => setDisplay("block")}
            >
              Get notified
            </button>
            </motion.form>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mt-4"
          >
            Stay informed about our launch and improve your posture with Posture Vision.
          </motion.p>
        </motion.div>
        <div
          id="imageAnimation"
          className="relative md:w-1/2 flex justify-center"
          style={{ opacity: 0, transform: 'translateX(100px)', transition: 'opacity 1s ease-out, transform 1s ease-out' }}
        >
          <Image
            src={PhoneImage}
            alt="Phone Image"
            objectFit="cover"
            className="w-auto h-full z-10"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={PostureVisionLogo}
              alt="Inner Image"
              width={330}
              height={500}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}