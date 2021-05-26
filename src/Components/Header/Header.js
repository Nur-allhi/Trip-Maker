import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">
          <button to="/login">Login</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
