import React from "react";
import Grid from "@material-ui/core/Grid";
import ServiceCardc from "./ServiceCardc";
import "./DisplayService.css";

const DisplayService = () => {
  const data = {
    url1:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    url2:
      "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
    url3:
      "https://logoeps.com/wp-content/uploads/2013/03/java-eps-vector-logo.png",
  };
  return (
    <div className="bg">
      <Grid container spacing={3} className="px-5">
        <Grid item xs={12} sm={4}>
          <ServiceCardc data={data.url1}></ServiceCardc>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ServiceCardc data={data.url2}></ServiceCardc>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ServiceCardc data={data.url3}></ServiceCardc>
        </Grid>
      </Grid>
    </div>
  );
};

export default DisplayService;
