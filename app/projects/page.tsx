"use client";

import React, { useState } from 'react';
import Nav from '@/components/Nav';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, ExternalLink, ZoomIn } from 'lucide-react';

// Define the Project Interface
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
}

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Full Project Data (19 Items)
  const projects: Project[] = [
    {
      id: 1,
      title: "The Glass House",
      category: "Residential",
      location: "Colombo, Sri Lanka",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Azure Horizon Tower",
      category: "Commercial",
      location: "Melbourne, Australia",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Serenity Villa",
      category: "Residential",
      location: "Galle, Sri Lanka",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Apex Corporate HQ",
      category: "Interior",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Minimalist Loft",
      category: "Interior",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Forest Retreat",
      category: "Landscape",
      location: "Kandy, Sri Lanka",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Obsidian Complex",
      category: "Commercial",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "The Nordic Cabin",
      category: "Residential",
      location: "Oslo, Norway",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
    },
    // FIXED: Replaced broken "Museum of Arts"
    {
      id: 9,
      title: "Center for Arts",
      category: "Public",
      location: "Berlin, Germany",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop"
    },
    // NEW IMAGES START HERE
    {
      id: 10,
      title: "Riverdale Manor",
      category: "Residential",
      location: "Oxford, UK",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 11,
      title: "Urban Sky Lounge",
      category: "Hospitality",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2097&auto=format&fit=crop"
    },
    {
      id: 12,
      title: "Echo Valley Hotel",
      category: "Commercial",
      location: "Aspen, USA",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 13,
      title: "Neon Cyber Hub",
      category: "Commercial",
      location: "Seoul, South Korea",
      image: "https://images.unsplash.com/photo-1506158669146-619067262a00?q=80&w=2070&auto=format&fit=crop"
    },

    {
      id: 15,
      title: "Zenith Penthouse",
      category: "Interior",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 16,
      title: "Heritage Restoration",
      category: "Restoration",
      location: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 17,
      title: "Dark Matter Studio",
      category: "Interior",
      location: "Stockholm, Sweden",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 18,
      title: "Solaris Green Building",
      category: "Sustainable",
      location: "Vancouver, Canada",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070&auto=format&fit=crop"
    },

  ];

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <main className="bg-black min-h-screen text-white">
      <Nav />
      
      {/* 1. Header */}
      <div className="relative pt-40 pb-20 px-6 md:px-16 bg-[#0a0a0a]">
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col items-center"
        >
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-center">
                Our Poroject
            </h1>
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="h-1 bg-[#C19D75] mt-6"
            />
            <p className="mt-8 text-gray-400 text-center max-w-xl">
              Exploring the boundaries of modern design through {projects.length} curated projects across the globe.
            </p>
        </motion.div>
      </div>

      {/* 2. Project Gallery Grid */}
      <section className="px-6 md:px-16 py-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
            <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                className="group relative h-[350px] cursor-pointer overflow-hidden border border-gray-900 bg-[#111]"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                    <ZoomIn className="text-[#C19D75] mb-4" size={32} />
                    <h3 className="text-lg font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                    </h3>
                    <p className="text-[#C19D75] text-[10px] tracking-[0.2em] uppercase mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {project.category}
                    </p>
                </div>
            </motion.div>
            ))}
        </div>
      </section>

      {/* 3. Lightbox Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-6xl bg-[#111] overflow-hidden shadow-2xl border border-gray-800 flex flex-col lg:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full text-white hover:text-[#C19D75] hover:bg-black transition-all"
              >
                <X size={24} />
              </button>

              {/* Modal Image */}
              <div className="w-full lg:w-3/5 h-[300px] lg:h-auto relative">
                <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Details */}
              <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-[1px] w-8 bg-[#C19D75]"></span>
                    <span className="text-[#C19D75] text-xs font-bold tracking-[0.2em] uppercase">
                        {selectedProject.category}
                    </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
                    {selectedProject.title}
                </h2>
                
                <p className="text-gray-400 text-sm mb-8">
                    {selectedProject.location}
                </p>

                <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
                    This project represents a fusion of modern architectural principles and environmental sensitivity. Designed to maximize natural light while maintaining privacy, it stands as a testament to our commitment to functional luxury.
                </p>

                <div className="mt-auto">
                   <button className="flex items-center gap-2 text-white border border-white px-6 py-3 text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-colors w-max">
                        <span>VIEW CASE STUDY</span>
                        <ExternalLink size={14} />
                    </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}