import './style.css'

export default function DetailsCard() {
    return (
        <div className="details-card">
            <div className="details-card__thumbnail">
                <img 
                    src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" 
                    alt=""
                />
            </div>
            <div className="details-card__summary">
                <div className="details-card__header">
                    <h2>The Book of eli</h2>
                    <p>
                        This is a random book message just to fill space.
                        This is a random book message just to fill space.
                        This is a random book message just to fill space.
                        This is a random book message just to fill space.
                        This is a random book message just to fill space.
                    </p>
                    <div className="details-card__price">
                        <h4>$200.00</h4>
                        <p className="old-cost">$120.00</p>
                    </div>
                    <div className="add-order">
                        <span className="decrement">-</span>
                        <span className="order-display">2</span>
                        <span className="increment">+</span>
                    </div>
                </div>

                <div className="details-card__footer">
                    <div className="add-btn btn">Add to Bag</div>
                    <div className="buy-btn btn">Buy now</div>
                </div>
            </div>
        </div>
    )
}
