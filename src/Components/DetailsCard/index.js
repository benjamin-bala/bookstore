import './style.css'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../../state/index'
import { useState } from 'react'
import AddToBag from '../Alert/AddToBag'
import { useHistory } from 'react-router-dom'

export default function DetailsCard({book}) {
    const dispatch = useDispatch()
    const { addCartItem } = bindActionCreators(actionCreators, dispatch)
    const [count, setCount] = useState(1)

    const increment = () => count >= 0 ? setCount(count + 1) : null
    const decrement = () => count > 1 ? setCount(count - 1) : null
    let history = useHistory()

    const addItem = () => {
        let msg = document.querySelector(".add-to-bag");

        msg.style.display = 'flex'
        setTimeout(() => {
            msg.style.display = "none"
        }, 1000);

        addCartItem({...book, quantity: 1})
    }

    return (
        <div className="details-card">
            <div className="details-card__thumbnail">
                <img 
                    src={book.image}
                    alt={book.title}
                />
            </div>
            <div className="details-card__summary">
                <div className="details-card__header">
                    <h2>{book.title} ~ {book.type}</h2>
                    <p>{book.description}</p>
                    <div className="details-card__price">
                        <h4>&#8358;{book.price}</h4>
                    </div>
                    {
                        book.type !== "pdf" ?
                        <div className="add-order">
                            <span className="decrement" onClick={decrement}>-</span>
                            <span className="order-display">{count}</span>
                            <span className="increment" onClick={increment}>+</span>
                        </div>
                        :
                        null

                    }
                </div>

                <div className="details-card__footer">
                    <div className="add-btn btn" onClick={addItem}>Add to Bag</div>
                    <div className="buy-btn btn" onClick={()=>history.push('/checkout') }>Buy now</div>
                </div>

                <AddToBag />
            </div>
        </div>
    )
}


