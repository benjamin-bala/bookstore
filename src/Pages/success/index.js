import './style.css'
import Header from '../../Components/Header'
import { useSelector } from 'react-redux'

export default function Success() {

    const cart = useSelector((state) => state.addToCart)

    console.log(cart);
    return (
        <div>
            <Header />
             <section className="success">
                
                <h1>Payment successful</h1>
                <p>Thank you for purchasing a book on Caritas University Bookstore</p>

                 <div className="download-links">
                    <p>Download link(s):</p>
                    {
                        cart.map(item => {
                            return(
                                <div key={item._id}>
                                    <p>
                                    <a 
                                    href={item.file} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    >{item.title}</a></p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
