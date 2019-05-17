import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({ type: LOGIN_SUCCESSFUL, data: res.data.payload })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAILURE, error: err })
        })
}

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FETCHING_SUCCESSFUL = 'FETCHING_SUCCESSFUL'
export const FETCHING_FAILED = 'FETCHING_FAILED'

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS })
    axiosWithAuth()
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            dispatch({ type: FETCHING_SUCCESSFUL, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCHING_FAILED, error: err })
        })
}


export const ADD_FRIEND = 'ADD_FRIEND'
export const ADD_SUCCESSFUL = 'ADD_SUCCESSFUL'
export const ADD_FAILED = 'ADD_FAILED'

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND })
    return axiosWithAuth()
        .post(`http://localhost:5000/api/friends`, friend)
        .then(res => {
            dispatch({ type: ADD_SUCCESSFUL, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADD_FAILED, error: err })
        })
}

