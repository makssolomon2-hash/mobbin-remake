
import { useRef } from 'react';
import './App.css'
import Hero from './components/Hero';
import HeroBackground from './components/ui/HeroBackground';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import JoinVideo from './components/JoinVideo';
import NavBar from './components/ui/NavBar';
import FloatingIcons from "./components/FloatingIcons.jsx";
import InfiniteScroll from "./components/InfiniteScroll.jsx";
import Footer from './components/Footer.jsx';
import MCPInfo from './components/MCPInfo.jsx';

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText,TextPlugin);

function App() {
  const footerRevealRef = useRef(null);

  return (
    <>
      <main className="relative isolate z-10 bg-white">
        <HeroBackground/>
        <NavBar footerRevealRef={footerRevealRef}/>
        <Hero />
        <JoinVideo/>
        <FloatingIcons/>
        <InfiniteScroll/>
        <MCPInfo/>
      </main>
      <div ref={footerRevealRef} id="footer-reveal-spacer" className="h-screen" aria-hidden="true" />
      <Footer revealTriggerRef={footerRevealRef} />
    </>
        
  )
}

export default App
