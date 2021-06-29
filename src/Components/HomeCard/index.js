import './style.css'
import {BsStarFill} from 'react-icons/bs'

export default function HomeCard() {
    return (
        <div className="home-card">
            <div className="home-card__thumbnail"> 
                <img 
                    src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" 
                    alt=""
                />
            </div>
            <div className="home-card__writeup">
                <div className="writeup__header">
                    <h2>The Nani Fashion Issue</h2>
                    <p>by: G space X Evans</p>
                    <div className="rating">
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                    </div>
                </div>
                 <div className="writeup__summary">
                    <p>On the other hand, we denounce with righteous indignation and ...</p>
                </div>
                <div className="writeup__price">
                    <p className="new-cost">$200.20</p>
                    <p className="old-cost">$240.20</p>
                </div>
                <div className="writeup__button">
                    <span>Add to cart</span>
                </div>
            </div>
        </div>
    )
}
