import React from "react"
import "./Button.css"

const button = (props) => (

<button onClick={props.clicked} className={props.classname}>
    
    {props.children}

    </button>


)



export default button;