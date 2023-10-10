import React from "react";
import "./star.css";
function StarRating({ stars }) {
  const maxStars = 5;

  const starPercentage = (stars / maxStars) * 100;

  const starPercentageRounded = Math.round(starPercentage);

  const StarStyles = () => {
    return {
      width: starPercentageRounded + "%",
    };
  };

  return (
    <div className="stars-gray">
      <div className="stars-yellow" style={StarStyles()}></div>
    </div>
  );
}

export default StarRating;
