import React from 'react';
import { motion } from 'framer-motion';
import heroMockup from '../assets/hero_mockup.png';

const Hero = ({ featuresRef }) => {

  const handleScrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };


  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      
      <div className="absolute inset-0 z-0 opacity-40">
        <motion.div
          className="absolute top-0 left-[10%] w-96 h-96 bg-deep-burgundy rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 25, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute bottom-0 right-[10%] w-96 h-96 bg-rose-brown rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-8">
        
        <motion.div 
          className="text-center md:text-left space-y-5"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible" 
        >
          <motion.h1 
            variants={textItemVariants}
            className="text-5xl md:text-6xl font-bold leading-tight text-white"
          >
            Enjoy Your Podcast,
            <br />
            <span className="bg-gradient-to-r from-soft-pink to-rose-brown text-transparent bg-clip-text">
              Enjoy Your Life.
            </span>
          </motion.h1>
          <motion.p 
            variants={textItemVariants}
            className="text-lg text-gray-300 max-w-md mx-auto md:mx-0"
          >
            Listen to your favorite podcast for free, anywhere and offline with Podlist.
          </motion.p>
          <motion.div 
            variants={textItemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2"
          >
            <button className="bg-rose-brown hover:bg-deep-burgundy text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-brown/20">
              Start Listening
            </button>
            <button 
              onClick={handleScrollToFeatures}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 backdrop-blur-sm"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>

        
        <motion.div 
          className="relative flex items-center justify-center h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [-10, 10] }} // Gentle float up and down
          transition={{
            duration: 0.8,
            ease: "easeOut",
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        >
          <img 
            src={heroMockup} 
            alt="Podlist App Mockup" 
            className="w-full max-w-[14rem] sm:max-w-[17rem] md:max-w-[22rem] h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;