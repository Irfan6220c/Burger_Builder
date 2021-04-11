import React from 'react'
import './Burgeringredient.css'
import PropTypes from 'prop-types'

const Burgeringredient = (props) => {

let ingredient= null;

switch (props.type) {

    case ('burger-bottom'):
        ingredient= (<div className= "BreadBottom"></div>);
        break;

    case ('burger-top'):
        ingredient= (<div className= "BreadTop">
           <div className="Seeds1"></div>
           <div className="Seeds2"></div>
        </div>);
        break;
    case ('meat'):
        ingredient= (<div className= "Meat"></div>);
        break;
    case ('cheese'):
        ingredient= (<div className= "Cheese"></div>);
        break;
    case ('bacon'):
        ingredient= (<div className= "Bacon"></div>);
        break;
    case ('Salad'):
        ingredient= (<div className= "Salad"></div>);
        break;

    default:
        ingredient=null;
        
        

}
return ingredient;

}

Burgeringredient.propTypes = {
    type: PropTypes.string.isRequired
  };



export default Burgeringredient;