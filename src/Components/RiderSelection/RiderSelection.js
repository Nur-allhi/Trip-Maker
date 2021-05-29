import React from "react";
import { Link } from "react-router-dom";
import "./RiderSelection.css";

const RiderSelection = (props) => {
  const { id, name, image } = props.detail;

  return (
    <div>
      <Link className="link-decoration" to={`/destination/${id}`}>
        <div className="rider">
          <div>
            <img src={image} alt="" />
          </div>
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default RiderSelection;
