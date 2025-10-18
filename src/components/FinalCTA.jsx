import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import QRCode from 'react-qr-code';

const FinalCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const appDownloadLink = "https://www.podlist.com/download"; 

  return (
    <section className="relative bg-black text-white pt-0 pb-24 sm:pb-32 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#9A1543]/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        className="relative max-w-4xl mx-auto text-center px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight"
          variants={itemVariants}
        >
          Start your listening journey with Podlist today.
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-400"
          variants={itemVariants}
        >
          Stream. Discover. Connect. Your podcasts, reimagined.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <a
            href="#"
            className="group relative inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-gray-800/80 backdrop-blur-sm border border-white/20 rounded-full overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-[#FD65CA]/50"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#9A1543] to-[#FD65CA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <FaApple className="mr-3 text-2xl relative" />
            <span className="relative">Download on App Store</span>
          </a>
          <a
            href="#"
            className="group relative inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-gray-800/80 backdrop-blur-sm border border-white/20 rounded-full overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-[#FD65CA]/50"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#9A1543] to-[#FD65CA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <FaGooglePlay className="mr-3 text-2xl relative" />
            <span className="relative">Get it on Google Play</span>
          </a>
        </motion.div>
        
        <motion.div
          className="mt-20 flex flex-col items-center"
          variants={itemVariants}
        >
          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#FD65CA] via-[#9A1543] to-[#820021]">
             <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-[#FD65CA] via-[#9A1543] to-[#820021] rounded-2xl blur opacity-75"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative p-6 bg-black/80 backdrop-blur-lg rounded-xl border border-white/10">
              <QRCode
                value={appDownloadLink}
                size={160}
                bgColor="transparent"
                fgColor="#FFFFFF"
              />
            </div>
          </div>
          <p className="mt-6 text-lg text-gray-300">Scan to Download</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;