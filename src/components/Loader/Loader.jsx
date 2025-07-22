import React from 'react';
import './Loader.scss';

const Loader = () => {
    return (
        <div className="preloader">
            <div className="preloader__wrap">
                <div className="circle circle2"></div>
            </div>
        </div>
    );
};

export default Loader;