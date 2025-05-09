import React, { useEffect, useMemo, useState } from "react";
import { useRef } from "react";
import {
  Button,
  Card,
  Carousel,
  Container,
  Row,
  Badge,
  Col,
} from "react-bootstrap";
import Slider from "react-slick";

import banner1 from "../assets/image/banner1.png";
import banner2 from "../assets/image/banner2.png";
import LeftArrow from "../assets/image/Fill With Left Arrow.png";
import RightArrow from "../assets/image/Fill With Right Arrow.png";
import favor from "../assets/image/TymUnSlt.png";
import favorSlt from "../assets/image/TymSlt.png";
import phone from "../assets/image/Category-Cellphone.png";
import phoneWhite from "../assets/image/Category-Cellphone White.png";
import Computer from "../assets/image/Category-Computer.png";
import ComputerWhite from "../assets/image/Category-Computer White.png";
import Camera from "../assets/image/Category-Camera.png";
import CameraWhite from "../assets/image/Category-Camera White.png";
import HeadPhone from "../assets/image/Category-Headphone.png";
import HeadPhoneWhite from "../assets/image/Category-Headphone White.png";
import SmartWatch from "../assets/image/Category-SmartWatch.png";
import SmartWatchWhite from "../assets/image/Category-SmartWatch White.png";
import GamePad from "../assets/image/Category-GamePad.png";
import GamePadWhite from "../assets/image/Category-GamePad White.png";

import StarRating from "../Components/StarRating";
import axios from "axios";
import { useCart } from "../pages/Cart/CartContext";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useWishList } from "../context/WishlistContext";
import ChatbotIcon from "../Components/ChatbotIcon";
import ChatForm from "../Components/ChatForm";
import ChatMessage from "../Components/ChatMessage";
import { companyInfo } from "../companyInfo";

const categories = [
    {
        id: 1,
        name: "Điện thoại",
        img: [phone, phoneWhite]
    },
    {
        id: 2,
        name: "Máy tính",
        img: [Computer, ComputerWhite]
    },
    {
        id: 3,
        name: "Camera",
        img: [Camera, CameraWhite]
    },
    {
        id: 4,
        name: "Tai nghe",
        img: [HeadPhone, HeadPhoneWhite]
    },
    {
        id: 5,
        name: "Đồng hồ",
        img: [SmartWatch, SmartWatchWhite]
    },
    {
        id: 6,
        name: "Gaming",
        img: [GamePad, GamePadWhite]
    },
]

