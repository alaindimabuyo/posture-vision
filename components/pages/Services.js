import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from '../../styles/VideoBackground.module.css';
import CompanyImage from '../../assets/posture_img.jpg'; // Replace with your company image

const About = () => {
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
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#363838]">
          About Posture Vision
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-12">
          <motion.div
            className="w-full lg:w-1/2 pr-0 lg:pr-12"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Image
              src={CompanyImage} // Replace with your company image path
              alt="Posture Vision"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <p className="text-lg mb-6 text-[#6B7280]">
              At Posture Vision, we are committed to improving the health and
              quality of life of our clients through personalized posture
              solutions. Our approach integrates advanced technology with expert
              care to deliver effective results.
            </p>
            <p className="text-lg mb-6 text-[#6B7280]">
              Our application facilitates seamless communication between
              patients and healthcare professionals. Patients can easily
              schedule appointments, access educational resources, and receive
              personalized guidance for improving posture.
            </p>
            <p className="text-lg mb-6 text-[#6B7280]">
              Here's how our application works:
            </p>
            <ul className="list-disc pl-8 mb-6">
              <li className="text-lg text-[#6B7280]">
                **Appointment Scheduling:** Patients can book appointments
                conveniently through the app, ensuring timely access to
                healthcare services.
              </li>
              <li className="text-lg text-[#6B7280]">
                **Education and Resources:** Access to educational materials,
                exercise routines, and posture improvement tips tailored to
                individual needs.
              </li>
              <li className="text-lg text-[#6B7280]">
                **Communication:** Secure messaging and video consultations
                enable direct communication with healthcare professionals,
                fostering a collaborative approach to treatment.
              </li>
            </ul>
            <p className="text-lg mb-6 text-[#6B7280]">
              Whether you are seeking to correct poor posture, alleviate
              discomfort, or enhance overall well-being, Posture Vision is your
              partner in achieving lasting improvements.
            </p>
            <p className="text-lg mb-6 text-[#6B7280]">
              Contact Posture Vision today to learn more about our services and
              start your journey to better posture and better health.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
