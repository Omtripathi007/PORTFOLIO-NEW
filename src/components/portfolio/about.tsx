'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { label: 'LOCATION', value: 'BASED IN PAKISTAN' },
  { label: 'AVAILABILITY', value: 'ALWAYS AVAILABLE' },
  { label: 'EXPERTISE', value: 'FULL STACK CREATIVE' },
  { label: 'EXPERIENCE', value: '1+ YEAR' },
];

export default function About() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-headline', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.about-headline',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.about-portrait', {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-portrait',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.utils.toArray<HTMLElement>('.about-paragraph').forEach((p, i) => {
        gsap.from(p, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: p,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.stat-card').forEach((card, i) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
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
      id="about"
      ref={rootRef}
      className="relative py-24 md:py-36 px-5 md:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1.5 rounded-full border border-lime/40 bg-lime/5 text-lime text-[10px] tracking-[0.3em] uppercase">
            [ About Me ]
          </span>
          <span className="hidden md:block h-px flex-1 bg-white/10" />
          <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-white/40">
            01 — Introduction
          </span>
        </div>

        {/* Headline */}
        <h2
          className="about-headline font-display uppercase text-white text-balance max-w-5xl leading-[0.95]"
          style={{ fontSize: 'clamp(2rem, 6.5vw, 5rem)' }}
        >
          I Build Digital Worlds Where{' '}
          <span className="text-lime">Design</span> Meets{' '}
          <span className="text-lime">Code</span>.
        </h2>

        {/* Two-column grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Portrait */}
          <div className="about-portrait lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl card-surface group">
              {/* SVG portrait stylized silhouette */}
              <svg
                viewBox="0 0 400 500"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a1a1a" />
                    <stop offset="100%" stopColor="#0a0a0a" />
                  </linearGradient>
                  <radialGradient id="spot" cx="50%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#d4ff00" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="silhouette" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#0d0d0d" />
                  </linearGradient>
                </defs>

                <rect width="400" height="500" fill="url(#bg)" />
                <rect width="400" height="500" fill="url(#spot)" />

                {/* Head */}
                <ellipse
                  cx="200"
                  cy="170"
                  rx="78"
                  ry="92"
                  fill="url(#silhouette)"
                />
                {/* Neck */}
                <rect x="180" y="245" width="40" height="42" fill="url(#silhouette)" />
                {/* Shoulders */}
                <path
                  d="M 90 500 Q 90 330 200 320 Q 310 330 310 500 Z"
                  fill="url(#silhouette)"
                />
                {/* Rim light */}
                <path
                  d="M 200 78 Q 270 90 278 170 Q 282 240 250 280"
                  stroke="#d4ff00"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.45"
                />

                {/* Subtle grid overlay */}
                {[...Array(8)].map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 62.5}
                    x2="400"
                    y2={i * 62.5}
                    stroke="white"
                    strokeOpacity="0.04"
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={i * 50}
                    y1="0"
                    x2={i * 50}
                    y2="500"
                    stroke="white"
                    strokeOpacity="0.04"
                  />
                ))}
              </svg>

              {/* Floating labels */}
              <div className="absolute top-5 left-5 px-2.5 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur text-[10px] uppercase tracking-[0.3em] text-white/70">
                Waqas Bhatti
              </div>
              <div className="absolute bottom-5 right-5 px-2.5 py-1 rounded-full border border-lime/40 bg-lime/5 backdrop-blur text-[10px] uppercase tracking-[0.3em] text-lime">
                Creative Dev
              </div>
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-lime/60" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-lime/60" />
            </div>
          </div>

          {/* Right column copy + stats */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-6">
              <p className="about-paragraph text-base md:text-lg leading-relaxed text-white/80">
                I&apos;m Waqas — a Creative Developer who enjoys turning ideas
                into interactive digital experiences. I focus on creative
                coding, UI/UX design, motion design, and building web
                experiences that people remember.
              </p>
              <p className="about-paragraph text-base md:text-lg leading-relaxed text-white/60">
                I care about the details most people skip — like smooth
                animations, clean typography, and fine-tuned micro-interactions.
                The goal is to craft websites that don&apos;t just work, but
                make you pause and take them in.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="stat-card card-surface rounded-2xl p-5 md:p-6 hover-lift hover:border-lime/30 group relative overflow-hidden"
                >
                  <div
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-lime/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                      {s.label}
                    </span>
                  </div>
                  <div className="font-syne text-base md:text-lg font-semibold text-white leading-tight">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative info row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-between gap-4 pt-2 border-t border-white/5"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Currently Available
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Remote · Worldwide
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
