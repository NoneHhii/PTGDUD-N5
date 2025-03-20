import React from "react";
import "../assets/style/About.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function About() {
  return (
    <>
      <div className="container mx-auto px-4 mt-10">
        <div className="text-sm text-gray-400 flex space-x-4 mb-10">
          <a href="#" className="hover:underline">
            Home
          </a>
          <span>/</span>
          <a href="#" className="text-gray-600 hover:underline">
            About
          </a>
        </div>
        <div className="mb-10">
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
              />
            </div>
            <div>
              <img
                style={{
                  objectFit: "cover",
                  height: "500px",
                  width: "100%",
                  objectPosition: "",
                }}
                src="/src/assets/img/carousel2.jpg"
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
              />
            </div>
          </Carousel>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-10">
          <div className="md:w-1/2 p-5">
            <h2 className="text-4xl font-medium mb-4">Our Story</h2>
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands serving 3
              million customers.
            </p>
            <p className="mt-4">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer goods to electronics.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <video
              width="340"
              height="240"
              playsInline
              muted
              autoPlay
              loop
              className="w-full max-w-md md:max-w-lg shadow-lg"
              src="src/assets/img/video_bout.mp4"
              alt="About Us"
              style={{ height: "400px" }}
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
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
            <div
              key={index}
              className="p-6 shadow-lg border border-gray-300 rounded-lg hover:bg-[#db4444] transition duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-gray-200 flex items-center justify-center rounded-full">
                <img
                  src={`src/assets/img/${item.icon}`}
                  alt=""
                  className="w-10"
                />
              </div>
              <div className="mt-3 text-3xl font-bold">{item.value}</div>
              <p className="mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {["Tom Cruise", "Emma Watson", "Will Smith"].map((name, index) => (
            <div key={index} className="text-center w-64">
              <img
                src="src/assets/img/anh_nen.png"
                className="w-full rounded-lg shadow-md"
                alt={name}
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
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
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
            <div key={index} className="w-64">
              <img
                src={`src/assets/img/${feature.icon}`}
                className="w-16 mx-auto mb-4"
                alt="feature"
              />
              <h4 className="text-xl font-bold">{feature.title}</h4>
              <p className="text-gray-500 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
