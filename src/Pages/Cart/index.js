import './style.css'
import Header from '../../Components/Header'
import Cart from '../../Components/Cart'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BiShoppingBag } from 'react-icons/bi'

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
        <div className="cart-page">
            <Header />
             <section className="cart-main screen-1040">
                
                    <Cart total={total} subTotal={subTotal} tax={tax} cart={cart}/>
                    <div style={{marginTop: '2rem'}}>
                    
                        {
                            cart.length >= 1 ?
                            <Link to='/checkout' className="btn checkout-btn">
                                <BiShoppingBag size={20} />
                                Checkout
                            </Link>
                            : null
                        }
                    </div>
            </section>
        </div>
    )
}
