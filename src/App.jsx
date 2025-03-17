import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SignUp from "./screens/SignUp"; // Import component mới
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<div className="homepage-content">Nội dung trang chủ</div>} />
            <Route path="/contact" element={<div className="page-content">Trang liên hệ</div>} />
            <Route path="/about" element={<div className="page-content">Trang giới thiệu</div>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<div className="page-content">Trang quên mật khẩu</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;