import React from 'react';
import Slider from "../Slider/Slider.jsx";

import './MainContent.scss';

const MainContent = () => {
    return (
        <main className="main-content">
            <section className="home-section">
                <h1 className="home-section__headline">Portfolio</h1>
                <Slider/>
            </section>
        </main>
    );
};

export default MainContent;