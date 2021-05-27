import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div className="bgImage">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destination">
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
  );
}

export default App;
