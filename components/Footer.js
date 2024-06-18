// components/Footer.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 fadeIn">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-12 mt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2xl"
              />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2xl"
              />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-600">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2xl"
              />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-700">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
              />
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2">123 Main Street, Anytown, USA</p>
          <p className="mt-2">Email: info@example.com</p>
          <p className="mt-2">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
