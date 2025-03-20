import React from "react";

const StarReview = ({ star, text, className }) => {
  const maxStars = 5;
  return (
    <div
      className={`${className} flex flex-row items-center text-sm font-light`}
    >
      {[...Array(maxStars)].map((_, index) => (
        <img
          className="w-5 h-5"
          key={index}
          src={
            index < star
              ? "/detail_page/star.png"
              : "/detail_page/empty_star.png"
          }
          alt="star"
        />
      ))}
      {text && <span className="ml-3">({text})</span>}
    </div>
  );
};

export default StarReview;
