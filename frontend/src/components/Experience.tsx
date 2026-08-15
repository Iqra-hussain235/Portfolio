'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, CheckCircle, ExternalLink, FileText } from 'lucide-react';

interface ExperienceLink {
  label: string;
  href: string;
  icon: 'award' | 'file' | 'link';
}

interface AccentTheme {
  grad: string;        // gradient classes for primary button / heading accents
  hex: [string, string]; // raw hex pair, used for glows / timeline gradient stops
  text: string;         // company name text color
  badge: string;        // tech badge classes
  border: string;       // card border color
  dot: string;          // timeline dot background
  ring: string;         // hover ring color
  iconA: string;        // "Technologies" icon color
  iconB: string;        // "Achievements" icon color
  bullet: string;       // achievement bullet color
  secondaryBtn: string; // secondary button border/text
}

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  logo: string;
  techStack: string[];
  achievements: string[];
  links: ExperienceLink[];
}

// Four hand-picked accent themes — one per era of the timeline, so color itself
// tells the story of progression rather than repeating a single brand hue.
const accentThemes: AccentTheme[] = [
  {
    grad: 'from-violet-500 to-fuchsia-500',
    hex: ['#8b5cf6', '#d946ef'],
    text: 'text-violet-300',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    border: 'border-violet-500/30 hover:border-violet-400/60',
    dot: 'bg-violet-500',
    ring: 'shadow-violet-500/40',
    iconA: 'text-violet-400',
    iconB: 'text-fuchsia-400',
    bullet: 'text-violet-400',
    secondaryBtn: 'border-violet-500 text-violet-300 hover:bg-violet-500/10',
  },
  {
    grad: 'from-cyan-500 to-blue-500',
    hex: ['#06b6d4', '#3b82f6'],
    text: 'text-cyan-300',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    border: 'border-cyan-500/30 hover:border-cyan-400/60',
    dot: 'bg-cyan-500',
    ring: 'shadow-cyan-500/40',
    iconA: 'text-cyan-400',
    iconB: 'text-blue-400',
    bullet: 'text-cyan-400',
    secondaryBtn: 'border-cyan-500 text-cyan-300 hover:bg-cyan-500/10',
  },
  {
    grad: 'from-emerald-500 to-teal-500',
    hex: ['#10b981', '#14b8a6'],
    text: 'text-emerald-300',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    border: 'border-emerald-500/30 hover:border-emerald-400/60',
    dot: 'bg-emerald-500',
    ring: 'shadow-emerald-500/40',
    iconA: 'text-emerald-400',
    iconB: 'text-teal-400',
    bullet: 'text-emerald-400',
    secondaryBtn: 'border-emerald-500 text-emerald-300 hover:bg-emerald-500/10',
  },
  {
    grad: 'from-amber-500 to-orange-500',
    hex: ['#f59e0b', '#f97316'],
    text: 'text-amber-300',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    border: 'border-amber-500/30 hover:border-amber-400/60',
    dot: 'bg-amber-500',
    ring: 'shadow-amber-500/40',
    iconA: 'text-amber-400',
    iconB: 'text-orange-400',
    bullet: 'text-amber-400',
    secondaryBtn: 'border-amber-500 text-amber-300 hover:bg-amber-500/10',
  },
];

