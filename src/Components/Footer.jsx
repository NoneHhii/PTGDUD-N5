import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Cột 1 - Subscribe */}
                <div className="footer-column">
                    <h3>Exclusive</h3>
                    <p className="subscribe-title">Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className="subscribe-box">
                        <input type="email" placeholder="Enter your email" />
                        <button>➜</button>
                    </div>
                </div>

                {/* Cột 2 - Support */}
                <div className="footer-column">
                    <h4>Support</h4>
                    <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>

                {/* Cột 3 - Account */}
                <div className="footer-column">
                    <h4>Account</h4>
                    <ul>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                {/* Cột 4 - Quick Link */}
                <div className="footer-column">
                    <h4>Quick Link</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Cột 5 - Download App */}
                <div className="footer-column">
                    <h4>Download App</h4>
                    <p>Save $3 with App New User Only</p>
                    <div className="app-icons">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/QR_icon.svg" alt="QR Code" className="qr-code" />
                        <div className="app-buttons">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" />
                        </div>
                    </div>
                    <div className="social-icons">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>
            </div>

            {/* Bản quyền */}
            <div className="footer-bottom">
                <p>© Copyright Rimel 2022. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;