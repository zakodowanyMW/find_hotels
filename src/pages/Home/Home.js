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
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti eveniet neque. "
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

    // POST DATA TO DATABASE
    // const sendData = async () => {
    //     const res = await fetch('https://hotels-d1069-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({email: "test@email.pl", pass: 'admin123456'})
    //     })

    //     const content = await res.json();
    //     console.log( content);
    // }

    //GET DATA
    const sendData = async () => {
        const res = await fetch('https://hotels-d1069-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        const content = await res.json();
        console.log( content);
    }
    
    
    return (
        <main className="home">
            <h1> -------  BEST HOTELS FOR YOU NOW  -------</h1>
            <section className="home__promo">  
                <Hotel hotels={data}/>
            </section>
            <section className="best-trip">
                <div className="best-trip__image">
                    <img src="/images/home-image-frame-01.png" alt="" />
                </div>
                <div className="best-trip__description">
                    <h1>BEST PLACES & AMAZING VIEWS, BEFORE HOT PARTY NIGHT</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti eveniet neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti eveniet neque.</p>
                    <button className="btn-primary" onClick={sendData}>
                        MORE INFO
                    </button>
                </div>
            </section>
        </main>
    )
}
