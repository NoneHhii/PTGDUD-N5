import React from "react";
import ProductDetail from "../components/ProductDetail";
import RelativeProduct from "../components/RelativeProduct";
import Comments from "../components/Comments";

const DetailPage = () => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["#A0BCE0", "#E07575"];
  return (
    <div className="flex flex-col mx-32">
      <ProductDetail sizes={sizes} colors={colors} />
      <RelativeProduct />
      <Comments />
    </div>
  );
};

export default DetailPage;
