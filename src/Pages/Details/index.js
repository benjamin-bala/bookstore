import DetailsCard from '../../Components/DetailsCard'
import Header from '../../Components/Header'
import Thumbnail from '../../Components/Thumbnail'
import './style.css'

export default function Details() {
    return (
        <div className="details">
            <Header />
            <section className="screen-1040">
                <DetailsCard />
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
    )
}
