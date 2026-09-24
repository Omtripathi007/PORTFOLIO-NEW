'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { DistortText } from '@/components/ui/distort-text';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { label: 'LOCATION', value: 'BASED IN INDIA' },
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
          <DistortText text="I Build Digital Worlds Where" strength={0.7} />{' '}
          <span className="text-lime"><DistortText text="Innovation" strength={0.7} /></span>{' '}
          <DistortText text="Meets" strength={0.7} />{' '}
          <span className="text-lime"><DistortText text="Code" strength={0.7} /></span>
          <DistortText text="." strength={0.7} />
        </h2>

        {/* Two-column grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Portrait */}
          <div className="about-portrait lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl card-surface group border border-white/10 hover:border-lime/40 transition-all duration-500 shadow-2xl">
              <Image
                src="/images/om-portrait.jpg"
                alt="Om Tripathi - Creative Developer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle ambient overlay & glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>

          {/* Right column copy + stats */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-6">
              <p className="about-paragraph text-base md:text-lg leading-relaxed text-white/80">
                I&apos;m Om — a Creative Developer and Innovation Builder who enjoys turning ideas into meaningful digital experiences and experimental technologies. I explore creative coding, UI/UX, AI implementation, and new ways of designing digital systems — from centralized platforms to decentralized and offline-first architectures.

              </p>
              <p className="about-paragraph text-base md:text-lg leading-relaxed text-white/60">
                I care about the details most people skip — from thoughtful interfaces and smooth interactions to the architecture that powers an experience behind the scenes. Whether it's integrating AI, designing decentralized systems, or building solutions that work even without constant connectivity, my goal is to create technology that feels intuitive, purposeful, and a little ahead of its time.

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
