import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            {/* Top Bar */}
            <div className="top-bar">
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
                    <a href="#">ShopNow</a>
                </p>
                <div className="language-selector">
                    English ▼
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar">
                <Link to="/" className="logo-link">
                    <div className="logo">Exclusive</div>
                </Link>
                <ul className="nav-links">
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="What are you looking for?" />
                    <button><FaSearch /></button>
                </div>
                <div className="icons">
                    <Link to="/login" className="icon-link">
                        <FaUser className="icon" />
                    </Link>
                    <FaHeart className="icon" />
                    <FaShoppingCart className="icon" />
                </div>
            </nav>
        </header>
    );
};

export default Header;