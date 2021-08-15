import {BsTrash} from 'react-icons/bs'
import './style.css'

export default function CartItem({item}) {
    return (
        <div className="cart-item">
            <div className="cart-item__thumbnail">
                <img 
                    src={item.image}
                    alt=""
                />
            </div>
            <div className="cart-item__summary">
                <div className="cart-item__summary-header">
                    <p>{item.title}</p>
                    <span>
                        <BsTrash size={20} />
                    </span>
                </div>

                <div className="'cart-item__summary-footer">
                    <div>
                        <h5>&#8358;{item.price}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
