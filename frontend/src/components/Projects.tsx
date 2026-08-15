'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import GitHubIcon from './GitHubIcon';
import { projects, type Project } from '@/lib/projects-data';
import styles from './ProjectsTrain.module.css';

const LIVERIES = [
  { stripe: 'from-violet-500 to-fuchsia-500', ring: 'border-violet-400/40' },
  { stripe: 'from-fuchsia-500 to-rose-500', ring: 'border-fuchsia-400/40' },
  { stripe: 'from-cyan-400 to-sky-500', ring: 'border-cyan-400/40' },
  { stripe: 'from-indigo-500 to-violet-500', ring: 'border-indigo-400/40' },
  { stripe: 'from-rose-500 to-pink-500', ring: 'border-rose-400/40' },
];

const IMAGE_INTERVAL_MS = 2000;

function Wheel() {
  return (
    <div className={`${styles.wheel} relative`}>
      <div className="w-6 h-6 rounded-full border-[4px] border-slate-400/60 bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg">
        <div className="absolute inset-1 rounded-full border-2 border-slate-500/40" />
        <div className="absolute inset-2 rounded-full bg-slate-600/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300/70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-0.5 bg-slate-400/50 -rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-0.5 bg-slate-400/50 rotate-45" />
      </div>
    </div>
  );
}

function Coupler() {
  return (
    <div className="flex items-end pb-6 shrink-0" aria-hidden="true">
      <div className="relative">
        <div className="h-2 w-8 rounded-l-full bg-gradient-to-r from-slate-600 to-slate-500/70" />
        <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-1.5 rounded bg-slate-400/50" />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-1.5 rounded bg-slate-400/50" />
      </div>
    </div>
  );
}

function Locomotive() {
  return (
    <div className="relative shrink-0 mx-3" aria-hidden="true">
      <div className="relative w-[280px] h-[180px]">
        {/* Engine Image */}
        <img 
          src="/engine.png" 
          alt="Iqra Project Express Engine" 
          className="w-full h-full object-contain drop-shadow-[0_20px_40px_-10px_rgba(168,85,247,0.5)]"
        />
        
        {/* Neon glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-lg blur-xl" />
        
        {/* Smoke effect overlay */}
        <div className="absolute -top-8 left-12">
          <span className={`${styles.smoke} ${styles.smokeOne} absolute h-4 w-4`} />
          <span className={`${styles.smoke} ${styles.smokeTwo} absolute h-3 w-3 left-2`} />
          <span className={`${styles.smoke} ${styles.smokeThree} absolute h-3 w-3 left-4`} />
        </div>
      </div>

      {/* Wheels for image-based engine */}
      <div className="flex justify-between px-8 -mt-2">
        <div className="flex gap-3">
          <Wheel />
          <Wheel />
        </div>
        <div className="flex gap-3">
          <Wheel />
          <Wheel />
        </div>
      </div>
    </div>
  );
}

