import React, { useState } from "react";
import StarReview from "./StarReview";

const ProductDetail = ({ sizes, colors }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [numOfProduct, setNumOfProduct] = useState(1);
  return (
    <div className="flex flex-row justify-start">
      <div className="flex flex-col h-full">
        <div className="bg-[#F5F5F5] p-4 place-items-center mb-11">
          <img src="/detail_page/extra1.png" alt="extrapicture" />
        </div>
        <div className="bg-[#F5F5F5] p-4 place-items-center mb-11">
          <img src="/detail_page/extra2.png" alt="extrapicture" />
        </div>
        <div className="bg-[#F5F5F5] p-4 place-items-center mb-11">
          <img src="/detail_page/extra3.png" alt="extrapicture" />
        </div>
        <div className="bg-[#F5F5F5] p-4 place-items-center">
          <img src="/detail_page/extra4.png" alt="extrapicture" />
        </div>
      </div>
      <div className="w-[40wh] flex flex-col bg-[#F5F5F5] justify-center px-6 mr-16 ml-8">
        <img src="/detail_page/mainproduct.png" alt="mainproduct" />
      </div>
      <div className="flex flex-col w-1/3 pr-3">
        <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
        <div className="flex flex-row items-center my-4">
          <StarReview star={4} text={"150 Reviews"} />
          <div className="ml-4 pl-4 border-[#000000] border-l text-[#00FF66] text-sm font-medium">
            In Stock
          </div>
        </div>
        <h2 className="text-2xl font-normal mt-4 mb-6">$192.00</h2>
        <p className="text-base font-normal pb-6 border-b border-[#000000]">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        <div className="flex flex-row items-center">
          <h2 className="text-xl font-normal pr-6 my-6">Colours:</h2>
          {colors.map((color) => (
            <button
              key={color}
              className={`w-4 h-4 cursor-pointer mr-4 rounded-full ${
                selectedColor === color ? "border-3 p-2" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
        <div className="flex flex-row">
          <h2 className="text-xl font-normal pr-6">Size:</h2>
          {sizes.map((size) => (
            <button
              key={size}
              className={`w-8 h-8 border cursor-pointer mr-4 text-sm font-normal rounded ${
                selectedSize === size ? "bg-[#DB4444] text-[#FAFAFA]" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="flex flex-row items-center mt-6 mb-10">
          <div className="flex flex-row items-center border rounded-sm">
            <button
              className="w-10 h-11 border-r cursor-pointer text-2xl font-normal"
              onClick={() => {
                if (numOfProduct > 1) setNumOfProduct(numOfProduct - 1);
              }}
            >
              -
            </button>
            <div className="w-20 text-center text-xl font-normal">
              {numOfProduct}
            </div>
            <button
              className="w-10 h-11 border-l cursor-pointer bg-[#DB4444] text-2xl font-normal text-white"
              onClick={() => setNumOfProduct(numOfProduct + 1)}
            >
              +
            </button>
          </div>
          <button className="flex mx-4 text-[#FAFAFA] text-base font-normal bg-[#DB4444] py-2.75 px-12 rounded cursor-pointer">
            Buy Now
          </button>
          <div className="flex flex-row items-center border rounded-sm p-2.75 cursor-pointer">
            <img src="/detail_page/heart.png" alt="heart" />
          </div>
        </div>
        <div className="flex flex-col border">
          <div className="flex flex-row items-center border-b pl-4 pt-6 pb-4">
            <img src="/detail_page/truck.png" alt="truck" />
            <div className="flex flex-col ml-4 ">
              <p className="text-base font-medium pb-2">Free Delivery</p>
              <p className="text-xs font-normal">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center pl-4 pt-4 pb-6">
            <img src="/detail_page/return.png" alt="return" />
            <div className="flex flex-col ml-4">
              <p className="text-base font-medium pb-2">Return Delivery</p>
              <p className="text-xs font-normal">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
