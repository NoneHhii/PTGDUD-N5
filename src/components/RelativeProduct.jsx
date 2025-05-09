import React from "react";
import CardProduct from "./CardProduct";

const RelativeProduct = () => {
  const products = [
    {
      discount: 40,
      productName: "HAVIT HV-G92 Gamepad",
      salePrice: 120,
      price: 160,
      imgURL: "/detail_page/relative1.png",
      star: 4,
      reviews: 88,
    },
    {
      discount: 35,
      productName: "AK-900 Wired Keyboard",
      salePrice: 960,
      price: 1160,
      imgURL: "/detail_page/relative2.png",
      star: 4,
      reviews: 75,
    },
    {
      discount: 30,
      productName: "IPS LCD Gaming Monitor",
      salePrice: 370,
      price: 400,
      imgURL: "/detail_page/relative3.png",
      star: 5,
      reviews: 99,
    },
    {
      // discount: 12,
      productName: "RGB liquid CPU Cooler",
      salePrice: 160,
      price: 170,
      imgURL: "/detail_page/relative4.png",
      star: 4,
      reviews: 65,
    },
  ];
  return (
    <div className="flex flex-col mt-36 w-full">
      <div className="flex flex-row items-center mb-15 ml-8 2xl:justify-center">
        <div className="w-5 h-10 rounded-md bg-[#DB4444] 2xl:hidden"></div>
        <div className="text-[#DB4444] text-base font-semibold pl-4 2xl:text-2xl 2xl:font-semibold">
          Related Item
        </div>
      </div>
      <div className="flex flex-row gap-7.5 justify-center">
        {products.map((product, index) => (
          <CardProduct key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RelativeProduct;
