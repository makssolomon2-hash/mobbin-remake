
import { useRef } from 'react';
import './App.css'
import Hero from './components/Hero';
import HeroBackground from './components/ui/HeroBackground';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import JoinVideo from './components/JoinVideo';
import NavBar from './components/ui/NavBar';
import FloatingIcons from "./components/FloatingIcons.jsx";
import InfiniteScroll from "./components/InfiniteScroll.jsx";
import Footer from './components/Footer.jsx';
import MCPInfo from './components/MCPInfo.jsx';
import Library from './components/Library.jsx';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const footerRevealRef = useRef(null);
  const mainRef = useRef(null);

  useGSAP(() => {
    const revealElements = gsap.utils.toArray('[data-reveal]', mainRef.current);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(revealElements, { clearProps: 'all' });
      return;
    }

    revealElements.forEach((element) => {
      const isScaleReveal = element.dataset.reveal === 'scale';

      gsap.fromTo(
        element,
        {
          y: isScaleReveal ? 14 : 32,
          scale: isScaleReveal ? 0.96 : 1,
          autoAlpha: 0,
        },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
            toggleActions: 'play none none none',
          },
        },
      );
    });
  }, { scope: mainRef });

  return (
    <>
      <main ref={mainRef} className="relative isolate z-10 bg-white">
        <HeroBackground/>
        <NavBar />
        <Hero />
        <JoinVideo/>
        <FloatingIcons/>
        <InfiniteScroll/>
        <Library/>
        <MCPInfo/>
      </main>
      <div ref={footerRevealRef} id="footer-reveal-spacer" className="h-[70vh]" aria-hidden="true" />
      <Footer revealTriggerRef={footerRevealRef} />
    </>
        
  )
}

export default App