const HomePage = () => {
    const [Products, setProducts] = useState([]);
    const sliderRef = useRef(null);
    const sliderRef2 = useRef(null);
    const [srcFavor, setSrcFavor] = useState({});
    const [sltCategory, setSltCategory] = useState();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const {wishlist, updateWishlist} = useWishList();

    const idWishlist = new Set(wishlist.map(item => item.id));

    // chat bot
    const [chatHistory, setChatHistory] = useState([]);
    useEffect(() => {
        const fetchProductInfo = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/products/getAll");
            const data = await res.json();
            console.log(data);
            setChatHistory([
            {
                hideInChat: true,
                role: "model",
                text: data.description,
            },
            ]);
        } catch (err) {
            console.error("Lỗi khi lấy dữ liệu sản phẩm:", err);
        }
        };

        fetchProductInfo();
    }, []);
    const [showChatbot, setShowChatbot] = useState([false]);
    const chatBodyRef = useRef();

    const generateBotResponse = async (history) => {
        // Helper function to update chat history
        const updateHistory = (text, isError = false) => {
        setChatHistory((prev) => [
            ...prev.filter((msg) => msg.text != "Thinking..."),
            { role: "model", text, isError },
        ]);
        };
        // Format chat history for API request
        history = history
        .filter(({ text }) => typeof text === "string" && text.trim() !== "")
        .map(({ role, text }) => ({
            role,
            parts: [{ text }],
        }));
        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: history }),
        };
        try {
        // Make the API call to get the bot's response
        const response = await fetch(
            import.meta.env.VITE_API_URL,
            requestOptions
        );
        const data = await response.json();
        if (!response.ok)
            throw new Error(data?.error.message || "Something went wrong!");
        // Clean and update chat history with bot's response
        const apiResponseText = data.candidates[0].content.parts[0].text
            .replace(/\*\*(.*?)\*\*/g, "$1")
            .trim();
        updateHistory(apiResponseText);
        } catch (error) {
        // Update chat history with the error message
        updateHistory(error.message, true);
        }
    };

    useEffect(() => {
        // Auto-scroll whenever chat history updates
        chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
        });
    }, [chatHistory]);

    //get products
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products/get-products");
                setProducts(res.data);
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm: ", error);
            }
        }

        fetchData();
    }, []); 

    const filterProduct = sltCategory ? Products.filter((product) => product.category === categories[sltCategory - 1].name) : [];

    //reset srcFavor from wishlist
    useEffect(() => {
        const newFavor = {};
        wishlist.forEach(item => {
            newFavor[item.id] = true;
        });
        setSrcFavor(newFavor);
    }, [wishlist]);    

    //change src when click
    const handleSrc = (id) => {
        const newValue = !srcFavor[id];
    
        // Cập nhật state
        setSrcFavor((srcPrev) => ({
            ...srcPrev,
            [id]: newValue,
        }));
    
        updateWishlist(id, newValue);
    };

    //setting for slicker
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 4}
            },
            {
                breakpoint: 768,
                settings: {slidesToShow: 3}
            },
            {
                breakpoint: 480,
                settings: {slidesToShow: 3}
            }

        ]
    }

    const settingsRow = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesPerRow: 5,
        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesPerRow: 4}
            },
            {
                breakpoint: 768,
                settings: {slidesPerRow: 3}
            },
            {
                breakpoint: 480,
                settings: {slidesPerRow: 3}
            }

        ]
    }

    //save sales
    const getStoredTargetDate = () => {
        const savedDate = localStorage.getItem("targetDate");
        if (savedDate) {
            return parseInt(savedDate, 10); // Chuyển đổi sang số nguyên
        }
        const newTargetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
        localStorage.setItem("targetDate", newTargetDate.toString());
        return newTargetDate;
    };

    // const targetDate = getStoredTargetDate();
    const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
    
    //time
    const calculateTimeLeft = (targetDate) => {
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
    
        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

  return (
    <div className="container-fluid contain mb-4 mt-4">
      <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
        <button
          onClick={() => setShowChatbot((prev) => !prev)}
          id="chatbot-toggler"
        >
          <img src="/src/img/close.svg" alt="Close chatbot" />
        </button>
        <div className="chatbot-popup">
          <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon />
              <h2 className="logo-text">Chatbot hỗ trợ</h2>
            </div>
            <button
              onClick={() => setShowChatbot((prev) => !prev)}
              className="material-symbols-outlined"
            >
              keyboard_arrow_down
            </button>
          </div>
          {/* chatbot body */}
          <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">Tui giúp gì được cho bạn?</p>
            </div>

            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          {/* Chatbot Footer */}
          <div className="chat-footer">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Carousel className="carousel">
          <Carousel.Item>
            <img src={banner1} alt="" className="carousel-img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={banner2} alt="" className="carousel-img" />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Best sales */}
      <div className="w-100" style={{ marginTop: "80px" }}>
        <div className="d-flex align-items-center">
          <div
            style={{
              backgroundColor: "red",
              width: "20px",
              height: "40px",
              borderRadius: "5px",
            }}
          ></div>
          <div className="d-flex align-items-center justify-content-center text-center">
            <p className="text-danger my-auto ms-3 fw-bold w-100">Today's</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h3 className="my-auto me-5">Flash Sales</h3>
            <div className="d-flex justify-content-center align-items-center">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                <div key={index} className="text-center mx-3">
                  <div className="fw-bold">
                    {String(Object.values(timeLeft)[index]).padStart(2, "0")}
                  </div>
                  <div className="text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-end">
            <Button
              className="border-0"
              style={{ backgroundColor: "transparent" }}
              onClick={() => {
                if (sliderRef.current) {
                  sliderRef.current.slickPrev();
                }
              }}
              disabled={!sliderRef.current}
            >
              <img src={LeftArrow} alt="" />
            </Button>
            <Button
              className="border-0"
              style={{ backgroundColor: "transparent" }}
              onClick={() => {
                if (sliderRef.current) {
                  sliderRef.current.slickNext();
                }
              }}
            >
              <img src={RightArrow} alt="" />
            </Button>
          </div>
        </div>

        <Container className="position-relative">
          <Slider ref={sliderRef} {...settings}>
            {Products.filter(product => product.sale > 0).map((product) => (
              <div key={product.id} className="px-2 py-3">
                <Card
                  className="card-hover mx-auto"
                  style={{ maxWidth: "270px", height: "400px" }}
                  onClick={() => navigate('/detail', { state: { product } })}
                >
                  <div
                    className="position-relative"
                    style={{ backgroundColor: "", minWidth: "100%" }}
                  >
                    <Badge
                      bg="danger"
                      className="position-absolute"
                      style={{ top: "10px", left: "10px" }}
                    >
                      -{product.sale}%
                    </Badge>
                    <img
                        src={srcFavor.hasOwnProperty(product.id) 
                            ? (srcFavor[product.id] ? favorSlt : favor) 
                            : (idWishlist.has(product.id) ? favorSlt : favor)} 
                        alt=""
                        className="position-absolute"
                        style={{ top: "10px", right: "10px", cursor: "pointer" }}
                        onClick={(e) => {
                        e.stopPropagation();
                            handleSrc(product.id);
                        }}
                    />
                    <Card.Img
                      variant="top"
                      src={product.image[0]}
                      className="img-fluid mx-auto"
                      style={{ height: "180px", objectFit: "contain" }}
                    />
                    <Button
                        className="w-100 add-to-cart"
                        style={{ borderRadius: "0px", background: "#db4444" }}
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                        }}
                    >
                      Add To Cart
                    </Button>
                  </div>
                  <Card.Body
                    className=""
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/detail", { state: { product } })}
                  >
                    <Card.Title as="h6" className="mt-2 text-start">
                      {product.name}
                    </Card.Title>
                    <div className="d-flex">
                      <Card.Text className="me-3 text-danger fw-bold">
                        ${(product.price * (1 - product.sale / 100)).toFixed(2)}
                      </Card.Text>
                      <Card.Text className="text-muted text-decoration-line-through">
                        ${product.price}
                      </Card.Text>
                    </div>
                    <div>
                      <StarRating rating={product.rating} />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
          <div className="text-center mt-4">
            <Button variant="danger">View All Products</Button>
          </div>
        </Container>
      </div>
      {/* This month */}
      <div className="w-100" style={{ marginTop: "80px" }}>
        <div className="d-flex align-items-center">
          <div
            style={{
              backgroundColor: "red",
              width: "20px",
              height: "40px",
              borderRadius: "5px",
            }}
          ></div>
          <div className="d-flex align-items-center justify-content-center text-center">
            <p className="text-danger my-auto ms-3 fw-bold w-100">This Month</p>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className="d-flex align-items-center">
            <h3 className="my-auto me-5">Best Selling Products</h3>
          </div>
          <div className="flex-end">
            <Button className="btn-danger">View All</Button>
          </div>
        </div>
        <Container className="position-relative">
          <Slider ref={sliderRef} {...settings}>
            {Products.map((product) => {
              if (product.id <= 6) {
                return (
                  <div key={product.id} className="px-2 py-3">
                    <Card
                      className="card-hover mx-auto"
                      style={{ maxWidth: "270px", height: "400px" }}
                      onClick={() => navigate('/detail', { state: { product } })}
                    >
                      <div
                        className="position-relative"
                        style={{ backgroundColor: "", minWidth: "100%" }}
                      >
                        <Card.Img
                          variant="top"
                          src={product.image[0]}
                          alt={product.name}
                          className="img-fluid mx-auto"
                          style={{ height: "180px", objectFit: "contain" }}
                        />
                        <img
                          src={srcFavor.hasOwnProperty(product.id) 
                            ? (srcFavor[product.id] ? favorSlt : favor) 
                            : (idWishlist.has(product.id) ? favorSlt : favor)} 
                          alt="favorite"
                          className="position-absolute"
                          style={{
                            top: "10px",
                            right: "10px",
                            cursor: "pointer",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSrc(product.id);
                        }}
                        />
                        <Button
                          className="w-100 add-to-cart"
                          style={{
                            borderRadius: "10px",
                            backgroundColor: "#db4444",
                            border: "none",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                        }}
                        >
                          Add To Cart
                        </Button>
                      </div>
                      <Card.Body
                        className=""
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          navigate("/detail", { state: { product } })
                        }
                      >
                        <Card.Title as="h6" className="mt-2 text-start">
                          {product.name}
                        </Card.Title>
                        <div className="d-flex">
                          <Card.Text className="me-3 text-danger fw-bold">
                            ${product.price}
                          </Card.Text>
                        </div>
                        <div>
                          <StarRating rating={product.rating} />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
              return null;
            })}
          </Slider>
          <div className="text-center mt-4">
            <Button variant="danger">View All Products</Button>
          </div>
        </Container>
      </div>

      {/* Category */}
      <div className="w-100" style={{ marginTop: "80px" }}>
        <hr />
        <div className="d-flex align-items-center">
          <div
            style={{
              backgroundColor: "red",
              width: "20px",
              height: "40px",
              borderRadius: "5px",
            }}
          ></div>

          <div className="d-flex align-items-center justify-content-center text-center">
            <p className="text-danger my-auto ms-3 fw-bold w-100">Categories</p>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className="d-flex align-items-center">
            <h3 className="my-auto me-5">Browse By Category</h3>
          </div>
          {/* <div className="flex-end">
                        <Button className="btn-danger">View All</Button>
                    </div> */}
        </div>
        <div className="position-relative">
          <div className="container d-flex flex-wrap justify-content-between gap-3">
            {categories.map((category) => {
              const isSelected = sltCategory === category.id;
              return (
                <div key={category.id}>
                  <div
                    className={`category-card ${isSelected ? "selected" : ""}`}
                    onClick={() => setSltCategory(category.id)}
                  >
                    <img
                      src={isSelected ? category.img[1] : category.img[0]}
                      alt={category.name}
                      className="category-image"
                    />
                    <p className="text-center text-truncate mt-2 mb-0">
                      {category.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* filtered product */}
        <AnimatePresence mode="wait">
            {sltCategory && (
                <motion.div
                    key={sltCategory}
                    className="row mt-4"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -30}}
                    transition={{duration: 0.5}}
                >
                    {filterProduct.map((product) => {
                            return (
                                <div key={product.id} className="col-lg-2 col-md-4 col-sm-6">
                                    <div 
                                        className="border rounded text-center product card-hover" 
                                        style={{ maxWidth: "270px", maxHeight: "350px", cursor: "pointer"}}
                                        onClick={() => navigate('/detail', { state: { product } })}
                                    >
                                        <div 
                                            className="bg-white position-relative d-flex justify-content-center align-items-center" 
                                            style={{ backgroundColor: "#f4f4f4", minWidth: "100%", height: "180px" }}
                                        >
                                            <img 
                                                src={product.image[0]} 
                                                alt={product.name} 
                                                className="img-fluid d-flex my-auto mt-1" 
                                                style={{ maxHeight: '100%', objectFit: 'contain' }}
                                            />
                                            <img 
                                                src={srcFavor[product.id] || idWishlist.has(product.id) ? favorSlt : favor} 
                                                alt="favorite" 
                                                className="position-absolute" 
                                                style={{ top: "10px", right: "10px" }} 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSrc(product.id);
                                                }}
                                            />
                                        </div>
                                        <Button
                                            variant='dark'
                                            className='w-100 add-to-cart'
                                            style={{ borderRadius: "0px" }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart(product);
                                            }}
                                        >
                                            Add To Cart
                                        </Button>
                                        <div className="p-3">
                                            <h6 className="mt-2 text-start">{product.name}</h6>
                                            <div className="d-flex">
                                                <p className="me-3 text-danger">${product.price}</p>
                                            </div>
                                            <StarRating rating={product.rating} />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </motion.div>
            )}
        </AnimatePresence>
      </div>
      <hr />

      <div className="w-100" style={{ marginTop: "80px" }}>
        <div className="d-flex align-items-center">
          <div
            style={{
              backgroundColor: "red",
              width: "20px",
              height: "40px",
              borderRadius: "5px",
            }}
          ></div>

          <div className="d-flex align-items-center justify-content-center text-center">
            <p className="text-danger my-auto ms-3 fw-bold w-100">
              Our Products
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h3 className="my-auto me-5">Explore Our Products</h3>
          </div>
          <div className="flex-end">
            <Button
              className="border-0"
              style={{ backgroundColor: "transparent" }}
              onClick={() => {
                if (sliderRef2.current) {
                  sliderRef2.current.slickPrev();
                }
              }}
              disabled={!sliderRef2.current}
            >
              <img src={LeftArrow} alt="" />
            </Button>
            <Button
              className="border-0"
              style={{ backgroundColor: "transparent" }}
              onClick={() => {
                if (sliderRef2.current) {
                  sliderRef2.current.slickNext();
                }
              }}
            >
              <img src={RightArrow} alt="" />
            </Button>
          </div>
        </div>
        <div className="container position-relative">
          <Slider ref={sliderRef2} {...settingsRow}>
            {Products.map((product) => (
              <div key={product.id}>
                <div className="product-card" onClick={() => navigate('/detail', { state: { product } })}>
                  <div className="product-image-container">
                    {/* Sale badge */}
                    {product.sale > 0 && (
                      <span className="sale-badge">-{product.sale}%</span>
                    )}
                    {/* Yêu thích */}
                    <img
                      src={srcFavor.hasOwnProperty(product.id) 
                        ? (srcFavor[product.id] ? favorSlt : favor) 
                        : (idWishlist.has(product.id) ? favorSlt : favor)} 
                      alt=""
                      className="favorite-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSrc(product.id);
                    }}
                    />
                    {/* Ảnh sản phẩm */}
                    <img
                      src={product.image[0]}
                      alt=""
                      className="product-image"
                    />

                    {/* Nút Add to Cart */}
                    <Button
                      className="add-to-cart-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                    }}
                      style={{ backgroundColor: "#db4444", border: "none" }}
                    >
                      Add To Cart
                    </Button>
                  </div>
                  <div className="product-info">
                    <h6 className="product-name">{product.name}</h6>
                    <div className="product-price-rating">
                      <p className="price text-danger">
                        ${product.price * (1 - product.sale / 100)}
                      </p>
                      {product.sale > 0 && (
                        <p className="original-price">${product.price}</p>
                      )}
                    </div>
                    <StarRating rating={product.rating} />
                  </div>
                </div>
              </div>
            ))}
          </Slider> 

          <div className="text-center">
            <Button className="btn-danger mt-4 px-4 py-2">
              View All Products
            </Button>
          </div>
        </div>
      </div>
      <div className="row text-center mt-5">
        {[
          {
            img: "icon_about_3.png",
            title: "FREE AND FAST DELIVERY",
            text: "Free delivery for all orders over $140",
          },
          {
            img: "icon_about_1.png",
            title: "24/7 CUSTOMER SERVICE",
            text: "Friendly 24/7 customer support",
          },
          {
            img: "icon_about_2.png",
            title: "MONEY BACK GUARANTEE",
            text: "We return money within 30 days",
          },
        ].map((item, index) => (
          <div key={index} className="col-md-4">
            <img
              src={`src/assets/img/${item.img}`}
              className="mb-3 mx-auto"
              alt={item.title}
              width={60}
            />
            <h5 className="fw-bold">{item.title}</h5>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
