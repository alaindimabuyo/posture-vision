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
      <div style={{ width: '100%', height: '100%' }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/jzbgXPm7p2hEcInyBXOs"
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
