import React from 'react'
import { useHistory } from 'react-router'
import './style.css'


export default function PortraitCard({ item }) {

    const history = useHistory()

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
                <div onClick={() => history.push(`/details/${item._id}`)} className="portrait-card__backdrop">
                    <span>
                       View book
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
