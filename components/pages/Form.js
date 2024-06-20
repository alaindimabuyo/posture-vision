// components/FormComponent.jsx

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CompanyImage from '../../assets/clinic.jpg';
import styles from '../../styles/VideoBackground.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faClock,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
const FormComponent = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when component enters viewport
    threshold: 0.3, // Trigger when 30% of component is in view
  });

  useEffect(() => {
    if (inView) {
      // Component is in view, trigger animations or console.log for debugging
      console.log('About section is in view!');
    }
  }, [inView]);

  return (
    <motion.div
      className={`${styles.container} fadeIn`}
      ref={ref} // Connect ref to useInView
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-12 p-11">
        <motion.div
          className="w-full lg:w-1/2 pr-0 lg:pr-12"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <h2 className="text-4xl font-bold mb-10 mt-5 text-[#363838]">
            Summerlin Executive Center
          </h2>

          <Image
            src={CompanyImage} // Replace with your company image path
            alt="Posture Vision"
            width={800}
            height={600}
            className="rounded-lg mb-11"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-gray-500 mr-11 text-3xl"
            />
            <div className="text-black">
              <h3 className="text-2xl font-semibold">Address</h3>
              <p className="text-xl">
                15050 Elderberry Ln Suite 4-7 Fort Myers, FL 33907
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faClock}
              className="text-gray-500 mr-11 text-3xl"
            />
            <div className="text-black">
              <h3 className="text-2xl font-semibold">Opening Hours</h3>
              <div className="text-xl">
                <p>Monday- Friday 8am to 6pm</p>
                <p>Saturday-Sunday Open by Appointment</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-gray-500 mr-11 text-3xl"
            />
            <div className="text-black">
              <h3 className="text-2xl font-semibold">Contact</h3>
              <p className="text-xl">844-369-7297</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div style={{ width: '100%', height: '100%' }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/T6VeW1zDde4te4M2SLTh"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '3px',
          }}
          id="inline-T6VeW1zDde4te4M2SLTh"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form 2"
          data-height="669"
          data-layout-iframe-id="inline-T6VeW1zDde4te4M2SLTh"
          data-form-id="T6VeW1zDde4te4M2SLTh"
          title="Form 2"
        />
      </div>
    </motion.div>
  );
};

export default FormComponent;
