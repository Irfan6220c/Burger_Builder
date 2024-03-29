import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers} from "redux"
import burgerbuilderreducer from "./store/reducer/burgerBuilder"
import thunk from "redux-thunk"
import orderReducer from "./store/reducer/order"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReduccer = combineReducers({

  burgerBuilder: burgerbuilderreducer,
  orders: orderReducer
})



const store=createStore(rootReduccer,composeEnhancers(
  applyMiddleware(thunk)
));



const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
