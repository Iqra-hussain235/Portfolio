'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'Airbnb Clone',
    description: 'A full-featured vacation rental platform with property listings, booking system, user authentication, and payment integration.',
    techStack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    image: '🏠',
    demoVideo: '',
    liveDemo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'MindMesh AI',
    description: 'AI-powered brainstorming and mind mapping tool using Gemini API and LangChain for intelligent idea generation.',
    techStack: ['React', 'Gemini API', 'LangChain', 'Node.js', 'Express', 'MongoDB'],
    image: '🧠',
    demoVideo: '',
    liveDemo: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'ILM GPT',
    description: 'Custom GPT-based chatbot for Islamic learning materials with context-aware responses and multilingual support.',
    techStack: ['Next.js', 'OpenAI API', 'React', 'Node.js', 'MongoDB', 'TypeScript'],
    image: '📚',
    demoVideo: '',
    liveDemo: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Food Recipe App',
    description: 'Recipe discovery platform with search functionality, ingredient-based filtering, and meal planning features.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'JWT'],
    image: '🍳',
    demoVideo: '',
    liveDemo: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Car Hub Showroom',
    description: 'Automotive marketplace with vehicle listings, advanced search filters, virtual tours, and dealer management system.',
    techStack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Cloudinary', 'Stripe'],
    image: '🚗',
    demoVideo: '',
    liveDemo: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'IQBrain Freelancing Platform',
    description: 'Complete freelancing platform with job postings, bidding system, payment escrow, and project management tools.',
    techStack: ['MERN Stack', 'Socket.io', 'Stripe', 'JWT', 'Redux', 'MongoDB'],
    image: '💼',
    demoVideo: '',
    liveDemo: '#',
    github: '#',
  },
  {
    id: 7,
    title: 'ChatGPT Clone',
    description: 'AI chat interface with conversation history, multiple model support, and custom prompt templates.',
    techStack: ['React', 'Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    image: '💬',
    demoVideo: '',
    liveDemo: '#',
    github: '#',
  },
  {
    id: 8,
    title: 'Resume Screening AI',
    description: 'AI-powered resume screening tool that analyzes CVs, matches job requirements, and provides candidate rankings.',
    techStack: ['Python', 'Streamlit', 'NLP', 'Machine Learning', 'Flask', 'MongoDB'],
    image: '📄',
    demoVideo: '',
    liveDemo: '#',
    github: '#',
  },
  {
    id: 9,
    title: 'Healthcare AI',
    description: 'Healthcare assistant with symptom analysis, appointment scheduling, and medical record management.',
    techStack: ['Next.js', 'AI/ML', 'Node.js', 'Express', 'MongoDB', 'TensorFlow'],
    image: '🏥',
    demoVideo: '',
    liveDemo: '#',
    github: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
    hidden: { opacity: 0, y: 50 },
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
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg h-full overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.demoVideo && (
                      <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                        <Play className="w-4 h-4" />
                        Watch Demo
                      </button>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border-2 border-purple-500 text-purple-400 py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-purple-500/10 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg text-white max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg flex items-center justify-center">
                  <div className="text-8xl">{selectedProject.image}</div>
                </div>
                <p className="text-gray-300">{selectedProject.description}</p>
                <div>
                  <h4 className="font-semibold text-white mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <motion.a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border-2 border-purple-500 text-purple-400 py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-purple-500/10 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
