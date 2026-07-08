'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Eye, Download } from 'lucide-react';
import { useState } from 'react';

const certificates = [
  {
    id: 1,
    name: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'January 2024',
    image: '🏆',
  },
  {
    id: 2,
    name: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: 'December 2023',
    image: '🎓',
  },
  {
    id: 3,
    name: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'November 2023',
    image: '⚛️',
  },
  {
    id: 4,
    name: 'Node.js API Masterclass',
    issuer: 'Udemy',
    date: 'October 2023',
    image: '🚀',
  },
  {
    id: 5,
    name: 'MongoDB Database Essentials',
    issuer: 'MongoDB University',
    date: 'September 2023',
    image: '🍃',
  },
  {
    id: 6,
    name: 'Python for Data Science',
    issuer: 'IBM',
    date: 'August 2023',
    image: '🐍',
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a2e]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg h-full overflow-hidden group">
                <div className="relative h-40 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center overflow-hidden">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{cert.image}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="text-purple-400">🏢</span>
                      {cert.issuer}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="text-purple-400">📅</span>
                      {cert.date}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 bg-purple-500/20 border border-purple-500/30 text-purple-400 py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-purple-500/30 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-pink-500/20 border border-pink-500/30 text-pink-400 py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-pink-500/30 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Preview Dialog */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg text-white max-w-2xl">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Certificate Preview
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">{selectedCert.image}</div>
                    <p className="text-gray-400">Certificate Preview</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">Certificate Name</p>
                    <p className="text-white font-medium">{selectedCert.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Issuer</p>
                      <p className="text-white font-medium">{selectedCert.issuer}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Date</p>
                      <p className="text-white font-medium">{selectedCert.date}</p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium"
                >
                  <Download className="w-5 h-5" />
                  Download Certificate
                </motion.button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
