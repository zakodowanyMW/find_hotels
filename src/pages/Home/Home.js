import React from 'react';
import { useState, useEffect } from 'react';

import Hotel from "../../components/Hotel/Hotel";

export default function Home() {

    const hotelList = [
        {
            name: "Maroco Beach Hotel",
            imageUrl: "/images/1.jpg",
            location: "Maroco",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti eveniet neque."
        },
        {
            name: "Ariss Sunrise",
            imageUrl: "/images/5.jpg",
            location: "Gran Canaria",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti eveniet neque."
        },
        {
            name: "Beach Bar Thai",
            imageUrl: "/images/3.jpg",
            location: "Thailand",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti eveniet neque."
        },
        {
            name: "Egge Ferro Sun",
            imageUrl: "/images/4.jpg",
            location: "Egypt",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti eveniet neque."
        }
    ]

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(hotelList)
    }, [])
    
    return (
        <main className="home">
            <h1>Wybrane hotele dla ciebie</h1>
            <section className="home__promo">  
                <Hotel hotels={data}/>
            </section>
        </main>
    )
}
