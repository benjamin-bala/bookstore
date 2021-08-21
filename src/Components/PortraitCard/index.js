import React from 'react'
import {BiCart} from 'react-icons/bi'
import './style.css'

export default function PortraitCard({ item }) {
    return (
        <div className="portrait-card">
            <div className="portrait-card__thumbnail"
            style={{
                background: `url(${item.image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-rpeat',
                borderRadius: '0.7rem'
            }}
            >
                <div className="portrait-card__backdrop">
                    <span>
                        <BiCart size={20} />
                        Add to cart
                    </span>
                </div>
            </div>

            <div className="portrait-card__details">
                <h2>{item.title.length > 25 ? item.title.substring(0,25)+'...' : item.title}</h2>
                <p className="cost">&#8358;{item.price.toFixed(2)}</p>
            </div>
        </div>
    )
}
