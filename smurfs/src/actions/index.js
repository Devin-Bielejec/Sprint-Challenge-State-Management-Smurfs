import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const addSmurf = () => dispatch => {
    dispatch({type: FETCH_SMURF_START});
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
        console.log(res);
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data.results})
    })
    .catch(err => dispatch({tyep: FETCH_SMURF_FAIL, payload: err}))
}