import React,{Fragment} from "react"
import "./Buildcontrols.css"
import BuildControl from "./Buildcontrol/Buildcontrol"

const controls=[

    {label:'Salad',type: 'Salad'},
    {label:'Bacon',type: 'bacon'},
    {label:'Cheese',type: 'cheese'},
    {label:'Meat',type: 'meat'},


];

const buildcontrols = (props) => {

    let controlsa=controls.map((ctrl) => {

        //console.log(ctrl.type);
        return (<BuildControl label={ctrl.label} key={ctrl.type} removed= {() => props.ingredientremoved(ctrl.type)}  added={() => props.ingredientadded(ctrl.type)}/>)
       })


    return (

     <Fragment>   

    <div className="BuildControls">  
    <p> Current Price is {props.price}</p>  
    {controlsa}     
    <button onClick={props.ordered} disabled={!props.purchaseable} className="OrderButton"> Order Now  </button>   
        </div>
        
        </Fragment>
)
}


export default buildcontrols;