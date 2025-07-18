import HeroSection from "../components/home/heroSection/HeroSection";
import Banner from "../components/home/banner/Banner";

import React from "react";

export const Home = () => {
    return (
        <main>
            <div>
                <HeroSection />
            </div>
            <Banner />
        </main>
    );
};

export default Home;
