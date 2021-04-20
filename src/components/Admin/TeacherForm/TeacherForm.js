import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";

const TeacherForm = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    expertIn: "",
    rank: "",
    language: "",
    teacherImage: "",
  });

  const handleOnBlur = () => {
    const newT = { ...newTeacher };
    newT.name = document.getElementById("tname").value;
    newT.email = document.getElementById("temail").value;
    newT.expertIn = document.getElementById("texpertin").value;
    newT.rank = document.getElementById("trank").value;
    newT.language = document.getElementById("tlanguage").value;
    setNewTeacher(newT);
    console.log(newTeacher);
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "7898c87b25e0dcb3d9e11ef7ce79a7af");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const newT = { ...newTeacher };
        newT.teacherImage = response.data.data.display_url;
        setNewTeacher(newT);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = () => {
    fetch("http://calm-woodland-41976.herokuapp.com/addTeacher", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTeacher),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Teacher Added Successfully.");
        }
      });
    console.log("on submit", newTeacher);
  };

  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Teacher Name</Form.Label>
            <Form.Control
              id="tname"
              onBlur={handleOnBlur}
              type="text"
              placeholder="Enter Title"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Mail</Form.Label>
            <Form.Control
              id="temail"
              onBlur={handleOnBlur}
              type="mail"
              placeholder="Subtitle"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Expert In</Form.Label>
          <Form.Control
            id="texpertin"
            onBlur={handleOnBlur}
            type="text"
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Teacher Rank</Form.Label>
            <Form.Control id="trank" onBlur={handleOnBlur} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Language</Form.Label>
            <Form.Control
              id="tlanguage"
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

export default TeacherForm;
