import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
const AddAdmin = () => {
  const [newAdmin, setNewAdmin] = useState({
    email: "",
  });
  const handleOnBlur = () => {
    const nadmin = { ...newAdmin };
    nadmin.email = document.getElementById("adminemail").value;
    setNewAdmin(nadmin);
  };

  const onSubmit = () => {
    fetch("http://localhost:5000/addAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Admin Added Successfully.");
        }
      });
    console.log("on submit", newAdmin);
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>Admin Email</Form.Label>

        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter New Admin Email"
          id="adminemail"
          onBlur={handleOnBlur}
        />
      </Form.Group>
      <button
        className="btn btn-warning"
        style={{
          float: "right",
          marginTop: "30px",
        }}
        onClick={onSubmit}
      >
        Save
      </button>
    </div>
  );
};

export default AddAdmin;
