import React from 'react';
import Nav from '../Menu/Nav.js';
import IconsMenu from '../Menu/IconsMenu.js';

function Header() {

    const slides = {
        slide1: {
            heading: ""
        }
    }
    return (
        <header className="header">
            <div className="header__wrapper">
                <IconsMenu />
                <Nav />  
                <div className="header__slider">
                    <div className="header__content">
                        <h1 className="header__heading">EXPERIENCE THE NATURES'S BEAUTY</h1>
                        <p className="header__subtile">Opis co będzie sie tutaj działo, jakiś podtytuł dla tego sloganu</p>
                        <button className="header__btn btn-main">Continue Reading</button>
                    </div>
                    <div className="header__arrows">
                        <div className="header__arrows--next">
                            next
                        </div>
                        <div className="header__arrows--prev">
                            prev
                        </div>
                    </div>
                </div>
            </div>    
        </header>
        )
}

export default Header;