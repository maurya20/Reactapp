import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Nav } from "react-bootstrap";
import logo from "./images/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
          <Navbar.Brand href="#home">
            <img
              style={{ width: "150px", height: "30px" }}
              src={logo}
              alt="Logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Router>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Header;
