// components/Navbar/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} fadeIn`}>
      <div className={styles.logo}>
        <Link href="/">Posture Vision</Link>
      </div>
      <ul className={styles.navLinks}>
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
