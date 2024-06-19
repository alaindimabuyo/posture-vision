// components/Navbar/Navbar.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`${styles.navbar} fadeIn`}>
      <div className={styles.logo}>
        <Link href="/">Posture Vision</Link>
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
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button className="bg-[#FFCE66] text-black px-10 py-4 text-xl">
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;
