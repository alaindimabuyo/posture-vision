// components/Navbar/Navbar.js
'use client';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} fadeIn`}>
      <div className={styles.logo}>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}>
          Posture Vision
        </ScrollLink>
      </div>
      <div
        className={styles.burger}
        onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.line1 : ''}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.line2 : ''}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.line3 : ''}`}></div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer">
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer">
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="testimonials"
            smooth={true}
            duration={500}
            className="cursor-pointer">
            Testimonials
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer">
            Contact
          </ScrollLink>
        </li>
      </ul>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}>
        <div>
          <button className="bg-[#FFCE66] text-black px-10 py-4 text-xl">
            Book Now
          </button>
        </div>
      </ScrollLink>
    </nav>
  );
};

export default Navbar;
