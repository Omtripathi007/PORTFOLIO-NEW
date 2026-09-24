'use client';

import { DistortText } from '@/components/ui/distort-text';

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <DistortText
              text="OM"
              as="span"
              className="font-display text-xl tracking-wide text-white"
              strength={0.6}
            />
            <DistortText
              text="TRIPATHI"
              as="span"
              className="font-display text-xl tracking-wide text-lime"
              strength={0.6}
            />
          </div>

          {/* Center tagline */}
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-white/40">
            © 2025 — Designed & Built with care
          </p>

          {/* Right - back to top */}
          <div className="flex items-center justify-end gap-4">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-lime transition-colors"
            >
              <DistortText text="Back to Top" strength={0.4} />
              <span className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-lime/40 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
