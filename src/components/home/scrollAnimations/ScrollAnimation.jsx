// src/components/home/scrollAnimations/ScrollAnimations.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text split animation (like TrueKind)
            const splitTexts = gsap.utils.toArray("[data-split]");

            splitTexts.forEach((text) => {
                const words = text.innerText.split(" ");
                text.innerHTML = words
                    .map((word) => `<span class="word">${word}</span>`)
                    .join(" ");

                gsap.from(text.querySelectorAll(".word"), {
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                });
            });

            // Parallax effects
            const parallaxElements = gsap.utils.toArray("[data-parallax]");

            parallaxElements.forEach((element) => {
                const speed = element.dataset.parallax || "-50";

                gsap.to(element, {
                    yPercent: speed,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });

            // Fade in animations
            const fadeElements = gsap.utils.toArray("[data-fade]");

            fadeElements.forEach((element) => {
                gsap.from(element, {
                    opacity: 0,
                    y: 60,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            });

            // Stagger animations
            const staggerContainers = gsap.utils.toArray("[data-stagger]");

            staggerContainers.forEach((container) => {
                const items = container.querySelectorAll(".stagger-item");

                gsap.from(items, {
                    opacity: 0,
                    y: 60,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            });

            // Scale animations
            const scaleElements = gsap.utils.toArray("[data-scale]");

            scaleElements.forEach((element) => {
                gsap.from(element, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="scroll-animations">
            {children}
        </div>
    );
};

export default ScrollAnimations;
