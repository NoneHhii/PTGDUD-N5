import React from "react";
import "../assets/style/About.css";
function About() {
  return (
    <>
      <div className="md:container md:mx-auto mt-15 h-200">
        <div className="">
          <div>
            <a href="#" className="text-sm text-gray-400">
              Home
            </a>

            <span className="mx-4">/</span>

            <a href="#" className="text-sm">
              About
            </a>
          </div>
        </div>
        <div className="h-130 flex">
          <div className="" style={{ width: "50%" }}>
            <div className="pt-30" style={{ width: "85%" }}>
              <div className="pb-10">
                <span className="text-5xl font-medium">Our Story</span>
              </div>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p className="mt-5">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          <div style={{ width: "50%" }} className="shadow">
            <img
              style={{ width: "1000px" }}
              src="src/assets/img/bg_about.png"
            ></img>
          </div>
        </div>
        <div className="mt-5 flex p-5 justify-center">
          <div className="card_about pt-6 text-center shadow border border-gray-300 h-50 w-60 justify-center  hover:bg-[#DB4444] mr-5">
            <div className=" mx-auto flex justify-center items-center card_about_statitic bg-gray-200 w-20 h-20 rounded-full ">
              <img src="src/assets/img/icon_home.png" alt="" width={40} />
            </div>
            <div className="mt-3">
              <span className=" text-3xl font-bold">10.5k</span>
            </div>
            <div className="mt-2">
              <span>Sallers active our site</span>
            </div>
          </div>
          <div className="card_about pt-6 text-center shadow border border-gray-300 h-50 w-60 justify-center  hover:bg-[#DB4444] mr-5">
            <div className=" mx-auto flex justify-center items-center card_about_statitic bg-gray-200 w-20 h-20 rounded-full ">
              <img
                src="src/assets/img/icon_chart-mixed-up-circle-dollar.png"
                alt=""
                width={40}
              />
            </div>
            <div className="mt-3">
              <span className=" text-3xl font-bold">33k</span>
            </div>
            <div className="mt-2">
              <span>Mopnthly Produduct Sale</span>
            </div>
          </div>
          <div className="card_about pt-6 text-center shadow border border-gray-300 h-50 w-60 justify-center  hover:bg-[#DB4444] mr-5">
            <div className=" mx-auto flex justify-center items-center card_about_statitic bg-gray-200 w-20 h-20 rounded-full ">
              <img
                src="src/assets/img/icon_shopping-cart.png"
                alt=""
                width={40}
              />
            </div>
            <div className="mt-3">
              <span className=" text-3xl font-bold">45.5k</span>
            </div>
            <div className="mt-2">
              <span>Customer active in our site</span>
            </div>
          </div>
          <div className="card_about pt-6 text-center shadow border border-gray-300 h-50 w-60 justify-center  hover:bg-[#DB4444] mr-5">
            <div className=" mx-auto flex justify-center items-center card_about_statitic bg-gray-200 w-20 h-20 rounded-full ">
              <img
                src="src/assets/img/icon_sack-dollar.png"
                alt=""
                width={40}
              />
            </div>
            <div className="mt-3">
              <span className=" text-3xl font-bold">25k</span>
            </div>
            <div className="mt-2">
              <span>Anual gross sale in our site</span>
            </div>
          </div>
        </div>
        <div className="mt-25 h-150 flex justify-center">
          <div className="h-90 w-80 p-2">
            <img
              src="src/assets/img/anh_nen.png"
              style={{ width: "320px", height: "360px" }}
              alt=""
            />
            <div className="mt-4">
              <span className="text-3xl font-medium">Tom Cruise</span>
              <p>Founder & Chairman</p>
              <div className="flex">
                <img
                  className="p-2"
                  src="src/assets/img/Icon-Twitter.png"
                ></img>
                <img
                  className="p-2"
                  src="src/assets/img/Icon-instagram.png"
                ></img>
                <img
                  className="p-2"
                  src="src/assets/img/Icon-Linkedin.png"
                ></img>
              </div>
            </div>
          </div>
          <div className="h-90 w-80 p-2">
            <img
              src="src/assets/img/anh_nen.png"
              style={{ width: "320px", height: "360px" }}
              alt=""
            />
            <div className="mt-4">
              <span className="text-3xl font-medium">Emma Watson</span>
              <p>Managing Director</p>
              <div className="flex">
                <img
                  className="p-2"
                  src="src/assets/img/Icon-Twitter.png"
                ></img>
                <img
                  className="p-2"
                  src="src/assets/img/Icon-instagram.png"
                ></img>
                <img
                  className="p-2"
                  src="src/assets/img/Icon-Linkedin.png"
                ></img>
              </div>
            </div>
          </div>
          <div className="h-90 w-80 p-2">
            <img
              src="src/assets/img/anh_nen.png"
              style={{ width: "320px", height: "360px" }}
              alt=""
            />
            <div className="mt-4">
              <span className="text-3xl font-medium">Will Smith</span>
              <p>Product Designer</p>
              <div className="flex">
                <img
                  className="p-2"
                  src="src/assets/img/Icon-Twitter.png"
                ></img>
                <img
                  className="p-2"
                  src="src/assets/img/Icon-instagram.png"
                ></img>
                <img
                  className="p-2"
                  src="src/assets/img/Icon-Linkedin.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-100">
          <div className="text-center  w-80">
            <div className="flex justify-center mb-5">
              <img src="src/assets/img/icon_about_3.png" alt="" />
            </div>
            <span className="text-2xl font-bold">FREE AND FAST DELIVERY</span>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="text-center  w-80">
            <div className="flex justify-center mb-5">
              <img src="src/assets/img/icon_about_1.png" alt="" />
            </div>
            <span className="text-2xl font-bold">24/7 CUSTOMER SERVICE</span>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="text-center  w-80">
            <div className="flex justify-center mb-5">
              <img src="src/assets/img/icon_about_2.png" alt="" />
            </div>
            <span className="text-2xl font-bold">MONEY BACK GUARANTEE</span>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
