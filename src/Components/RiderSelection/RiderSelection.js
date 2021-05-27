import React from "react";
import { Link } from "react-router-dom";
import "./RiderSelection.css";

const RiderSelection = (props) => {
  const { id, name, imgage } = props.detail;
  return (
    //   className="riders-div"
    <div>
      <div className="rider">
        <div className="rider-img">
          <img src={imgage} alt="" />
        </div>
        <p className="rider-name">{name}</p>
        <Link to={`/destination/${id}`}>
          <button>Fare</button>
        </Link>
      </div>
    </div>
  );
};

export default RiderSelection;
