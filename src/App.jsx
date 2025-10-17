import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FinalCTA from './components/FinalCTA'; 
import Footer from './components/Footer';

function App() {
  const featuresRef = useRef(null);

  return (
    <main className="bg-[#121212] text-white font-poppins">
      <Navbar />
      <Hero featuresRef={featuresRef} />
      <div ref={featuresRef}>
        <Features />
        <FinalCTA /> 
        <Footer />
      </div>
    </main>
  );
}

export default App;