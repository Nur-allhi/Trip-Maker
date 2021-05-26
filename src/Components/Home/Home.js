import React from "react";
import "./Home.css";
import Bus from "../../img/Frame-1.png";
import Bike from "../../img/Frame.png";
import Car from "../../img/Frame-2.png";
import Train from "../../img/Group.png";
const Home = () => {
  return (
    <div className="riders-div">
      <div className="rider">
        <div className="rider-img">
          <img src={Bus} alt="" />
        </div>
        <p className="rider-name">Bus</p>
      </div>
      <div className="rider">
        <div className="rider-img">
          <img src={Bike} alt="" />
        </div>
        <p className="rider-name">Bike</p>
      </div>
      <div className="rider">
        <div className="rider-img">
          <img src={Car} alt="" />
        </div>
        <p className="rider-name">Car</p>
      </div>
      <div className="rider">
        <div className="rider-img">
          <img src={Train} alt="" />
        </div>
        <p className="rider-name">Train</p>
      </div>
    </div>
  );
};

export default Home;
