import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="main-header">
            <div className="main-header__logo-wrap">
                <a href="#" className="logo-block">TY</a>
                <p className="owner-name">Tarasov Yevheniy</p>
            </div>
        </header>
    );
};

export default Header;