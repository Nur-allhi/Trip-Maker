import React from "react";
import { Link } from "react-router-dom";
import "./RiderSelection.css";

const RiderSelection = (props) => {
  const { id, name, image } = props.detail;

  return (
    <div>
      <Link to={`/destination/${id}`}>
        <div className="rider">
          <div className="rider-img">
            <img src={image} alt="" />
          </div>
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default RiderSelection;
