'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Mail, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const roles = [
    "I'm a Full Stack Developer",
    "I'm an AI/ML Engineer",
    "I'm a Backend Developer",
    "I'm a MERN Stack Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(75);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a2e]">
      <div className="absolute inset-0 bg-[url('/proimg.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/45 to-purple-950/50" />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          <motion.div
            className="relative mx-auto w-full max-w-[520px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-2 shadow-[0_0_40px_rgba(168,85,247,0.25)]">
              <img
                src="/homeimg.jpeg"
                alt="Iqra Hussain"
                className="w-full h-[320px] sm:h-[400px] md:h-[460px] lg:h-[520px] object-cover rounded-[1.5rem]"
              />
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Hi, I'm Iqra Hussain
              </h1>
              <div className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                {text}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/Resume1.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-500/10 transition-all"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-pink-500 text-pink-400 rounded-full font-semibold flex items-center gap-2 hover:bg-pink-500/10 transition-all"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Iqra-hussain235"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 rounded-full bg-white/5 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/iqra-hussain-5158222a3"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 rounded-full bg-white/5 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
              <motion.a
                href="mailto:iqra@example.com"
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 rounded-full bg-white/5 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mouse Follow Light Effect */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300" id="mouse-glow" />
      </div>
    </section>
  );
}
