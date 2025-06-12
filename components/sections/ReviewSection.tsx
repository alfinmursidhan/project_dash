"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const reviews = [
    {
      id: 1,
      name: "Simon M.",
      rating: 5,
      text: "Simply the best local product I've ever tried. Definitely will re-purchase!"
    },
    {
      id: 2,
      name: "Stefanus",
      rating: 5,
      text: "Bangga ada Hair Styling Product varian Clay buatan Indonesia. Local pride. Mudah diaplikasikan di rambut, bervolume, mudah dibilas dengan air saat keramas."
    },
    {
      id: 3,
      name: "Dzaki",
      rating: 5,
      text: "Terbaik dari semua produk clay yang sudah pernah saya coba"
    },
    {
      id: 4,
      name: "Kenneth",
      rating: 5,
      text: "Pembelian kesekian. Cocok, tidak lengket, gampang hilang ketika keramas, matte, tidak keras tapi rambut ttp rapih biarpun ketiup angin"
    }
  ];
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    
    return () => {
      resetTimeout();
    };
  }, [currentIndex, reviews.length]);
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <section 
      id="reviews" 
      className="py-20 relative"
      style={{
        backgroundImage: "url('/images/Sampul Profil.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container-padding mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-2 text-white">Reviews</h2>
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar key={star} className="text-accent w-6 h-6 mx-1 fill-current" />
            ))}
          </div>
          <p className="text-accent font-semibold">5/5</p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <p className="text-lg mb-6 italic text-gray-700">" {reviews[currentIndex].text} "</p>
              <p className="font-semibold">{reviews[currentIndex].name}</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection; 