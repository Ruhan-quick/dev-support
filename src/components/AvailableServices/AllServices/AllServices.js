import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import Grid from "@material-ui/core/Grid";
import "./AllService.css";
const AllServices = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("http://calm-woodland-41976.herokuapp.com/showServices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  console.log("all Service", allServices);
  return (
    <div className="allService" style={{ padding: "60px" }}>
      <h1 style={{ textAlign: "center" }}>All Services are Here</h1>
      {/* <h5>Date & Time: {new Date().toLocaleString() + ""}</h5> */}
      <br />
      <Grid container>
        {allServices.map((s) => (
          <Grid item sm={4} xs={12}>
            <ServiceCard service={s} key={s._id}></ServiceCard>
          </Grid>
        ))}
      </Grid>
      {allServices.length}
    </div>
  );
};

export default AllServices;
