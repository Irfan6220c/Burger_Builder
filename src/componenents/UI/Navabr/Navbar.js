import React, {Fragment,Component}from "react"
import { Navbar, Nav } from 'react-bootstrap';
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import burgerlogo from "../../UI/Modal/burger-logo.png"
import {Link} from "react-router-dom"
import Sidebar from "./sidebar"




class Navbarlocal extends Component {

  state=
  {
    sidebarstate:false
  }

  onclickhandler = () => {

    this.setState ({sidebarstate:true})
 
    console.log(this.state.sidebarstate)
  }


    render() {
      let sidebar=null;
      if (this.state.sidebarstate)
      {
         sidebar= <Sidebar />
      }

  return (
    <Fragment>
    <Navbar bg="warning"  expand="lg" >

    <div onClick= {this.onclickhandler}>
    <img  alt="NoImage" src={burgerlogo} width="50" height="50" className="d-inline-block align-top" />
    </div>
    <Nav className="mr-auto Navlocal">
    <Link  className="nav-link" to="/">Burger Builder</Link>
    <Link className="nav-link" to="/orders">Orders</Link>
    </Nav>
  </Navbar>
  </Fragment>


)}
}

export default Navbarlocal;


