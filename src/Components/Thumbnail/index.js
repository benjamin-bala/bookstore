import { Link, useHistory } from 'react-router-dom'
import './style.css'

export default function Thumbnail({thumbnail}) {

    let history = useHistory()
    return (
        <div onClick={()=> {
            history.push(`/details/${thumbnail._id}`)
        }}  className="thumbnail">
            <img 
                src={thumbnail.image}
                alt=""
            />
        </div>
    )
}
