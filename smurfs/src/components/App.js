import React from "react";
import "./App.css";
import { connect } from "react-redux";




const App = (props) => {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {props.isFetching && <p>Loading...</p>}
        {props.error !== "" && <p>{`ERROR: ${props.error}`}</p>}
        {props.smurfs.map(smurf => <span>smurf.name</span>)}
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

export default connect(mapStateToProps, {})(App);
