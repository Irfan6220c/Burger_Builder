import React, { Component } from "react";
import Layout from "./componenents/layout/layout";
import Burgerbuilder from './containers/Burgerbuilder/Burgerbuilder'
import Checkout from "./containers/Burgerbuilder/checkout/checkout"
import Orders from "./containers/Burgerbuilder/orders/orders"
import {
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Layout>
      <Switch>
            <Route path="/" exact component={Burgerbuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
          </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
