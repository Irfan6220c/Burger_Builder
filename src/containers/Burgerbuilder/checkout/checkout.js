import React, {Component} from "react"
import CheckoutSummary from "../../../componenents/UI/checkoutSummary/checkoutSummary"

class Checkout extends Component {

    state={
        ingredients:{

            Salad:1,
            cheese:1,
            meat:1,
            bacon:1
        }
    }
    oncheckoutCancel= () =>{

        this.props.history.goBack();

    }
    oncheckoutContinue = () =>{

        this.props.history.replace("/Checkout/Contact-data");

    }


render(){


    return (

        <div>

            <CheckoutSummary ingredients={this.state.ingredients} oncheckoutCancel={this.oncheckoutCancel}  oncheckoutContinue={this.oncheckoutContinue}/>


            </div>



    )



    



}


}


export default Checkout;