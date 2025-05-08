import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  const footerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const socialIcons = [
    { icon: FaFacebookF, link: '#' },
    { icon: FaTwitter, link: '#' },
    { icon: FaPinterestP, link: '#' },
    { icon: FaInstagram, link: '#' },
    { icon: FaLinkedinIn, link: '#' },
  ];

  return (
    <motion.footer
      variants={footerVariants}
      initial="initial"
      animate="animate"
      className="bg-black text-white py-12"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold text-lg">D</div>
            <h3 className="text-xl font-semibold text-lime-400">Digital Agency.</h3>
          </div>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-4">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-md font-semibold text-lime-400 mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold text-lime-400 mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>+0123-456-789</li>
              <li><a href="https://www.example.com" className="hover:text-lime-400">www.example.com</a></li>
              <li><a href="mailto:example@gmail.com" className="hover:text-lime-400">example@gmail.com</a></li>
              <li>4517 Washington Ave.<br />Manchester, Kentucky<br />39495</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-md font-semibold text-lime-400 mb-3">Get the latest information</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-gray-700 text-white rounded-l-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <motion.button
              className="bg-lime-400 text-black rounded-r-md py-2 px-4 hover:bg-lime-300 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M3.42 2.5A.75.75 0 014.17 2h15.66a.75.75 0 01.75.75v18.5a.75.75 0 01-.75.75H4.17a.75.75 0 01-.75-.75V2.75zm14.28 10.32a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-3-3a.75.75 0 00-1.06 0zM5.25 12a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 mt-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>&copy; 2024 Digital Agency. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:text-lime-400">User Terms & Conditions</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-lime-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
