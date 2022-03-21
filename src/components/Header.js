import React from 'react';
import logo from '../images/logo.svg';
// import './Header.css'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип"/>
        </header>
    );
}

export default Header;