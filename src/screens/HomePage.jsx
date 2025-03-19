import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Button, Card, Carousel, Row } from "react-bootstrap";
import Slider from "react-slick";

import banner1 from "../assets/image/banner1.png";
import banner2 from "../assets/image/banner2.png";
import LeftArrow from "../assets/image/Fill With Left Arrow.png"
import RightArrow from "../assets/image/Fill With Right Arrow.png"
import pd1 from "../assets/image/Frame 611.png"
import pd2 from "../assets/image/Frame 612.png"
import pd3 from "../assets/image/Frame 613.png"
import favor from "../assets/image/TymUnSlt.png"
import favorSlt from "../assets/image/TymSlt.png"
import phone from "../assets/image/Category-Cellphone.png"
import phoneWhite from "../assets/image/Category-Cellphone White.png"
import Computer from "../assets/image/Category-Computer.png"
import ComputerWhite from "../assets/image/Category-Computer White.png"
import Camera from "../assets/image/Category-Camera.png"
import CameraWhite from "../assets/image/Category-Camera White.png"
import HeadPhone from "../assets/image/Category-Headphone.png"
import HeadPhoneWhite from "../assets/image/Category-Headphone White.png"
import SmartWatch from "../assets/image/Category-SmartWatch.png"
import SmartWatchWhite from "../assets/image/Category-SmartWatch White.png"
import GamePad from "../assets/image/Category-GamePad.png"
import GamePadWhite from "../assets/image/Category-GamePad White.png"

import StarRating from "../Components/StarRating";

