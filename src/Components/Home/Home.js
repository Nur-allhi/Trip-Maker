import React from "react";
import RiderSelection from "../RiderSelection/RiderSelection";
import "./Home.css";
import fakeData from "../../utilities/fakeData.json";

const Home = () => {
  return (
    <div className="riders-div">
      {fakeData.map((rData) => (
        <RiderSelection detail={rData} key={rData.id}></RiderSelection>
      ))}
    </div>
  );
};

export default Home;