const experiences: ExperienceItem[] = [
  {
    role: 'Backend Developer',
    company: 'Softevia',
    duration: 'June 2026 – Present',
    location: 'On-site',
    logo: '/softevialogo.png',
    techStack: ['Node.js', 'Express.js', 'DBreave', 'REST API', 'JWT', 'Typescript'],
    achievements: [
      'Developed and maintained scalable backend APIs',
      'Implemented authentication and authorization systems',
      'Optimized database queries for improved performance',
      'Collaborated with frontend team on feature integration',
      'Participated in code reviews and technical discussions',
    ],
    links: [
      { label: 'View Offer Letter', href: '#', icon: 'award' },
      { label: 'Experience Certificate', href: '#', icon: 'award' },
    ],
  },
  {
    role: 'Project-Based Experiential Learning (PBEL) Intern',
    company: 'IBM x NASSCOM Career Edge',
    duration: 'July 2026 – Aug 2026',
    location: 'Remote / Virtual',
    logo: '💼',
    techStack: ['Python', 'Streamlit', 'Groq API', 'Google Gemini', 'EasyOCR', 'PyMuPDF', 'Pandas', 'NumPy', 'Plotly', 'Docker'],
    achievements: [
      'Built HireSense AI, an AI-powered resume analyzer and smart recruitment platform for candidates and HR recruiters',
      'Implemented resume parsing, OCR extraction, and ATS scoring with grammar and communication analysis',
      'Developed AI-driven skill gap detection, resume improvement suggestions, and mock interview question generation',
      'Built an HR Command Center with candidate ranking, side-by-side comparison, and exportable PDF reports',
      'Added multilingual (English & Hinglish) support and bulk resume upload with automated parsing',
      'Earned a nationally recognized certification from IBM and NASSCOM upon completion of the program',
    ],
    links: [
      { label: 'View Presentation', href: '/HireSense-AI(1).pptx', icon: 'file' },
      { label: 'View Code', href: 'https://github.com/Iqra-hussain235/HireSense', icon: 'link' },
      { label: 'IBM & NASSCOM Certificate', href: '/nascome.pdf', icon: 'award' },
    ],
  },
  {
    role: 'Lead, Web Developer Team',
    company: 'International Institute of Languages – Study Abroad',
    duration: 'Feb 2026 – April 2026',
    location: 'Remote',
    logo: '/iillogo.png',
    techStack: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    achievements: [
      'Led a team of web developers to design and build the official website',
      'Coordinated task delegation, code reviews, and delivery timelines across the team',
      'Delivered a fully responsive, production-ready site now live for the organization',
    ],
    links: [
      { label: 'View Offer Letter', href: '/iilofferletter.pdf', icon: 'award' },
      { label: 'Live Project', href: 'https://iilstudyabroad.com/', icon: 'link' },
      { label: 'View Code', href: 'https://github.com/Iqra-hussain235/InternationalInstituteOfLanguage', icon: 'link' },
    ],
  },
  {
    role: 'Web Developer Intern (Remote, Part-time)',
    company: 'Synthify HR Solutions (sHRs)',
    duration: 'Sep 2025 – Nov 2025',
    location: 'Remote',
    logo: '/synlogo.png',
    techStack: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    achievements: [
      'Designed and implemented multiple responsive web-based forms',
      'Ensured robust form validation and improved overall user experience',
      'Integrated frontend components with backend functionality via APIs',
      'Recognized for strong punctuality, dedication, and reliability during the internship',
    ],
    links: [
      { label: 'View Offer Letter', href: '/synofferletter.jpeg', icon: 'award' },
      { label: 'Experience Certificate', href: '/internship-completion-letter-iqra-hussain.pdf', icon: 'award' },
    ],
  },
];

function LinkIcon({ type }: { type: ExperienceLink['icon'] }) {
  if (type === 'file') return <FileText className="w-5 h-5" />;
  if (type === 'link') return <ExternalLink className="w-5 h-5" />;
  return <Award className="w-5 h-5" />;
}

// Emoji logos (e.g. '💼') should render as text; file paths (e.g. '/softevia.png')
// need an actual <img> tag or the browser just prints the string.
const isImagePath = (logo: string) => /\.(png|jpe?g|svg|webp|gif)$/i.test(logo);

