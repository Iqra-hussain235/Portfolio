'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const techCategories = {
  Languages: [
    { name: 'C++', icon: '⚡', color: 'from-blue-500 to-blue-600', glow: 'shadow-blue-500/40' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-500 to-yellow-600', glow: 'shadow-yellow-500/40' },
    { name: 'Python', icon: '🐍', color: 'from-green-500 to-green-600', glow: 'shadow-green-500/40' },
    { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-orange-600', glow: 'shadow-orange-500/40' },
    { name: 'CSS', icon: '🎨', color: 'from-blue-400 to-blue-500', glow: 'shadow-cyan-400/40' },
    { name: 'C', icon: '⚙️', color: 'from-gray-500 to-gray-600', glow: 'shadow-gray-400/40' },
  ],
  Frameworks: [
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-cyan-600', glow: 'shadow-cyan-400/50' },
    { name: 'Next.js', icon: '▲', color: 'from-black to-gray-800', glow: 'shadow-white/20' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-green-700', glow: 'shadow-green-500/50' },
    { name: 'Express.js', icon: '🚂', color: 'from-gray-600 to-gray-700', glow: 'shadow-gray-400/40' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-600', glow: 'shadow-emerald-400/40' },
    { name: 'Redux', icon: '🔄', color: 'from-purple-500 to-purple-600', glow: 'shadow-purple-500/45' },
  ],
  AI: [
    { name: 'Gemini API', icon: '🤖', color: 'from-blue-500 to-purple-600', glow: 'shadow-indigo-500/45' },
    { name: 'LangChain', icon: '🔗', color: 'from-indigo-500 to-indigo-600', glow: 'shadow-indigo-400/45' },
    { name: 'Streamlit', icon: '📊', color: 'from-red-500 to-red-600', glow: 'shadow-red-500/45' },
    { name: 'Machine Learning', icon: '🧠', color: 'from-pink-500 to-pink-600', glow: 'shadow-pink-500/45' },
    { name: 'Deep Learning', icon: '🔮', color: 'from-violet-500 to-violet-600', glow: 'shadow-violet-500/45' },
  ],
  Tools: [
    { name: 'Git', icon: '📦', color: 'from-orange-500 to-red-500', glow: 'shadow-orange-500/45' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-700 to-gray-800', glow: 'shadow-gray-400/35' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-blue-600', glow: 'shadow-blue-500/45' },
    { name: 'Postman', icon: '📮', color: 'from-orange-500 to-orange-600', glow: 'shadow-orange-400/45' },
    { name: 'MongoDB Atlas', icon: '☁️', color: 'from-green-500 to-green-600', glow: 'shadow-emerald-400/45' },
    { name: 'Vercel', icon: '▲', color: 'from-black to-white', glow: 'shadow-white/25' },
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
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {Object.entries(techCategories).map(([category, items], categoryIndex) => (
            <motion.div key={category} variants={itemVariants}>
              <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_35px_rgba(85,61,255,0.14)]">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl text-white/90 shadow-lg shadow-white/10">
                      {category === 'Languages' ? '💻' : category === 'Frameworks' ? '⚛️' : category === 'AI' ? '🤖' : '🛠️'}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{category}</h3>
                      <p className="text-sm text-white/60">Top {category.toLowerCase()} skills</p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white"
                      >
                        {item.name}
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
