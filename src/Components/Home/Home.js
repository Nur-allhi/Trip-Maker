import React, { useContext, useEffect } from "react";
import { RiderContext } from "../../App";
import RiderSelection from "../RiderSelection/RiderSelection";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [rider, setRider] = useContext(RiderContext);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/eef97fc9-c92a-4d55-b47f-8941bfeee265")
      .then((res) => {
        setRider(res.data);
      });
  }, []);
  return (
    <div className="riders-div">
      {rider.map((rData) => (
        <RiderSelection detail={rData} key={rData.id}></RiderSelection>
      ))}
    </div>
  );
};

export default Home;