const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        price: 160,
        sale: 40,
        rating: 5,
        img: pd1,
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        price: 1160,
        sale: 35,
        rating: 4.2,
        img: pd2,
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        price: 400,
        sale: 30,
        rating: 4.5,
        img: pd3,
    },
    {
        id: 4,
        name: "HAVIT HV-G92 Gamepad",
        price: 160,
        sale: 40,
        rating: 5,
        img: pd1,
    },
    {
        id: 5,
        name: "HAVIT HV-G92 Gamepad",
        price: 160,
        sale: 40,
        rating: 5,
        img: pd1,
    },
    {
        id: 6,
        name: "HAVIT HV-G92 Gamepad",
        price: 160,
        sale: 40,
        rating: 5,
        img: pd1,
    },
    {
        id: 7,
        name: "AK-900 Wired Keyboard",
        price: 1160,
        sale: 35,
        rating: 4.2,
        img: pd2,
    },
    {
        id: 8,
        name: "AK-900 Wired Keyboard",
        price: 1160,
        sale: 35,
        rating: 4.2,
        img: pd2,
    },
    {
        id: 9,
        name: "AK-900 Wired Keyboard",
        price: 1160,
        sale: 35,
        rating: 4.2,
        img: pd2,
    },
    {
        id: 10,
        name: "AK-900 Wired Keyboard",
        price: 1160,
        sale: 35,
        rating: 4.2,
        img: pd2,
    },
    {
        id: 11,
        name: "IPS LCD Gaming Monitor",
        price: 400,
        sale: 30,
        rating: 4.5,
        img: pd3,
    },
    {
        id: 12,
        name: "IPS LCD Gaming Monitor",
        price: 400,
        sale: 30,
        rating: 4.5,
        img: pd3,
    },
    {
        id: 13,
        name: "IPS LCD Gaming Monitor",
        price: 400,
        sale: 30,
        rating: 4.5,
        img: pd3,
    },
    {
        id: 14,
        name: "IPS LCD Gaming Monitor",
        price: 400,
        sale: 30,
        rating: 4.5,
        img: pd3,
    }
]

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
        name: "Tai Nghe",
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

    const sliderRef = useRef({});
    const sliderRef2 = useRef({});
    const [srcFavor, setSrcFavor] = useState({});
    const [sltCategory, setSltCategory] = useState();

    //change src when click
    const handleSrc = (id) => {
        setSrcFavor((srcPrev) => ({
                ...srcPrev,
                [id]: !srcPrev[id],
            }))
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
        <div className="container-fluid contain">
            <div>
                <Carousel className="carousel">
                    <Carousel.Item>
                        <img src={banner1} alt="" className="carousel-img"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner1} alt="" className="carousel-img"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* Best sales */}
            <div className="w-100" style={{marginTop: "80px"}}>
                <div className="d-flex align-items-center">
                    <div 
                        style={{
                            backgroundColor: "red", 
                            width: "20px", 
                            height: "40px", 
                            borderRadius: "5px", 
                        }}
                    >
                    </div>

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
                                <div className="fw-bold">{String(Object.values(timeLeft)[index]).padStart(2, "0")}</div>
                                <div className="text-muted">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-end">
                        <Button 
                            className="border-0" 
                            style={{backgroundColor: "transparent"}}
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
                            style={{backgroundColor: "transparent"}}
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
                <div className="position-relative">
                    <Slider ref={sliderRef} {...settings}>
                        {products.map((product) => (
                            <div key={product.id}>
                                <div className="border rounded text-center" style={{maxWidth: "270px", maxHeight: "350px"}}>
                                    <div className="position-relative" style={{backgroundColor: "#f4f4f4", minWidth: "100%"}}>
                                        <span 
                                            className="badge bg-danger position-absolute" 
                                            style={{top: "10px", left: "10px"}}
                                        >
                                            -{product.sale}
                                        </span>
                                        <img 
                                            src={srcFavor[product.id] ? favorSlt : favor} 
                                            alt="" 
                                            className="position-absolute" 
                                            style={{top: "10px", right: "10px"}} 
                                            onClick={() => handleSrc(product.id)}
                                        />
                                        <img src={product.img} alt="" className="img-fluid mx-auto"/>
                                    </div>
                                    <div className="p-3">
                                        <h6 className="mt-2 text-start">{product.name}</h6>
                                        <div className="d-flex">
                                            <p className="me-3 text-danger">${product.price*(1 - product.sale/100)}</p>
                                            <p className="text-muted text-decoration-line-through">${product.price}</p>
                                        </div>
                                        <div>
                                            <StarRating rating={product.rating}/>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        ))}
                    </Slider>
                    <div>
                        <Button className="btn-danger mt-3">View All Products</Button>
                    </div>
                </div>
            </div>
            {/* This month */}
            <div className="w-100" style={{marginTop: "80px"}}>
                <div className="d-flex align-items-center">
                    <div 
                        style={{
                            backgroundColor: "red", 
                            width: "20px", 
                            height: "40px", 
                            borderRadius: "5px", 
                        }}
                    >
                    </div>

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
                <div className="position-relative">
                    <div className="d-flex justify-content-between">
                        {products.map((product) => {
                            if(product.id <= 6) {
                                return (
                                    <div key={product.id}>
                                        <div className="border rounded text-center product" style={{maxWidth: "270px", maxHeight: "350px"}}>
                                            <div className="position-relative" style={{backgroundColor: "#f4f4f4", minWidth: "100%"}}>
                                                {/* <span 
                                                    className="badge bg-danger position-absolute" 
                                                    style={{top: "10px", left: "10px"}}
                                                >
                                                    -{product.sale}
                                                </span> */}
                                                <img 
                                                    src={srcFavor[product.id] ? favorSlt : favor} 
                                                    alt="" 
                                                    className="position-absolute" 
                                                    style={{top: "10px", right: "10px"}} 
                                                    onClick={() => handleSrc(product.id)}
                                                />
                                                <img src={product.img} alt="" className="img-fluid mx-auto"/>
                                            </div>
                                            <div className="p-3">
                                                <h6 className="mt-2 text-start">{product.name}</h6>
                                                <div className="d-flex">
                                                    {/* <p className="me-3 text-danger">${product.price*(1 - product.sale/100)}</p> */}
                                                    <p className="me-3 text-danger">${product.price}</p>
                                                    {/* <p className="text-muted text-decoration-line-through">${product.price}</p> */}
                                                </div>
                                                <div>
                                                    <StarRating rating={product.rating}/>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            
            {/* Category */}
            <div className="w-100" style={{marginTop: "80px"}}>
                <hr />
                <div className="d-flex align-items-center">
                    <div 
                        style={{
                            backgroundColor: "red", 
                            width: "20px", 
                            height: "40px", 
                            borderRadius: "5px", 
                        }}
                    >
                    </div>

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
                    <div className="d-flex justify-content-between">
                        {categories.map((category) => {
                            const isSelected = sltCategory === category.id;
                            return (
                                <div key={category.id}>
                                    <div 
                                        className="p-5 border rounded" 
                                        style={{
                                            maxWidth: "175px", maxHeight: "145px",
                                            backgroundColor: isSelected ? "red" : "transparent",
                                            color: isSelected ? "white" : "black",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => setSltCategory(category.id)}
                                    >
                                        <img src={isSelected ? category.img[1] : category.img[0]} alt="" className="mx-auto"/>
                                        <p className="text-center text-truncate">{category.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <hr />

            <div className="w-100" style={{marginTop: "80px"}}>
                <div className="d-flex align-items-center">
                    <div 
                        style={{
                            backgroundColor: "red", 
                            width: "20px", 
                            height: "40px", 
                            borderRadius: "5px", 
                        }}
                    >
                    </div>

                    <div className="d-flex align-items-center justify-content-center text-center">
                        <p className="text-danger my-auto ms-3 fw-bold w-100">Our Products</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <h3 className="my-auto me-5">Explore Our Products</h3>
                    </div>
                    <div className="flex-end">
                        <Button 
                            className="border-0" 
                            style={{backgroundColor: "transparent"}}
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
                            style={{backgroundColor: "transparent"}}
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
                <div className="position-relative">
                    <Slider ref={sliderRef2} {...settingsRow}>
                        {products.map((product) => (
                            <div key={product.id}>
                                <div className="border rounded text-center mt-3 product" style={{maxWidth: "270px", maxHeight: "350px"}}>
                                    <div className="position-relative" style={{backgroundColor: "#f4f4f4", minWidth: "100%"}}>
                                        {/* <span 
                                            className="badge bg-danger position-absolute" 
                                            style={{top: "10px", left: "10px"}}
                                        >
                                            -{product.sale}
                                        </span> */}
                                        <img 
                                            src={srcFavor[product.id] ? favorSlt : favor} 
                                            alt="" 
                                            className="position-absolute" 
                                            style={{top: "10px", right: "10px"}} 
                                            onClick={() => handleSrc(product.id)}
                                        />
                                        <img src={product.img} alt="" className="img-fluid mx-auto"/>
                                    </div>
                                    <div className="p-3">
                                        <h6 className="mt-2 text-start">{product.name}</h6>
                                        <div className="d-flex">
                                            {/* <p className="me-3 text-danger">${product.price*(1 - product.sale/100)}</p>
                                            <p className="text-muted text-decoration-line-through">${product.price}</p> */}
                                            <p className="me-3 my-auto text-danger">${product.price}</p>
                                            <div className="my-auto" style={{maxWidth: "30px"}}>
                                                <StarRating rating={product.rating}/>
                                            </div>
                                        </div>
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        ))}
                    </Slider>
                    <div>
                        <Button className="btn-danger mt-3">View All Products</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;