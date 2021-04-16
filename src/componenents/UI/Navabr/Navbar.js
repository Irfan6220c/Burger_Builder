import React, {Fragment}from "react"
import { Navbar, Nav } from 'react-bootstrap';
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import burgerlogo from "../../UI/Modal/burger-logo.png"



const navbar = (props) => (

    <Fragment>
    <Navbar bg="warning"  expand="lg" >
    <Navbar.Brand href="#home" onclick={props.clicked}></Navbar.Brand>
    <img
        alt="NoImage"
        src={burgerlogo}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />
    <Nav className="mr-auto Navlocal">
      <Nav.Link href="#home">Burger Builder</Nav.Link>
      <Nav.Link href="#features">Checkout</Nav.Link>
    </Nav>
  </Navbar>
  </Fragment>


)

export default navbar;


