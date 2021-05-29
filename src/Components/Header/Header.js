import "./Header.css";
import { Link } from "react-router-dom";
import HeaderImage from "../../img/Urban Riders.png";
import { useContext } from "react";
import { userContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
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
        <li>{loggedInUser.displayName}</li>
        {loggedInUser?.email ? (
          <li>
            <Link to="/home">
              <button to="/login" onClick={() => setLoggedInUser({})}>
                Sign Out
              </button>
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <button to="/login">Login</button>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
