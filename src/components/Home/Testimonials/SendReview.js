import React from "react";
import { useContext, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Button, Col, Form } from "react-bootstrap";
import { UserContext } from "../../../App";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "15px",
    boxShadow: "5px 5px 15px 5px #090434",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const SendReview = () => {
  const [review, setReview] = useState({
    name: "",
    review: "",
    rating: "",
    suggestion: "",
    profileImage: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    if (loggedInUser.email) {
      setIsOpen(true);
    } else {
      alert("Please Login to Review");
    }
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleOnChange = () => {
    const newReview = { ...review };
    newReview.review = document.getElementById("rreview").value;
    newReview.rating = document.getElementById("rrating").value;
    newReview.suggestion = document.getElementById("rsuggestion").value;
    newReview.profileImage = loggedInUser.photoURL;
    newReview.name = loggedInUser.displayName;
    setReview(newReview);
  };
  const onSubmit = () => {
    console.log(review);
    fetch("http://calm-woodland-41976.herokuapp.com/sendReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Review Send Successfully.");
        }
      });
  };
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <button onClick={openModal} className="btn btn-success">
        Review Us
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ padding: "30px" }}>
          <h2 className="text-brand">Write your review</h2>
          <h4>{new Date().toLocaleString() + ""}</h4>

          <Form>
            <Form.Group>
              <Form.Label>Review</Form.Label>
              <Form.Control
                id="rreview"
                onChange={handleOnChange}
                type="text"
                placeholder="Enter Review"
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  id="rrating"
                  onChange={handleOnChange}
                  as="select"
                  defaultValue="5"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Suggestion</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  id="rsuggestion"
                  type="text"
                />
              </Form.Group>
            </Form.Row>
          </Form>

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
        </div>
      </Modal>
    </div>
  );
};

export default SendReview;
