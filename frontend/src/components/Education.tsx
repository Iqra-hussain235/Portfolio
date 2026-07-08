'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Eye, Download } from 'lucide-react';
import { useState } from 'react';

const educationData = [
  {
    qualification: 'B.Tech AI & ML',
    institute: 'Moradabad Institute of Technology',
    board: 'AKTU',
    year: '2023 – 2027',
    cgpa: '7.6',
    status: 'Pursuing',
  },
  {
    qualification: 'Class XII',
    institute: 'Adam Eve\'s Convent School',
    board: 'CBSE',
    year: '2021 – 2023',
    cgpa: '70%',
    status: 'Completed',
  },
  {
    qualification: 'Class X',
    institute: 'Adam Eve\'s Convent School',
    board: 'CBSE',
    year: '2019 – 2021',
    cgpa: 'N/A',
    status: 'Completed',
  },
];

export default function Education() {
  const [selectedMark, setSelectedMark] = useState<typeof educationData[0] | null>(null);

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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="text-left p-4 text-purple-300 font-semibold">Qualification</th>
                    <th className="text-left p-4 text-purple-300 font-semibold">Institute</th>
                    <th className="text-left p-4 text-purple-300 font-semibold">Board</th>
                    <th className="text-left p-4 text-purple-300 font-semibold">Year</th>
                    <th className="text-left p-4 text-purple-300 font-semibold">CGPA</th>
                    <th className="text-left p-4 text-purple-300 font-semibold">Status</th>
                    <th className="text-left p-4 text-purple-300 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {educationData.map((edu, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-purple-500/20 hover:bg-purple-500/5 transition-colors"
                    >
                      <td className="p-4 text-white font-medium">{edu.qualification}</td>
                      <td className="p-4 text-gray-300">{edu.institute}</td>
                      <td className="p-4 text-gray-300">{edu.board}</td>
                      <td className="p-4 text-gray-300">{edu.year}</td>
                      <td className="p-4 text-gray-300">{edu.cgpa}</td>
                      <td className="p-4">
                        <Badge
                          variant="secondary"
                          className={
                            edu.status === 'Pursuing'
                              ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                              : 'bg-green-500/20 text-green-300 border-green-500/30'
                          }
                        >
                          {edu.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedMark(edu)}
                            className="p-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors"
                            title="View Marksheet"
                          >
                            <Eye className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-pink-500/20 border border-pink-500/30 rounded-lg text-pink-400 hover:bg-pink-500/30 transition-colors"
                            title="Download Marksheet"
                          >
                            <Download className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Marksheet Preview Dialog */}
      <Dialog open={!!selectedMark} onOpenChange={() => setSelectedMark(null)}>
        <DialogContent className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg text-white max-w-2xl">
          {selectedMark && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Marksheet Preview
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <p className="text-gray-400">Marksheet Preview</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Qualification</p>
                    <p className="text-white font-medium">{selectedMark.qualification}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Institute</p>
                    <p className="text-white font-medium">{selectedMark.institute}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Board</p>
                    <p className="text-white font-medium">{selectedMark.board}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">CGPA</p>
                    <p className="text-white font-medium">{selectedMark.cgpa}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium"
                >
                  <Download className="w-5 h-5" />
                  Download Marksheet
                </motion.button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
