'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Calendar, Code, Heart, Target, Lightbulb } from 'lucide-react';

export default function About() {
  const skills = [
    'Full Stack Development',
    'MERN Stack',
    'Node.js & Express',
    'AI/ML Integration',
    'Gemini API',
    'LangChain',
    'React & Next.js',
    'MongoDB',
  ];

  const interests = [
    'Building scalable applications',
    'AI-powered systems',
    'Modern digital experiences',
    'Problem solving',
    'Learning new technologies',
  ];

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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="aspect-square bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-8xl">👩‍💻</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Iqra Hussain</h3>
                <p className="text-purple-300 mb-4">Full Stack Developer + AI/ML Engineer</p>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Moradabad, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Mail className="w-4 h-4" />
                  <span>iqra@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>B.Tech AI & ML (2023-2027)</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'LinkedIn', icon: 'in', color: 'from-blue-500 to-blue-600' },
                { name: 'GitHub', icon: 'gh', color: 'from-gray-600 to-gray-700' },
                { name: 'LeetCode', icon: 'lc', color: 'from-orange-500 to-orange-600' },
                { name: 'Email', icon: 'em', color: 'from-purple-500 to-purple-600' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-xl bg-gradient-to-r ${social.color} bg-opacity-20 border border-white/10 flex items-center gap-3 hover:shadow-lg hover:shadow-purple-500/20 transition-all`}
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    {social.icon}
                  </div>
                  <span className="text-white font-semibold">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Personal Introduction</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm Iqra Hussain, a B.Tech Computer Science (AI & ML) student passionate about building scalable web applications, AI-powered systems, and modern digital experiences. I specialize in Full Stack Development using MERN, Backend with Node.js & Express, and AI integrations using Gemini API and LangChain.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Career Objective</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To leverage my expertise in full-stack development and AI/ML to build innovative solutions that solve real-world problems. I aim to work in a dynamic environment where I can contribute to cutting-edge projects while continuously learning and growing.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Code className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Interests & Future Goals</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {interests.map((interest, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      {interest}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
