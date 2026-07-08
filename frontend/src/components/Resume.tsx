'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Eye, Download, FileText } from 'lucide-react';
import { useState } from 'react';

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a2e]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Iqra Hussain</h3>
                      <p className="text-purple-300">Full Stack Developer + AI/ML Engineer</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-gray-300">
                    <p>• B.Tech Computer Science (AI & ML)</p>
                    <p>• Full Stack Development (MERN)</p>
                    <p>• Backend Development (Node.js & Express)</p>
                    <p>• AI/ML Integration (Gemini API, LangChain)</p>
                    <p>• 200+ DSA Problems Solved</p>
                    <p>• 9+ AI Projects Built</p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowPreview(true)}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                    >
                      <Eye className="w-5 h-5" />
                      View Resume
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border-2 border-purple-500 text-purple-400 py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-purple-500/10 transition-all"
                    >
                      <Download className="w-5 h-5" />
                      Download Resume
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="aspect-[3/4] bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl flex items-center justify-center border border-purple-500/30">
                    <div className="text-center p-8">
                      <FileText className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                      <p className="text-gray-400">Resume Preview</p>
                      <p className="text-sm text-gray-500 mt-2">Click to view full resume</p>
                    </div>
                  </div>
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <FileText className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Resume Preview Dialog */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Resume Preview
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-8 min-h-[500px]">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Iqra Hussain</h3>
                <p className="text-purple-300 text-xl">Full Stack Developer + AI/ML Engineer</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-3">Summary</h4>
                  <p className="text-gray-300">
                    B.Tech Computer Science (AI & ML) student passionate about building scalable web applications, 
                    AI-powered systems, and modern digital experiences. Specialized in Full Stack Development using MERN, 
                    Backend with Node.js & Express, and AI integrations using Gemini API and LangChain.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-3">Skills</h4>
                  <div className="grid grid-cols-2 gap-2 text-gray-300">
                    <p>• Full Stack Development (MERN)</p>
                    <p>• Node.js & Express.js</p>
                    <p>• React & Next.js</p>
                    <p>• MongoDB & MySQL</p>
                    <p>• Gemini API & LangChain</p>
                    <p>• Machine Learning</p>
                    <p>• REST API & JWT</p>
                    <p>• Git & GitHub</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-3">Experience</h4>
                  <div className="text-gray-300">
                    <p className="font-semibold text-white">Backend Developer - Softevia</p>
                    <p className="text-sm">June 2026 – Present</p>
                    <p className="mt-2">Developed and maintained scalable backend APIs, implemented authentication systems, 
                    optimized database queries, and collaborated with frontend team on feature integration.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-3">Education</h4>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <p className="font-semibold text-white">B.Tech AI & ML - Moradabad Institute of Technology</p>
                      <p className="text-sm">2023 – 2027 | CGPA: 7.6</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Class XII - Adam Eve's Convent School</p>
                      <p className="text-sm">2021 – 2023 | 70%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
