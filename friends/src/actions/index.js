import axios from 'axios'

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
export const DELETE_FRIEND = 'DELETE_FRIEND'
export const UPDATE_FRIEND = 'UPDATE_FRIEND'



