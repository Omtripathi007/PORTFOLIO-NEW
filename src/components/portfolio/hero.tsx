'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { DistortChar, DistortText } from '@/components/ui/distort-text';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
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

      // Subtle parallax on scroll for background
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
      <div className="absolute top-24 md:top-32 left-0 right-0 w-full flex justify-center pointer-events-none z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="pointer-events-auto flex items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/50"
        >
          <span className="w-12 md:w-20 h-px bg-white/25" />
          <DistortText text="Money Follows !!" strength={0.4} />
          <span className="w-12 md:w-20 h-px bg-white/25" />
        </motion.div>
      </div>

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
              {'CREATIVE'.split('').map((c, i) => (
                <DistortChar key={i} char={c} />
              ))}
            </span>
          </h1>
        </div>

        <div className="overflow-hidden mt-1 md:mt-3">
          <DistortText
            text="Developer"
            as="span"
            className="hero-dev font-display uppercase leading-[0.85] text-white"
            style={{ fontSize: 'clamp(3.2rem, 13vw, 12rem)', display: 'flex', justifyContent: 'center' }}
          />
        </div>

        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {['VISUALS', 'CODE', 'EXPERIENCE'].map((label, idx) => (
            <span
              key={label}
              className={`hero-sub flex items-center gap-3 md:gap-5 text-xs md:text-sm tracking-[0.3em] uppercase text-white/60`}
            >
              {idx > 0 && <span className="w-1.5 h-1.5 rounded-full bg-lime" />}
              <DistortText text={label} strength={0.5} />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 w-full flex justify-center pointer-events-none z-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pointer-events-auto flex flex-col items-center gap-3"
        >
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/50 font-light text-center">
            <DistortText text="Scroll to Explore" strength={0.3} />
          </span>
          {/* Mouse icon */}
          <div className="relative w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-[5px] shadow-[0_0_15px_rgba(212,255,0,0.15)]">
            <span className="scroll-dot w-[3px] h-[6px] bg-lime rounded-full" />
          </div>
        </motion.div>
      </div>

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
