import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SignUp from "./screens/SignUp"; // Import component mới
import Login from "./screens/Login";
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/About";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import { Checkout } from './pages/Checkout/Checkout';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { Cart } from './pages/Cart/Cart';
import { CartProvider } from './pages/Cart/CartContext';

function App() {
  // const [customers, setcustomers] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/customers").then((res) => {
  //     setcustomers(res.data);
  //   });
  // }, []);

  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<div className="page-content">Trang quên mật khẩu</div>} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/checkout' element={<Checkout></Checkout>}></Route>
              <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
