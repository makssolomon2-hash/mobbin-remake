import { floatingImages, imgPositions } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

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
        <section className="w-full px-[10%] py-24">
            <div ref={orbitRef} className="relative mx-auto h-[600px] max-w-[1100px]">
                <h2 className="content-h absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-semibold text-black md:text-4xl">
                    A growing library of
                </h2>

                {floatingImages.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        className={`${image.id} absolute top-1/2 left-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-2xl object-cover shadow-sm md:h-20 md:w-20`}
                    />
                ))}
            </div>
        </section>
    );
};

export default FloatingIcons;