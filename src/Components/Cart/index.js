import './style.css'
import CartItem from '../CartItem'
import {FiShoppingBag} from 'react-icons/fi'

export default function Cart({tax,total,subTotal,cart}) {
  
    return (
        <>
        {
            cart.length  < 1 ?
            <div className="empty">
                <FiShoppingBag size={50} />
                <p>Your shopping bag is empty, try adding items</p>
            </div>  
            :
            <div className="cart">
                <div className="cart__header">
                    <h2>Summary</h2>
                    <p>{cart.length}</p>
                </div>
                
                <div className="cart__body">
                    {
                        cart.map(item => {
                            return <CartItem key={item._id} item={item} />
                        })
                    }
                </div>

                <div className="cart__footer">
                    <div className="cart__footer-checkout">
                        <div className="cart__footer-item">
                            <p>Subtotal</p>
                            <p>&#8358;{subTotal.toFixed(2)}</p>
                        </div>

                        <div className="cart__footer-item">
                            <p>Shipping:</p>
                            <p>&#8358;0.00</p>
                        </div>

                        <div className="cart__footer-item">
                            <p>Tax:</p>
                            <p>&#8358;{tax.toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="cart__footer-item">
                        <p>Total:</p>
                        <h4>&#8358;{total.toFixed(2)}</h4>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
