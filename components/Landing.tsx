"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { Home } from "lucide-react"; // Import the Logo Icon

// Import your site sections
import ArchitectHero from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ThreeLanding from "./ThreeLanding";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showHomeText, setShowHomeText] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("campbell-intro-seen");

    if (hasSeenIntro) {
      setIsLoading(false);
      setShowHomeText(true); 
      document.body.style.overflow = "auto";
    } else {
      playIntroAnimation();
    }

    async function playIntroAnimation() {
      document.body.style.overflow = "hidden";

      // 1. Wait for particles (4.5s)
      
      // 2. Reveal Logo & Text Together
      // We run these in parallel
      const logoAnim = animate(".brand-logo", 
        { opacity: 1, scale: 1, filter: "blur(0px)" }, 
        { duration: 0.8, delay: 4.5, ease: "circOut" } 
      );
      
      const textAnim = animate(".brand-text", 
        { opacity: 1, scale: 1, filter: "blur(0px)" }, 
        { duration: 0.8, delay: 4.5, ease: "circOut" } 
      );

      await Promise.all([logoAnim, textAnim]);

      // 3. Short pause to read the brand
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 4. Start Home Animation (Before curtain lifts)
      setShowHomeText(true);

      // 5. Lift the Curtain
      if (scope.current) {
        await animate(scope.current, { y: "-100%" }, { duration: 1.2, ease: [0.76, 0, 0.24, 1] });
      }
      
      // 6. Cleanup
      setIsLoading(false);
      document.body.style.overflow = "auto";
      sessionStorage.setItem("campbell-intro-seen", "true");
    }
  }, [animate, scope]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <div 
            ref={scope} 
            className="fixed inset-0 z-[100] bg-[#050505] text-white flex flex-col items-center justify-center overflow-hidden"
          >
            {/* A. The 3D Scene */}
            <ThreeLanding />
            
            {/* B. The Brand Logo & Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none mix-blend-screen">
                
                {/* NEW: The Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 3, filter: "blur(20px)" }}
                    className="brand-logo text-[#C19D75] mb-6"
                >
                    <Home size={80} strokeWidth={1} />
                </motion.div>

                {/* The Text */}
                <motion.h1 
                    initial={{ opacity: 0, scale: 4, filter: "blur(20px)" }}
                    className="brand-text text-5xl md:text-8xl font-bold uppercase tracking-widest text-white mb-2 text-center"
                >
                    Campbell
                </motion.h1>
                <motion.span 
                    initial={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
                    className="brand-text text-[#C19D75] text-sm md:text-xl font-mono tracking-[0.6em] uppercase block"
                >
                    Architects
                </motion.span>
            </div>

            {/* C. Loading Bar */}
            <div className="absolute bottom-10 w-64 h-1 bg-gray-900 rounded-full overflow-hidden z-20">
                <motion.div 
                    className="h-full bg-[#C19D75]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6.5, ease: "linear" }}
                />
            </div>
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-0">
        <ArchitectHero startAnimation={showHomeText} />
        <About />
        <Services />
        <Projects />
      </div>
    </>
  );
};

export default Landing;