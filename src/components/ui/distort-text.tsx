'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/* ─── Single character with magnetic distortion ─── */
interface DistortCharProps {
  char: string;
  strength?: number; // multiplier: 1 = default hero strength
}

export function DistortChar({ char, strength = 1 }: DistortCharProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width || 1);
      const dy = (e.clientY - cy) / (rect.height || 1);

      gsap.to(el, {
        x: dx * 24 * strength,
        y: dy * 18 * strength,
        rotateX: dx * 14 * strength,
        rotateY: dy * -10 * strength,
        skewX: dx * 6 * strength,
        scale: 1 + 0.05 * strength,
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
  }, [strength]);

  return (
    <span
      ref={ref}
      data-char={char}
      style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
      className="relative will-change-transform"
    >
      {char === ' ' ? '\u00a0' : char}
    </span>
  );
}

/* ─── Split a string into DistortChar spans ─── */
interface DistortTextProps {
  text: string;
  /** Wrapper element tag, defaults to span */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  /** 0–1 for subtle, 1 for full hero-level distortion */
  strength?: number;
  /** Gap between characters (e.g. '0.02em') */
  gap?: string;
  children?: never;
}

export function DistortText({
  text,
  as: Tag = 'span',
  className,
  style,
  strength = 1,
  gap = '0',
}: DistortTextProps) {
  const chars = text.split('');

  return (
    // @ts-expect-error dynamic tag
    <Tag
      className={className}
      style={{ ...style, perspective: '600px', display: 'inline-flex', flexWrap: 'wrap', gap }}
    >
      {chars.map((char, i) => (
        <DistortChar key={i} char={char} strength={strength} />
      ))}
    </Tag>
  );
}
