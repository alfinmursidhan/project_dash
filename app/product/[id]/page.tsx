import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiChevronRight, FiStar, FiCheck } from 'react-icons/fi';
import ProductShowcase from '@/components/products/ProductShowcase';
import { Product } from '@/types';

// Define products database type
interface ProductsDatabase {
  [key: string]: Product;
}

// This is a sample product database that would normally come from a real database or API
const products: ProductsDatabase = {
  'deep-cleanse-shampoo': {
    id: 'deep-cleanse-shampoo',
    name: 'Deep Cleanse Shampoo',
    description: 'For intensive scalp cleansing, pH balanced',
    fullDescription: 'Our Deep Cleanse Shampoo thoroughly cleans your scalp and hair, removing buildup while maintaining the natural pH balance. Formulated with natural ingredients for a deep clean without drying your hair.',
    image: '/images/product-1.jpg',
    price: 15.99,
    features: [
      'Intensive scalp cleansing',
      'pH balanced formula',
      'Natural ingredients',
      'Suitable for all hair types'
    ]
  },
  'calming-shampoo': {
    id: 'calming-shampoo',
    name: 'Calming Shampoo',
    description: 'Gently cleanse scalp & hair, PH balanced',
    fullDescription: 'Our Calming Shampoo gently cleanses your scalp and hair while soothing irritation. Specially formulated with natural extracts to provide a gentle wash that won\'t strip your hair of its natural oils.',
    image: '/images/product-2.jpg',
    price: 14.99,
    features: [
      'Gentle cleansing formula',
      'Soothes scalp irritation',
      'pH balanced',
      'Natural extracts'
    ]
  },
  'condi-masque': {
    id: 'condi-masque',
    name: 'Hair & Scalp Condi-Masque',
    description: 'Packed with nutrients for scalp',
    fullDescription: 'Our Hair & Scalp Condi-Masque is a deep conditioning treatment that nourishes both your hair and scalp. Packed with nutrients, this mask repairs damaged hair, prevents breakage, and promotes a healthy scalp.',
    image: '/images/product-3.jpg',
    price: 18.99,
    features: [
      'Deep conditioning treatment',
      'Nourishes hair and scalp',
      'Repairs damaged hair',
      'Prevents breakage'
    ]
  },
  'creamy-clay': {
    id: 'creamy-clay',
    name: 'No.1 Creamy Clay',
    description: 'High hold, natural finish, easy to wash',
    fullDescription: 'Our No.1 Creamy Clay offers high hold with a natural matte finish that lasts all day. The water-based formula makes it easy to wash out, while natural ingredients ensure your hair stays healthy.',
    image: '/images/product-4.jpg',
    price: 16.99,
    features: [
      'High hold formula',
      'Natural matte finish',
      'Water-based for easy washing',
      'Scent: Organic Bergamot & Patchouli'
    ]
  }
};

export function generateMetadata({ params }: { params: { id: string } }) {
  const product = products[params.id];
  
  if (!product) {
    return {
      title: 'Product Not Found - No Bad Hair',
      description: 'The product you are looking for does not exist.',
    };
  }
  
  return {
    title: `${product.name} - No Bad Hair`,
    description: product.description,
  };
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the product data from an API
  const product = products[params.id];
  
  if (!product) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 container-padding mx-auto text-center">
          <h1 className="heading-lg mb-6">Product Not Found</h1>
          <p className="text-gray-600 mb-8">
            The product you are looking for does not exist or has been removed.
          </p>
          <Link href="/shop" className="btn-primary">
            RETURN TO SHOP
          </Link>
        </div>
        <Footer />
      </main>
    );
  }
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-12">
        <div className="container-padding mx-auto">
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <FiChevronRight className="mx-2" />
            <Link href="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <FiChevronRight className="mx-2" />
            <span className="text-accent">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="rounded-lg overflow-hidden h-[500px] bg-gray-100"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-lg mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="text-accent w-5 h-5 mr-1 fill-current" />
                  ))}
                </div>
                <span className="text-gray-500">(12 reviews)</span>
              </div>
              
              <p className="text-2xl font-bold text-accent mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-700 mb-6">
                {product.fullDescription}
              </p>
              
              <div className="mt-12">
                <h3 className="font-serif text-2xl mb-6">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">
                        <FiCheck size={18} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity</label>
                <div className="flex">
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-20 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-accent transition"
                  />
                  <button className="btn-primary rounded-l-none">
                    BUY NOW
                  </button>
                </div>
              </div>
              
              <Link href="/shop" className="btn-outline">
                CONTINUE SHOPPING
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-secondary">
        <div className="container-padding mx-auto">
          <h2 className="heading-lg text-center mb-12">You Might Also Like</h2>
          <ProductShowcase />
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 