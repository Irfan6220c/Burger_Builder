import React from "react"
import classes from "./sidebar.css"
import {Link} from "react-router-dom"

const sidebar = () => {

    console.log("sidebar")

return (

<div className={classes.menu}>
  <div className={classes.title}>MENU</div>
  <ul className={classes.nav}>
    <Link   to="/">Burger Builder</Link>
    <Link  to="/orders">Orders</Link>
  </ul>
</div>

)

}

export default sidebar;