import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/trending" className="nav-link">
                    Trending
                </Link>
                <Link to="/search" className="nav-link">
                    Search
                </Link>
            </nav>
            <hr />
        </>
    );
}

export default Navbar;