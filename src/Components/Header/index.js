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
                        <Link to='/categories' style={{marginLeft: '2rem'}}>Categories</Link>
                    </div>
                </div>
                <div className="header-icon">
                    <Link to='/cart' className="cart-badge">
                        <BiCart size={30} />
                        <p className="badge">{cart.length}</p>
                    </Link>
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