function TrainCoach({ project, index }: { project: Project; index: number }) {
  const router = useRouter();
  const [imgIndex, setImgIndex] = useState(0);
  const livery = LIVERIES[index % LIVERIES.length];

  useEffect(() => {
    if (project.images.length <= 1) return;
    const id = setInterval(() => {
      setImgIndex((i) => (i + 1) % project.images.length);
    }, IMAGE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [project.images.length]);

  const goToDetails = () => router.push(`/projects/${project.slug}`);

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onClick={goToDetails}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          goToDetails();
        }
      }}
      className="relative w-[280px] sm:w-[320px] shrink-0 mx-3 group cursor-pointer outline-none"
    >
      <div
        className={`${styles.coachIdle} relative rounded-t-2xl rounded-b-xl border-2 ${livery.ring} bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(168,85,247,0.4)] transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.5)] group-focus-visible:-translate-y-3 group-focus-visible:ring-2 group-focus-visible:ring-pink-400`}
      >
        {/* Top decorative stripe */}
        <div className={`h-2 w-full bg-gradient-to-r ${livery.stripe} shadow-[0_0_15px_rgba(168,85,247,0.3)]`} />

        {/* Window frame */}
        <div className="relative mx-3 mt-3 h-40 rounded-xl border-2 border-white/20 bg-gradient-to-br from-purple-900/50 via-[#1f1038] to-pink-900/50 overflow-hidden shadow-inner">
          {/* Window glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_50%)]" />
          
          {/* Window frame bars */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/20 -translate-x-1/2" />
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/20 -translate-y-1/2" />

          {/* Project image/visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 m-1 rounded-lg overflow-hidden"
            >
              {project.images[imgIndex].startsWith('/') ? (
                <img
                  src={project.images[imgIndex]}
                  alt={`${project.title} screenshot ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-7xl drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                    {project.images[imgIndex]}
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Image indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === imgIndex ? 'w-5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 z-10">
            <span className="text-[11px] font-semibold tracking-wide text-white uppercase px-4 py-2 rounded-full border border-white/60 bg-white/10 backdrop-blur-md">
              View details →
            </span>
          </div>
        </div>

        {/* Coach body */}
        <div className="p-4">
          {/* Project number badge */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className={`px-2 py-1 rounded-lg bg-gradient-to-r ${livery.stripe} text-white text-[10px] font-bold tracking-wider`}>
                #{String(project.id).padStart(2, '0')}
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 truncate group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-xs mb-3 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-[10px] px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge
                variant="secondary"
                className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-[10px] px-2 py-0.5"
              >
                +{project.techStack.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.liveDemo}
              target={project.liveDemo === '#' ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-disabled={project.liveDemo === '#'}
              onClick={(e) => project.liveDemo === '#' && e.preventDefault()}
              className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 text-[11px] font-medium transition-all duration-200 ${
                project.liveDemo === '#'
                  ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 hover:scale-105 shadow-lg'
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
            <a
              href={project.github}
              target={project.github === '#' ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-disabled={project.github === '#'}
              onClick={(e) => project.github === '#' && e.preventDefault()}
              className={`flex-1 border-2 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 text-[11px] font-medium transition-all duration-200 ${
                project.github === '#'
                  ? 'border-white/10 text-gray-500 cursor-not-allowed'
                  : 'border-purple-500 text-purple-300 hover:bg-purple-500/10 hover:scale-105'
              }`}
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom decorative stripe */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${livery.stripe} opacity-70`} />
      </div>

      {/* Enhanced wheels */}
      <div className="flex justify-between px-6 -mt-1">
        <div className="flex gap-2">
          <Wheel />
          <Wheel />
        </div>
        <div className="flex gap-2">
          <Wheel />
          <Wheel />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInteraction = () => {
    setIsPaused(true);
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Resume auto-scroll after 4 seconds of no interaction
    scrollTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    // Resume after delay when mouse leaves
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Set initial scroll position to start from engine
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-x-auto');
    if (scrollContainer) {
      scrollContainer.scrollLeft = 0;
    }
  }, []);

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a2e]"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-500/12 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-pink-400/90 uppercase mb-3 font-semibold">
            All Aboard My Project Journey
          </p>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          A journey of innovation, creativity & problem solving. Each project is a story of ideas, code, design & creativity.
        </motion.p>

        {/* Stats badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium">
            🚀 {projects.length}+ Projects Completed
          </div>
          <div className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-medium">
            💯 100% Passion & Dedication
          </div>
          <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
            📚 Latest Tech Always Learning
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-xs mb-8"
        >
          ✨ Hover to pause the train · Use scrollbar or drag to navigate · Click any coach to explore that project
        </motion.p>

        {/* Track */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            onScroll={handleInteraction}
            onTouchStart={handleInteraction}
            onTouchMove={handleInteraction}
            className="overflow-x-auto overflow-y-hidden py-6 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-purple-900/20 hover:scrollbar-thumb-purple-500/70 scroll-smooth"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 2%, black 98%, transparent)',
            }}
          >
            <div
              className={`${styles.marqueeContent} flex items-end`}
              style={{ 
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-end shrink-0">
                  <Locomotive />
                  <Coupler />
                  {projects.map((project, i) => (
                    <div key={`${copy}-${project.id}`} className="flex items-end">
                      <TrainCoach project={project} index={i} />
                      <Coupler />
                    </div>
                  ))}
                  {/* Extra space after last card for smooth loop */}
                  <div className="w-[400px] shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Railway Track */}
          <div className="relative h-8 mx-2 mt-2">
            {/* Main rail bed */}
            <div className="absolute inset-0 rounded-lg overflow-hidden bg-gradient-to-b from-slate-800/70 via-slate-900/80 to-slate-950/90 border-t border-white/10">
              {/* Gravel texture */}
              <div className="absolute inset-0 opacity-40">
                <div className="w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '8px 8px'
                }} />
              </div>
              
              {/* Rails */}
              <div className="absolute top-2 bottom-2 left-4 right-4 flex justify-between">
                {/* Left rail */}
                <div className="w-2 h-full rounded-full bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 shadow-[0_0_10px_rgba(148,163,184,0.3)]" />
                {/* Right rail */}
                <div className="w-2 h-full rounded-full bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 shadow-[0_0_10px_rgba(148,163,184,0.3)]" />
              </div>

              {/* Sleepers/ties */}
              <div className="absolute inset-0 flex items-center justify-between px-2">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-8 h-3 rounded bg-gradient-to-b from-amber-900/40 to-amber-950/60 border border-amber-800/30" />
                ))}
              </div>

              {/* Spikes/bolts */}
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full" style={{ left: `${i * 10}%` }}>
                    <div className="w-1 h-1 rounded-full bg-slate-500/50" />
                    <div className="w-1 h-1 rounded-full bg-slate-500/50" />
                  </div>
                ))}
              </div>

              {/* Glow effect */}
              <div className={`${styles.railGlow} h-1`} />
            </div>

            {/* Side decorations */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-6 rounded-l bg-gradient-to-r from-purple-500/20 to-transparent" />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-6 rounded-r bg-gradient-to-l from-pink-500/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
