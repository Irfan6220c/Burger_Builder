import React, { Component } from "react";
import Button from "../../../../../src/componenents/UI/Button/Button";
import "./contactData.css";
import axios from "../../../../axios-orders"
import Spinner from "../../../../../src/componenents/UI/spinner/spinner"

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading:false,
  };

  onClickhandler =(event) =>{



    event.preventDefault();
    this.setState({loading:true});
    const backendobject={ 
      ingredients: this.props.ingredients,
      price:this.props.price,
      customer: {
        name: "Irfan",
        street: "Hopefully in Munich",
        Country: "Germany"

      }
    }
    axios.post('/orders.json',backendobject)
    .then((response) => {
      this.setState({loading:false});
      this.props.history.push('/');
    })
    .catch(error => {
        this.setState({loading:false})
      })

    }

  render() {
      let form =null;

    if (this.state.loading)
    {
         form = <Spinner/>
    }
    else{
        form=  <form>
        <input className="Input" type="text" name="name" placeholder="Your name"></input>
        <input
        className="Input"
          type="email"
          name="email"
          placeholder="Your email address"
        ></input>
        <input className="Input" type="text" name="street" placeholder="Street"></input>
        <input
        className="Input"
          type="text"
          name="postalCode"
          placeholder="Postal Code"
        ></input>
        <Button clicked={this.onClickhandler}>ORDER</Button>
      </form>
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







