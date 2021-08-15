import Header from '../../Components/Header'
import HomeCard from '../../Components/HomeCard'
import PortraitCard from '../../Components/PortraitCard'
import './style.css'

export default function Home() {
    return (
        <main className="home">
            <Header />
            <section className="screen-1040 home-hero">
                <h1>with us, you can shop online & help save your high street at the same time</h1>
            </section>
            <section className="home-card-container scroll-right">
              
            
            </section>
            <section className="book-category scroll-right screen-1040">
                <h2 className="category-name">Science</h2>
                <PortraitCard />
                <PortraitCard />
                <PortraitCard />
                <PortraitCard />
                <PortraitCard />
            </section>
            <section className="book-category scroll-right screen-1040">
                <h2 className="category-name">Biology</h2>
                <PortraitCard />
                <PortraitCard />
                <PortraitCard />
                <PortraitCard />
                <PortraitCard />
            </section>
        </main>
    )
}
