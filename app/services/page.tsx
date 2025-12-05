"use client";

import React from 'react';
import Nav from '@/components/Nav';
import { PencilRuler, Building2, Sofa, HardHat, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function ServicesPage() {
  // --- Animations ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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

  const serviceList = [
    {
      icon: <PencilRuler size={32} />,
      title: "Architectural Design",
      desc: "Comprehensive conceptual planning and 3D visualization for residential and commercial structures."
    },
    {
      icon: <Sofa size={32} />,
      title: "Interior Architecture",
      desc: "Curating bespoke interior environments that harmonize with the external structure."
    },
    {
      icon: <Building2 size={32} />,
      title: "Urban Planning",
      desc: "Large-scale master planning focused on community, sustainability, and flow."
    },
    {
      icon: <HardHat size={32} />,
      title: "Project Management",
      desc: "End-to-end oversight ensuring your project is delivered on time, within budget, and to spec."
    }
  ];

  return (
    <main className="bg-black min-h-screen text-white">
      <Nav />
      
      {/* 1. Header Section */}
      <div className="relative pt-40 pb-20 px-6 md:px-16 bg-[#0a0a0a]">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center"
        >
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-center">
                Our Expertise
            </h1>
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="h-1 bg-[#C19D75] mt-6"
            />
            <p className="mt-8 text-gray-400 max-w-2xl text-center text-lg leading-relaxed">
              We offer a holistic suite of architectural services, guiding you from the first line drawn to the final ribbon cut.
            </p>
        </motion.div>
      </div>

      {/* 2. Services Grid (Quick Overview) */}
      <section className="px-6 md:px-16 py-16 bg-[#111]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceList.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="group p-8 border border-gray-800 hover:border-[#C19D75] transition-all duration-300 bg-black/50"
            >
              <div className="text-[#C19D75] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Detailed Feature Section (Residential) */}
      <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
          >
             <span className="text-[#C19D75] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Private Residences
            </span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">
              Luxury Living <br /> Redefined
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our residential projects are more than houses; they are personal sanctuaries tailored to your lifestyle. We blend natural light, fluid layouts, and premium materials to create spaces that feel both expansive and intimate.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-gray-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C19D75]"/> Custom Villa Design</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C19D75]"/> Landscape Integration</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C19D75]"/> Sustainable Energy Solutions</li>
            </ul>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full"
          >
             <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
              alt="Luxury Villa" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Outline Box Decoration */}
            <div className="absolute top-6 -left-6 w-full h-full border border-gray-700 -z-10 hidden md:block"></div>
          </motion.div>

        </div>
      </section>

      {/* 4. Detailed Feature Section (Commercial - Inverted Layout) */}
      <section className="px-6 md:px-16 py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
           {/* Image Side (First on Desktop) */}
           <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full order-2 lg:order-1"
          >
             <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Modern Office" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
             <div className="absolute -bottom-6 -right-6 w-full h-full border border-gray-700 -z-10 hidden md:block"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeInUp}
            className="order-1 lg:order-2"
          >
             <span className="text-[#C19D75] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Commercial & Retail
            </span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">
              Spaces that <br /> Inspire Work
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We design commercial spaces that enhance productivity and reflect your brand identity. From corporate headquarters to boutique retail, we create environments that leave a lasting impression on clients and employees alike.
            </p>
            <button className="group flex items-center gap-3 text-sm font-semibold tracking-widest text-white hover:text-[#C19D75] transition-colors">
              <span>VIEW COMMERCIAL PROJECTS</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
            </button>
          </motion.div>

        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-32 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-8">
            Ready to Build Your Vision?
          </h2>
          <button className="bg-[#C19D75] hover:bg-[#b08d66] text-white px-10 py-4 text-sm font-bold tracking-widest transition-colors duration-300">
            START A CONSULTATION
          </button>
        </motion.div>
      </section>

    </main>
  );
}