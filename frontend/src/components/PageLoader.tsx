'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: loading ? 'auto' : 'none' }}
    >
      <div className="text-center">
        <motion.div
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Iqra Hussain
        </motion.div>
        <motion.div
          className="mt-4 w-48 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '12rem' }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
