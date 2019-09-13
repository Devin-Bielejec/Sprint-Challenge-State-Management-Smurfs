import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducer from "../src/reducers";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const composeEnhancer = (compose) => applyMiddleware(thunk) || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(logger))
  )
  

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
