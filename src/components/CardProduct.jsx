import React from "react";
import StarReview from "./StarReview";

const CardProduct = ({
  discount,
  productName,
  price,
  salePrice,
  imgURL,
  star,
  reviews,
}) => {
  return (
    <div className="h-[350px] w-[270px] hover:transform hover:-translate-2 duration-500">
      <div className="h-2/3 w-full relative bg-[#F5F5F5] rounded overflow-hidden group">
        {discount && (
          <div
            className="absolute top-3 left-3 w-[55px] h-[26px] bg-[#DB4444] text-[#FAFAFA] text-xs font-normal 
                        text-center rounded place-content-center"
          >
            -{discount}%
          </div>
        )}
        <div className="absolute w-[190px] h-[180px] top-8 left-10 place-items-center content-center cursor-pointer">
          <img src={imgURL} alt="relative_product" />
        </div>
        <div className="absolute top-3 right-3">
          <div className="p-2 place-items-center bg-white cursor-pointer rounded-full mb-1">
            <img src="/detail_page/heart_small.png" alt="heart_icon" />
          </div>
          <div className="p-2 place-items-center bg-white cursor-pointer rounded-full">
            <img src="/detail_page/eye.png" alt="eye_icon" />
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 font-medium 
                    hidden group-hover:flex justify-center cursor-pointer transition-all transition-discrete"
        >
          Add To Cart
        </div>
      </div>
      <div className="h-1/3 w-full cursor-pointer">
        <h1 className="pt-4 pb-2 line-clamp-1 text-base font-medium">
          {productName}
        </h1>
        <span className="text-[#DB4444] text-base font-normal mr-3">
          ${salePrice}
        </span>{" "}
        {price && (
          <span className="text-base font-normal line-through">${price}</span>
        )}
        <StarReview star={star} text={reviews} className={"mt-2"} />
      </div>
    </div>
  );
};

export default CardProduct;
