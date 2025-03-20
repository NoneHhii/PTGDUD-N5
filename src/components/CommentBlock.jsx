import React from "react";
import StarReview from "./StarReview";

const CommentBlock = ({ userName, date, comment }) => {
  return (
    <div className="flex flex-row p-2 w-full">
      <img
        src="/public/detail_page/user.png"
        alt="user"
        className="h-8 w-8 mr-5"
      />
      <div className="flex flex-col">
        <h1 className="mb-2 text-sm font-normal">Phan Huy</h1>
        <StarReview star={5} className={"mb-2"} />
        <h2 className="text-xs font-light">2025-1-30 10:42</h2>
        <p className="text-base font-normal mt-4 w-[80%]">
          Sản phẩm siu chất lượng lunnnnn. Không khác gì nhiều so với tay cầm
          của hãng S. Ngoài ra còn 1 số chức năng khác như turbo,... Shop chăm
          sóc khách hàng siu siu đỉnh lun nhé, trò chuyện hay hỏi về sản phẩm
          đều oge lun. Nên mua nheéee
        </p>
      </div>
    </div>
  );
};

export default CommentBlock;
