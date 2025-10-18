import React from 'react';
import { motion } from 'framer-motion';
import podlistHomeImage from '../assets/podlist_home_mockup.png';
import podlistPlayerImage from '../assets/podlist_player_mockup.png';

const DiscoverIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25a8.967 8.967 0 011.932 4.267c.287.64.408 1.317.408 2.018A5.982 5.982 0 0113.5 15.75a5.982 5.982 0 01-5.975-5.73c0-.701.12-1.378.407-2.018A8.967 8.967 0 0112 2.25z" />
    </svg>
);
const PlaylistIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125a1.125 1.125 0 00-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125z" />
    </svg>
);
const OfflineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

const features = [
  { icon: <DiscoverIcon />, title: 'Personalized Discovery Engine', description: 'Find shows tailored to your taste with our smart recommendation algorithm.' },
  { icon: <PlaylistIcon />, title: 'Curate & Share Playlists', description: 'Create custom playlists for any mood and share them with friends in one click.' },
  { icon: <OfflineIcon />, title: 'Listen Anywhere, Offline', description: 'Download any episode to your device and enjoy listening on the go, no signal needed.' },
];

const FeaturesSection = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } };

  return (
    <section className="relative overflow-hidden bg-black text-white pt-16 pb-24 sm:pt-20 sm:pb-32">
      <div
        className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 bg-gradient-radial from-[#820021]/20 to-transparent blur-3xl"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 items-center">
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Designed for the Ultimate<br/> <span className="text-[#FD65CA]">Listening Experience</span>
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-xl">
                Every feature is crafted to make discovering and enjoying podcasts simple, personal, and seamless.
              </p>
            </div>
            
            {features.map((feature, index) => (
              <motion.div key={index} className="flex items-start space-x-5 group" variants={itemVariants}>
                <div className="flex-shrink-0 bg-[#1C1C1C] border border-white/10 p-4 rounded-xl transition-all duration-300 group-hover:bg-[#9A1543]/20 group-hover:border-[#FD65CA]/50">
                   <div className="text-[#FD65CA] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_#FD65CA]">
                    {feature.icon}
                   </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="relative h-[450px] sm:h-[500px] lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute w-[200px] sm:w-[280px] drop-shadow-[0_20px_30px_rgba(154,21,67,0.3)]"
              style={{ top: '5%', right: '5%', rotate: '8deg' }}
              animate={{ y: [-8, 8] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            >
              <img src={podlistPlayerImage} alt="Podlist player screen" className="rounded-3xl sm:rounded-[40px]" />
            </motion.div>

             <motion.div
              className="absolute w-[200px] sm:w-[280px] drop-shadow-[0_25px_40px_rgba(253,101,202,0.25)]"
              style={{ bottom: '5%', left: '5%', rotate: '-6deg' }}
               animate={{ y: [8, -8] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.3 }}
            >
              <img src={podlistHomeImage} alt="Podlist home screen" className="rounded-3xl sm:rounded-[40px]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;