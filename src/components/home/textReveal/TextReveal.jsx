import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TextReveal = ({ texts, isActive }) => {
    const textRefs = useRef([]);

    useEffect(() => {
        if (isActive) {
            const tl = gsap.timeline();

            texts.forEach((text, index) => {
                tl.fromTo(
                    textRefs.current[index],
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.8,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power2.out",
                        delay: index * 0.3,
                    }
                );
            });
        }
    }, [isActive, texts]);

    return (
        <div className="text-reveal-container">
            {texts.map((text, index) => (
                <h1
                    key={index}
                    ref={(el) => (textRefs.current[index] = el)}
                    className="reveal-text"
                >
                    {text}
                </h1>
            ))}
        </div>
    );
};

export default TextReveal;
