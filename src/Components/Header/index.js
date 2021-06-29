import './style.css'
import {BiMenuAltRight, BiCart} from 'react-icons/bi'
import NavBar from '../NavBar'

export default function Header() {
    return (
        <header className="screen-1040 home-header">
            <div className="logo">
                <h2>Hive</h2>
            </div>
            <div className="header-icon">
                <div className="cart-badge">
                    <BiCart size={30} />
                    <p className="badge">5</p>
                </div>
                <div 
                    onClick={
                        () => document.querySelector(".navbar-container").style.display = "flex"
                    }>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
            <NavBar />
        </header>
    )
}
