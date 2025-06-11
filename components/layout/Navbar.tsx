"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useScrollPosition } from '@/utils/hooks';
import { NAV_LINKS, TRANSITIONS } from '@/utils/constants';

/**
 * Navigation bar component with smooth scrolling
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled, activeSection } = useScrollPosition();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
    
    const targetId = href.replace('#', '');
    
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset to account for navbar height
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white shadow-sm py-3 border-b border-primary/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-padding mx-auto flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <motion.div 
            className="font-serif text-2xl font-bold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            dahs
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {NAV_LINKS.map((link, index) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={link.href} 
                className="uppercase tracking-wider text-sm font-medium relative group px-2 py-1"
                onClick={(e) => handleScrollToSection(e, link.href)}
              >
                <span className={`relative z-10 transition-all duration-300 text-primary ${
                  isActive ? 'font-bold' : ''
                } group-hover:font-bold`}>
                  {link.name}
                </span>
                <span className={`absolute bottom-0 left-0 ${isActive ? 'w-full' : 'w-0'} h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            </motion.div>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none z-50 relative text-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-24"
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="container-padding flex flex-col space-y-4"
            >
              {NAV_LINKS.map((link, index) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border-b border-primary/10 py-3"
                  >
                    <Link
                      href={link.href}
                      className={`text-xl font-serif block ${
                        isActive ? 'text-primary font-medium' : 'text-text-primary'
                      }`}
                      onClick={(e) => handleScrollToSection(e, link.href)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 