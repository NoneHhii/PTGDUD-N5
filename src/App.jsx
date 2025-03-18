import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Checkout } from './pages/Checkout/Checkout';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { Cart } from './pages/Cart/Cart';
import { CartProvider } from './pages/Cart/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<></>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/checkout' element={<Checkout></Checkout>}></Route>
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
