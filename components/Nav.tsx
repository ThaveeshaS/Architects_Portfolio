"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PROJECTS', href: '/projects' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-8 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-black/90 py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        {/* Logo Section */}
        <Link href="/" className="flex flex-col items-center justify-center group cursor-pointer z-50">
          <div className="flex items-center gap-2 text-white transition-transform duration-300 group-hover:scale-105">
            <Home size={24} strokeWidth={1.5} className="mb-1" />
          </div>
          <div className="text-center leading-tight text-white">
            <h1 className="text-lg md:text-xl font-bold tracking-widest uppercase">Campbell</h1>
            <span className="text-[8px] md:text-[10px] tracking-[0.2em] block text-gray-300 group-hover:text-[#C19D75] transition-colors duration-300">
              ARCHITECTS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-8 text-xs font-semibold tracking-widest text-gray-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative py-2 transition-colors duration-300 group ${
                    isActive ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute left-0 bottom-0 h-[2px] bg-[#C19D75] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Contact Button (Hidden on Mobile) */}
        <div className="hidden md:block">
            <Link href="/contact">
                <button className="flex items-center gap-2 bg-[#C19D75] border border-[#C19D75] text-white px-6 py-3 text-xs font-bold tracking-widest transition-all duration-300 hover:bg-transparent hover:text-[#C19D75] hover:border-[#C19D75]">
                <Mail size={16} />
                <span>CONTACT</span>
                </button>
            </Link>
        </div>

        {/* MOBILE: Hamburger Button */}
        <div className="md:hidden z-50">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-[#C19D75] transition-colors"
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center md:hidden"
            >
                <ul className="flex flex-col gap-8 text-center">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link 
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold uppercase tracking-widest text-white hover:text-[#C19D75] transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className="mt-8">
                         <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="flex items-center gap-2 bg-[#C19D75] border border-[#C19D75] text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-transparent hover:text-[#C19D75]">
                                <Mail size={18} />
                                <span>CONTACT</span>
                            </button>
                        </Link>
                    </li>
                </ul>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;