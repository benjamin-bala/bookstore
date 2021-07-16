import './style.css'
import {BsStarFill} from 'react-icons/bs'


export default function ShowcaseCard() {
    return (
        <div className="showcase__card">
            <div className="showcase__card-thumbnail">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg" 
                    alt=""
                />
            </div>

            <div className="showcase__card-summary">
                <div className="showcase__card-summary__name">
                    <h3>Work for the money,design for love</h3>
                </div>

                <div className="showcase__card-summary__category">
                    <p>Business & Money</p>

                    <div className="rating">
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                    </div>
                </div>
                <div className="showcase__card-summary__footer">
                    <p className="showcase__item-price">$200</p>

                    <div className="showcase__item-btn">Add to cart</div>
                </div>
            </div>
        </div>
    )
}
