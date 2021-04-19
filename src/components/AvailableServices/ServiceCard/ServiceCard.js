import React from "react";
import ReqService from "../ReqService/ReqService";

const ServiceCard = ({ service }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div
      style={{
        border: "1px solid green",
        borderRadius: "15px",
        textAlign: "center",
        margin: "30px",
        backgroundColor: "lightsalmon",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "250px",
          borderRadius: "15px",
          shadow: "3px black",
        }}
        src={service.serviceImage}
        alt=""
      />
      <div
        style={{
          padding: "40px",
        }}
      >
        <h2>{service.title} </h2>
        <h3>{service.subtitle}</h3>
        <h4>Duration: {service.duration} Hour</h4>
        <h5>{service.details}</h5>
        <button onClick={openModal} className="btn btn-success">
          Request Shedule
        </button>
        <ReqService
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          reqMeetingOn={service.title}
        ></ReqService>
      </div>
    </div>
  );
};

export default ServiceCard;
