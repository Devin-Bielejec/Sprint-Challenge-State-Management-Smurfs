import React from "react";
import "./App.css";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Provider, connect } from "react-redux";
import reducer from "../reducers";

const store = createStore(
  reducer,
  applyMiddleware(logger)
)



const App = () => {
    return (
      <Provider store={store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {isFetching && <p>Loading...</p>}
        {error == "" && <p>{`ERROR: ${error}`}</p>}
        {smurfs.map(smurf => <span>smurf.name</span>)}
      </div>
      </Provider>
    );
  }

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(App);
