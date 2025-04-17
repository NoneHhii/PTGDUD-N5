import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import pictureLeft from '../image/picturnLeft.png';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Regex for password validation
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage("");

    // Validate email
    if (!emailRegex.test(email)) {
      setMessage("Email không hợp lệ!");
      return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      setMessage("Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái, số và ký tự đặc biệt.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.token);
      navigate("/");
      window.location.reload();

      setMessage(res.data.message);
    } catch (error) {
      console.error("Error details:", error); // Log lỗi chi tiết
      console.error("Response data:", error.response?.data);
      setMessage(error.response?.data?.message || "Có lỗi xảy ra!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img 
          src={pictureLeft}
          alt="Online Shopping" 
          className="signup-img"
        />
      </div>
      
      <div className="signup-form">
        <h1 className="signup-title">Create an account</h1>
        <p className="signup-subtitle">Enter your details below</p>
        
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Name" 
              className="form-input" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
          </div>
          
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Email or Phone Number" 
              className="form-input" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              className="form-input" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          
          <button type="submit" className="create-account-btn">
            Create Account
          </button>
          
          <button type="button" className="google-signup-btn">
            <FaGoogle className="google-icon" />
            Sign up with Google
          </button>
        </form>
        
        {message && <div className="message">{message}</div>}
        
        <div className="login-link">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
