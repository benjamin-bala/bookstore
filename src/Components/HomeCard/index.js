import './style.css'
import {BsStarFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function HomeCard({book}) {
    return (
        <Link to={`/details/${book._id}`} className="home-card">
            <div className="home-card__thumbnail"> 
                <img 
                    src={book.image}
                    alt={book.title}
                />
            </div>
            <div className="home-card__writeup">
                <div className="writeup__header">
                    <h2>{book.title}</h2>
                    
                </div>
                 <div className="writeup__summary">
                    <p>{book.description}</p>
                </div>
                <div className="writeup__price">
                    <p className="new-cost">&#8358;{book.price.toFixed(2)}</p>
                </div>
            </div>
        </Link>
    )
}
