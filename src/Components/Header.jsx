import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({user}) => {
    const location = useLocation();

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
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === "/contact" ? "active" : ""}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className={location.pathname === "/about" ? "active" : ""}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={location.pathname === "/signup" ? "active" : ""}>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="What are you looking for?" />
                    <button><FaSearch /></button>
                </div>
                <div className="icons me-2">
                    {user === null ? (
                        <Link to="/login" className="icon-link">
                            <FaUser className="icon" />
                        </Link>
                    ) : (
                        <Link to="/account" className="icon-link">
                            <img 
                                src={user.avatar}  // Sử dụng user.avatar để lấy ảnh
                                alt={user.name} 
                                className="icon-user-img" 
                            />
                        </Link>
                    )}
                    <Link to="/wishlist" className="icon-link">
                        <FaHeart className="icon" />
                    </Link>
                    <Link to="/cart" className="icon-link">
                        <FaShoppingCart className="icon" />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
