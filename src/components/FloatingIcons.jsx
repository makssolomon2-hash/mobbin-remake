import { floatingImages, imgPositions } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FloatingIcons = () => {
    const orbitRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: { duration: 2.4, ease: "power2.out", overwrite: "auto" },
                scrollTrigger: {
                    trigger: ".content-h",
                    start: "top 80%",
                    end: "center center",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            imgPositions.forEach((item) => {
                const selector = `.${item.id}`;
                const vars = {
                    left: `${item.left}%`,
                    top: `${item.top}%`,
                };

                if (typeof item.rotate === "number") vars.rotate = item.rotate;
                tl.to(selector, vars, 0);
            });
        },
        { scope: orbitRef, dependencies: [] }
    );

    return (
        <section id="floating-section" className=" w-full px-[10%] py-24">
            <div ref={orbitRef} className="relative 2k:-top-110 mx-auto  h-screen max-w-[1100px]">
                <h2 className="content-h absolute top-110 2k:top-110 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-md font-semibold text-black md:text-3xl">
                    A growing library of
                </h2>

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