'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, PlayCircle } from 'lucide-react';
import GitHubIcon from './GitHubIcon';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/projects-data';

const IMAGE_INTERVAL_MS = 2500;

function CtaButton({
  href,
  icon,
  children,
  primary = false,
}: {
  href?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const disabled = !href || href === '#';
  const base =
    'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all';
  const style = disabled
    ? 'bg-white/5 text-gray-500 cursor-not-allowed'
    : primary
      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 hover:-translate-y-0.5'
      : 'border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 hover:-translate-y-0.5';

  if (disabled) {
    return (
      <span className={`${base} ${style}`} aria-disabled="true">
        {icon}
        {children}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${style}`}>
      {icon}
      {children}
    </a>
  );
}

const journey = (project: Project) => [
  { label: 'Departure', title: 'The Problem', copy: project.problem },
  { label: 'In transit', title: 'The Solution', copy: project.solution },
  { label: 'Destination', title: 'The Purpose', copy: project.purpose },
];

export default function ProjectDetailClient({ project }: { project: Project }) {
  const router = useRouter();
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;
    const id = setInterval(() => {
      setImgIndex((i) => (i + 1) % project.images.length);
    }, IMAGE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [project.images.length]);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a2e] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-5xl">
        <button
          onClick={() => router.push('/#projects')}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all projects
        </button>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-pink-400/80 uppercase mb-4">
              Case study #{String(project.id).padStart(2, '0')}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-gray-300 mb-8">{project.tagline}</p>

            <div className="flex flex-wrap gap-3">
              <CtaButton href={project.liveDemo} icon={<ExternalLink className="w-4 h-4" />} primary>
                Live Demo
              </CtaButton>
              <CtaButton href={project.github} icon={<GitHubIcon className="w-4 h-4" />}>
                Source Code
              </CtaButton>
              {project.demoVideo && (
                <CtaButton href={project.demoVideo} icon={<PlayCircle className="w-4 h-4" />}>
                  Watch Demo
                </CtaButton>
              )}
            </div>
          </div>

          <div className="relative h-72 md:h-80 rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-lg overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_45%)]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.9 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="w-full h-full flex items-center justify-center"
              >
                {project.images[imgIndex].startsWith('/') ? (
                  <img
                    src={project.images[imgIndex]}
                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-9xl drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                    {project.images[imgIndex]}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === imgIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.section>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Overview</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">{project.description}</p>

          {/* departure-board style timeline */}
          <div className="rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-lg divide-y divide-white/10 overflow-hidden">
            {journey(project).map((stop, i) => (
              <motion.div
                key={stop.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 p-6"
              >
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-cyan-300/80 uppercase">
                    {stop.label}
                  </p>
                  <p className="text-white font-semibold mt-1">{stop.title}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{stop.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm px-3 py-1.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Additional Details */}
        {project.features && project.features.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-purple-500/20"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {project.services && project.services.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Services</h2>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-pink-500/20 text-pink-300 border-pink-500/30 text-sm px-3 py-1.5"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </motion.section>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Project Highlights</h2>
            <div className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-purple-500/20"
                >
                  <div className="text-purple-400 mt-1">✦</div>
                  <span className="text-gray-300 text-sm">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {project.architecture && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Architecture</h2>
            <div className="rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-lg p-6">
              <p className="text-gray-400 text-sm leading-relaxed">{project.architecture}</p>
              {project.frontend && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-purple-300 font-semibold mb-2">Frontend</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.frontend}</p>
                </div>
              )}
              {project.backend && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-purple-300 font-semibold mb-2">Backend</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.backend}</p>
                </div>
              )}
              {project.database && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-purple-300 font-semibold mb-2">Database</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.database}</p>
                </div>
              )}
              {project.authentication && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-purple-300 font-semibold mb-2">Authentication</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.authentication}</p>
                </div>
              )}
              {project.responsiveDesign && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-purple-300 font-semibold mb-2">Responsive Design</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.responsiveDesign}</p>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Challenges Faced</h2>
            <div className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-pink-500/20"
                >
                  <div className="text-pink-400 mt-1">⚡</div>
                  <span className="text-gray-300 text-sm">{challenge}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {project.outcome && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Outcome</h2>
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg p-6">
              <p className="text-gray-300 text-sm leading-relaxed">{project.outcome}</p>
            </div>
          </motion.section>
        )}

        {/* Project Meta Info */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.role && (
              <div className="p-4 rounded-lg bg-white/5 border border-purple-500/20">
                <p className="text-purple-300 text-xs uppercase mb-1">Role</p>
                <p className="text-white font-semibold text-sm">{project.role}</p>
              </div>
            )}
            {project.category && (
              <div className="p-4 rounded-lg bg-white/5 border border-purple-500/20">
                <p className="text-purple-300 text-xs uppercase mb-1">Category</p>
                <p className="text-white font-semibold text-sm">{project.category}</p>
              </div>
            )}
            {project.status && (
              <div className="p-4 rounded-lg bg-white/5 border border-purple-500/20">
                <p className="text-purple-300 text-xs uppercase mb-1">Status</p>
                <p className="text-white font-semibold text-sm">{project.status}</p>
              </div>
            )}
            <div className="p-4 rounded-lg bg-white/5 border border-purple-500/20">
              <p className="text-purple-300 text-xs uppercase mb-1">Project ID</p>
              <p className="text-white font-semibold text-sm">#{String(project.id).padStart(2, '0')}</p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
