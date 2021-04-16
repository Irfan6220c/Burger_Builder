import React, { Component, Fragment } from "react";
import Burger from "../../componenents/Burger/Burger";
import Buildcontrols from "../../componenents/Burger/Buildcontrols/Buildcontrols";
import Modal from "../../componenents/UI/Modal/Modal"
import Ordersummary from "../../componenents/Burger/ordersummary/ordarsummary"
import axios from "../../axios-orders"
import Spinner from "../../componenents/UI/spinner/spinner"
const INGREDIENT_PIRCES = {
  Salad: 1,
  bacon: 0.6,
  cheese: 0.9,
  meat: 2,
};

class Burgerbuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        Salad: 1,
        bacon: 1,
        cheese: 1,
        meat: 1,
      },
      totalprice: 4,
      purchaseable: false,
      purchasing:false,
      loading:false
    };
  }

  updatepurchasestate = () => {
    const ingredientlist = { ...this.state.ingredients };
    const values = Object.values(ingredientlist);
    const total = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    console.log(total);
    this.setState({ purchaseable: total > 0 });
  };

  addeventhandler = (type) => {
    const olCount = this.state.ingredients[type];
    const updatedcount = olCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedcount;
    const totalprice = INGREDIENT_PIRCES[type] + this.state.totalprice;
    this.setState({ ingredients: updatedIngredients, totalprice: totalprice });
    this.updatepurchasestate();
  };

  removeeventhandler = (type) => {
    const olCount = this.state.ingredients[type];
    const updatedcount = olCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedcount;
    const totalprice = this.state.totalprice - INGREDIENT_PIRCES[type];
    this.setState({ ingredients: updatedIngredients, totalprice: totalprice });
    this.updatepurchasestate();
  };

  purchaseable = () => {

    this.setState({purchasing:true});

  }
  purchasinghandler = () => {
     
    console.log("clicked");

    this.setState({purchasing:false});

  }
  purchasecontinue = () => {

    //alert("YOU CONTINUE")
    this.setState({loading:true});
    const backendobject={ 
      ingredients: this.state.ingredients,
      price:this.state.totalprice,
      customer: {
        name: "Irfan",
        street: "Hopefully in Munich",
        Country: "Germany"

      }
    }
    axios.post('/orders.json',backendobject)
    .then((response) => {
      this.setState({loading:false,purchasing:false});

      console.log(response);});

  }


  render() {

    let ordersummary=  <Ordersummary ingredients={this.state.ingredients}
    purchasecancel={this.purchasinghandler}
    purchasegoon={this.purchasecontinue}
    price={this.state.totalprice} />

    if (this.state.loading){
      ordersummary= <Spinner />
    }

    return (
      <Fragment>
          <Modal show={this.state.purchasing} modalclosed={this.purchasinghandler}>
             {ordersummary}
              </Modal>
        <Burger quantity={this.state.ingredients} />
        <Buildcontrols
          ingredientadded={this.addeventhandler}
          ingredientremoved={this.removeeventhandler}
          purchaseable={this.state.purchaseable}
          price={this.state.totalprice}
          ordered={this.purchaseable}
        />
      </Fragment>
    );
  }
}

export default Burgerbuilder;
