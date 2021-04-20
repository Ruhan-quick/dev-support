import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/showReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <div>
      <h1>All Reviews are Here</h1>
      <Grid container>
        {reviews.map((rv) => (
          <Grid item xs={12} sm={4}>
            <ReviewCard rv={rv}></ReviewCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ShowReview;
