import React from "react";
import ProductDetail from "../components/ProductDetail";
import RelativeProduct from "../components/RelativeProduct";
import Comments from "../components/Comments";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    navigate("/"); // Chuyển về trang chủ nếu không có dữ liệu
    return null;
  }
  return (
    <div className="flex flex-col mx-32 mt-5">
      <ProductDetail product={product} />
      {/* <RelativeProduct /> */}
      <Comments />
    </div>
  );
};

export default DetailPage;
