import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import HeaderImage from "../../img/Urban Riders.png";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={HeaderImage} alt="" />
      <ul className="navElements">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/destination">Destination</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">
            <button to="/login">Login</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
