import React from "react";
import fakeData from "../../utilities/fakeData";
import RiderSelection from "../RiderSelection/RiderSelection";
import "./Home.css";

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
