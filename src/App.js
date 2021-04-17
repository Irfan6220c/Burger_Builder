import React, { Component } from "react";
import Layout from "./componenents/layout/layout";
import Burgerbuilder from './containers/Burgerbuilder/Burgerbuilder'
import Checkout from "./containers/Burgerbuilder/checkout/checkout"
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
          <Route exact path="/" component= {Burgerbuilder} />
          <Route exact path="/Checkout" component= {Checkout} />
        </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
