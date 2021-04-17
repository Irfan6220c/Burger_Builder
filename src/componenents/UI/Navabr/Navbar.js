import React, {Fragment}from "react"
import { Navbar, Nav } from 'react-bootstrap';
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import burgerlogo from "../../UI/Modal/burger-logo.png"
import {Link} from "react-router-dom"




const navbar = (props) => (

    <Fragment>
    <Navbar bg="warning"  expand="lg" >
    <Navbar.Brand href="#home" onClick={props.clicked}></Navbar.Brand>
    <img
        alt="NoImage"
        src={burgerlogo}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />
    <Nav className="mr-auto Navlocal">
    <Link  className="nav-link" to="/">Burger Builder</Link>
    <Link className="nav-link" to="/orders">Orders</Link>
    </Nav>
  </Navbar>
  </Fragment>


)

export default navbar;


