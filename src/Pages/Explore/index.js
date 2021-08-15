import './style.css'
import Header from '../../Components/Header'
import HomeCard from '../../Components/HomeCard'
import {BiSearch,FaThList,FaList,BiError} from 'react-icons/all'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../../Components/EmptyComponent/Card'

export default function Explore() {

    const [books, setBooks] = useState([])
    const [value] = useState(0)
    const [searchInput, setSearchInput] = useState('')
    const [loading, setLoading] = useState({
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

    useEffect(() => {
        getBooks()
    }, [value])
    
    const filteredBooks = books.filter(({ title }) =>  title.toLowerCase().includes(searchInput.toLowerCase()))


    function viewThumbnail(){
        try {
            let showcaseItem = document.querySelector(".showcase-items")
            let card = document.querySelectorAll(".home-card__writeup")
            let thumbIcon = document.querySelector(".thumb")
            let listIcon = document.querySelector(".list")
            showcaseItem.style.display = "flex"
            card.forEach(item => {
                item.style.display = "none"
                thumbIcon.style.color = "#333"
                listIcon.style.color = "#777"
            });
        } catch (error) {
            console.log(error);
        }
    }

    function viewDetails(){
        try {
            let showcaseItem = document.querySelector(".showcase-items")
            let card = document.querySelectorAll(".home-card__writeup")
            let thumbIcon = document.querySelector(".thumb")
            let listIcon = document.querySelector(".list")
            showcaseItem.style.display = "grid"
            card.forEach(item => {
                item.style.display = "flex"
                thumbIcon.style.color = "#777"
                listIcon.style.color = "#333"
            });   
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="explore">
            <Header />
                <section className="showcase screen-1040">
                    <div className="showcase-header">
                        <div className="showcase-header__searchbox">
                            <input type="text" onChange={(e)=> setSearchInput(e.target.value)} placeholder="search book...." />
                            <BiSearch size={20} />
                        </div>
                        <div className="showcase-header__filter">
                            <span className="thumb" onClick={viewThumbnail}>
                                <FaThList size={20} />
                            </span>
                            <span className="list" onClick={viewDetails}>
                                <FaList size={20} />
                            </span>
                        </div>
                    </div>
                    {
                        loading.state ? 
                        <div>
                            <Card />
                            <Card />
                        </div>
                        :
                        !loading.error ? 
                        <div>
                            <div className="showcase-items">
                                {
                                    filteredBooks.map(book => {
                                        return <HomeCard book={book} key={book._id} />
                                    })
                                }
                            </div>
                            <div>
                                {
                                    filteredBooks.length === 0 && searchInput !== '' ? 
                                            <div className="search-error">
                                                <div>
                                                    <BiError size={30} />
                                                </div>
                                                <div>
                                                    <h1>Can't find the book <br /> <span>{searchInput}</span></h1>
                                                </div>
                                            </div> : null
                                }
                            </div>
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
                                    getBooks()
                                }}>Try again</p>
                            </div>
                        </div>
                    }
                    
                </section>
        </div>
    )
}
