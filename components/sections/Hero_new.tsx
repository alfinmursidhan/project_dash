"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CircularText } from '@/components/ui';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation that loops continuously
  const rotateAnimation = {
    animate: { 
      rotate: 360,
      transition: { 
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  // Add CSS keyframes for ellipse drawing animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes circleDraw {
        0% {
          stroke-dashoffset: 140;
        }
        50% {
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dashoffset: -140;
        }
      }
      
      @keyframes circleDrawReverse {
        0% {
          stroke-dashoffset: -170;
        }
        50% {
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dashoffset: 170;
        }
      }
      
      .animate-ellipse-draw {
        animation: circleDraw 3s ease-in-out infinite;
      }
      
      .animate-ellipse-draw-reverse {
        animation: circleDrawReverse 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Update the CSS keyframes for path drawing animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pathDraw {
        0% {
          stroke-dashoffset: 160;
        }
        50% {
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dashoffset: -160;
        }
      }
      
      .animate-ellipse-draw {
        animation: pathDraw 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-primary pt-24 sm:pt-20"
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
      <div className="container-padding mx-auto relative z-10 py-0 text-center">
        <div className="flex flex-col items-center justify-center">
          {/* Center Content */}
          <div className="w-full max-w-3xl text-text-primary mb-16">
            {/* Main heading with Yeseva One font */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-yeseva heading-xl mb-6 md:mb-8 relative tracking-tight text-primary"
              style={{ letterSpacing: "-0.01em", fontSize: "clamp(2.8rem, 10vw, 5rem)" }}
            >
              <div className="flex flex-col text-left">
                <span className="relative">
                  RAMBUT
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-1 bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 1.2, 
                      ease: "easeOut",
                      delay: 0.5
                    }}
                  />
                </span>
                <span className="relative pl-[30%] tracking-normal">SEHAT,</span>
                <span className="tracking-normal">PRAKTIS</span>
                <span className="tracking-normal">TANPA RIBET</span>
              </div>
            </motion.h1>

            {/* Call to action button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4"
            >
          
               
              
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Fixed position with larger font for mobile */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="flex flex-col items-center"
        >
          <p className="text-primary/80 uppercase text-sm sm:text-xs tracking-widest mb-3 font-medium">Scroll Down</p>
          <div className="w-px h-10 bg-primary/30 mx-auto">
            <motion.div 
              className="w-full h-1/2 bg-primary"
              animate={{ 
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 