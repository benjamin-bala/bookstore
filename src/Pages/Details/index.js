import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailsCard from '../../Components/DetailsCard'
import Header from '../../Components/Header'
import Thumbnail from '../../Components/Thumbnail'
import Card from '../../Components/EmptyComponent/Card'
import './style.css'
import { BiError } from 'react-icons/bi'

export default function Details() {
    let { id } = useParams()
    const [selectedBook, setSelectedBook] = useState({})
    const [value] = useState(0)
    const [loading, setLoading] = useState({
        state: true,
        error: false
    })

    const getSelectedBook = () => {
        axios.get(`http://localhost:8001/products/productid/?id=${id}`)
        .then(response => {
            setTimeout(() => {
                setSelectedBook(response.data)
                setLoading({...loading, state: false})
            }, 500);
        })
        .catch(()=> {
            setTimeout(() => {
                setLoading({...loading, state: false, error: true})
            }, 500);
        })
    }

    useEffect(()=> {
        getSelectedBook()
    }, [value])

    const getBookId = () => {
        getSelectedBook()
    }

    return (
        <div className="details">
            <Header />
            {
                loading.state ?
                <section className="screen-1040" style={{marginTop: '10rem'}}>
                    <Card />
                </section>
                :
                !loading.error ?
                <div>
                <section className="screen-1040">
                        <DetailsCard book={selectedBook}/>
                    </section>
                    <section className="screen-1040">
                        <h2>Related Books</h2>
                        <section className="thumbnail-container">
                            <Thumbnail />
                            <Thumbnail />
                            <Thumbnail />
                            <Thumbnail />
                            <Thumbnail />
                            <Thumbnail />
                        </section>
                    </section>
                </div>
                :
                <div className="search-error">
                    <div>
                        <BiError size={30} />
                    </div>
                    <div>
                        <h1>An error occured </h1>
                        <p onClick={() => {
                            setLoading({...loading, state: true, error: false})
                            getBookId()
                        }}>Try again</p>
                    </div>
                </div>
            }
        </div>
    )
}
