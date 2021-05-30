import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <div className="header">
      <h3>Trip Maker</h3>
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
        <li>{loggedInUser.displayName || loggedInUser.name}</li>
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
