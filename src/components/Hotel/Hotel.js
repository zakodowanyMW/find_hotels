import React from 'react'

export default function Hotel(props) {
    return (
        <>
            { 
                props.hotels.map(item => {
                    return (
                        <div className="home__promo_item">
                            <div className="image">
                                <img src={item.imageUrl} alt="" />
                                <h3 className="hotel-title">{item.name}</h3>
                            </div>
                            <div className="details">
                                <p>{item.location}</p>
                                <p>299zł /os</p>
                            </div>
                            <p className="description">{item.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
