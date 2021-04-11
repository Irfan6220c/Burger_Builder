import React, {Fragment} from "react";
import "./Backdrop.css"

const backdrop =(props) => {

    let adiv=[];

    if (props.show){

        adiv.push (<div className="Backdrop" onClick={props.clicked} > </div>)
    }


    return (
        <Fragment>
        {adiv}
        </Fragment>
    )


}

export default backdrop;