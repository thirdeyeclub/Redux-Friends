import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';


export const login = cred => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post("http://localhost:5000/api/login", cred).then(res => {
        console.log(res)
    localStorage.setItem("token", res.data.payload);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.payload });
    fetchFriends();
    });
};

export const fetchFriends = () => dispatch => {
    dispatch({type: FETCH_FRIENDS_START});
    axios 
    
    .get("http://localhost:5000/api/friends", {
        headers: { Authorization: localStorage.getItem("token") }
    })
    .then( res => {
        console.log(res)
        dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err + 'KODE BROKEN')
        dispatch({type: FETCH_FRIENDS_FAILURE, payload: "error"})
    })
} 

export const getData = () => dispatch => {
    dispatch({type: GET_DATA})
    axios
    .get("http://localhost:5000/api/friends", {
        headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
        console.log(res.data);
        dispatch({type: GET_DATA_SUCCESS, payload: res.data.payload})
    })
    .catch(err => {
        console.log(err);
    });
};