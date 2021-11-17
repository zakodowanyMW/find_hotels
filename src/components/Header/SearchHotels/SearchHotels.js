import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchHotels() {
    return (
        <section className="searchHotels">
            <input type="text" name="" id="" placeholder="Destination"/>
            <input type="text" name="" id="" placeholder="No of people"/>
            <input type="date" name="" id="" placeholder="Checkin date"/>
            <input type="date" name="" id="" placeholder="Checkout date"/>
            <div className="searchIcon"><FaSearch /></div>
        </section>
    )
}
