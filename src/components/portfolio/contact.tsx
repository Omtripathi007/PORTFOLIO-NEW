'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { DistortText } from '@/components/ui/distort-text';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const contactLinks = [
  { label: 'Email Me', value: 'om22092006@gmail.com', href: 'mailto:om22092006@gmail.com' },
  { label: 'Connect', value: 'LinkedIn', href: 'https://www.linkedin.com/in/om-tripathi-155b24380/' },
  { label: 'Read In', value: 'Github', href: 'https://github.com/Omtripathi007' },
];

export default function Contact() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-bg-title', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.contact-bg-title',
          start: 'top 95%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.contact-headline', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-headline',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.contact-info', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-info-wrap',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.form-field', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const googleFormUrl =
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdOWbCmwkKHzFgp9lHDaQZEYrl-OZyXvj636iAJzbd6uzVrFA/formResponse';

      const data = new FormData();
      data.append('entry.739597866', formData.name);
      data.append('entry.1182683942', formData.email);
      data.append('entry.707218801', formData.message);

      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });

      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={rootRef}
      className="relative py-24 md:py-36 px-5 md:px-10 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Big backdrop title */}
      <div className="relative -mx-5 md:-mx-10 mb-16 md:mb-20">
        <div
          className="contact-bg-title text-center pointer-events-auto"
          aria-hidden
        >
          <DistortText
            text="CONTACT"
            as="h2"
            strength={1.2}
            className="font-display uppercase text-white/[0.05] hover:text-white/[0.1] transition-colors leading-none select-none justify-center cursor-default"
            style={{ fontSize: 'clamp(8rem, 28vw, 24rem)' }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left side */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full border border-lime/40 bg-lime/5 text-lime text-[10px] tracking-[0.3em] uppercase">
                [ Get In Touch ]
              </span>
              <span className="hidden md:block h-px flex-1 bg-white/10" />
              <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-white/40">
                04 — Contact
              </span>
            </div>

            {/* Main heading */}
            <h2
              className="contact-headline font-display uppercase text-white leading-[0.95] text-balance"
              style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
            >
              <DistortText text="Let's create something" strength={0.7} />{' '}
              <span className="text-lime"><DistortText text="meaningful." strength={0.7} /></span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/60 max-w-xl">
              Have a project in mind, a question, or simply want to talk about
              web dev or design? I&apos;d love to hear from you.
            </p>

            {/* Contact info */}
            <div className="contact-info-wrap mt-10 md:mt-14 space-y-3">
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="contact-info group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl card-surface hover-lift hover:border-lime/30"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 w-20 shrink-0">
                      {c.label}
                    </span>
                    <span className="font-syne font-semibold text-white text-sm md:text-base group-hover:text-lime transition-colors">
                      {c.value}
                    </span>
                  </div>
                  <span className="w-9 h-9 shrink-0 rounded-full border border-white/15 flex items-center justify-center text-white/60 group-hover:text-lime group-hover:border-lime/40 transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - form */}
          <div className="lg:col-span-5">
            <form
              onSubmit={handleSubmit}
              className="contact-form card-surface rounded-3xl p-6 md:p-8 space-y-5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Send Message
                </span>
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              </div>

              <div className="form-field">
                <label className="block text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="entry.739597866"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-lime/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div className="form-field">
                <label className="block text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="entry.1182683942"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-lime/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div className="form-field">
                <label className="block text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
                  Message
                </label>
                <textarea
                  name="entry.707218801"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-lime/50 focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>

              <div className="form-field pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-lime text-[#0a0a0a] font-semibold text-sm tracking-wide uppercase hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  <span>
                    {submitting
                      ? 'Sending...'
                      : sent
                      ? 'Message Sent Successfully!'
                      : 'Send Message'}
                  </span>
                  <span className="inline-block transition-transform group-hover:translate-x-1.5">
                    {sent ? '✓' : '→'}
                  </span>
                </button>
              </div>

              <p className="text-[10px] text-white/30 text-center pt-1">
                Average response time · 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
