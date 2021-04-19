import React, { useContext } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Navbar.Brand as={Link} to="/home" className="ml-5">
        <img
          style={{ height: "40px", width: "40px" }}
          src="https://cdn2.iconfinder.com/data/icons/scrum-project-blue/100/Development_team_Copy-512.png"
          alt="Dev-Support"
        />{" "}
        Dev-Support
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="mx-5">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="mx-5">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/services" className="mx-5">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard" className="mx-5">
            Dashbord
          </Nav.Link>
          <Nav.Link as={Link} to="/admin" className="mx-5">
            Admin
          </Nav.Link>
          <Button
            as={Link}
            to="/login"
            variant="outline-secondary"
            className="mx-5"
          >
            {loggedInUser.displayName || "Login"}
          </Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
