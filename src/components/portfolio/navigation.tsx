'use client';

import { useEffect, useState } from 'react';
import { DistortText } from '@/components/ui/distort-text';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchor = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-[1600px] px-5 md:px-10 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'glass rounded-full px-5 md:px-7 py-3'
            : 'bg-transparent'
        }`}
        style={
          scrolled
            ? undefined
            : { background: 'rgba(10,10,10,0.35)', backdropFilter: 'blur(8px)' }
        }
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleAnchor('#top');
          }}
          className="group flex items-center gap-2"
        >
          <DistortText
            text="OM"
            as="span"
            className="font-display text-lg md:text-xl tracking-wide text-white"
            strength={0.6}
          />
          <DistortText
            text="TRIPATHI"
            as="span"
            className="font-display text-lg md:text-xl tracking-wide text-lime"
            strength={0.6}
          />
          <span className="hidden md:inline-block ml-1 w-2 h-2 bg-lime rounded-full group-hover:scale-150 transition-transform" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleAnchor(link.href);
              }}
              className="nav-link text-[11px] tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors"
            >
              <DistortText text={link.label} strength={0.4} />
            </a>
          ))}
        </nav>

        {/* Status badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
          <span className="status-dot" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/70">
            Based in India
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all ${
              open ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all ${
              open ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden mx-5 mt-3 glass rounded-2xl overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleAnchor(link.href);
              }}
              className="px-6 py-4 text-sm uppercase tracking-[0.25em] text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors border-b border-white/5"
            >
              <DistortText text={link.label} strength={0.3} />
            </a>
          ))}
          <div className="px-6 py-4 flex items-center gap-2">
            <span className="status-dot" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/70">
              Based in India
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
