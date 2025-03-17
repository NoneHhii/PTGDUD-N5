import React from 'react';
import { Link } from 'react-router-dom';
import pictureLeft from '../image/picturnLeft.png'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-image">
                <img
                    src= {pictureLeft}
                    alt="Online Shopping"
                    className="login-img"
                />
            </div>

            <div className="login-form">
                <h1 className="login-title">Log in to Exclusive</h1>
                <p className="login-subtitle">Enter your details below</p>

                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Email or Phone Number" className="form-input" />
                    </div>

                    <div className="form-group">
                        <input type="password" placeholder="Password" className="form-input" />
                    </div>

                    <div className="login-actions">
                        <button type="submit" className="login-btn">
                            Log in
                        </button>
                        <Link to="/forgot-password" className="forgot-password">
                            Forgot Password?
                        </Link>
                    </div>
                </form>

                <div className="signup-link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;