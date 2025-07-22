import React from 'react';
import Slider from "../Slider/Slider.jsx";

import './MainContent.scss';

const MainContent = () => {
    return (
        <main className="main-content">
            <section className="home-section">
                {/*<div className="container">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col">*/}
                            <h1 className="home-section__headline">Portfolio</h1>
                            <Slider/>
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </main>
    );
};

export default MainContent;