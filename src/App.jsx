
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

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText,TextPlugin);

function App() {
 

  return (
    <>
      <HeroBackground/>
      <NavBar/>
      <Hero />
      <JoinVideo/>
      <FloatingIcons/>
    </>
        
  )
}

export default App
