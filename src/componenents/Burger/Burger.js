import React from "react";
import "./Burger.css";
import Burgeringredient from "../Burger/Burgeringredient/Burgeringredient";

const burger = (props) => {
  let transformedIngredients = [];
  Object.keys(props.quantity).map((i) => {
    for (let index = 0; index < props.quantity[i]; index++) {
      transformedIngredients.push(<Burgeringredient type={i} />);
    }
    return transformedIngredients;
  });
  if (transformedIngredients.length === 0)
  {

    transformedIngredients = <p> Start adding the ingredients </p>}

  console.log(transformedIngredients);

  return (
    <div className="Burger">
      <Burgeringredient type="burger-top" />
      {transformedIngredients}
      <Burgeringredient type="burger-bottom" />
    </div>
  );
};

export default burger;
