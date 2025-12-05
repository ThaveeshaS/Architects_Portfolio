"use client";

import React from 'react';
import Nav from '@/components/Nav';
import { Award, Users, Ruler, CheckCircle2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function AboutPage() {
  // --- Animation Variants ---
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

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <Nav />
      
      {/* 1. HERO HEADER */}
      <div className="relative pt-40 pb-12 px-6 md:px-16 bg-[#0a0a0a]">
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col items-center"
        >
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-center">
                Who We Are
            </h1>
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="h-1 bg-[#C19D75] mt-6"
            />
        </motion.div>
      </div>

      {/* 2. THE STORY (Merged Split Layout) */}
      <section className="px-6 md:px-16 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="flex flex-col gap-6"
            >
                <motion.div variants={fadeInUp} className="flex items-center gap-4">
                    <span className="h-[1px] w-12 bg-[#C19D75]"></span>
                    <span className="text-[#C19D75] text-xs font-bold tracking-[0.2em] uppercase">
                        Since 2004
                    </span>
                </motion.div>

                <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-wide">
                    Building Legacies <br />
                    <span className="text-gray-500">Not Just Structures.</span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed text-lg">
                    At Campbell Architects, we believe that architecture is more than just structure—it is the art of shaping the environment to elevate the human experience. We specialize in luxury residential and high-end commercial projects that merge functionality with timeless aesthetics.
                </motion.p>

                {/* Bullet Points */}
                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[#C19D75]" />
                        <span className="text-sm tracking-wider text-gray-300">AWARD WINNING</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[#C19D75]" />
                        <span className="text-sm tracking-wider text-gray-300">SUSTAINABLE DESIGN</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right: Image Composition */}
            <div className="relative mt-8 lg:mt-0">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageReveal}
                    className="relative z-10 shadow-2xl"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Modern Interior" 
                        className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>

                {/* Decorative Box Behind */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#333] z-0 hidden md:block"></div>
                
                {/* Floating Stats Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute -bottom-10 -left-10 bg-[#111] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800 hidden md:block z-20"
                >
                    <p className="text-[#C19D75] text-4xl font-bold">150+</p>
                    <p className="text-gray-400 text-xs tracking-widest mt-1 uppercase">Projects Completed</p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY QUOTE */}
      <section className="px-6 md:px-16 py-16 bg-[#0a0a0a] border-y border-gray-900">
        <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="max-w-4xl mx-auto text-center"
        >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic">
                "We don't just design buildings; we curate lifestyles. From the initial sketch to the final stone laid, our team is dedicated to precision, sustainability, and an unyielding attention to detail."
            </p>
        </motion.div>
      </section>

      {/* 4. VALUES GRID */}
      <section className="px-6 md:px-16 py-24">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            {/* Card 1 */}
            <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10, borderColor: '#C19D75' }}
                className="bg-[#111] p-10 border border-gray-800 text-center transition-colors duration-300 group"
            >
                <Award className="mx-auto text-[#C19D75] mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Awards</h3>
                <p className="text-gray-400">Winner of the 2023 Global Design Excellence Award.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10, borderColor: '#C19D75' }}
                className="bg-[#111] p-10 border border-gray-800 text-center transition-colors duration-300 group"
            >
                <Users className="mx-auto text-[#C19D75] mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Team</h3>
                <p className="text-gray-400">A diverse group of 40+ senior architects and designers.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10, borderColor: '#C19D75' }}
                className="bg-[#111] p-10 border border-gray-800 text-center transition-colors duration-300 group"
            >
                <Ruler className="mx-auto text-[#C19D75] mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Precision</h3>
                <p className="text-gray-400">State-of-the-art 3D modeling and structural planning.</p>
            </motion.div>
        </motion.div>
      </section>

    </main>
  );
}