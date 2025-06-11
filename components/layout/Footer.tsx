"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiSend, FiTwitter, FiArrowUpRight, FiCheck } from 'react-icons/fi';
import Link from 'next/link';

// Helper components defined first
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      href={href} 
      className="text-text-secondary hover:text-white transition-colors duration-300 flex items-center group"
    >
      <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
      <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0" />
    </Link>
  </li>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <Link 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="relative w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 group overflow-hidden"
  >
    <span className="absolute inset-0 bg-accent transform scale-0 transition-transform duration-300 group-hover:scale-100 rounded-full" />
    <span className="relative z-10">{icon}</span>
  </Link>
);

// Main component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically connect to your email service
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };
  
  return (
    <footer className="bg-primary text-text-secondary pt-24 pb-8">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="row-span-1 md:row-span-2 lg:row-span-1"
          >
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-serif font-bold">NoBadHair</h3>
              <div className="ml-2 w-2 h-2 bg-accent rounded-full" />
            </div>
            
            <p className="text-text-secondary/90 mb-8 leading-relaxed">
              A solution oriented brand based in Indonesia. 
              Focusing on minimalism, creating and developing grooming needs 
              based on our years of professional experience.
            </p>
            
            <div className="flex space-x-4">
              <SocialIcon icon={<FiInstagram />} href="https://instagram.com" />
              <SocialIcon icon={<FiTwitter />} href="https://twitter.com" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Shop
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent/60" />
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/shop/shampoo">Shampoo</FooterLink>
              <FooterLink href="/shop/conditioner">Conditioner</FooterLink>
              <FooterLink href="/shop/styling">Styling Products</FooterLink>
              <FooterLink href="/shop/all">All Products</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Information
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent/60" />
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/reviews">Customer Reviews</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/shipping">Shipping & Returns</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent/60" />
            </h3>
            <form onSubmit={handleSubmit} className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent transition-all duration-300 pr-12 text-text-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center transition-all duration-300 hover:bg-accent/80"
                aria-label="Subscribe to newsletter"
              >
                {isSubmitted ? (
                  <FiCheck className="w-4 h-4" />
                ) : (
                  <FiSend className="w-4 h-4" />
                )}
              </button>
            </form>
            {isSubmitted && (
              <motion.p 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent mt-2 text-sm"
              >
                Thank you for subscribing!
              </motion.p>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-text-secondary/70 text-sm mb-4 md:mb-0">
            © {currentYear} NoBadHair. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-text-secondary/70 text-sm hover:text-accent transition">Privacy Policy</Link>
            <Link href="/terms" className="text-text-secondary/70 text-sm hover:text-accent transition">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 