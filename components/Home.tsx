"use client";

import React from 'react';
import Nav from './Nav';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Added Variants type import for better safety

const Home = () => {
  // FIXED: Explicitly added ': Variants' type
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        // FIXED: Added 'as const' so TS knows it's a fixed curve of 4 numbers
        ease: [0.16, 1, 0.3, 1] as const 
      }
    }
  };

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Nav />

      {/* 1. Background Image with Slow Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 10, 
            // FIXED: Added 'as const' here as well
            ease: [0.16, 1, 0.3, 1] as const 
          }}
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. Hero Content with Staggered Entrance */}
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        
        <motion.h2 variants={textVariant} className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-gray-200">
          Creative Design Solutions
        </motion.h2>

        <motion.h1 variants={textVariant} className="text-4xl md:text-6xl font-bold uppercase tracking-wide leading-tight mb-2 max-w-5xl">
          Campbell Architects
        </motion.h1>
        
        <motion.h1 variants={textVariant} className="text-4xl md:text-6xl font-bold uppercase tracking-wide leading-tight mb-12 max-w-5xl">
          Design Consulting
        </motion.h1>

        <motion.button 
          variants={textVariant}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 border border-white px-8 py-3 text-sm font-semibold tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
        >
          <span>EXPLORE</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300"/>
        </motion.button>

      </motion.div>
    </div>
  );
};

export default Home;