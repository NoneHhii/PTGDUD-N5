import React from "react";
import CommentBlock from "./CommentBlock";

const Comments = () => {
  const comments = Array.from({ length: 5 }, () => ({
    userName: "Phan Huy",
    date: "2025-1-30 10:42",
    comment:
      "Sản phẩm siu chất lượng lunnnnn. Không khác gì nhiều so với tay cầm của hãng S. Ngoài ra còn 1 số chức năng khác như turbo,... Shop chăm sóc khách hàng siu siu đỉnh lun nhé, trò chuyện hay hỏi về sản phẩm đều oge lun. Nên mua nheéee",
  }));
  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center mb-4">
        <div className="bg-danger rounded me-3" style={{ width: "20px", height: "40px" }}></div>
        <h4 className="text-danger fw-semibold">Reviews About This Product</h4>
      </div>
      <div>
        {comments.map((comment, index) => (
          <CommentBlock key={index} {...comment} />
        ))}
      </div>
    </div>
  );
  
};

export default Comments;
