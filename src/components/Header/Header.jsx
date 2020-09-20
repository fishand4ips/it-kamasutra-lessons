import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://www.flaticon.com/svg/static/icons/svg/889/889097.svg' alt='logo'/>
        </header>
    );
};

export default Header;