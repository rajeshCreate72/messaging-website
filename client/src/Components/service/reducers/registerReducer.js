import {
    REGISTER_REQUEST,
    REGISTER_FAILED,
    REGISTER_SUCESS,
    LOGIN_SUCCESS,
} from '../constants/constants'

const initialState = {
    isLoading: false,
    user: null,
    error: null,
    isSuccess: false,
}

const userRegistration = (state = { initialState }, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, isLoading: true }
        case REGISTER_SUCESS && LOGIN_SUCCESS:
            return { ...state, isLoading: false, user: action.payload, isSuccess: true}
        case REGISTER_FAILED:
            return { ...state, isLoading: false, error: action.payload}
        default:
           return state
    }
}


export default userRegistration