'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const techCategories = {
  Languages: [
    { name: 'C++', icon: '⚡', color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Python', icon: '🐍', color: 'from-green-500 to-green-600' },
    { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-orange-600' },
    { name: 'CSS', icon: '🎨', color: 'from-blue-400 to-blue-500' },
    { name: 'C', icon: '⚙️', color: 'from-gray-500 to-gray-600' },
  ],
  Frameworks: [
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-cyan-600' },
    { name: 'Next.js', icon: '▲', color: 'from-black to-gray-800' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-green-700' },
    { name: 'Express.js', icon: '🚂', color: 'from-gray-600 to-gray-700' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-600' },
    { name: 'Redux', icon: '🔄', color: 'from-purple-500 to-purple-600' },
  ],
  AI: [
    { name: 'Gemini API', icon: '🤖', color: 'from-blue-500 to-purple-600' },
    { name: 'LangChain', icon: '🔗', color: 'from-indigo-500 to-indigo-600' },
    { name: 'Streamlit', icon: '📊', color: 'from-red-500 to-red-600' },
    { name: 'Machine Learning', icon: '🧠', color: 'from-pink-500 to-pink-600' },
    { name: 'Deep Learning', icon: '🔮', color: 'from-violet-500 to-violet-600' },
  ],
  Tools: [
    { name: 'Git', icon: '📦', color: 'from-orange-500 to-red-500' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-700 to-gray-800' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-blue-600' },
    { name: 'Postman', icon: '📮', color: 'from-orange-500 to-orange-600' },
    { name: 'MongoDB Atlas', icon: '☁️', color: 'from-green-500 to-green-600' },
    { name: 'Vercel', icon: '▲', color: 'from-black to-white' },
  ],
};

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a2e]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {Object.entries(techCategories).map(([category, items], categoryIndex) => (
            <motion.div key={category} variants={itemVariants}>
              <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{category}</h3>
                  <div className="space-y-3">
                    {items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className={`p-3 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-20 border border-white/10 flex items-center gap-3 transition-all`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-white font-medium">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
