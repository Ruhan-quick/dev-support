import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";
import "./ShowTeacher.css";

const ShowTeacher = () => {
  const [allTeacher, setAllTeacher] = useState([]);

  useEffect(() => {
    fetch("http://calm-woodland-41976.herokuapp.com/showTeacher")
      .then((res) => res.json())
      .then((data) => setAllTeacher(data));
  }, []);
  console.log("all teacher ", allTeacher, allTeacher.length);
  return (
    <div className="showTeacher" style={{ textAlign: "center" }}>
      <br />
      <br />
      <h1 style={{ color: "white", fontSize: "65px" }}>Expert Teacher's</h1>
      <br />
      <Grid container spacing={3}>
        {allTeacher.map((s) => (
          <Grid item sm={4} xs={12}>
            <TeacherCard
              key={math.random()}
              teacher={s}
              id={s._id}
            ></TeacherCard>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
    </div>
  );
};

export default ShowTeacher;
