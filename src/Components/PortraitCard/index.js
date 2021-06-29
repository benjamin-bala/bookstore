import React from 'react'
import {BiCart} from 'react-icons/bi'
import './style.css'

export default function PortraitCard() {
    return (
        <div className="portrait-card">
            <div className="portrait-card__thumbnail"
            style={{
                background: `url('https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-rpeat'
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
                <h2>City of Ashes</h2>
                <p>by: Samuel James</p>
                <p className="cost">$40.00</p>
            </div>
        </div>
    )
}
