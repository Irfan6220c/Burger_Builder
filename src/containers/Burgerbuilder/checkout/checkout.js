import React, { Component } from "react";
import CheckoutSummary from "../../../componenents/UI/checkoutSummary/checkoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./contactData/contactData"
import {connect} from "react-redux"


class Checkout extends Component {


  


  oncheckoutCancel = () => {
    this.props.history.goBack();
  };
  oncheckoutContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {

    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          oncheckoutCancel={this.oncheckoutCancel}
          oncheckoutContinue={this.oncheckoutContinue}
        />
        <Route 
        path={this.props.match.path + '/contact-data'} 
        component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
      ings: state.ingredients,
      price: state.totalprice,

  };
}



export default connect(mapStateToprops) (Checkout);
