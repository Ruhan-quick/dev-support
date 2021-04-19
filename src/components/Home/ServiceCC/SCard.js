import React from "react";
import "./SCard.css";
const SCard = () => {
  //Movement Animation to happen
  const card = document.getElementsByClassName("card");
  const container = document.getElementsByClassName("container");
  //Items
  const title = document.getElementsByClassName("title");
  const sneaker = document.getElementsByClassName("sneaker img");
  const purchase = document.getElementsByClassName("purchase");
  const description = document.getElementsByClassName("info h3");
  const sizes = document.getElementsByClassName("sizes");

  //Moving Animation Event
  const handleOnMM = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };
  //Animate In
  const handleOnME = (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
  };
  //Animate Out
  const handleOnML = (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  };

  return (
    <div
      class="container"
      onMouseMove={(e) => handleOnMM(e)}
      onMouseEnter={(e) => handleOnME(e)}
      onMouseLeave={(e) => handleOnML(e)}
    >
      <div class="card">
        <div class="sneaker">
          <div class="circle"></div>
          <img src="./adidas.png" alt="adidas"></img>
        </div>
        <div class="info">
          <h1 class="title">Adidas ZX</h1>
          <h3>
            FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.
          </h3>
          <div class="sizes">
            <button>39</button>
            <button>40</button>
            <button class="active">42</button>
            <button>44</button>
          </div>
          <div class="purchase">
            <button>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SCard;
