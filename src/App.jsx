
import './App.css'
import Hero from './components/Hero';
import HeroBackground from './components/ui/HeroBackground';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText,TextPlugin);

function App() {
 

  return (
    <>
      <Hero />
    </>
        
  )
}

export default App
