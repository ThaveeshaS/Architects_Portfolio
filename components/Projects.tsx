"use client";

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const Projects = () => {
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="bg-[#050505] text-white py-20 px-6 md:px-16 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-8"
        >
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-[#C19D75]"></span>
                <span className="text-[#C19D75] text-xs font-bold tracking-[0.2em] uppercase">
                    Selected Works
                </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-wide">
                Defining the <br />
                <span className="text-gray-500">Skyline.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed text-sm md:text-base max-w-lg">
                Our portfolio is a testament to our commitment to excellence. From private luxury villas in Galle to high-rise corporate headquarters in Melbourne, every project is a unique dialogue between space, light, and function.
            </motion.p>

            {/* Mini List of recent works */}
            <motion.div variants={fadeInUp} className="space-y-4 border-l border-gray-800 pl-6 mt-4">
                <div className="flex items-center justify-between group cursor-pointer">
                    <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">The Glass House</span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-[#C19D75] transition-opacity" size={18} />
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                    <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">Azure Horizon</span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-[#C19D75] transition-opacity" size={18} />
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                    <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">Serenity Villa</span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-[#C19D75] transition-opacity" size={18} />
                </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="mt-6">
                <Link href="/projects" className="group inline-flex items-center gap-3 border-b border-[#C19D75] pb-1 text-sm font-semibold tracking-widest hover:text-[#C19D75] transition-colors duration-300">
                    <span>VIEW FULL PORTFOLIO</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300"/>
                </Link>
            </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Image Composition */}
        <div className="relative mt-8 lg:mt-0">
             {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop" 
                alt="Featured Architecture" 
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-in-out"
              />
            </motion.div>

            {/* Decorative Gold Border - Offset to Right */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#1a1a1a] z-0 hidden md:block"></div>
        </div>

      </div>
    </section>
  );
};

export default Projects;