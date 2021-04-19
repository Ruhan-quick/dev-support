import React from "react";
import { Button } from "react-bootstrap";

const ServiceCardc = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "",
        border: "1px solid green",
        borderRadius: "15px",
        margin: "25px",
      }}
      className="p-4 justify-content-center d-flex align-items-center"
    >
      <div style={{ textAlign: "center" }}>
        <img src={data} style={{ width: "160px" }} alt="" />
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed
          commodi
        </h2>
        <br />
        <Button variant="warning">Inventory</Button>
      </div>
    </div>
  );
};

export default ServiceCardc;
