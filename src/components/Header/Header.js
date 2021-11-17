import React from 'react';
import Nav from './Menu/Nav.js';
import IconsMenu from './Menu/IconsMenu.js';
import MainSlider from './Sliders/MainSlider/MainSlider.js';
import StaticSlider from './Sliders/StaticSlider/StaticSlider.js';
import SearchHotels from './SearchHotels/SearchHotels';
import { Route, Routes} from 'react-router-dom';

function Header() {

    return (
        <header className="header">
            <div className="header__wrapper">
                <IconsMenu />
                <Nav />  
                <div className="header__slider">
                    <Routes>
                        <Route path="/" exact element={<MainSlider />} />
                        <Route path="*" element={<StaticSlider />} />
                    </Routes>
                </div>
                <SearchHotels />
            </div>    
        </header>
        )
}

export default Header;