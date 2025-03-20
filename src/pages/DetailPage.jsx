import React from "react";
import ProductDetail from "../components/ProductDetail";
import RelativeProduct from "../components/RelativeProduct";
import Comments from "../components/Comments";

const DetailPage = () => {
  const product = {
    name: "Havic HV G-92 Gamepad",
    star: 4,
    reviews: 150,
    price: 192.0,
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    img: "/detail_page/mainproduct.png",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#A0BCE0", "#E07575"],
  };
  return (
    <div className="flex flex-col mx-32">
      <ProductDetail product={product} />
      <RelativeProduct />
      <Comments />
    </div>
  );
};

export default DetailPage;
