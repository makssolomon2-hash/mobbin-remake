import { useRef } from 'react';
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
    const navIntroItems = navRef.current.querySelectorAll(
      'nav > span, nav > ul > li:not(:last-child)',
    );

    gsap.set(navRef.current, { width: 620 });
    gsap.set(joinLiRef.current, { width: 0,  scale: 0,});
    gsap.set(joinBtnRef.current, { scale: 0, opacity: 0 });

    gsap.fromTo(
      navRef.current,
      { y: -24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, delay: 0.15, ease: 'power3.out' },
    );

    gsap.fromTo(
      navIntroItems,
      { y: 12, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.55, delay: 0.35, stagger: 0.08, ease: 'power3.out' },
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#video-section',
        start: 'bottom 90%',
        once: true,
        toggleActions: 'play none none none',
        //markers: true,
      },
    });

    tl.to(navRef.current, {
      width: 620,
      duration: 0.1,
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

    /* gsap.to(navRef.current, {
      yPercent: -140,
      autoAlpha: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: footerRevealRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
      },
    }); */
  }, { dependencies: [] });

  return (
    <div ref={navRef} className="navbar-shell fixed left-1/2 top-0 z-[999] mt-5 flex h-[60px] w-[620px] max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center rounded-full border border-gray-200/60 bg-gray-200/50 p-2 font-sans font-semibold backdrop-blur-xl">
      <nav className="z-2 flex h-full w-full items-center justify-between px-3 max-[560px]:px-1">
        <span className="text-xl font-semibold text-black cursor-pointer px-5 transition-transform duration-200 hover:scale-[1.08] max-[560px]:px-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="none" overflow="visible">
            <path 
              d="M 12.309 16.843 L 21.554 16.843 L 25.327 12.737 L 25.327 16.843 L 35.518 16.843 L 35.518 7.01 L 29.793 7.01 L 29.793 0.201 L 21.129 0.201 L 17.234 4.341 L 17.234 0.201 L 7.234 0.201 L 0 7.989 L 0 16.839 L 8.322 16.843 L 12.309 12.504 Z"
              fill="rgb(20,20,20)"
            />
          </svg>
        </span>
        <ul className="flex items-center gap-7 px-0 text-base text-black max-[560px]:gap-1">
          <li className="max-[560px]:hidden"><a href="#" className="inline-block transition-transform duration-200 hover:-translate-y-0.5 hover:text-neutral-500">Pricing</a></li>
          <li className="max-[560px]:hidden"><a href="#" className="inline-block transition-transform duration-200 hover:-translate-y-0.5 hover:text-neutral-500">Awards</a></li>
          <li><a href="#" className="inline-block transition-transform duration-200 hover:-translate-y-0.5 hover:text-neutral-500">Log in</a></li>
          <li ref={joinLiRef}><a href="#" ref={joinBtnRef} className="inline-block whitespace-nowrap rounded-full bg-black px-4 py-2 text-white transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-lg max-[560px]:px-2 max-[560px]:py-1.5">Join for free</a></li>
        </ul>
      </nav>
    </div>
    
  )
}

export default NavBar
