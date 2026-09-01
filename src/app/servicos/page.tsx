'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import Footer from '@/components/layout/Footer';

export default function ServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      <Header />
      <div className="pt-32">
        <Services />
      </div>
      <Features />
      <Footer />
    </motion.main>
  );
}
