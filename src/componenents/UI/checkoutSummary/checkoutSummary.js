import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import  './checkoutSummary.css';
import "../../UI/Button/Button.css"

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger quantity={props.ingredients}/>
            </div>
            <Button 
                className="Danger"
                clicked={props.oncheckoutCancel}>CANCEL</Button>
            <Button 
                className="Success"
                clicked={props.oncheckoutContinue}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;