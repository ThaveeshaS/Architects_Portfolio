"use client";

import React from 'react';
import Nav from '@/components/Nav';
import { motion, Variants } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, Clock } from 'lucide-react';

export default function ContactPage() {
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    <main className="bg-black min-h-screen text-white">
      <Nav />
      
      {/* 1. Header Section */}
      <div className="relative pt-40 pb-20 px-6 md:px-16 bg-[#0a0a0a]">
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col items-center"
        >
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-center">
                Get in Touch
            </h1>
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="h-1 bg-[#C19D75] mt-6"
            />
            <p className="mt-8 text-gray-400 text-center max-w-xl text-lg">
              Ready to start your next project? We are here to listen and bring your vision to life.
            </p>
        </motion.div>
      </div>

      {/* 2. Main Content Grid */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: Contact Form */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.h3 variants={fadeInUp} className="text-2xl font-bold uppercase tracking-widest mb-8">
                    Send a Message
                </motion.h3>

                <form className="space-y-8">
                    {/* Name Input */}
                    <motion.div variants={fadeInUp} className="relative group">
                        <input 
                            type="text" 
                            placeholder="YOUR NAME" 
                            className="w-full bg-transparent border-b border-gray-800 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#C19D75] transition-colors duration-300"
                        />
                    </motion.div>

                    {/* Email Input */}
                    <motion.div variants={fadeInUp} className="relative group">
                        <input 
                            type="email" 
                            placeholder="EMAIL ADDRESS" 
                            className="w-full bg-transparent border-b border-gray-800 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#C19D75] transition-colors duration-300"
                        />
                    </motion.div>

                    {/* Subject Input */}
                    <motion.div variants={fadeInUp} className="relative group">
                        <select 
                            className="w-full bg-transparent border-b border-gray-800 py-4 text-gray-500 focus:outline-none focus:border-[#C19D75] transition-colors duration-300 appearance-none"
                        >
                            <option>PROJECT INQUIRY</option>
                            <option>CAREERS</option>
                            <option>PRESS</option>
                            <option>OTHER</option>
                        </select>
                    </motion.div>

                    {/* Message Input */}
                    <motion.div variants={fadeInUp} className="relative group">
                        <textarea 
                            rows={4} 
                            placeholder="TELL US ABOUT YOUR PROJECT" 
                            className="w-full bg-transparent border-b border-gray-800 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#C19D75] transition-colors duration-300 resize-none"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={fadeInUp} className="pt-4">
                        <button className="bg-[#C19D75] hover:bg-[#b08d66] text-white px-10 py-4 text-sm font-bold tracking-widest transition-colors duration-300 flex items-center gap-3">
                            <span>SEND MESSAGE</span>
                            <ArrowRight size={16} />
                        </button>
                    </motion.div>
                </form>
            </motion.div>


            {/* RIGHT COLUMN: Info & Map */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="flex flex-col gap-12"
            >
                {/* Contact Details */}
                <div>
                    <motion.h3 variants={fadeInUp} className="text-2xl font-bold uppercase tracking-widest mb-8">
                        Contact Info
                    </motion.h3>
                    
                    <div className="space-y-6">
                        <motion.div variants={fadeInUp} className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 bg-[#111] border border-gray-800 group-hover:border-[#C19D75] transition-colors">
                                <MapPin className="text-[#C19D75]" size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1 group-hover:text-white">Headquarters</h4>
                                <p className="text-gray-500 leading-relaxed">
                                    1205 Marina District, <br />
                                    Colombo 03, Sri Lanka.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 bg-[#111] border border-gray-800 group-hover:border-[#C19D75] transition-colors">
                                <Phone className="text-[#C19D75]" size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1 group-hover:text-white">Phone</h4>
                                <p className="text-gray-500">+94 11 255 6789</p>
                                <p className="text-gray-500">+94 77 123 4567</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 bg-[#111] border border-gray-800 group-hover:border-[#C19D75] transition-colors">
                                <Mail className="text-[#C19D75]" size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1 group-hover:text-white">Email</h4>
                                <p className="text-gray-500">hello@campbell-arch.com</p>
                                <p className="text-gray-500">careers@campbell-arch.com</p>
                            </div>
                        </motion.div>

                         <motion.div variants={fadeInUp} className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 bg-[#111] border border-gray-800 group-hover:border-[#C19D75] transition-colors">
                                <Clock className="text-[#C19D75]" size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1 group-hover:text-white">Hours</h4>
                                <p className="text-gray-500">Mon - Fri: 09:00 - 18:00</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stylized Map Image */}
                <motion.div 
                    variants={fadeInUp}
                    className="relative w-full h-64 bg-[#111] border border-gray-800 overflow-hidden group"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                        alt="Map Location"
                        className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-[#C19D75] p-3 rounded-full shadow-[0_0_20px_rgba(193,157,117,0.5)]">
                            <MapPin className="text-white" size={24} />
                         </div>
                    </div>
                </motion.div>

            </motion.div>

        </div>
      </section>

    </main>
  );
}