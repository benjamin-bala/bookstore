import { useState,useEffect } from "react"
import Cardsm from "../../Components/EmptyComponent/Cardsm"
import Card from "../../Components/EmptyComponent/Card"
import Header from "../../Components/Header"
import { categories } from "./categories"
import axios from 'axios'
import { BiError } from 'react-icons/bi'
import HomeCard from "../../Components/HomeCard"

export default function Categories() {
    
    const [ books, setBooks ] = useState([])
    const [ value ] = useState(0)
    const [ loading, setLoading ] = useState({
        state: true,
        error: false
    })

    const getBooks = () => {
        axios.get('https://hivebookstore.herokuapp.com/products', {
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8'}
        })
        .then(response => {
            setBooks(response.data)
            setTimeout(() => {
                setLoading({...loading, state: false, error: false})
            }, 500);
        })
        .catch(() => {
            setTimeout(() => {
                setLoading({...loading, state: false, error: true})
            }, 500);
        })
    }

    console.log("book item", books);

    useEffect(() => {
        getBooks()
    }, [value])


    return (
        <div>
            <Header />
            <main>
            {
                !loading.state && !loading.error ? 
                books.map(item => {
                    return(
                        <section key={item._id} className="book-category scroll-right screen-1040">
                            <h2 className="category-name">{item.category}</h2>
                            <HomeCard key={item._id} book={item} />
                        </section>
                    )
                })
                :
                loading.error ?
                    <div className="search-error">
                        <div>
                            <BiError size={30} />
                        </div>
                        <div>
                            <h1>An error occured </h1>
                            <p onClick={() => {
                                setLoading({...loading, state: true, error: false})
                                getBooks()
                            }}>Try again</p>
                        </div>
                    </div>
                :
                <div className="screen-1040" style={{marginTop: '3rem'}}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            }
            </main>
        </div>
    )
}