function CompanyLogo({ logo, alt, accentBorder }: { logo: string; alt: string; accentBorder: string }) {
  if (isImagePath(logo)) {
    return (
      <div className={`w-14 h-14 rounded-xl overflow-hidden border bg-white/10 flex items-center justify-center shrink-0 ${accentBorder}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={alt} className="w-full h-full object-contain p-1.5" />
      </div>
    );
  }
  return <div className="text-5xl">{logo}</div>;
}

export default function Experience() {
  const timelineGradient = `linear-gradient(to bottom, ${accentThemes
    .map((t) => t.hex[0])
    .join(', ')})`;

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a2e]">
      {/* Local keyframes: shifting-hue heading + slow orb drift */}
      <style>{`
        @keyframes hue-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-hue-shift {
          background-size: 300% 300%;
          animation: hue-shift 6s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.08); }
        }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
      `}</style>

      {/* Animated, color-cycling background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-slow"
          animate={{ backgroundColor: accentThemes.map((t) => `${t.hex[0]}26`) }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: '2s' }}
          animate={{ backgroundColor: accentThemes.map((t) => `${t.hex[1]}26`).reverse() }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-cyan-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent mb-4 animate-hue-shift"
          >
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 via-cyan-400 to-amber-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line — draws in on scroll, colored by career progression */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 origin-top"
              style={{ background: timelineGradient }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />

            <div className="space-y-12">
              {experiences.map((experience, expIndex) => {
                const accent = accentThemes[expIndex % accentThemes.length];
                return (
                  <motion.div
                    key={`${experience.company}-${expIndex}`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: expIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline Dot — pulses in its own accent color */}
                    <span className="absolute left-6 top-8 flex h-5 w-5">
                      <motion.span
                        className={`absolute inline-flex h-full w-full rounded-full ${accent.dot} opacity-60`}
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: expIndex * 0.3 }}
                      />
                      <span className={`relative inline-flex rounded-full h-5 w-5 ${accent.dot} border-4 border-black`} />
                    </span>

                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="ml-16"
                    >
                      <Card
                        className={`glassmorphism border bg-white/5 backdrop-blur-lg transition-all duration-300 hover:bg-white/[0.07] hover:shadow-xl ${accent.border} ${accent.ring}`}
                      >
                        <CardContent className="p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div className="flex items-start gap-4">
                              <motion.div
                                whileHover={{ scale: 1.15, rotate: 6 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                <CompanyLogo logo={experience.logo} alt={experience.company} accentBorder={accent.border} />
                              </motion.div>
                              <div>
                                <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
                                <p className={`text-xl ${accent.text}`}>{experience.company}</p>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 text-gray-400">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{experience.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Tech Stack */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                              <Award className={`w-5 h-5 ${accent.iconA}`} />
                              Technologies Used
                            </h4>
                            <motion.div
                              className="flex flex-wrap gap-2"
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: true }}
                              variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: 0.05 } },
                              }}
                            >
                              {experience.techStack.map((tech) => (
                                <motion.div
                                  key={tech}
                                  variants={{
                                    hidden: { opacity: 0, y: 8 },
                                    show: { opacity: 1, y: 0 },
                                  }}
                                  whileHover={{ scale: 1.08, y: -2 }}
                                >
                                  <Badge variant="secondary" className={`${accent.badge} transition-colors`}>
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                              <CheckCircle className={`w-5 h-5 ${accent.iconB}`} />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-300">
                                  <span className={`${accent.bullet} mt-1`}>•</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-4 mt-6">
                            {experience.links.map((link, linkIndex) => (
                              <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.href !== '#' ? '_blank' : undefined}
                                rel={link.href !== '#' ? 'noopener noreferrer' : undefined}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={
                                  linkIndex === 0
                                    ? `px-6 py-3 bg-gradient-to-r ${accent.grad} text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-lg ${accent.ring} transition-all`
                                    : `px-6 py-3 border-2 rounded-full font-semibold flex items-center gap-2 transition-all ${accent.secondaryBtn}`
                                }
                              >
                                <LinkIcon type={link.icon} />
                                {link.label}
                              </motion.a>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}