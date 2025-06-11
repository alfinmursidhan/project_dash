"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={heroRef} 
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-primary"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container-padding mx-auto relative z-10 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-text-primary mb-8 lg:mb-0 px-4 sm:px-6 md:px-0">
            {/* Main heading with Carelia font */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-carelia heading-xl mb-6 md:mb-8 relative tracking-tight text-primary"
              style={{ letterSpacing: "-0.01em" }}
            >
              <span className="relative inline-block">
                NATURAL
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 1.2, 
                    ease: "easeOut",
                    delay: 0.5
                  }}
                />
              </span>
              <br />
              <span className="tracking-normal">HAIR</span><br />
              <span className="tracking-wide">SOLUTIONS</span>
            </motion.h1>
            
            {/* Subtitle with The Seasons font */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-the-seasons tagline text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-xl text-text-primary leading-relaxed"
            >
              Kami Hanya Fokus pada Rambut, Jadi Kami Tahu yang Terbaik
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 sm:gap-6"
            >
              <Link href="/shop" className="btn-primary text-sm sm:text-base">
                SHOP NOW
              </Link>
              
              <Link href="/about" className="backdrop-blur-sm border-2 border-primary/30 text-primary hover:bg-primary/10 py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base uppercase tracking-wider transition-all duration-500">
                LEARN MORE
              </Link>
            </motion.div>
          </div>
          
          {/* Right content - Product preview */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="/images/product-1.jpg" 
                  alt="Hair Powder" 
                  className="w-48 sm:w-56 md:w-64 h-auto rounded-lg shadow-xl transform -rotate-6"
                />
                <div className="absolute -bottom-4 -right-4 bg-white py-1 sm:py-2 px-2 sm:px-4 rounded-lg shadow-lg">
                  <span className="text-text-primary text-sm sm:text-base font-medium">Hair Powder</span>
                </div>
              </div>
              
              <div className="absolute top-16 sm:top-20 -right-12 sm:-right-20 z-0">
                <img 
                  src="/images/product-2.jpg" 
                  alt="Hair Serum" 
                  className="w-48 sm:w-56 md:w-64 h-auto rounded-lg shadow-xl transform rotate-6"
                />
                <div className="absolute -bottom-4 -left-4 bg-white py-1 sm:py-2 px-2 sm:px-4 rounded-lg shadow-lg">
                  <span className="text-text-primary text-sm sm:text-base font-medium">Hair Serum</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        >
          <p className="text-primary/80 uppercase text-xs tracking-widest mb-2">Scroll Down</p>
          <div className="w-px h-8 sm:h-10 bg-primary/30 mx-auto">
            <div className="w-full h-1/3 bg-primary animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 