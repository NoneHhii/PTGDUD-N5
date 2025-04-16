import React from "react";
import StarReview from "./StarReview";

const CommentBlock = ({ userName, date, comment }) => {
  return (
    <div className="d-flex p-2 w-100">
      <img
        src="/public/detail_page/user.png"
        alt="user"
        className="rounded-circle me-3"
        style={{ width: "32px", height: "32px" }}
      />
      <div className="d-flex flex-column">
        <h6 className="mb-2 fw-normal text-start">{userName}</h6>
        <StarReview star={5} className="mb-2" />
        <small className="text-muted text-start">{date}</small>
        <p className="mt-3 text-start" style={{ width: "80%" }}>{comment}</p>
      </div>
    </div>
  );
  
};

export default CommentBlock;
