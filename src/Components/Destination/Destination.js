import React from "react";
import { useParams } from "react-router";
import fakeData from "../../utilities/fakeData.json";

const Destination = () => {
  const { riderId } = useParams();
  const riderIdNum = Number(riderId);
  const rideInfo = fakeData.find((getRes) => getRes.id === riderIdNum);
  const { name, cost } = rideInfo;

  return (
    <div>
      <h1>Destination</h1>
      <h1>This is destination page</h1>
      <h1>{name}</h1>
      <h1>${cost}</h1>
    </div>
  );
};

export default Destination;
