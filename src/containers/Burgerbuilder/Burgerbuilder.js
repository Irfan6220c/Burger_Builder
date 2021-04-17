import React, { Component, Fragment } from "react";
import Burger from "../../componenents/Burger/Burger";
import Buildcontrols from "../../componenents/Burger/Buildcontrols/Buildcontrols";
import Modal from "../../componenents/UI/Modal/Modal";
import Ordersummary from "../../componenents/Burger/ordersummary/ordarsummary";
import axios from "../../axios-orders";
import Spinner from "../../componenents/UI/spinner/spinner";
import withErrorHandler from "../../componenents/UI/withErrorhandler/withErrorhandler";
import { connect } from "react-redux";
import * as burgerBuilderactions from "../../store/actions/index";

class Burgerbuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalprice: 4,
      purchasing: false,
      loading: false,
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.onInitIngredients();
  }

  purchaseable = () => {
    this.setState({ purchasing: true });
  };
  purchasinghandler = () => {
    this.setState({ purchasing: false });
  };
  purchasecontinue = () => {
    this.props.history.push("/Checkout");
  };

  render() {
    let ordersummary = null;
    console.log(this.props.ings);

    let burger = <Spinner />;

    if (this.props.ings) {
      burger = (
        <Fragment>
          <Burger quantity={this.props.ings} />
          <Buildcontrols
            ingredientadded={this.props.onIngredientadded}
            ingredientremoved={this.props.onIngredientremoved}
            purchaseable={this.props.purchaseable}
            price={this.props.price}
            ordered={this.purchaseable}
          />
        </Fragment>
      );
      ordersummary = (
        <Ordersummary
          purchasecancel={this.purchasinghandler}
          purchasegoon={this.purchasecontinue}
          price={this.props.price}
        />
      );
    }
    if (this.state.loading) {
      ordersummary = <Spinner />;
    }

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalclosed={this.purchasinghandler}
        >
          {ordersummary}
        </Modal>

        {burger}
      </Fragment>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalprice,
    purchaseable: state.purchaseable,
    error: state.error,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    onIngredientadded: (ingName) =>
      dispatch(burgerBuilderactions.addIngredient(ingName)),
    onIngredientremoved: (ingName) =>
      dispatch(burgerBuilderactions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderactions.initIngredient()),
  };
};

export default connect(
  mapStateToprops,
  mapDisptachToProps
)(withErrorHandler(Burgerbuilder, axios));
