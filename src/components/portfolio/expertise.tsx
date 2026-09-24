'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { DistortText } from '@/components/ui/distort-text';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Tech = { label: string; x: string; y: string; cls: string };

const expertise = [
  {
    no: '01',
    title: 'Creative Development',
    description:
      'Building fast, responsive and scalable web solutions using modern technologies.',
    techs: [
      { label: 'HTML5', x: '8%', y: '18%', cls: 'float-slow' },
      { label: 'CSS3', x: '70%', y: '12%', cls: 'float-med' },
      { label: 'JavaScript', x: '85%', y: '60%', cls: 'float-fast' },
      { label: 'Tailwind', x: '14%', y: '70%', cls: 'float-med' },
    ] as Tech[],
  },
  {
    no: '02',
    title: 'Motion & Interaction',
    description:
      'Crafting fluid animations, smooth scroll experiences, and interactive canvas elements.',
    techs: [
      { label: 'GSAP', x: '12%', y: '22%', cls: 'float-fast' },
      { label: 'Lenis', x: '75%', y: '15%', cls: 'float-slow' },
      { label: 'Framer', x: '85%', y: '68%', cls: 'float-med' },
      { label: 'Canvas', x: '18%', y: '75%', cls: 'float-fast' },
    ] as Tech[],
  },
  {
    no: '03',
    title: 'Creative Architecture',
    description:
      'Architecting intelligent, borderless digital products — from AI-driven interfaces and multilingual experiences to decentralized systems and offline-first payment flows.',
    techs: [
      { label: 'Offline Payment', x: '6%', y: '18%', cls: 'float-med' },
      { label: 'Decentralized', x: '68%', y: '10%', cls: 'float-slow' },
      { label: 'Multilingual', x: '78%', y: '68%', cls: 'float-fast' },
      { label: 'AI', x: '14%', y: '75%', cls: 'float-med' },
    ] as Tech[],
  },
  {
    no: '04',
    title: 'Modern Web Apps',
    description:
      'Developing dynamic web applications with component-based architecture and scalable code.',
    techs: [
      { label: 'React', x: '12%', y: '18%', cls: 'float-fast' },
      { label: 'Next.js', x: '72%', y: '12%', cls: 'float-slow' },
      { label: 'Node.js', x: '85%', y: '65%', cls: 'float-med' },
      { label: 'TypeScript', x: '14%', y: '72%', cls: 'float-slow' },
    ] as Tech[],
  },
];

export default function Expertise() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.expertise-title', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.expertise-title',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.utils.toArray<HTMLElement>('.expertise-card').forEach((c, i) => {
        gsap.from(c, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.05,
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
      id="expertise"
      ref={rootRef}
      className="relative py-24 md:py-36 px-5 md:px-10 bg-[#0a0a0a]"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,255,0,0.15) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1.5 rounded-full border border-lime/40 bg-lime/5 text-lime text-[10px] tracking-[0.3em] uppercase">
            [ My Expertise ]
          </span>
          <span className="hidden md:block h-px flex-1 bg-white/10" />
          <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-white/40">
            02 — What I Do
          </span>
        </div>

        {/* Title + intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <h2
            className="expertise-title font-display uppercase text-white leading-[0.95] lg:col-span-7"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
          >
            <DistortText text="Where Design, Code and" strength={0.7} />{' '}
            <span className="text-lime"><DistortText text="Motion" strength={0.7} /></span>{' '}
            <DistortText text="Work as One." strength={0.7} />
          </h2>
          <div className="lg:col-span-5 lg:pt-4 space-y-4">
            <p className="text-base md:text-lg leading-relaxed text-white/80">
              I design and build digital experiences where design, code and
              motion work as one.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/55">
              From expressive interfaces to interactive 3D, I combine front-end
              engineering with visual design to create web experiences that
              feel alive.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {expertise.map((card, i) => (
            <div
              key={card.no}
              className="expertise-card relative card-surface rounded-3xl p-7 md:p-9 overflow-hidden hover-lift hover:border-lime/30 group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Floating tech icons */}
              <AnimatePresence>
                {hovered === i &&
                  card.techs.map((t, idx) => (
                    <motion.span
                      key={t.label}
                      initial={{ opacity: 0, scale: 0.4, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.4, y: 20 }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className={`absolute pointer-events-none px-3 py-1.5 rounded-full border border-lime/30 bg-lime/5 text-lime text-[10px] md:text-xs uppercase tracking-[0.2em] ${t.cls}`}
                      style={{ left: t.x, top: t.y }}
                    >
                      {t.label}
                    </motion.span>
                  ))}
              </AnimatePresence>

              {/* Card header */}
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <span className="text-xs tracking-[0.3em] text-white/40">
                  {card.no}
                </span>
                <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-lime text-xs group-hover:border-lime/40 group-hover:bg-lime/5 transition-all">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-syne font-bold text-white uppercase tracking-tight mb-3"
                style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2rem)' }}
              >
                <DistortText text={card.title} strength={0.6} />
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed text-white/55 max-w-md">
                {card.description}
              </p>

              {/* Progress bar accent */}
              <div className="mt-6 h-px w-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-lime transition-all duration-700"
                  style={{ width: hovered === i ? '100%' : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
