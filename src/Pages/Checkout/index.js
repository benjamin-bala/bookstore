import './style.css'
import Header from '../../Components/Header'
import Cart from '../../Components/Cart'
import CheckoutForm from '../../Components/CheckoutForm'
import { useSelector } from 'react-redux'

export default function Checkout() {

    const cart = useSelector((state) => state.addToCart)
     let subTotal = 0

    const itemPrice = cart.length > 0 ?
    cart.map((item,index) => {
        return  subTotal += Number(cart[index].price)
    }) : 0

    const tax = subTotal.toFixed(2) * 0.03
    const total = subTotal + tax

    return (
        <div className="checkout">
            <Header />
             <section className="checkout-main screen-1040">
                <div>
                    <CheckoutForm total={total}/>
                </div>
                <div className="cart-container">
                    <Cart total={total} subTotal={subTotal} tax={tax} cart={cart}/>
                </div>
            </section>
        </div>
    )
}
