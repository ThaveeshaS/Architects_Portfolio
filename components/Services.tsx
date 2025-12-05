"use client";

import React from 'react';
import { PencilRuler, Sofa, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const Services = () => {
  // Animation Variants (Consistent with Home/About)
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
    <section className="bg-[#0f0f0f] text-white py-20 px-6 md:px-16 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Image Composition */}
        <div className="relative order-2 lg:order-1">
             {/* Main Image */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 shadow-2xl"
            >
                <img 
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
                    alt="Luxury Architecture Services" 
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                />
            </motion.div>

            {/* Decorative Gold Border - Offset to left */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#1a1a1a] z-0 hidden md:block"></div>
        </div>

        {/* RIGHT COLUMN: Service Content */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-8 order-1 lg:order-2"
        >
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-[#C19D75]"></span>
                <span className="text-[#C19D75] text-xs font-bold tracking-[0.2em] uppercase">
                    Our Expertise
                </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-wide">
                Comprehensive <br />
                <span className="text-gray-500">Design Solutions.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed text-sm md:text-base">
                We offer a holistic suite of architectural services, guiding you from the first line drawn to the final ribbon cut. Our multidisciplinary approach ensures every detail aligns with your vision.
            </motion.p>

            {/* Service Highlights */}
            <div className="space-y-6">
                {/* Item 1 */}
                <motion.div variants={fadeInUp} className="flex group cursor-pointer">
                    <div className="mr-6 p-3 bg-[#111] border border-gray-800 group-hover:border-[#C19D75] transition-colors">
                        <PencilRuler size={24} className="text-[#C19D75]" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-1 group-hover:text-[#C19D75] transition-colors">Architecture</h4>
                        <p className="text-xs text-gray-500 max-w-xs">Concept to construction documentation.</p>
                    </div>
                </motion.div>

                {/* Item 2 */}
                <motion.div variants={fadeInUp} className="flex group cursor-pointer">
                     <div className="mr-6 p-3 bg-[#111] border border-gray-800 group-hover:border-[#C19D75] transition-colors">
                        <Sofa size={24} className="text-[#C19D75]" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-1 group-hover:text-[#C19D75] transition-colors">Interiors</h4>
                        <p className="text-xs text-gray-500 max-w-xs">Curated furniture and material selection.</p>
                    </div>
                </motion.div>

                {/* Item 3 */}
                <motion.div variants={fadeInUp} className="flex group cursor-pointer">
                     <div className="mr-6 p-3 bg-[#111] border border-gray-800 group-hover:border-[#C19D75] transition-colors">
                        <Building2 size={24} className="text-[#C19D75]" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-1 group-hover:text-[#C19D75] transition-colors">Planning</h4>
                        <p className="text-xs text-gray-500 max-w-xs">Urban development and feasibility studies.</p>
                    </div>
                </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="mt-4">
                <Link href="/services" className="group inline-flex items-center gap-3 border-b border-[#C19D75] pb-1 text-sm font-semibold tracking-widest hover:text-[#C19D75] transition-colors duration-300">
                    <span>VIEW ALL SERVICES</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300"/>
                </Link>
            </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;