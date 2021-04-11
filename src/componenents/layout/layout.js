import React, {Fragment} from "react";
import './Layout.css'
import Navbar from "../UI/Navabr/Navbar"


const layout = (props) => (
  <Fragment>
      <Navbar />
    <div> Toolbar, Sidebar, Backdrop </div>
    <main className="Content">
         {props.children} 
         </main>
  </Fragment>
);

export default layout;
