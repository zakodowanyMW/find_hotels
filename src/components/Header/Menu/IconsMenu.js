import React from 'react';
import { BsTelephonePlusFill } from 'react-icons/bs';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebookSquare, FaYoutube, FaTwitterSquare, FaInstagramSquare, FaSearch } from 'react-icons/fa';

export default function IconsMenu() {
    return (
        <div className="header__icons">
            <div className="header__contact-informations">
                <a href="tel:+48 586 856 212"> <span><BsTelephonePlusFill /></span> :+48 586 856 212</a>
                <a href="mailto: mail@mail.com"><span><HiMail /></span> office@hotel.com</a>
                <a href="googlemaps"> <span><HiLocationMarker /></span> Novowiejska 13/4 Katowice</a>
            </div>
            <div className="header__social-media-icons">
            <a href="/"> <span className="nav-icon"><FaFacebookSquare /></span></a>
            <a href="/"> <span className="nav-icon"><FaYoutube /></span></a>
            <a href="/"> <span className="nav-icon"><FaTwitterSquare /></span></a>
            <a href="/"> <span className="nav-icon"><FaInstagramSquare /></span></a>
            <a href="/"> | <span className="nav-icon"><FaSearch /></span></a>
            </div>
        </div>
    )
}

