import React from "react";

const ReviewCard = ({ rv }) => {
  return (
    <div
      style={{
        margin: "30px",
        padding: "20px",
        border: "1px solid green",
        borderRadius: "10px",
      }}
    >
      <img src={rv.profileImage} alt="" />
      <span>
        <h2>{rv.name}</h2>
        <h2>{rv.rating}</h2>
      </span>
      <h5>{rv.review}</h5>
    </div>
  );
};

export default ReviewCard;
