import React from "react";
import "../assets/style/About.css";

function About() {
  return (
    <div className="container mt-5 mb-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-secondary text-decoration-none">Home</a>
          </li>
          <li className="breadcrumb-item active text-dark" aria-current="page">
            About
          </li>
        </ol>
      </nav>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="fw-medium">Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p>
            Exclusive has more than 1 million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer goods.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="src/assets/img/bg_about.png"
            className="img-fluid shadow"
            alt="About Us"
          />
        </div>
      </div>
      <div className="row text-center mt-5">
        {[
          { count: "10.5k", text: "Sellers active on our site", img: "src/assets/img/icon_home.png" },
          { count: "33k", text: "Monthly Product Sales", img: "src/assets/img/icon_chart-mixed-up-circle-dollar.png" },
          { count: "45.5k", text: "Customers active on our site", img: "src/assets/img/icon_shopping-cart.png" },
          { count: "25k", text: "Annual gross sales on our site", img: "src/assets/img/icon_sack-dollar.png" },
        ].map((item, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card p-4 shadow border hover-shadow">
              <div className="bg-light p-3 rounded-circle mx-auto d-flex align-items-center justify-content-center" style={{ width: 80, height: 80 }}>
                <img src={item.img} alt="Icon" width={40} />
              </div>
              <h3 className="fw-bold mt-3">{item.count}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="row justify-content-center mt-5">
        {["Tom Cruise", "Emma Watson", "Will Smith"].map((name, index) => (
          <div key={index} className="col-md-4 text-center">
            <img
              src="src/assets/img/anh_nen.png"
              className="img-fluid mb-3"
              style={{ width: "320px", height: "360px" }}
              alt={name}
            />
            <h4 className="fw-medium text-start">{name}</h4>
            <p className="text-start">{index === 0 ? "Founder & Chairman" : index === 1 ? "Managing Director" : "Product Designer"}</p>
            <div className="d-flex justify-content-start">
              {["Icon-Twitter.png", "Icon-instagram.png", "Icon-Linkedin.png"].map((icon, i) => (
                <img key={i} className="p-2" src={`src/assets/img/${icon}`} alt={icon} width={30} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="row text-center mt-5">
        {[
          { img: "icon_about_3.png", title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
          { img: "icon_about_1.png", title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
          { img: "icon_about_2.png", title: "MONEY BACK GUARANTEE", text: "We return money within 30 days" },
        ].map((item, index) => (
          <div key={index} className="col-md-4">
            <img src={`src/assets/img/${item.img}`} className="mb-3 mx-auto" alt={item.title} width={60} />
            <h5 className="fw-bold">{item.title}</h5>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
