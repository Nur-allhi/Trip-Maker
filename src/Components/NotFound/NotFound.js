import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Not Found, please try again.</h1>
      <h4>Hints, Why this problem occured:</h4>

      <li>You havent log in or signed up</li>
      <li>You have input wrong url</li>
    </div>
  );
};

export default NotFound;
