import {
    LOGIN_START, LOGIN_SUCCESSFUL,
    LOGIN_FAILURE,
    FETCHING_FRIENDS, FETCHING_SUCCESSFUL,
    FETCHING_FAILED, ADD_FRIEND,
    UPDATE_FRIEND, DELETE_FRIEND
} from '../actions'

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                loggingIn: false,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
                loggingIn: false
            }
        case FETCHING_FRIENDS:
            return {
                ...state,
                fetchingFriends: true
            }
        case FETCHING_SUCCESSFUL:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            }
        case FETCHING_FAILED:
            return {
                ...state,
                fetchingFriends: false
            }
        case ADD_FRIEND:
            return {
                ...state,
                friends: action.payload
            }
        case UPDATE_FRIEND:
            return {
                ...state,
                friends: action.payload
            }
        case DELETE_FRIEND:
            return {
                ...state,
                friends: action.payload
            }
        default:
            return state
    }
}

export default reducer