import React, { useState } from "react";
import { useParams } from "react-router";
import fakeData from "../../utilities/fakeData.json";
import MapImage from "../../img/Map.png";
import "./Destination.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Destination = () => {
  const { riderId } = useParams();
  const riderIdNum = Number(riderId);
  const rideInfo = fakeData.find((getRes) => getRes.id === riderIdNum);
  const { name, cost, image } = rideInfo;

  return (
    <div className="destination">
      <div className="search-for-destination">
        <form>
          <p>Pick form</p>
          <input type="search" />
          <p>Pick to</p>
          <input type="search" />
          <br />
          {/* <input className="search-btn" type="submit" value="Search" /> */}
        </form>
        <DropdownButton className="dropDownMainDiv" title="Search">
          <div className="dropDownResult">
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <p>Name: {name}</p>
              <p>Name: {cost}</p>
            </div>
          </div>
        </DropdownButton>
      </div>
      <div>
        <img src={MapImage} alt="" />
      </div>
    </div>
  );
};

export default Destination;
