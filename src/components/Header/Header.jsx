import React from 'react';
import './Header.scss';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';

const Header = () => {
    return (
        <header className="main-header">
            <div className="main-header__logo-wrap">
                <a href="#" className="logo-block">TY</a>
                <p className="owner-name">Tarasov Yevheniy</p>
            </div>
            <div className="main-header__button-wrap">
                <a
                    href={`${import.meta.env.BASE_URL}documents/CV_Tarasov-Yevheniy_Front-End-Developer.pdf`}
                    className="main-header__download-btn"
                    download="CV_Tarasov-Yevheniy_Front-End-Developer.pdf"
                >
                    <DownloadIcon className="download-icon" />
                    Download CV
                </a>
            </div>
        </header>
    );
};

export default Header;