import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";
import "../../UI/Button/Button.css"

const ordersummary = (props) => {
  let itemList = [];
  itemList = Object.keys(props.ingredients).map((i) => {
    return (
      <li key={i}>
        {" "}
        {i} : {props.ingredients[i]}{" "}
      </li>
    );
  });

  return (
    <Fragment>
      <h3> Your order </h3>
      <p> A delicious burger with the following ingredients: </p>
      <ul>{itemList}</ul>
      <p> Countinue to checkout?    </p>
      <p>  Your total bill is {props.price} dollars  </p>
      <Button classname="Burron Danger" clicked={props.purchasecancel}>CANCEL</Button>
      <Button classname="Burron Success" clicked={props.purchasegoon}> ORDER NOW </Button>
    </Fragment>
  );
};

export default ordersummary;
