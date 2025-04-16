import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pictureLeft from '../image/picturnLeft.png'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleLogin =  async (e) => {
        e.preventDefault();
        setMessage("");

        if (!emailRegex.test(email)) {
            setMessage("Email không hợp lệ!");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/users/login", {
                email,
                password,
            })

            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem('token', res.data.token);
            navigate("/");
            window.location.reload();
        } catch (error) {
            if (error.response) {
                console.error("Response data:", error.response?.data);
                setMessage(error.response?.data?.message || "Có lỗi xảy ra!");
            } else if (error.request) {
                console.error("No response received:", error.request);
                setMessage("Không nhận được phản hồi từ server.");
            } else {
                console.error("Error message:", error.message);
                setMessage("Đã xảy ra lỗi khi thực hiện yêu cầu.");
            }
        }
    }

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

                <form
                    onSubmit={handleLogin}
                >
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Email or Phone Number" 
                            className="form-input" 
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    </div>

                    <div className="form-group">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="form-input" 
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
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