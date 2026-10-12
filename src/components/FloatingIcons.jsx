import { floatingImages, imgPositions } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FloatingIcons = () => {
    const sectionRef = useRef(null);
    const orbitRef = useRef(null);

    useGSAP(
        () => {
            const phrases = gsap.utils.toArray("[data-story-phrase]", orbitRef.current);
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (prefersReducedMotion) {
                gsap.set(phrases, { autoAlpha: 0, y: 0 });
                gsap.set(phrases[0], { autoAlpha: 1 });
            } else {
                gsap.set(phrases, { autoAlpha: 0, y: 36 });

                const story = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.8,
                        invalidateOnRefresh: true,
                    },
                });

                phrases.forEach((phrase) => {
                    story
                        .to(phrase, { autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out" })
                        .to(phrase, { autoAlpha: 1, duration: 0.75, ease: "none" })
                        .to(phrase, { autoAlpha: 0, y: -24, duration: 0.35, ease: "power2.in" });
                });
            }

            const tl = gsap.timeline({
                defaults: { 
                    duration: 2.4,
                     ease: "power2.out",
                      overwrite: "auto",                     
                      //repeat: -1, 
                      // yoyo: true 
                     
                    },
                scrollTrigger: {
                    trigger: ".content-h",
                    start: "top 80%",
                    once: true,
                    toggleActions: "play none none none",
                    invalidateOnRefresh: true,
                },
            });

            gsap.set(orbitRef.current.querySelectorAll('img'), { opacity: 0,  });

            imgPositions.forEach((item, index) => {
                const selector = `.${item.id}`;
                const vars = {
                    left: `${item.left}%`,
                    top: `${item.top}%`,
                    opacity: 1,
                    duration:1.4,
                    ease: "power3.out",
                };

                if (typeof item.rotate === "number") vars.rotate = item.rotate;
                tl.to(selector, vars, index * 0.05);
            });

            // after scatter completes, start independent infinite float per image
            tl.eventCallback("onComplete", () => {
                imgPositions.forEach((item, index) => {
                    gsap.to(`.${item.id}`, {
                        x: `random(-44, 54)`,
                        y: `random(-38, 48)`,
                        duration: gsap.utils.random(2.5, 4.5),
                        ease: "sine.inOut",
                        repeat: -1,
                        yoyo: true,
                        delay: index * 0.38,
                    });
                });
            });
        },
        { scope: sectionRef, dependencies: [] }
    );

    return (
        <section
            ref={sectionRef}
            id="floating-section"
            className="relative h-[300vh] w-full px-[10%] motion-reduce:h-screen"
        >
            <div ref={orbitRef} className="sticky top-0 mx-auto h-screen max-w-[1100px] motion-reduce:static">
                <h2 data-reveal className="content-h absolute left-1/2 top-[20%] z-10 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-semibold text-black md:text-3xl">
                    A growing library of
                </h2>

                <div className="absolute left-1/2 top-1/2 z-10 w-[min(100%,58rem)] -translate-x-1/2 -translate-y-1/2 px-4 text-center">
                    <h1 data-story-phrase className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-black">
                        Trusted by teams that build world-class apps.
                    </h1>
                    <h2 data-story-phrase className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[#707070]">
                        Find the patterns behind great products.
                    </h2>
                    <h2 data-story-phrase className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#707070]">
                        Turn inspiration into what’s next.
                    </h2>
                </div>

                {floatingImages.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        className={`${image.id} absolute top-110 left-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-2xl object-cover shadow-sm md:h-20 md:w-20`}
                    />
                ))}
            </div>
        </section>
    );
};

export default FloatingIcons;