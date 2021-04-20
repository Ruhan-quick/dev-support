import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../Header/Header";
import DisplayService from "../ServiceCC/DisplayServices/DisplayService";
import ShowTeacher from "../ShowTeacher/ShowTeacher";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <DisplayService></DisplayService>
      <ShowTeacher></ShowTeacher>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
