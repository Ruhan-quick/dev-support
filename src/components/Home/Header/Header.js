import React from "react";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-style ">
      <NavBar style={{ color: "wheat" }}></NavBar>
      <div className="upper-style px-3 py-5">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Header;
