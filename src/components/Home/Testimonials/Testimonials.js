import React, { useState } from "react";
import SendReview from "./SendReview";
import ShowReview from "./ShowReview";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div className="testimonials" style={{ textAlign: "center" }}>
      <h1>Testimonials</h1>
      <ShowReview></ShowReview>
      <SendReview></SendReview>
    </div>
  );
};

export default Testimonials;
