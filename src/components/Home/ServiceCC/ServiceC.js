import React from "react";
import SCard from "./SCard";
import Grid from "@material-ui/core/Grid";

const ServiceC = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <SCard></SCard>
        </Grid>
        {/* <Grid item xs={12} sm={4}>
          <SCard></SCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SCard></SCard>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default ServiceC;
