import { LOGIN_START, LOGIN_SUCCESSFUL, LOGIN_FAILURE } from '../actions'

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
        default:
            return state
    }
}

export default reducer