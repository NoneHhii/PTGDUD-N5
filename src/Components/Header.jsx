import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/style/Header.css";

const Header = ({ user, handleLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
    const [query, setQuery] = useState();
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && query.trim() !== "") {
            navigate("/search", { state: { searchKey: query } });
        }
    };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#">ShopNow</a>
        </p>
        <div className="language-selector">English ▼</div>
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

        {/* Search Bar */}
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="What are you looking for?" 
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button><FaSearch /></button>
        </div>

        {/* User Icons */}
        <div className="icons me-2 account-user">
          {user === null ? (
            <Link to="/login" className="icon-link">
              <FaUser className="icon" />
            </Link>
          ) : (
            <div
              className="user-container"
              style={{ padding: "0px", margin: "0px" }}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="/account" className="icon-link pt-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="icon-user-img"
                  style={{maxWidth: "32px", maxHeight: "32px"}}
                />
              </Link>

              {/* Dropdown Menu */}
              <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <button className="dropdown-item" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </div>
            </div>
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
