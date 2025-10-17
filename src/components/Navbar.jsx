import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-30 py-6 px-4 md:px-8">
      <motion.div 
        className="max-w-7xl mx-auto flex justify-between items-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-2xl font-bold text-white">Podlist</h1>
        
        <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 backdrop-blur-sm">
          Download
        </button>
      </motion.div>
    </header>
  );
};

export default Navbar;