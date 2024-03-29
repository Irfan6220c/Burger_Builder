import * as actionTypes from "./actionsTypes"
import axios from "../../axios-orders"



export const addIngredient = (name) => {

    return {

        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    };

}

export const removeIngredient = (name) => {

    return {

        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    };

}


export const setIngredient = (ingredients) => {

    return {

        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    };
}

export const fetchIngredientFailed = () => {

    return {

        type:actionTypes.FETCH_INGREDIENTS_FAILED
    };
}


export const initIngredient = () => {

return dispatch => {
    axios.get ("https://react-my-burger-54c5d-default-rtdb.firebaseio.com/Ingredients.json")
    .then(response => {
      dispatch(setIngredient(response.data));
    })
    .catch(err => {

        dispatch(fetchIngredientFailed());
    }) 

}


}





