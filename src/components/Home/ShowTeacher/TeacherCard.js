import React from "react";

const TeacherCard = ({ teacher }) => {
  return (
    <div>
      <img
        style={{ width: "35%", hight: "200px" }}
        src={teacher.teacherImage}
        alt=""
      />
      <div
        style={{
          backgroundColor: "wheat",
          margin: "0px 40px 40px 40px",
          padding: "10px",
          borderRadius: "15px",
          boxShadow: "5px 5px 5px 5px rgba(0,0,0,0)",
        }}
      >
        <h2 style={{ color: "#661907" }}>{teacher.name}</h2>
        <h5>{teacher.expertIn}</h5>
        <h4>{teacher.language}</h4>
      </div>
    </div>
  );
};

export default TeacherCard;
