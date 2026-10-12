import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Pricing', href: '#mcp-info' },
      { label: 'Finance+', href: '#mcp-info', badge: 'New' },
      { label: 'MCP', href: '#mcp-info', badge: 'New' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#top' },
      { label: 'Changelog', href: '#top' },
      { label: 'Explore', href: '#floating-section' },
      { label: 'Colors', href: '#floating-section' },
      { label: 'Glossary', href: '#floating-section' },
      { label: 'Merch', href: '#top' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact us', href: 'mailto:hello@mobbin.com' },
      { label: 'Careers', href: '#top' },
      { label: 'Help center', href: '#mcp-info' },
    ],
  },
];

const Footer = ({ revealTriggerRef }) => {
  const footerRef = useRef(null);
  const footerContentRef = useRef(null);
  const footerMetaRef = useRef(null);
  const lettersRef = useRef([]);

  useGSAP(() => {
    const entrance = gsap.timeline({ paused: true });

    entrance
      .fromTo(
        [footerContentRef.current, footerMetaRef.current],
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' },
      )
      .fromTo(
        lettersRef.current,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out' },
        0.15,
      );

    ScrollTrigger.create({
      trigger: revealTriggerRef.current,
      start: 'top 85%',
      onEnter: () => entrance.play(),
      onLeaveBack: () => entrance.reverse(),
      invalidateOnRefresh: true,
    });
  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="fixed bottom-0  z-0 h-screen w-full overflow-hidden bg-[#141414] text-white"
    >
      <div ref={footerContentRef} className="footer-content relative z-10 mx-auto grid w-[68%] max-w-[70rem] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0">
        <a href="#top" className="w-fit text-[clamp(14px,2.4vh,20px)] font-semibold tracking-tight">
          Mobbin
        </a>

        <nav aria-label="Footer links" className="grid grid-cols-3 gap-x-3 sm:gap-x-5">
          {footerLinks.map((group) => (
            <div key={group.title} className="min-w-0">
              <h2 className="mb-[3vh] text-[clamp(8px,1.3vh,11px)] font-normal text-white/45">{group.title}</h2>
              <ul className="flex flex-col gap-[1.2vh] text-[clamp(10px,1.7vh,14px)] leading-[1.25] text-white/90">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                      {link.label}
                      {link.badge && (
                        <span className="rounded-full bg-[#303030] px-1.5 py-0.5 text-[9px] leading-none text-white/75">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div ref={footerMetaRef} className="footer-meta relative z-10 mx-auto flex w-[68%] max-w-[70rem] flex-col gap-6 text-[clamp(9px,1.5vh,12px)] text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© Mobbin 2018–{new Date().getFullYear()}.</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <a href="#mcp-info" className="transition-colors hover:text-white">Privacy</a>
          <a href="#mcp-info" className="transition-colors hover:text-white">Terms</a>
          <a href="#mcp-info" className="transition-colors hover:text-white">Copyright</a>
          <span aria-hidden="true" className="hidden h-4 border-l border-white/15 sm:block" />
          <div className="flex items-center gap-4">
            <a href="#top" aria-label="YouTube" className="transition-colors hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
              </svg>
            </a>
            <a href="#top" aria-label="X" className="transition-colors hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-7.1L5.9 22H2.7l7.3-8.3L2.4 2h6.4l4.4 6.6L18.9 2Zm-1.1 18h1.7L7.9 3.9H6.1L17.8 20Z" />
              </svg>
            </a>
            <a href="#top" aria-label="LinkedIn" className="text-sm font-semibold leading-none transition-colors hover:text-white">
              in
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-0 h-[0.4em] w-full select-none overflow-hidden whitespace-nowrap text-[clamp(7rem,35vw,90rem)] font-bold leading-[0.72] tracking-[-0.09em] text-[#222222]">
        {'Mobbin'.split('').map((letter, index) => (
          <span key={`${letter}-${index}`} className="inline-block overflow-hidden align-bottom">
            <span ref={(element) => { lettersRef.current[index] = element; }} className="inline-block">
              {letter}
            </span>
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
