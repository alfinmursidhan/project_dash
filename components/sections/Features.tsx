"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Combined benefits for both products
  const allBenefits = [
    {
      icon: "✦",
      title: "Natural Hair Powder",
      description: "Volumizing and texturizing powder with 99% natural ingredients. Suitable for all hair types.",
      image: "/images/products/card.jpg"
    },
    {
      icon: "✦",
      title: "Vitamin C Enriched",
      description: "Packed with antioxidants that protect hair from environmental damage.",
      image: "/images/benefits/vitaminc.jpg"
    },
    {
      icon: "✦",
      title: "Lightweight Formula",
      description: "Adds volume without weighing hair down, perfect for all hair types.",
      image: "/images/benefits/lightweight.jpg"
    },
    {
      icon: "✦",
      title: "Eco-Friendly",
      description: "Sustainable ingredients and packaging that's better for the planet.",
      image: "/images/benefits/eco.jpg"
    },
    {
      icon: "✦",
      title: "Deep Hydration",
      description: "Infuses moisture into dry, damaged hair for silky smooth results.",
      image: "/images/benefits/hydration.jpg"
    },
    {
      icon: "✦",
      title: "Anti-Frizz Protection",
      description: "Tames unruly hair and controls frizz even in humid conditions.",
      image: "/images/benefits/antifrizz.jpg"
    },
    {
      icon: "✦",
      title: "Heat Protection",
      description: "Creates a protective barrier against styling damage from heat tools.",
      image: "/images/benefits/heat.jpg"
    },
    {
      icon: "✦",
      title: "Natural Oils",
      description: "Blend of essential oils that nourish and add natural shine to hair.",
      image: "/images/benefits/oils.jpg"
    }
  ];

  // Auto-advance slides with improved timing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    // Only start the autoplay when the component is in view
    if (autoplay && isInView) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allBenefits.length);
      }, 4000); // Slightly longer duration for better readability
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, allBenefits.length, isInView]);

  // Ensure autoplay starts when the component comes into view
  useEffect(() => {
    if (isInView) {
      setAutoplay(true);
    }
  }, [isInView]);

  // Pause autoplay on hover, resume on mouse leave
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Function to manually change slides
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Temporarily pause autoplay when manually changing slides
    setAutoplay(false);
    // Resume autoplay after a short delay
    setTimeout(() => setAutoplay(true), 2000);
  };

  return (
    <section id="features" ref={ref} className="py-16 bg-secondary">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4 text-text-primary">PRODUCT BENEFITS</h2>
          <p className="text-text-primary/80 max-w-2xl mx-auto">
            Our premium hair products are crafted with natural ingredients to deliver exceptional results for all hair types.
          </p>
        </motion.div>

        {/* Full-width image slider with enhanced transitions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${allBenefits[currentSlide].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  {currentSlide !== 0 && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="p-8 md:p-12 text-text-secondary w-full"
                    >
                      <h3 className="text-2xl md:text-3xl font-serif mb-3">{allBenefits[currentSlide].title}</h3>
                      <p className="text-text-secondary/90 text-base md:text-lg max-w-xl">{allBenefits[currentSlide].description}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Slider indicators with active animation */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
              {allBenefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentSlide === index 
                      ? 'bg-text-secondary w-8 shadow-lg' 
                      : 'bg-text-secondary/50 w-2 hover:bg-text-secondary/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Auto-play indicator */}
            <div className="absolute top-6 right-6">
              <div className={`w-2 h-2 rounded-full ${autoplay ? 'bg-accent animate-pulse' : 'bg-text-secondary/50'}`} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 