import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Admin from "./components/Admin/Admin/Admin";
import AvailableServices from "./components/AvailableServices/AvailableServices";
import NavBar from "../src/components/Home/NavBar/NavBar";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import About from "./components/About/About";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/availableServices">
            <NavBar></NavBar>
            <AvailableServices></AvailableServices>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <NavBar></NavBar>
            <AvailableServices></AvailableServices>
          </PrivateRoute>
          <Route path="/about">
            <NavBar></NavBar>
            <About></About>
          </Route>
          <Route path="/login">
            <NavBar></NavBar>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
