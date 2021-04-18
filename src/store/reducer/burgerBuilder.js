import * as actionTypes from "../actions/actionsTypes"

const initialState ={

    ingredients:null,
    totalprice: 4,
    purchaseable:false,
    error:false

}

const INGREDIENT_PIRCES = {
    Salad: 1,
    bacon: 0.6,
    cheese: 0.9,
    meat: 2,
  };
  

const  reducer = (state = initialState, action) => {

    switch (action.type){

        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalprice:state.totalprice+ INGREDIENT_PIRCES[action.ingredientName],
                purchaseable: true ? state.totalprice > 4 : false
                

            }
        case actionTypes.REMOVE_INGREDIENT:
                return{
                    ...state,
                    ingredients:{
                        ...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                    },
                    totalprice:state.totalprice - INGREDIENT_PIRCES[action.ingredientName],
                    purchaseable: false ? state.totalprice === 4 : false
                    
                }
        case actionTypes.SET_INGREDIENTS:
            return{
                ...state,
                    ingredients:
                        action.ingredients,
                        error:false,
                        totalprice: 4

            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
        return {

            ...state,
            error:true


        }             
        default:
            return state; 
            


    }



};

export default reducer;