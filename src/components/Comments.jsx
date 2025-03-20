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
    <div className="flex flex-col mt-36 w-full">
      <div className="flex flex-row items-center mb-8 ml-8 2xl:justify-center">
        <div className="w-5 h-10 rounded-md bg-[#DB4444] 2xl:hidden"></div>
        <div className="text-[#DB4444] text-base font-semibold pl-4 2xl:text-2xl 2xl:font-semibold">
          Reviews About This Product
        </div>
      </div>
      <div className="flex flex-col ml-8">
        {comments.map((comment, index) => (
          <CommentBlock key={index} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
