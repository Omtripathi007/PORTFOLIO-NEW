---
Task ID: 1
Agent: main (Super Z)
Task: Build a complete, responsive, dark-themed, motion-heavy Awwwards-style portfolio website "Waqas Bhatti" using Next.js 16, Tailwind CSS 4, GSAP/ScrollTrigger, Framer Motion, and Lenis smooth scroll. Includes preloader, fixed glass nav, hero with distortion, about, expertise, work, contact sections.

Work Log:
- Initialized fullstack-dev environment (Next.js 16 + TS + Tailwind 4 + shadcn/ui already present)
- Installed gsap@3.15.0 and lenis@1.3.26
- Configured Google Fonts (Anton, Inter, Syne, Caveat) in src/app/layout.tsx with proper CSS variables
- Reworked src/app/globals.css with dark palette tokens (#0a0a0a bg, #d4ff00 lime accent, #f5f5f5 text, #888 mute), custom utilities (glass, card-surface, hover-lift, nav-link underline, marquee, hello-path stroke animation, status-dot pulse, scroll-bounce, grid-bg), and Lenis base styles
- Built components under src/components/portfolio/:
  - use-smooth-scroll.ts (Lenis + GSAP ticker integration, ScrollTrigger refresh)
  - preloader.tsx (0-100% counter + SVG arc progress + cursive "hello" stroke animation + clip-path wipe exit)
  - navigation.tsx (fixed glass header, brand, nav links with underline animation, BASED IN PAKISTAN badge with pulsing green dot, mobile hamburger + slide-down menu)
  - hero.tsx (massive CREATIVE DEVELOPER headline with per-letter 3D distortion on mousemove via GSAP, sub-labels VISUALS/CODE/EXPERIENCE, scroll-to-explore cue, floating tech marquee, parallax bg gradients)
  - about.tsx ([ ABOUT ME ] pill, big headline with lime accents, two-column layout with stylized SVG portrait + 4 stat cards: LOCATION/AVAILABILITY/EXPERTISE/EXPERIENCE, GSAP scroll-triggered entrances)
  - expertise.tsx (4 stacked cards with hover-triggered floating tech badges via Framer Motion AnimatePresence, progress bar fills on hover, [ MY EXPERTISE ] tag, intro + sub-text)
  - work.tsx (giant WORK backdrop title with overlay marquee of skill tags HTML/CSS/JAVASCRIPT/REACT.JS/INTERACTIVE WEB/CREATIVE DEVELOPMENT/MOTION DESIGN, 6 project cards with custom SVG mockups for portfolio/gazu/time/watches/headphones/library, 3D tilt-on-hover, dark overlay lift, tech stack tags)
  - contact.tsx (huge CONTACT backdrop, Let's create something meaningful heading, 3 contact info links with hover lift, form with Name/Email/Message fields and pill Send Message button that transitions to "Message Sent! ✓" on submit)
  - footer.tsx (brand, copyright, back-to-top)
- Wired everything in src/app/page.tsx with body scroll lock during preloader
- Ran ESLint — clean, no errors
- Verified with Agent Browser: preloader renders, hero renders with massive headline, About section with portrait + 4 stat cards confirmed via VLM, Expertise section with all 4 cards confirmed, Work section with backdrop + marquee + project cards confirmed, Contact section with form rendered and verified, form submission shows "Message Sent! ✓", mobile responsive at 390px with hamburger menu working

Stage Summary:
- Portfolio fully built with all 6 sections, exact copy, dark theme (#0a0a0a), neon lime accent (#d4ff00), Anton+Inter typography
- All motion requirements implemented: Lenis smooth scroll, GSAP ScrollTrigger entrances, hero distortion, floating tech badges on hover, project card 3D tilt + dark overlay lift, preloader counter + hello stroke + clip-path wipe
- Fully responsive (mobile hamburger menu, properly scaled typography, no overflow)
- Lint clean, dev server healthy, all interactions verified in-browser
- Deliverable: live Next.js app on port 3000, source under /home/z/my-project/src/components/portfolio/
