"use client";

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6 md:px-16 lg:py-32 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Text Slide-In */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }} // Animates once when 100px into view
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
            <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-[#C19D75]"></span>
                <span className="text-[#C19D75] text-xs font-bold tracking-[0.2em] uppercase">
                    About Our Firm
                </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-wide">
                Building Legacies <br />
                <span className="text-gray-500">Since 2004.</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-lg">
                At Campbell Architects, we believe that architecture is more than just structure—it is the art of shaping the environment to elevate the human experience.
            </p>

            {/* Staggered List Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {['AWARD WINNING', 'SUSTAINABLE DESIGN'].map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (index * 0.1) }} // Stagger delay
                        className="flex items-center gap-3"
                    >
                        <CheckCircle2 size={18} className="text-[#C19D75]" />
                        <span className="text-sm tracking-wider text-gray-300">{item}</span>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8">
                <Link href="/about" className="group inline-flex items-center gap-3 border-b border-[#C19D75] pb-1 text-sm font-semibold tracking-widest hover:text-[#C19D75] transition-colors duration-300">
                    <span>READ MORE</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300"/>
                </Link>
            </div>
        </motion.div>

        {/* RIGHT COLUMN: Image Fade-Up */}
        <div className="relative mt-12 lg:mt-0">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 shadow-2xl"
            >
                <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Modern Interior" 
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                />
            </motion.div>

            {/* Decorative Border */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#333] z-0 hidden md:block"
            />
            
            {/* Stats Card Pop-Up */}
            <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-10 -left-10 bg-[#111] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800 hidden md:block z-20"
            >
                <p className="text-[#C19D75] text-4xl font-bold">150+</p>
                <p className="text-gray-400 text-xs tracking-widest mt-1 uppercase">Projects Completed</p>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;