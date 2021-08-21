import './style.css'

export default function NavBar() {
    
    return (
        <div className="navbar-container">
            <nav>
                <div className="navbar-header">
                    <p onClick={()=> {
                        document.querySelector(".navbar-container").style.display = "none"
                    }}>X</p>
                </div>

                <div className="navbar__book-category">
                    <h4 className="book-category__heading">Popular Subjects</h4>
                    <div className="book-category__list">
                        <p>Biographies & memoirs</p>
                        <p>Business & Money</p>
                        <p>Computers & technology</p>
                        <p>Parenting & families</p>
                    </div>
                </div>

                <div className="navbar__book-category">
                    <h4 className="book-category__heading">Popular Subjects</h4>
                    <div className="book-category__list">
                        <p>Biographies & memoirs</p>
                        <p>Business & Money</p>
                        <p>Computers & technology</p>
                        <p>Parenting & families</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}
