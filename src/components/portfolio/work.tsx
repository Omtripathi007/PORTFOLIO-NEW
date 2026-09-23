'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    tag: '[ DATA - 01 ]',
    title: 'Creative Portfolio',
    description:
      'A modern digital portfolio designed for creative professionals. Focuses on minimal typography, smooth page transitions, and interactive visual elements.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'GSAP'],
    accent: '#d4ff00',
    mockup: 'portfolio' as const,
  },
  {
    tag: '[ DATA - 02 ]',
    title: 'E-commerce Website',
    description:
      'A clean and modern e-commerce platform built for fashion brands. Brings products, style, and seamless commerce together.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'GSAP'],
    accent: '#f5f5f5',
    mockup: 'gazu' as const,
  },
  {
    tag: '[ DATA - 03 ]',
    title: 'Creative Clothing Website',
    description:
      'A high-end digital shopping experience for modern fashion brands.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'GSAP'],
    accent: '#d4ff00',
    mockup: 'time' as const,
  },
  {
    tag: '[ DATA - 04 ]',
    title: 'Luxury Timepieces',
    description:
      'A premium digital showcase designed for luxury watches, highlighting craftsmanship and timeless elegance.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'GSAP'],
    accent: '#f5f5f5',
    mockup: 'watches' as const,
  },
  {
    tag: '[ DATA - 05 ]',
    title: 'Premium Headphones',
    description: 'Crafted for Focus. Designed for Life.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'GSAP'],
    accent: '#d4ff00',
    mockup: 'headphones' as const,
  },
  {
    tag: '[ DATA - 06 ]',
    title: 'Library Management System',
    description:
      'A modern Library Management System designed to simplify book management, user records, and borrowing through a clean interface.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'GSAP'],
    accent: '#f5f5f5',
    mockup: 'library' as const,
  },
];

const skillTags = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'REACT.JS',
  'INTERACTIVE WEB',
  'CREATIVE DEVELOPMENT',
  'MOTION DESIGN',
];

