import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../Header/Header";
import DisplayService from "../ServiceCC/DisplayServices/DisplayService";
import ShowTeacher from "../ShowTeacher/ShowTeacher";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <DisplayService></DisplayService>
      <ShowTeacher></ShowTeacher>
      <Footer></Footer>
    </div>
  );
};

export default Home;
