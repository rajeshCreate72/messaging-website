import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
} from '../constants/constants'


const initialState = {
    isLogged: false,
    isLoading: false,
    user: null,
    error: null,
}

const userAuthentication = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true, isLogged: false, user: null, error: null }
        case LOGIN_SUCCESS:
            return { ...state, isLogged: true, user: action.payload, isLoading: false, error: null}
        case LOGIN_FAILED:
            return {...state, isLogged: false, user: null, isLoading: false, error: action.payload}
        case LOGOUT:
            return {...state, isLogged: false, user: null, isLoading: false, error: null}
        default:
            return state
    }
}


export default userAuthentication