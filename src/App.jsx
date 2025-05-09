import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SignUp from "./screens/SignUp"; // Import component mới
import Login from "./screens/Login";
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/About";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import { Checkout } from './pages/Checkout/Checkout';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { Cart } from './pages/Cart/Cart';
import { CartProvider } from './pages/Cart/CartContext';
import SearchPage from "./screens/SearchPage";
import DetailPage from "./pages/DetailPage";
import { ScrollToTop } from "./Components/ScrollToTop";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/customers").then((res) => {
  //     setcustomers(res.data);
  //   });
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  useEffect(() => {
    console.log("useEffect is running...");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("Stored User:", storedUser);
    if (storedUser) {
      setUser(storedUser); // Lưu thông tin người dùng vào state
    }
  }, []);

  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="app-container">
            <Header user={user} handleLogout={handleLogout} />
            <div className="main-content">
              <ScrollToTop/>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/account" element={<Account user={user} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/checkout' element={<Checkout></Checkout>}></Route>
                <Route path='*' element={<h1>404 Not Found</h1>} />
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/detail" element={<DetailPage/>}/>
                <Route
                  path="/forgot-password"
                  element={
                    <div className="page-content">Trang quên mật khẩu</div>
                  }
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
