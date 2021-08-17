import {BsTrash} from 'react-icons/bs'
import './style.css'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../../state/index'
import { useDispatch } from 'react-redux'

export default function CartItem({item}) {
    const dispatch = useDispatch()
    const { deleteItem } = bindActionCreators(actionCreators, dispatch)

    const handleDelete = () => {
        deleteItem(item._id)
    }

    return (
        <div className="cart-item">
            <div className="cart-item__summary">

                <div className="cart-item__thumbnail">
                    <img 
                        src={item.image}
                        alt=""
                    />
                </div>

                <div className="cart-item__summary-header">
                    <p className="cart-item__heading">{item.title}</p>
                    <div className="cart-item__price">
                        <h5>&#8358;{item.price}</h5>
                    </div>
                </div>
            </div>
            
            <div className="cart-item__delete-btn">
                <span onClick={handleDelete}>
                    <BsTrash size={20} />
                </span>
            </div>
        </div>
    )
}
