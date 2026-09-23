'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const arcRef = useRef<SVGCircleElement | null>(null);
  const helloRef = useRef<SVGTextElement | null>(null);
  const [progress, setProgress] = useState(0);

  // Animate the percentage 0 -> 100
  useEffect(() => {
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Trigger hello stroke animation, then wipe out
        const wipeTl = gsap.timeline({
          onComplete: () => {
            window.setTimeout(onComplete, 100);
          },
        });

        wipeTl.to(containerRef.current, {
          duration: 0.35,
          opacity: 0.85,
          ease: 'power2.out',
        });

        wipeTl.to(
          containerRef.current,
          {
            duration: 0.9,
            clipPath: 'inset(0 0 100% 0)',
            ease: 'power4.inOut',
          },
          '+=0.15',
        );
      },
    });

    tl.to(counter, {
      v: 100,
      duration: 2.4,
      ease: 'power2.inOut',
      onUpdate: () => {
        const v = Math.round(counter.v);
        setProgress(v);
        if (counterRef.current) {
          counterRef.current.textContent = String(v);
        }
        // Animate the arc
        if (arcRef.current) {
          const circumference = 2 * Math.PI * 54;
          const offset = circumference - (v / 100) * circumference;
          arcRef.current.style.strokeDashoffset = String(offset);
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
      style={{ clipPath: 'inset(0 0 0 0)' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      {/* Circular progress arc */}
      <div className="relative flex items-center justify-center">
        <svg
          width="220"
          height="220"
          viewBox="0 0 120 120"
          className="-rotate-90"
        >
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <circle
            ref={arcRef}
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#d4ff00"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 54}
            strokeDashoffset={2 * Math.PI * 54}
            style={{ transition: 'stroke-dashoffset 0.15s linear' }}
          />
        </svg>

        {/* Center percentage */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            ref={counterRef}
            className="font-display text-7xl md:text-8xl text-white leading-none"
          >
            0
          </span>
          <span className="font-display text-2xl text-lime mt-1">%</span>
        </div>
      </div>

      {/* hello stroke text */}
      <svg
        className="absolute bottom-[14vh] h-20 md:h-28 w-[280px] md:w-[360px] overflow-visible"
        viewBox="0 0 360 120"
      >
        <text
          ref={helloRef}
          x="50%"
          y="78"
          textAnchor="middle"
          fill="none"
          stroke="#d4ff00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            fontFamily: 'var(--font-caveat), cursive',
            fontSize: '92px',
          }}
          className={progress >= 100 ? 'hello-path' : ''}
        >
          hello
        </text>
      </svg>

      {/* Subtle caption */}
      <div className="absolute top-[14vh] left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#888]">
        <span className="w-6 h-px bg-white/20" />
        Waqas Bhatti
        <span className="w-6 h-px bg-white/20" />
      </div>
    </div>
  );
}
