import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";

export const RiderContext = createContext();

function App() {
  const [rider, setRider] = useState([]);
  return (
    <RiderContext.Provider value={[rider, setRider]}>
      <div className="bgImage">
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/destination/:riderId">
              <Destination />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </RiderContext.Provider>
  );
}

export default App;
