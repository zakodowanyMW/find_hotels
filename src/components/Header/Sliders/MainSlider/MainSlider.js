import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function MainSlider() {
    return (
        <>
        <div className="header__content">
            <h1 className="header__heading">EXPERIENCE THE NATURES'S BEAUTY</h1>
            <p className="header__subtitle">ZŁAP WIATR W ŻAGLE I ZAREZERWUJ HOTEL DLA SIEBIE!</p>
            <button className="header__btn btn-primary">Continue Reading</button>
        </div>
        <div className="header__arrows">
            {/* <div className="header__arrows--next">
                -
            </div>
            <div className="header__arrows--prev">
                 -
            </div> */}
            <div className="header__arrows--down">
                <IoIosArrowDown />
            </div>
        </div>
        </>
    )
}
