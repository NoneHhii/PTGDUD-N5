import React from "react";
import "../assets/style/About.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <>
      <div className="container py-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-secondary text-decoration-none">
                Home
              </a>
            </li>
            <li
              className="breadcrumb-item active text-dark"
              aria-current="page"
            >
              About
            </li>
          </ol>
        </nav>

        <div className="mb-5">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div>
              <img
                style={{
                  objectFit: "cover",
                  height: "500px",
                  width: "100%",
                  objectPosition: "30% 70%",
                }}
                src="/src/assets/img/carousel1.png"
                alt="Carousel image 1"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-medium">{name}</h3>
                <p className="text-gray-500">
                  {index === 0
                    ? "Founder & Chairman"
                    : index === 1
                    ? "Managing Director"
                    : "Product Designer"}
                </p>
                <div className="flex justify-center space-x-3 mt-3">
                  {[
                    "Icon-Twitter.png",
                    "Icon-instagram.png",
                    "Icon-Linkedin.png",
                  ].map((icon, idx) => (
                    <img
                      key={idx}
                      src={`src/assets/img/${icon}`}
                      className=""
                      alt="social"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <img
                style={{
                  objectFit: "cover",
                  height: "500px",
                  width: "100%",
                }}
                src="/src/assets/img/carousel2.jpg"
                alt="Carousel image 2"
              />
            </div>
            <div>
              <img
                style={{
                  objectFit: "cover",
                  height: "500px",
                  width: "100%",
                  objectPosition: "30% 60%",
                }}
                src="/src/assets/img/carousel3.jpg"
                alt="Carousel image 3"
              />
            </div>
          </Carousel>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-md-6 p-3">
            <h2 className="display-5 fw-medium mb-4">Our Story</h2>
            <p>
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands serving 3
              million customers.
            </p>
            <p className="mt-3">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer goods to electronics.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <video
              className="img-fluid shadow"
              style={{ maxHeight: "400px", width: "auto" }}
              playsInline
              muted
              autoPlay
              loop
              src="src/assets/img/video_bout.mp4"
              alt="About Us"
            />
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 my-5 text-center">
          {[
            {
              icon: "icon_home.png",
              value: "10.5k",
              text: "Sellers active on our site",
            },
            {
              icon: "icon_chart-mixed-up-circle-dollar.png",
              value: "33k",
              text: "Monthly Product Sale",
            },
            {
              icon: "icon_shopping-cart.png",
              value: "45.5k",
              text: "Customers active on our site",
            },
            {
              icon: "icon_sack-dollar.png",
              value: "25k",
              text: "Annual gross sale",
            },
          ].map((item, index) => (
            <div key={index} className="col">
              <div className="card h-100 border shadow-sm hover-card">
                <div className="card-body d-flex flex-column align-items-center">
                  <div
                    className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src={`src/assets/img/${item.icon}`}
                      alt=""
                      style={{ width: "40px", height: "auto" }}
                    />
                  </div>
                  <h3 className="card-title fs-2 fw-bold">{item.value}</h3>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center g-4 my-5">
          {["Tom Cruise", "Emma Watson", "Will Smith"].map((name, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 col-12 d-flex flex-column align-items-center"
              style={{ maxWidth: "300px" }}
            >
              <img
                src="src/assets/img/anh_nen.png"
                className="img-fluid rounded shadow-sm"
                alt={name}
              />
              <div className="mt-4 text-center">
                <h3 className="fs-4 fw-medium">{name}</h3>
                <p className="text-secondary">
                  {index === 0
                    ? "Founder & Chairman"
                    : index === 1
                    ? "Managing Director"
                    : "Product Designer"}
                </p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  {[
                    "Icon-Twitter.png",
                    "Icon-instagram.png",
                    "Icon-Linkedin.png",
                  ].map((icon, idx) => (
                    <img
                      key={idx}
                      src={`src/assets/img/${icon}`}
                      alt="social"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center g-4 my-5">
          {[
            {
              icon: "icon_about_3.png",
              title: "FREE AND FAST DELIVERY",
              desc: "Free delivery for all orders over $140",
            },
            {
              icon: "icon_about_1.png",
              title: "24/7 CUSTOMER SERVICE",
              desc: "Friendly 24/7 customer support",
            },
            {
              icon: "icon_about_2.png",
              title: "MONEY BACK GUARANTEE",
              desc: "We return money within 30 days",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 col-12 d-flex flex-column align-items-center"
              style={{ maxWidth: "300px" }}
            >
              <img
                src={`src/assets/img/${feature.icon}`}
                className="mb-4"
                style={{ width: "64px", height: "auto" }}
                alt="feature"
              />
              <h4 className="fs-5 fw-bold text-center">{feature.title}</h4>
              <p className="text-secondary mt-2 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
