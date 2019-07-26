import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GETME_SUCCESS,
    GETME_FAIL,
    LOGOUT_SUCCESS,
} from './../constants/actionTypes'

// jwt = json web token
const initialState = {
    jwt: '',
    user: {}
}



const signup = (state = initialState, action) => {

    switch (action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('jwt', action.data.jwt)
            return Object.assign(
                {},
                {
                    jwt: action.data.jwt,
                    user: action.data.user
                }
            )
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
            console.log("Error in signup")
            return initialState

        case GETME_SUCCESS:
            return Object.assign(
                {},
                {
                    jwt: action.data.jwt,
                    user: action.data.user
                }
            )
        case GETME_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('jwt')
            return initialState

        default: return state
    }
}

export default signup;