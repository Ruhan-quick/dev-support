import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Button, Col, Form } from "react-bootstrap";
import { UserContext } from "../../../App";
import PayForm from "../PayForm/PayForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ReqService = ({ modalIsOpen, closeModal, reqMeetingOn, price }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [reqShedule, setReqShedule] = useState({
    name: "",
    email: "",
    reqEmail: "",
    status: "Pending",
    reqshedule: "",
    reqDate: "",
    reqOn: "",
    gender: "",
    age: "",
    charge: "",
  });

  const handleOnChange = () => {
    const newS = { ...reqShedule };
    newS.name = document.getElementById("sname").value;
    newS.reqEmail = document.getElementById("semail").value;
    newS.reqOn = document.getElementById("sreqfor").value;
    newS.gender = document.getElementById("sgender").value;
    newS.reqshedule = document.getElementById("reqshedule").value;
    newS.age = document.getElementById("sage").value;
    const datestring = new Date().toLocaleString() + "";
    newS.reqDate = datestring;
    newS.charge = price;
    newS.email = loggedInUser.email;

    setReqShedule(newS);
  };

  const onSubmit = () => {
    fetch("http://localhost:5000/sendRequest", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reqShedule),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Request Send Successfully.");
        }
      });
    console.log("on submit", reqShedule);
  };
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-brand">{reqMeetingOn}</h2>
        <h4>{new Date().toLocaleString() + ""}</h4>

        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Applicant Name</Form.Label>
              <Form.Control
                id="sname"
                onChange={handleOnChange}
                type="text"
                placeholder="Enter Title"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Mail</Form.Label>
              <Form.Control
                id="semail"
                onChange={handleOnChange}
                type="mail"
                placeholder="Subtitle"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>For</Form.Label>
            <Form.Control
              id="sreqfor"
              onChange={handleOnChange}
              type="text"
              placeholder="Enter Description"
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Req Shedule</Form.Label>
              <Form.Control id="reqshedule" onChange={handleOnChange} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Language</Form.Label>
              <Form.Control
                id="sgender"
                onChange={handleOnChange}
                as="select"
                defaultValue="Choose..."
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Age</Form.Label>
              <Form.Control onChange={handleOnChange} id="sage" type="number" />
            </Form.Group>
          </Form.Row>
        </Form>
        <div>
          <h4>Advance Deposit (Optional)</h4>
          <PayForm></PayForm>
        </div>
        <button
          className="btn btn-warning"
          style={{
            float: "right",
            marginTop: "30px",
          }}
          onClick={onSubmit}
        >
          Submit
        </button>
      </Modal>
    </div>
  );
};

export default ReqService;
