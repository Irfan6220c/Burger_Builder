import React, { Component } from "react";
import Button from "../../../../../src/componenents/UI/Button/Button";
import "./contactData.css";
import axios from "../../../../axios-orders";
import Spinner from "../../../../../src/componenents/UI/spinner/spinner";
import Input from "../../../../componenents/UI/input/input";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipcode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      Country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      delieverymethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "Cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "fastest",
        validation: {},
      },
    },

  };

  checkValidity = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
    }

    return isValid;
  };

  onClickhandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }

    const backendobject = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
    };
    this.props.onBurgerOrder(backendobject);
  };
  onChangeHandler = (event, ididentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[ididentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedOrderForm[ididentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });

    console.log(event.target.value);
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    console.log("CONTACTDATA");
    console.log(formElementsArray);

    let form = null;

    if (this.props.loading) {
      form = <Spinner />;
    } else {
      form = (
        <form onSubmit={this.onClickhandler}>
          {formElementsArray.map((formelement) => (
            <Input
              key={formelement.id}
              elementType={formelement.config.elementType}
              elementConfig={formelement.config.elementConfig}
              value={formelement.config.value}
              invalid={!formelement.config.valid}
              shouldvalidate={formelement.config.validation}
              touched={formelement.config.touched}
              changed={(event) => this.onChangeHandler(event, formelement.id)}
            />
          ))}

          <Button>ORDER</Button>
        </form>
      );
    }

    return (
      <div className="ContactData">
        <h4> Enter your Contact Data </h4>
        {form}
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalprice,
    loading:state.orders.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBurgerOrder: (orderData) => {
      dispatch(actions.purchaseBurger(orderData));
    },
  };
};

export default connect(mapStateToprops,mapDispatchToProps)(ContactData);
