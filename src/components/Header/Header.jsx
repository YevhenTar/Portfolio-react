import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="main-header">
            <div className="main-header__logo-wrap">
                <div className="logo-block">TY</div>
                <p className="owner-name">Tarasov Yevheniy</p>
            </div>
        </header>
    );
};

export default Header;