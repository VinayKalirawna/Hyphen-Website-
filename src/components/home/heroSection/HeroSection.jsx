import React, { useState, useEffect } from "react";
import VideoBackground from "../videoBackground/VideoBackground";
import CurtainAnimation from "../curtainAnimation/CurtainAnimation";
import TextReveal from "../textReveal/TextReveal";
import Navbar from "../../common/navbar/Navbar";
import "./HeroSection.css";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isAnimationDone, setIsAnimationDone] = useState(false);

    useEffect(() => {
        console.log("Animation done:", isAnimationDone);
        if (!isAnimationDone) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isAnimationDone]);

    const revealTexts = [
        "Experience Innovation",
        "Shop the Future",
        "Only at Hyphen",
    ];

    return (
        <section className="hero-container">
            <VideoBackground onVideoLoad={() => setIsVideoLoaded(true)} />

            {!isAnimationDone && (
                <CurtainAnimation
                    isVideoLoaded={isVideoLoaded}
                    onAnimationComplete={() => setIsAnimationDone(true)}
                />
            )}

            {isAnimationDone && (
                <TextReveal texts={revealTexts} isActive={isAnimationDone} />
            )}
            <div className="explore-all-product">
                <NavLink>
                    EXPLORE All PRODUCT
                    <span className="arrow">
                        <img
                            className="arrow-first"
                            src="https://ik.imagekit.io/vinaykalirawna/icons8-right-arrow-60.png?updatedAt=1752908003140"
                            alt=""
                        />
                        <img
                            className="arrow-second"
                            src="https://ik.imagekit.io/vinaykalirawna/icons8-right-arrow-60.png?updatedAt=1752908003140"
                            alt=""
                        />
                    </span>
                </NavLink>
            </div>
        </section>
    );
};

export default HeroSection;
