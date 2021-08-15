import './style.css'
import { FiShoppingBag } from 'react-icons/fi'

export default function AddToBag() {
    return (
        <div className="add-to-bag ">
            <FiShoppingBag size={20} />
            <p>Item added</p>
        </div>
    )
}
