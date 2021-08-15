import './style.css'
import { BiCart,IoBagCheckOutline,IoChevronBack} from 'react-icons/all'
import NavBar from '../NavBar'
import { useSelector } from 'react-redux'
import { Link, useRouteMatch,useHistory } from 'react-router-dom'

export default function Header() {
    const cart = useSelector((state) => state.addToCart)


    let history = useHistory()

    let detailsRoute = useRouteMatch("/details/:id")
    let checkoutRoute = useRouteMatch("/checkout")
    let cartRoute = useRouteMatch("/cart")

    

    return (
        <header className="screen-1040 home-header">
            <div className="header-cont">
                <div className="header-main">
                    <div className="logo">
                        <Link to='/'>
                            <h2>Hive</h2>
                        </Link>
                    </div>
                    <div className="header-link">
                        <Link to='/explore'>Explore</Link>
                        <p onClick={
                            () => document.querySelector(".navbar-container").style.display = "flex"
                        }>Categories</p>
                    </div>
                </div>
                <div className="header-icon">
                    <Link to='/cart' className="cart-badge">
                        <BiCart size={30} />
                        <p className="badge">{cart.length}</p>
                    </Link>

                    <div className="cart-bag">
                        <div className="cart-bag-modal">
                            <div className="cart-bag-header">
                                <h2>Cart</h2>
                                <span>X</span>
                            </div>
                                <div className="cart-bag-content">
                                {/*
                                   cart.map(book => {
                                        return(
                                            <div className="cart-bag-item" key={book._id}>
                                    
                                                <div className="cart-bag-item-image">
                                                    <img src={book.image} alt="" />
                                                </div>
                                                <div className="cart-bag-item-writeup">
                                                    <p className="cart-bag-item-title">{book.title}</p>
                                                    <p className="cart-bag-item-price">&#8358;{book.price} <span className="cart-bag-item-amount">x3</span></p>
                                                </div>
                                            
                                            </div>
                                        )
                                    })*/
                                }
                                <div className="cart-checkout-btn" onClick={()=>{
                                     history.push('/checkout')
                                     document.querySelector(".cart-bag").style.display = "none"
                                }}>
                                    <IoBagCheckOutline size={20} />
                                    <p>Checkout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavBar />
            {
                detailsRoute !== null || checkoutRoute !== null || cartRoute !== null ? 
                <div className="back-btn" onClick={()=> history.goBack()}>
                    <IoChevronBack size={30} />
                    <span>Back</span>
                </div>
                :
                null
            }
        </header>
    )
}

