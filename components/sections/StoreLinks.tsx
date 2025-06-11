"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const StoreLinks = () => {
  const stores = [
    {
      name: 'TOKOPEDIA',
      href: 'https://tokopedia.com',
      logo: '/images/tokopedia-logo.svg'
    },
    {
      name: 'SHOPEE',
      href: 'https://shopee.co.id',
      logo: '/images/shopee-logo.svg'
    },
    {
      name: 'TIKTOK SHOP',
      href: 'https://tiktok.com/shop',
      logo: '/images/tiktok-logo.svg'
    }
  ];

  return (
    <section id="connect" className="py-16">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="heading-lg mb-4 text-text-primary">OFFICIAL STORES</h2>
          <p className="max-w-2xl mx-auto text-text-primary/80">
            Get our exclusive offers only at our official stores.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {/* Tokopedia Store Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-black text-white rounded-lg overflow-hidden shadow-lg transition-all duration-300"
          >
            <Link href={stores[0].href} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center py-12 px-6">
                <div className="text-center mb-4">
                  <p className="text-xl font-medium mb-2">Shop on</p>
                  <div className="flex justify-center">
                    <img 
                      src={stores[0].logo}
                      alt="Tokopedia" 
                      className="h-12 object-contain"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Shopee Store Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-black text-white rounded-lg overflow-hidden shadow-lg transition-all duration-300"
          >
            <Link href={stores[1].href} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center py-12 px-6">
                <div className="text-center mb-4">
                  <p className="text-xl font-medium mb-2">Shop on</p>
                  <div className="flex justify-center">
                    <img 
                      src={stores[1].logo}
                      alt="Shopee" 
                      className="h-12 object-contain"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* TikTok Shop Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-black text-white rounded-lg overflow-hidden shadow-lg transition-all duration-300"
          >
            <Link href={stores[2].href} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center py-12 px-6">
                <div className="text-center mb-4">
                  <p className="text-xl font-medium mb-2">Shop on</p>
                  <div className="flex justify-center">
                    <img 
                      src={stores[2].logo}
                      alt="TikTok Shop" 
                      className="h-12 object-contain"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-extrabold mb-4 text-white bg-primary px-4 py-3 rounded-md inline-block shadow-md">GET OUR EXCLUSIVE OFFERS ONLY AT "NO BAD HAIR OFFICIAL STORES"</h3>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreLinks; 