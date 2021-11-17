import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="header__navigation">
            <div className="header__navigation__logo">
                    Logo
            </div>
            <nav className="header__navigation__nav">
                <ul className="menu">
                    <li className="item active"><NavLink to="/">HOME</NavLink></li>
                    <li className="item"><NavLink to="/about">ABOUT</NavLink></li>
                    <li className="item"><NavLink to="/hotels">HOTELS</NavLink></li>
                    <li className="item"><NavLink to="/tours">TOURS</NavLink></li>
                    <li className="item"><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

