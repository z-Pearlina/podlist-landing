import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const navLinks = ['Home', 'Features', 'About', 'Contact', 'Privacy Policy'];

  return (
    <motion.footer
      className="relative bg-black text-gray-400 pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FD65CA]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-y-8">
        
        
        <h3 className="text-3xl font-bold text-white">Podlist</h3>
        
        
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-base transition-all duration-300 hover:text-white hover:-translate-y-0.5"
            >
              {link}
            </a>
          ))}
        </nav>

        
        <div className="flex justify-center items-center space-x-6">
          <a href="#" aria-label="LinkedIn" className="text-2xl transition-all duration-300 hover:text-white hover:-translate-y-0.5"><FaLinkedin /></a>
          <a href="#" aria-label="Instagram" className="text-2xl transition-all duration-300 hover:text-white hover:-translate-y-0.5"><FaInstagram /></a>
          <a href="#" aria-label="Twitter" className="text-2xl transition-all duration-300 hover:text-white hover:-translate-y-0.5"><FaTwitter /></a>
        </div>
        
        
        <div className="w-full pt-8 mt-4 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Podlist. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;