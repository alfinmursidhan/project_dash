"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FiStar } from 'react-icons/fi';

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const reviews = [
    {
      id: 1,
      name: "Jonathan",
      rating: 5,
      text: "Claynya benar terasa creamy dan mudah untuk diambil dan diaplikasikan ke rambut. Setelah kering juga hold cukup baik dan tidak terasa lengket di tangan."
    },
    {
      id: 2,
      name: "Simon M.",
      rating: 5,
      text: "Simply the best local product I've ever tried. Definitely will re-purchase!"
    },
    {
      id: 3,
      name: "Stefanus",
      rating: 5,
      text: "Bangga ada Hair Styling Product varian Clay buatan Indonesia. Local pride. Mudah diaplikasikan di rambut, bervolume, mudah dibilas dengan air saat keramas."
    },
    {
      id: 4,
      name: "Dzaki",
      rating: 5,
      text: "Terbaik dari semua produk clay yang sudah pernah saya coba"
    },
    {
      id: 5,
      name: "Shandy",
      rating: 5,
      text: "Wanginya natural, ini clay nya sampe dibawa tidur dan kebesokan harinya masih ok banget sih dan yg pasti dicuci nya gampang (ga lengket) RECOMMENDED"
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
      className="py-16 sm:py-24 md:py-32 lg:py-40 relative w-full"
      style={{
        backgroundImage: "url('/images/Sampul Profil.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="w-[85%] sm:w-[75%] md:max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          {/* Header with REVIEWS text */}
          <div className="bg-black bg-opacity-80 py-3 px-6 backdrop-blur-sm border-b border-gray-500/30">
            <h2 className="text-white text-center text-xl font-medium uppercase tracking-wider">REVIEWS</h2>
          </div>
          
          {/* Review content */}
          <div 
            className="backdrop-blur-md bg-white/20 p-6 sm:p-8"
            style={{
              backdropFilter: "blur(12px)",
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
          >
            {/* Stars */}
            <div className="flex mb-5 sm:mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar key={star} className="text-amber-400 w-5 h-5 sm:w-6 sm:h-6 mr-1 fill-current drop-shadow-md" />
              ))}
            </div>
            
            {/* Review text */}
            <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-sm">
              "{reviews[currentIndex].text}"
            </p>
            
            {/* Reviewer name */}
            <p className="text-sm sm:text-base text-white/90 mb-3 sm:mb-4 font-light">
              {reviews[currentIndex].name}
            </p>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-3 sm:mt-4 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;