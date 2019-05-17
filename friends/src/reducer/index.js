import {
    LOGIN_START, LOGIN_SUCCESSFUL,
    LOGIN_FAILURE,
    FETCHING_FRIENDS, FETCHING_SUCCESSFUL,
    FETCHING_FAILED, ADD_FRIEND,
    ADD_SUCCESSFUL, ADD_FAILED
} from '../actions'

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null,
    addingFriend: false
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
                fetchingFriends: false,
                error: action.error
            }
        case ADD_FRIEND:
            return {
                ...state,
                addingFriend: true
            }
        case ADD_SUCCESSFUL:
            return {
                ...state,
                addingFriend: false,
                friends: action.payload
            }
        case ADD_FAILED:
            return {
                ...state,
                addingFriend: false,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer