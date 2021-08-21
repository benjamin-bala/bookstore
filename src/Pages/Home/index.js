import { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import axios from 'axios'
import PortraitCard from '../../Components/PortraitCard'
import './style.css'
import { Link } from 'react-router-dom'

export default function Home() {
    const [value] = useState(0)
    const [books, setBooks] = useState([])

    const getBook = () => {
         axios.get('https://hivebookstore.herokuapp.com/products', {
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8'}
        })
        .then(response => {
            setBooks(response.data)
            // setTimeout(() => {
            //     setLoading({...loading, state: false, error: false})
            // }, 500);
        })
        .catch(() => {
            // setTimeout(() => {
            //     setLoading({...loading, state: false, error: true})
            // }, 500);
        })
    }

    useEffect(()=> {
        getBook()
    }, [value])
    return (
        <main className="home">
            <Header />
            <section className="home-hero">
                <h1>with us, you can shop online & save cost at the same time</h1>
                <Link to='/explore' className="btn-hero btn">Explore</Link>
            </section>
            <section className="home-card-container scroll-right">
              
            
            </section>
            <section className="book-category scroll-right screen-1040">
                <h2 className="category-name">Science</h2>
                {
                    books.slice(0,5).map(item => {
                        return <PortraitCard key={item._id} item={item} />
                    })
                }
            </section>
            <section className="book-category scroll-right screen-1040">
               
            </section>
        </main>
    )
}
