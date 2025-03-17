import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import pictureLeft from '../image/picturnLeft.png'

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-image">
        <img 
          src= {pictureLeft}
          alt="Online Shopping" 
          className="signup-img"
        />
      </div>
      
      <div className="signup-form">
        <h1 className="signup-title">Create an account</h1>
        <p className="signup-subtitle">Enter your details below</p>
        
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" className="form-input" />
          </div>
          
          <div className="form-group">
            <input type="text" placeholder="Email or Phone Number" className="form-input" />
          </div>
          
          <div className="form-group">
            <input type="password" placeholder="Password" className="form-input" />
          </div>
          
          <button type="submit" className="create-account-btn">
            Create Account
          </button>
          
          <button type="button" className="google-signup-btn">
            <FaGoogle className="google-icon" />
            Sign up with Google
          </button>
        </form>
        
        <div className="login-link">
          Already have account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;