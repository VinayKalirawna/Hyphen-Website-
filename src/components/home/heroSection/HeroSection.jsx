import React, { useState } from "react";
import VideoBackground from "../videoBackground/VideoBackground";
import CurtainAnimation from "../curtainAnimation/CurtainAnimation";
import TextReveal from "../textReveal/TextReveal";
import "./HeroSection.css";

const HeroSection = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isAnimationDone, setIsAnimationDone] = useState(false);

    const revealTexts = [
        "Experience Innovation",
        "Shop the Future",
        "Only at Hyphen",
    ];

    return (
        <section className="hero-container">
            <VideoBackground onVideoLoad={() => setIsVideoLoaded(true)} />
            <CurtainAnimation
                isVideoLoaded={isVideoLoaded}
                onAnimationComplete={() => setIsAnimationDone(true)}
            />
            {isAnimationDone && (
                <TextReveal texts={revealTexts} isActive={isAnimationDone} />
            )}
        </section>
    );
};

export default HeroSection;
