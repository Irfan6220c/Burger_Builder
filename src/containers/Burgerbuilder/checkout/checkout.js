import React, { Component } from "react";
import CheckoutSummary from "../../../componenents/UI/checkoutSummary/checkoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./contactData/contactData";
import { connect } from "react-redux";


class Checkout extends Component {


  oncheckoutCancel = () => {
    this.props.history.goBack();
  };
  oncheckoutContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
      console.log(this.props.purchased);
      const purchaseredirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;

      summary = (
        <div>
          {purchaseredirect}

          <CheckoutSummary
            ingredients={this.props.ings}
            oncheckoutCancel={this.oncheckoutCancel}
            oncheckoutContinue={this.oncheckoutContinue}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }

    return <div>{summary}</div>;
  }
}

const mapStateToprops = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalprice,
    purchased: state.orders.purchased,
  };
};



export default connect(mapStateToprops)(Checkout);
