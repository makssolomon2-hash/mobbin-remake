import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  const joinBtnRef = useRef(null);
  const joinLiRef = useRef(null);

  useGSAP(() => {
    // measure before hiding so we can animate back to exact natural width
    const btnNaturalWidth = joinLiRef.current.offsetWidth;
    const gap = 32; // gap-8 = 2rem at 16px base

    gsap.set(navRef.current, { width: 630 });
    gsap.set(joinLiRef.current, { width: 0,  scale: 0,});
    gsap.set(joinBtnRef.current, { scale: 0, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#floating-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        markers: true,
      },
    });

    tl.to(navRef.current, {
      width: 630,
      duration: 0.5,
      ease: 'power2.inOut',
    })
    .to(joinLiRef.current, {
      width: btnNaturalWidth,
      scale:1,
      marginLeft: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    }, 0)
    .to(joinBtnRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.35,
      ease: 'back.out(1.7)',
    }, '-=0.2');
  }, { dependencies: [] });

  return (
    <div ref={navRef} className="fixed top-0 left-1/2 -translate-x-1/2 2k:w-170 w-[680px] font-sans  h-150px bg-gray-200/50 backdrop-blur-xl border-gray-200/60 rounded-full p-10px mt-7 font-semibold z-999">
      <nav className=" z-2 flex items-center justify-between px-2 py-5">
        <span className="text-xl  font-semibold text-black cursor-pointer px-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="none" overflow="visible">
            <path 
              d="M 12.309 16.843 L 21.554 16.843 L 25.327 12.737 L 25.327 16.843 L 35.518 16.843 L 35.518 7.01 L 29.793 7.01 L 29.793 0.201 L 21.129 0.201 L 17.234 4.341 L 17.234 0.201 L 7.234 0.201 L 0 7.989 L 0 16.839 L 8.322 16.843 L 12.309 12.504 Z"
              fill="rgb(20,20,20)"
            />
          </svg>
        </span>
        <ul className="flex   gap-8 text-base text-black px-1 ">
          <li><a href="#" >Pricing</a></li>
          <li><a href="#" >Awards</a></li>
          <li><a href="#" >Log in</a></li>
          <li ref={joinLiRef}><a href="#" ref={joinBtnRef} className="bg-black text-white py-3 px-4 rounded-full whitespace-nowrap" >Join for free</a></li>
        </ul>
      </nav>
    </div>
    
  )
}

export default NavBar
