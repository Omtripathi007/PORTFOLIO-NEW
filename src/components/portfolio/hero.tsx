'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CREATIVE_LETTERS = 'CREATIVE'.split('');

interface DistortCharProps {
  char: string;
  index: number;
}

function DistortChar({ char, index }: DistortCharProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;

      gsap.to(el, {
        x: dx * 24,
        y: dy * 18,
        rotateX: dx * 14,
        rotateY: dy * -10,
        skewX: dx * 6,
        scale: 1.05,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        scale: 1,
        duration: 0.6,
        ease: 'elastic.out(1, 0.45)',
      });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <span
      ref={ref}
      data-char={char}
      style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
      className="relative will-change-transform"
    >
      {char}
    </span>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero headline entrance
      const chars = titleRef.current?.querySelectorAll('[data-char]');
      if (chars) {
        gsap.from(chars, {
          yPercent: 120,
          opacity: 0,
          rotateZ: 4,
          duration: 1.1,
          stagger: 0.04,
          ease: 'power4.out',
          delay: 0.1,
        });
      }

      gsap.from('.hero-dev', {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5,
      });

      gsap.from('.hero-sub', {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.8,
      });

      gsap.from('.hero-cue', {
        opacity: 0,
        y: 16,
        duration: 1,
        ease: 'power2.out',
        delay: 1.2,
      });

      // Subtle parallax on scroll
      gsap.to('.hero-parallax', {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.hero-fade', {
        opacity: 0,
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background ambient gradients */}
      <div className="absolute inset-0 hero-parallax pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(212,255,0,0.18) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(80,140,255,0.15) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* Small section label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="hero-fade absolute top-24 md:top-32 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50"
      >
        <span className="w-8 h-px bg-white/30" />
        Portfolio · 2025
        <span className="w-8 h-px bg-white/30" />
      </motion.div>

      {/* Massive headline */}
      <div className="relative z-10 px-4 md:px-8 w-full max-w-[1600px] flex flex-col items-center text-center">
        <div className="overflow-hidden">
          <h1
            ref={titleRef}
            className="font-display uppercase leading-[0.85] text-white select-none"
            style={{
              fontSize: 'clamp(3.2rem, 13vw, 12rem)',
              perspective: '800px',
            }}
          >
            <span className="inline-flex flex-wrap justify-center gap-x-[0.04em]">
              {CREATIVE_LETTERS.map((c, i) => (
                <DistortChar key={i} char={c} index={i} />
              ))}
            </span>
          </h1>
        </div>

        <div className="overflow-hidden mt-1 md:mt-3">
          <span
            className="hero-dev font-display uppercase leading-[0.85] text-white block"
            style={{ fontSize: 'clamp(3.2rem, 13vw, 12rem)' }}
          >
            Developer
          </span>
        </div>

        {/* Sub-labels */}
        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {['VISUALS', 'CODE', 'EXPERIENCE'].map((label, idx) => (
            <span
              key={label}
              className={`hero-sub flex items-center gap-3 md:gap-5 text-xs md:text-sm tracking-[0.3em] uppercase text-white/60`}
            >
              {idx > 0 && <span className="w-1.5 h-1.5 rounded-full bg-lime" />}
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="hero-cue hero-fade absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50">
          Scroll to Explore
        </span>
        <div className="relative w-5 h-9 border border-white/30 rounded-full flex items-start justify-center pt-2">
          <span className="scroll-bounce w-1 h-2 bg-lime rounded-full" />
        </div>
      </motion.div>

      {/* Floating tech marquee at the very bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="marquee whitespace-nowrap py-2.5 text-xs uppercase tracking-[0.25em] text-white/40">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="inline-flex items-center">
              {[
                'HTML5',
                'CSS3',
                'JAVASCRIPT',
                'REACT',
                'NEXT.JS',
                'GSAP',
                'NODE.JS',
                'TAILWIND',
                'MOTION',
                'CREATIVE',
                'LENIS',
                'TYPESCRIPT',
              ].map((t) => (
                <span key={t} className="inline-flex items-center">
                  <span className="mx-5">{t}</span>
                  <span className="w-1 h-1 bg-lime/70 rounded-full" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
