//Follow the same syntax for every file so that it looks coordinated.

import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

export class Navbarlocal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Navbar>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">BurgerBuilder</Nav.Link>
          </Nav>
        </Navbar>
      </Fragment>
    );
  }
}
