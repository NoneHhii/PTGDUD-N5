import React from "react";
import starFull from "../assets/image/Vector.png";
import starHalfFull from "../assets/image/star-half-filled.png";
import starEmpty from "../assets/image/Vector_hollow.png";

const StarRating = ({ rating }) => {
    if (typeof rating !== "number" || isNaN(rating) || rating < 0) {
        console.error("Invalid rating value:", rating);
        return <div>Error: Invalid rating</div>;
    }

    const fullStar = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStar = 5 - fullStar - (halfStar ? 1 : 0);

    return (
        <div className="d-flex">
            {[...Array(fullStar)].map((_, i) => (
                <img key={`full-${i}`} src={starFull} alt="Full Star" width={20} />
            ))}
            {halfStar && <img key="half-star" src={starHalfFull} alt="Half Star" width={20} />}
            {[...Array(emptyStar)].map((_, i) => (
                <img key={`empty-${i}`} src={starEmpty} alt="Empty Star" width={20} />
            ))}
        </div>
    );
};

export default StarRating;
