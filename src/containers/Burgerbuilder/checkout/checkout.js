import React, { Component } from "react";
import CheckoutSummary from "../../../componenents/UI/checkoutSummary/checkoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./contactData/contactData"

class Checkout extends Component {
  state = {
    ingredients: null,
    price:0
  };

  componentWillMount() {
    const query = new URLSearchParams( this.props.location.search );
    const ingredients = {};
    let price = 0;
    for ( let param of query.entries() ) {
        // ['salad', '1']
        if (param[0] === 'Price') {
            price = param[1];
        } else {
            ingredients[param[0]] = +param[1];
        }
    }
    this.setState( { ingredients: ingredients, price: price } );
}


  oncheckoutCancel = () => {
    this.props.history.goBack();
  };
  oncheckoutContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
      console.log(this.state.ingredients);
      console.log(this.state.price);
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          oncheckoutCancel={this.oncheckoutCancel}
          oncheckoutContinue={this.oncheckoutContinue}
        />
        <Route 
        path={this.props.match.path + '/contact-data'} 
        render={(props)=> (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)}
        />
      </div>
    );
  }
}

export default Checkout;
