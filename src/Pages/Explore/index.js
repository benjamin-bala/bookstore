import './style.css'
import Header from '../../Components/Header'
import HomeCard from '../../Components/HomeCard'
import {BiSearch,FaThList,FaList} from 'react-icons/all'

export default function Explore() {
    

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
                            <input type="text" placeholder="search author,book...." />
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

                    <div className="showcase-items">
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                    </div>
                </section>
        </div>
    )
}
