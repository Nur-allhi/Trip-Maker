import React from "react";
import { useParams } from "react-router";
import fakeData from "../../utilities/fakeData.json";
import MapImage from "../../img/Map.png";
import "./Destination.css";

const Destination = () => {
  const { riderId } = useParams();
  const riderIdNum = Number(riderId);
  const rideInfo = fakeData.find((getRes) => getRes.id === riderIdNum);
  const { name, cost } = rideInfo;

  const handleSubmit = (e) => {
    console.log("clicked search");
    e.preventDefault();
  };

  return (
    <div className="destination">
      <div className="search-for-destination">
        <form onSubmit={handleSubmit}>
          <p>Pick form</p>
          <input type="search" />
          <p>Pick to</p>
          <input type="search" />
          <br />
          <input className="search-btn" type="submit" value="Search" />
        </form>
      </div>
      <div>
        <img src={MapImage} alt="" />
      </div>
    </div>
  );
};

export default Destination;
