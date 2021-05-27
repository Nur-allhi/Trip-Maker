import React, { useContext } from "react";
import { useParams } from "react-router";
import { RiderContext } from "../../App";

const Destination = () => {
  const [rider] = useContext(RiderContext);
  // const idOfRider = rider.id;
  const { riderId } = useParams();
  const riderIdNum = Number(riderId);
  const rideInfo = rider.find((getRes) => getRes.id === riderIdNum);
  const { name, cost } = rideInfo;
  console.log(rideInfo);

  return (
    <div>
      <h1>{name}</h1>
      <h1>${cost}</h1>
    </div>
  );
};

export default Destination;
