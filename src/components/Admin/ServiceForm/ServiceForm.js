import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";

const ServiceForm = () => {
  const [newService, setNewService] = useState({
    title: "",
    subtitle: "",
    details: "",
    duration: "",
    language: "",
    serviceImage: "",
    price: "",
  });

  const handleOnBlur = () => {
    const news = { ...newService };
    news.title = document.getElementById("stitle").value;
    news.subtitle = document.getElementById("ssubtitle").value;
    news.details = document.getElementById("sdescription").value;
    news.duration = document.getElementById("sduration").value;
    news.language = document.getElementById("slanguage").value;
    news.price = document.getElementById("sprice").value;
    setNewService(news);
    // console.log(newService);
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "7898c87b25e0dcb3d9e11ef7ce79a7af");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const news = { ...newService };
        news.serviceImage = response.data.data.display_url;
        setNewService(news);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = () => {
    fetch("http://calm-woodland-41976.herokuapp.com/addService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Service Added Successfully.");
        }
      });
    console.log("on submit", newService);
  };

  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Service Title</Form.Label>
            <Form.Control
              id="stitle"
              onBlur={handleOnBlur}
              type="text"
              placeholder="Enter Title"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Subtitle</Form.Label>
            <Form.Control
              id="ssubtitle"
              onBlur={handleOnBlur}
              type="text"
              placeholder="Subtitle"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Price</Form.Label>
            <Form.Control
              id="sprice"
              onBlur={handleOnBlur}
              type="text"
              placeholder="Price"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            id="sdescription"
            onBlur={handleOnBlur}
            type="text"
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Duration</Form.Label>
            <Form.Control id="sduration" onBlur={handleOnBlur} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Language</Form.Label>
            <Form.Control
              id="slanguage"
              onBlur={handleOnBlur}
              as="select"
              defaultValue="Choose..."
            >
              <option>Select..</option>
              <option>Python</option>
              <option>JavaScript</option>
              <option>Java</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={handleImageUpload} />
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
        Save
      </button>
    </div>
  );
};

export default ServiceForm;
