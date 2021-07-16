import {BsTrash} from 'react-icons/bs'
import './style.css'

export default function CartItem() {
    return (
        <div className="cart-item">
            <div className="cart-item__thumbnail">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg" 
                    alt=""
                />
            </div>
            <div className="cart-item__summary">
                <div className="cart-item__summary-header">
                    <p>Some name</p>
                    <span>
                        <BsTrash size={20} />
                    </span>
                </div>

                <div className="'cart-item__summary-footer">
                    <div>
                        <p >x2</p>
                    </div>
                    <div>
                        <h5>$120.00</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
