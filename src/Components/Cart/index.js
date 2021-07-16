import './style.css'
import CartItem from '../CartItem'
import {FiShoppingBag} from 'react-icons/fi'

export default function Cart() {
    const state = 6
    return (
        <>
        {
            state === 1 ?
            <div className="empty">
                <FiShoppingBag size={50} />
                <p>Your shopping bag is empty, try adding items</p>
            </div>  
            :
            <div className="cart">
                <div className="cart__header">
                    <h2>Summary</h2>
                    <p>3</p>
                </div>
                
                <div className="cart__body">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

                <div className="cart__footer">
                    <div className="cart__footer-checkout">
                        <div className="cart__footer-item">
                            <p>Subtotal</p>
                            <p>$230.00</p>
                        </div>

                        <div className="cart__footer-item">
                            <p>Shipping:</p>
                            <p>$230.00</p>
                        </div>

                        <div className="cart__footer-item">
                            <p>Tax:</p>
                            <p>$230.00</p>
                        </div>
                    </div>

                    <div className="cart__footer-item">
                        <p>Total:</p>
                        <h4>$230.00</h4>
                    </div>

                    <div className="cart__footer-btn">
                        <p>Checkout</p>
                        <FiShoppingBag size={20} />
                    </div>
                </div>
            </div>
        }
        </>
    )
}
