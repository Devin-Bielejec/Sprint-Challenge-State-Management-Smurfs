import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import FormComponent from "./FormComponent";

const App = ({ getSmurfs, error, isFetching, smurfs}) => {


    useEffect( () => {
      console.log("here");
      getSmurfs();
    }, [getSmurfs])
    //Use effect should happen when the array changes, but then it would go again and change the array ==> infinite loop, so to stop the loop, we are going to 

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {isFetching && <p>Loading...</p>}
        {error !== "" && <p>{`ERROR: ${error}`}</p>}
        {smurfs.map(smurf => <span>{smurf.name}</span>)}
        <button onClick={getSmurfs}>Update My Smurfs!</button>
        <FormComponent />
      </div>
    );
  }

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
