import React, { Component } from "react";
import Button from "../../../../../src/componenents/UI/Button/Button";
import "./contactData.css";
import axios from "../../../../axios-orders";
import Spinner from "../../../../../src/componenents/UI/spinner/spinner";
import Input from "../../../../componenents/UI/input/input";

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
        validation:{
            required:true
        },
        valid:false,
        touched:false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street Name",
        },
        value: "",
        validation:{
            required:true
        },
        valid:false,
        touched:false
      },
      zipcode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code",
        },
        value: "",
        validation:{
            required:true
        },
        valid:false,
        touched:false
      },
      Country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation:{
            required:true
        },
        valid:false,
        touched:false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email",
        },
        value: "",
        validation:{
            required:true
        },
        valid:false,
        touched:false
      },
      delieverymethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "Cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
        validation:{}
        
      },
    },
    loading: false,
  };


  checkValidity =(value,rules) => {
      let isValid=false;
      if (rules.required){
          isValid=value.trim() !=='';
      }

      return isValid;


  }

  onClickhandler = (event) => {
    event.preventDefault();
    const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
    this.setState({ loading: true });
    const backendobject = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };
    axios
      .post("/orders.json", backendobject)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  onChangeHandler =(event,ididentifier) => {
    const updatedOrderForm = {
        ...this.state.orderForm
    };
    const updatedFormElement = { 
        ...updatedOrderForm[ididentifier]
    };
    updatedFormElement.value=event.target.value;
    updatedFormElement.touched=true
    updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
    
    updatedOrderForm[ididentifier]=updatedFormElement;
    this.setState({orderForm:updatedOrderForm});


    console.log(event.target.value);

  }

  render() {
    const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        console.log("CONTACTDATA")
    console.log(formElementsArray);

    let form = null;

    if (this.state.loading) {
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
              changed={(event) => this.onChangeHandler(event,formelement.id)}
            />
          ))}

          <Button >ORDER</Button>
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

export default ContactData;
