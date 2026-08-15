'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Eye, Download, FileText, Building2, CalendarDays } from 'lucide-react';
import { useState } from 'react';

const certificates = [
  {
    id: 1,
    name: 'Web Development',
    issuer: 'ApnaCollege',
    date: 'January 2024',
    image: '/webdevelopement.png',
    type: 'image',
  },
  {
    id: 2,
    name: 'Exploratory Data Analysis',
    issuer: 'NASSCOM',
    date: '10 Jul 2026',
    image: '/nascom.png',
    type: 'image',
  },
  {
    id: 3,
    name: 'Web Craker - 1st Position',
    issuer: 'MIT(Tech Club)',
    date: '2025-2026',
    image: '/webcracker.jpeg',
    type: 'image',
  },
  {
    id: 4,
    name: 'IBM SkillsBuild AI Automation',
    issuer: 'BharatCares',
    date: 'October 2026',
    image: '/ibm.png',
    type: 'image',
  },
  {
    id: 5,
    name: 'Ethical Hacking',
    issuer: 'Hacking Club',
    date: 'June 2025',
    image: '/ethical.jpg',
    type: 'image',
  },
  // {
  //   id: 6,
  //   name: 'Python for Data Science',
  //   issuer: 'Data Science',
  //   date: 'August 2023',
  //   image: '/datascience.png',
  //   type: 'image',
  // },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] =
    useState<(typeof certificates)[0] | null>(null);

  const handleDownload = (cert: (typeof certificates)[0]) => {
    const link = document.createElement('a');
    link.href = cert.image;
    link.download = cert.image.split('/').pop() || 'certificate';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a2e]">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl glow-orb" />

        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl glow-orb"
          style={{ animationDelay: '2s' }}
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-fuchsia-500/5 rounded-full blur-3xl glow-orb"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 heading-glow">
            Certificates
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-yellow-500 mx-auto rounded-full shadow-[0_0_12px_rgba(251,191,36,0.7)]" />
        </motion.div>

        {/* Certificates */}
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
              className="relative group/card"
            >
              {/* Rotating gradient glow ring */}
              <div className="glow-ring absolute -inset-[2px] rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="glow-ring-soft absolute -inset-6 rounded-2xl opacity-0 group-hover/card:opacity-60 transition-opacity duration-500 blur-2xl" />

              <Card className="relative glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg h-full overflow-hidden group transition-shadow duration-500 group-hover/card:border-amber-400/60 group-hover/card:shadow-[0_0_35px_rgba(251,191,36,0.35)]">

                {/* Certificate Thumbnail */}
                <div className="relative h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center overflow-hidden">

                  {cert.type === 'image' ? (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <FileText className="w-16 h-16 text-purple-400 mb-2" />
                      <span className="text-purple-300 text-sm">
                        PDF Certificate
                      </span>
                    </div>
                  )}

                  {/* Shine sweep */}
                  <div className="shine-sweep absolute inset-0 pointer-events-none" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                </div>

                <CardContent className="p-6">

                  <h3 className="text-lg font-bold text-white mb-2">
                    {cert.name}
                  </h3>

                  <div className="space-y-2 mb-4">

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Building2 className="w-3.5 h-3.5 text-amber-400" style={{ filter: 'drop-shadow(0 0 4px rgba(251,191,36,0.8))' }} />
                      {cert.issuer}
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <CalendarDays className="w-3.5 h-3.5 text-yellow-400" style={{ filter: 'drop-shadow(0 0 4px rgba(250,204,21,0.8))' }} />
                      {cert.date}
                    </div>

                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">

                    {/* View */}
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(251,191,36,0.6)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 bg-purple-500/20 border border-purple-500/30 text-purple-400 py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-purple-500/30 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </motion.button>

                    {/* Download */}
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(245,158,11,0.6)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDownload(cert)}
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
      <Dialog
        open={!!selectedCert}
        onOpenChange={(open) => {
          if (!open) setSelectedCert(null);
        }}
      >
        <DialogContent className="glassmorphism border border-purple-500/30 bg-[#0a0a1a] backdrop-blur-lg text-white max-w-4xl shadow-[0_0_60px_rgba(251,191,36,0.25)]">

          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {selectedCert.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4">

                {/* Preview */}
                <div className="w-full h-[500px] bg-black/40 rounded-lg overflow-hidden flex items-center justify-center border border-amber-500/20 shadow-[0_0_25px_rgba(251,191,36,0.15)_inset]">

                  {selectedCert.type === 'image' ? (
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <iframe
                      src={selectedCert.image}
                      title={selectedCert.name}
                      className="w-full h-full border-0"
                    />
                  )}

                </div>

                {/* Details */}
                <div className="space-y-3">

                  <div>
                    <p className="text-gray-400 text-sm">
                      Certificate Name
                    </p>

                    <p className="text-white font-medium">
                      {selectedCert.name}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div>
                      <p className="text-gray-400 text-sm">
                        Issuer
                      </p>

                      <p className="text-white font-medium">
                        {selectedCert.issuer}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400 text-sm">
                        Date
                      </p>

                      <p className="text-white font-medium">
                        {selectedCert.date}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Download */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(251,191,36,0.55)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDownload(selectedCert)}
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

      <style jsx>{`
        @keyframes orbFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(20px, -20px) scale(1.15);
            opacity: 1;
          }
        }
        .glow-orb {
          animation: orbFloat 8s ease-in-out infinite;
        }

        @keyframes textGlow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.35));
          }
          50% {
            filter: drop-shadow(0 0 22px rgba(251, 191, 36, 0.7));
          }
        }
        .heading-glow {
          animation: textGlow 3s ease-in-out infinite;
        }

        @keyframes ringSpin {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .glow-ring {
          background: linear-gradient(
            90deg,
            #fde68a,
            #f59e0b,
            #fbbf24,
            #fde68a
          );
          background-size: 300% 100%;
          animation: ringSpin 3s linear infinite;
        }
        .glow-ring-soft {
          background: linear-gradient(
            90deg,
            #fde68a,
            #f59e0b,
            #fbbf24,
            #fde68a
          );
          background-size: 300% 100%;
          animation: ringSpin 4s linear infinite;
        }

        .shine-sweep {
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255, 255, 255, 0.14) 35%,
            rgba(255, 255, 255, 0.28) 45%,
            rgba(255, 255, 255, 0.14) 55%,
            transparent 70%
          );
          transform: translateX(-100%);
          transition: transform 0.9s ease;
        }
        .group:hover .shine-sweep {
          transform: translateX(100%);
        }

        @media (prefers-reduced-motion: reduce) {
          .glow-orb,
          .heading-glow,
          .glow-ring,
          .glow-ring-soft {
            animation: none !important;
          }
          .shine-sweep {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}