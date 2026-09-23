'use client';

import { useEffect, useState } from 'react';
import Preloader from '@/components/portfolio/preloader';
import Navigation from '@/components/portfolio/navigation';
import Hero from '@/components/portfolio/hero';
import About from '@/components/portfolio/about';
import Expertise from '@/components/portfolio/expertise';
import Work from '@/components/portfolio/work';
import Contact from '@/components/portfolio/contact';
import Footer from '@/components/portfolio/footer';
import { useSmoothScroll } from '@/components/portfolio/use-smooth-scroll';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useSmoothScroll();

  // Lock scroll while preloader is active
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loaded]);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      <Navigation />

      <main className="relative w-full overflow-x-hidden">
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