function Mockup({ kind, accent }: { kind: string; accent: string }) {
  // Each mockup is a stylized SVG interface preview
  if (kind === 'portfolio') {
    return (
      <svg viewBox="0 0 800 500" className="w-full h-full">
        <rect width="800" height="500" fill="#0a0a0a" />
        <rect width="800" height="500" fill="url(#pf-bg)" />
        <defs>
          <radialGradient id="pf-bg" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
        </defs>
        {/* Top nav */}
        <rect x="40" y="32" width="80" height="6" rx="2" fill={accent} />
        <rect x="600" y="32" width="40" height="6" rx="2" fill="#3a3a3a" />
        <rect x="650" y="32" width="40" height="6" rx="2" fill="#3a3a3a" />
        <rect x="700" y="32" width="40" height="6" rx="2" fill="#3a3a3a" />
        {/* Hero text */}
        <text
          x="40"
          y="200"
          fontFamily="Anton, sans-serif"
          fontSize="84"
          fill="#f5f5f5"
          letterSpacing="2"
        >
          CREATIVE
        </text>
        <text
          x="40"
          y="280"
          fontFamily="Anton, sans-serif"
          fontSize="84"
          fill={accent}
          letterSpacing="2"
        >
          PORTFOLIO
        </text>
        <rect x="40" y="320" width="320" height="3" fill={accent} opacity="0.5" />
        <text
          x="40"
          y="360"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fill="#888"
        >
          Modern interactive developer showcase
        </text>
        {/* Side panel */}
        <rect x="540" y="120" width="220" height="280" rx="12" fill="#141414" stroke="rgba(255,255,255,0.08)" />
        <rect x="555" y="140" width="60" height="6" rx="2" fill={accent} />
        <rect x="555" y="160" width="180" height="4" rx="2" fill="#3a3a3a" />
        <rect x="555" y="172" width="140" height="4" rx="2" fill="#2a2a2a" />
        <rect x="555" y="200" width="190" height="80" rx="8" fill="#1a1a1a" />
        <rect x="565" y="212" width="80" height="6" rx="2" fill={accent} opacity="0.7" />
        <rect x="565" y="226" width="140" height="3" fill="#3a3a3a" />
        <rect x="565" y="234" width="120" height="3" fill="#2a2a2a" />
        <circle cx="700" cy="360" r="14" fill={accent} opacity="0.9" />
      </svg>
    );
  }

  if (kind === 'gazu') {
    return (
      <svg viewBox="0 0 800 500" className="w-full h-full">
        <rect width="800" height="500" fill="#0a0a0a" />
        <rect width="800" height="500" fill="url(#gzu-bg)" />
        <defs>
          <radialGradient id="gzu-bg" cx="60%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
        </defs>
        {/* Big brand text */}
        <text
          x="400"
          y="280"
          textAnchor="middle"
          fontFamily="Anton, sans-serif"
          fontSize="200"
          fill="#f5f5f5"
          letterSpacing="-4"
        >
          GAZU
        </text>
        <text
          x="400"
          y="320"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fill={accent}
          letterSpacing="8"
        >
          FASHION · E-COMMERCE
        </text>
        {/* Product card */}
        <rect x="40" y="80" width="140" height="180" rx="8" fill="#141414" stroke="rgba(255,255,255,0.08)" />
        <rect x="56" y="96" width="108" height="100" rx="4" fill="#1a1a1a" />
        <rect x="56" y="206" width="60" height="4" rx="2" fill={accent} />
        <rect x="56" y="218" width="80" height="3" fill="#3a3a3a" />
        <rect x="56" y="228" width="50" height="3" fill="#2a2a2a" />
        {/* Right side product */}
        <rect x="620" y="120" width="140" height="220" rx="8" fill="#141414" stroke="rgba(255,255,255,0.08)" />
        <rect x="636" y="136" width="108" height="120" rx="4" fill="#1a1a1a" />
        <rect x="636" y="270" width="60" height="4" rx="2" fill={accent} />
        <rect x="636" y="282" width="90" height="3" fill="#3a3a3a" />
        {/* Add to cart pill */}
        <rect x="636" y="306" width="80" height="20" rx="10" fill={accent} />
        <text x="676" y="320" textAnchor="middle" fontSize="10" fill="#0a0a0a" fontFamily="Inter, sans-serif" fontWeight="700">
          ADD TO CART
        </text>
      </svg>
    );
  }

  if (kind === 'time') {
    return (
      <svg viewBox="0 0 800 500" className="w-full h-full">
        <rect width="800" height="500" fill="#0a0a0a" />
        <rect width="800" height="500" fill="url(#time-bg)" />
        <defs>
          <linearGradient id="time-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#141414" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
        </defs>
        {/* Big text */}
        <text
          x="40"
          y="180"
          fontFamily="Anton, sans-serif"
          fontSize="90"
          fill="#f5f5f5"
          letterSpacing="-2"
        >
          TIME,
        </text>
        <text
          x="40"
          y="270"
          fontFamily="Anton, sans-serif"
          fontSize="90"
          fill={accent}
          letterSpacing="-2"
        >
          REDEFINED.
        </text>
        {/* Watch svg */}
        <g transform="translate(540,90)">
          <circle cx="100" cy="160" r="120" fill="#1a1a1a" stroke="rgba(255,255,255,0.1)" />
          <circle cx="100" cy="160" r="100" fill="none" stroke={accent} strokeWidth="2" opacity="0.6" />
          <circle cx="100" cy="160" r="80" fill="#0a0a0a" />
          <line x1="100" y1="160" x2="100" y2="100" stroke={accent} strokeWidth="3" />
          <line x1="100" y1="160" x2="140" y2="160" stroke="#f5f5f5" strokeWidth="2" />
          <circle cx="100" cy="160" r="4" fill={accent} />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={deg}
                x1={100 + Math.cos(rad) * 90}
                y1={160 + Math.sin(rad) * 90}
                x2={100 + Math.cos(rad) * 96}
                y2={160 + Math.sin(rad) * 96}
                stroke="#3a3a3a"
                strokeWidth="2"
              />
            );
          })}
        </g>
      </svg>
    );
  }

  if (kind === 'watches') {
    return (
      <svg viewBox="0 0 800 500" className="w-full h-full">
        <rect width="800" height="500" fill="#0a0a0a" />
        <defs>
          <radialGradient id="lux-bg" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
        </defs>
        <rect width="800" height="500" fill="url(#lux-bg)" />
        {/* Three watches grid */}
        {[120, 400, 680].map((cx, idx) => (
          <g key={idx} transform={`translate(${cx - 80},120)`}>
            <rect x="0" y="0" width="160" height="240" rx="12" fill="#141414" stroke="rgba(255,255,255,0.08)" />
            <circle cx="80" cy="100" r="60" fill="#0a0a0a" stroke={accent} strokeWidth="1.5" opacity="0.8" />
            <circle cx="80" cy="100" r="48" fill="none" stroke="#3a3a3a" />
            <line x1="80" y1="100" x2="80" y2="60" stroke={accent} strokeWidth="2" />
            <line x1="80" y1="100" x2="110" y2="100" stroke="#f5f5f5" strokeWidth="1.5" />
            <circle cx="80" cy="100" r="2" fill={accent} />
            <rect x="20" y="180" width="80" height="3" rx="1" fill={accent} opacity="0.6" />
            <rect x="20" y="194" width="100" height="3" fill="#3a3a3a" />
            <rect x="20" y="206" width="60" height="3" fill="#2a2a2a" />
          </g>
        ))}
        <text
          x="40"
          y="50"
          fontFamily="Anton, sans-serif"
          fontSize="32"
          fill="#f5f5f5"
          letterSpacing="2"
        >
          LUXURY TIMEPIECES
        </text>
      </svg>
    );
  }

  if (kind === 'headphones') {
    return (
      <svg viewBox="0 0 800 500" className="w-full h-full">
        <rect width="800" height="500" fill="#0a0a0a" />
        <defs>
          <radialGradient id="hp-bg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
        </defs>
        <rect width="800" height="500" fill="url(#hp-bg)" />
        {/* Headphone silhouette */}
        <g transform="translate(280,110)">
          <path
            d="M 120 0 Q 30 0 30 100 L 30 180 Q 30 220 50 220 Q 70 220 70 180 L 70 130 Q 70 80 120 80 Q 170 80 170 130 L 170 180 Q 170 220 190 220 Q 210 220 210 180 L 210 100 Q 210 0 120 0 Z"
            fill="#1a1a1a"
            stroke={accent}
            strokeWidth="2"
            opacity="0.9"
          />
          <rect x="40" y="200" width="40" height="80" rx="14" fill="#141414" stroke={accent} strokeWidth="2" />
          <rect x="160" y="200" width="40" height="80" rx="14" fill="#141414" stroke={accent} strokeWidth="2" />
        </g>
        <text
          x="400"
          y="420"
          textAnchor="middle"
          fontFamily="Anton, sans-serif"
          fontSize="32"
          fill={accent}
          letterSpacing="6"
        >
          PREMIUM SOUND
        </text>
        <text
          x="400"
          y="448"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fill="#888"
          letterSpacing="2"
        >
          CRAFTED FOR FOCUS · DESIGNED FOR LIFE
        </text>
      </svg>
    );
  }

  // library
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full">
      <rect width="800" height="500" fill="#0a0a0a" />
      <defs>
        <linearGradient id="lib-bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#lib-bg)" />
      {/* Sidebar */}
      <rect x="20" y="20" width="160" height="460" rx="8" fill="#0a0a0a" stroke="rgba(255,255,255,0.08)" />
      <rect x="40" y="40" width="80" height="6" rx="2" fill={accent} />
      {[60, 80, 100, 120, 140].map((y, i) => (
        <g key={y}>
          <rect x="40" y={y} width="100" height="3" rx="1" fill={i === 0 ? accent : '#3a3a3a'} opacity={i === 0 ? 0.8 : 1} />
        </g>
      ))}
      {/* Book grid */}
      <text
        x="220"
        y="60"
        fontFamily="Anton, sans-serif"
        fontSize="28"
        fill="#f5f5f5"
        letterSpacing="1"
      >
        BOOK CATALOG
      </text>
      <rect x="220" y="78" width="60" height="3" fill={accent} />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <g
            key={`${row}-${col}`}
            transform={`translate(${220 + col * 180},${110 + row * 120})`}
          >
            <rect width="160" height="100" rx="8" fill="#141414" stroke="rgba(255,255,255,0.08)" />
            <rect x="14" y="14" width="40" height="4" fill={accent} opacity="0.7" />
            <rect x="14" y="26" width="120" height="3" fill="#3a3a3a" />
            <rect x="14" y="36" width="90" height="3" fill="#2a2a2a" />
            <rect x="14" y="70" width="50" height="20" rx="4" fill={accent} opacity="0.15" />
          </g>
        ))
      )}
    </svg>
  );
}

