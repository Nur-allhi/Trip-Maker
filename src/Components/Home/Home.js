import React, { useEffect, useState } from "react";
import RiderSelection from "../RiderSelection/RiderSelection";
import "./Home.css";

const Home = () => {
  const [rider, setRider] = useState([]);
  useEffect(() => {
    fetch(`https://mocki.io/v1/22b6894f-77f5-4f79-884a-b1c439b149cc`)
      .then((res) => res.json())
      .then((data) => setRider(data));
  }, []);
  return (
    <div className="riders-div">
      {rider.map((rData) => (
        <RiderSelection detail={rData}></RiderSelection>
      ))}
    </div>
  );
};

export default Home;
