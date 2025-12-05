"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 1. Import usePathname
import { Home, Mail } from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // 2. Get current path

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PROJECTS', href: '/projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-black/90 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      {/* Logo Section */}
      <Link href="/" className="flex flex-col items-center justify-center group cursor-pointer">
        <div className="flex items-center gap-2 text-white transition-transform duration-300 group-hover:scale-105">
          <Home size={28} strokeWidth={1.5} className="mb-1" />
        </div>
        <div className="text-center leading-tight text-white">
          <h1 className="text-xl font-bold tracking-widest uppercase">Campbell</h1>
          <span className="text-[10px] tracking-[0.2em] block text-gray-300 group-hover:text-[#C19D75] transition-colors duration-300">
            ARCHITECTS
          </span>
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-xs font-semibold tracking-widest text-gray-300">
        {navLinks.map((link) => {
          // 3. Check if this link is active
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
                
                {/* 4. Active State Logic:
                   If isActive: w-full (underline always visible)
                   If not: w-0 group-hover:w-full (underline only on hover)
                */}
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

      {/* Contact Button */}
      <div>
        <button className="flex items-center gap-2 bg-[#C19D75] border border-[#C19D75] text-white px-6 py-3 text-xs font-bold tracking-widest transition-all duration-300 hover:bg-transparent hover:text-[#C19D75] hover:border-[#C19D75]">
          <Mail size={16} />
          <span>CONTACT</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;