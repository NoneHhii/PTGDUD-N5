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
        <h1 className="mb-2 text-sm font-normal">{userName}</h1>
        <StarReview star={5} className={"mb-2"} />
        <h2 className="text-xs font-light">{date}</h2>
        <p className="text-base font-normal mt-4 w-[80%]">{comment}</p>
      </div>
    </div>
  );
};

export default CommentBlock;