export default function Work() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-title', {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.work-title',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.utils.toArray<HTMLElement>('.work-card').forEach((c, i) => {
        gsap.from(c, {
          y: 80,
          opacity: 0,
          duration: 0.9,
          delay: (i % 2) * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: c,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={rootRef}
      className="relative py-24 md:py-36 px-5 md:px-10 bg-[#0a0a0a]"
    >
      {/* Big backdrop title with marquee skill tags */}
      <div className="relative mb-16 md:mb-20 -mx-5 md:-mx-10">
        {/* Big WORK word */}
        <div
          className="work-title relative text-center pointer-events-none"
          aria-hidden
        >
          <h2
            className="font-display uppercase text-white/[0.04] leading-none select-none"
            style={{ fontSize: 'clamp(8rem, 32vw, 28rem)' }}
          >
            WORK
          </h2>
        </div>

        {/* Floating skill marquee overlay */}
        <div className="absolute inset-0 flex flex-col justify-center gap-2 pointer-events-none">
          <div className="overflow-hidden">
            <div className="marquee whitespace-nowrap">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="inline-flex items-center">
                  {skillTags.map((t) => (
                    <span key={t} className="inline-flex items-center">
                      <span className="mx-6 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/60">
                        {t}
                      </span>
                      <span className="w-1 h-1 bg-lime rounded-full mx-2" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Top label */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-full border border-lime/40 bg-lime/5 text-lime text-[10px] tracking-[0.3em] uppercase">
            [ Selected Work ]
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px]">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {projects.map((p, idx) => (
            <ProjectCard key={p.tag} project={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  idx,
}: {
  project: (typeof projects)[number];
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `perspective(1000px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg) translateZ(0)`;
    img.style.transform = `scale(1.08) translate(${px * -2}%, ${py * -2}%)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;
    card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    img.style.transform = 'scale(1) translate(0,0)';
  };

  return (
    <motion.div
      ref={cardRef}
      className={`work-card group relative rounded-3xl overflow-hidden card-surface hover-lift hover:border-lime/30 ${
        idx % 3 === 0 ? 'md:col-span-2' : ''
      }`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: 'transform 0.4s ease, border-color 0.3s ease' }}
    >
      {/* Image preview */}
      <div
        className={`relative overflow-hidden ${
          idx % 3 === 0 ? 'aspect-[16/8] md:aspect-[16/7]' : 'aspect-[16/10]'
        }`}
      >
        <div
          ref={imgRef}
          className="absolute inset-0"
          style={{ transition: 'transform 0.5s ease' }}
        >
          <Mockup kind={project.mockup} accent={project.accent} />
        </div>
        {/* Dark overlay lift on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500" />
        {/* Top row */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full border border-white/15 bg-black/40 backdrop-blur text-[10px] uppercase tracking-[0.25em] text-white/70">
            {project.tag}
          </span>
          <span className="px-2.5 py-1 rounded-full border border-lime/30 bg-lime/5 text-lime text-[10px] uppercase tracking-[0.25em] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            View Project →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-end justify-between gap-4 mb-3">
          <h3
            className="font-syne font-bold uppercase tracking-tight text-white"
            style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2rem)' }}
          >
            {project.title}
          </h3>
          <div className="w-10 h-10 shrink-0 rounded-full border border-white/15 flex items-center justify-center text-white/60 group-hover:text-lime group-hover:border-lime/40 transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </div>
        </div>
        <p className="text-sm md:text-base leading-relaxed text-white/55 max-w-2xl mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-[0.2em] text-white/60"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
