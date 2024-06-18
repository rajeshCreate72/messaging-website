import {
    MESSAGES_SYNC_REQUEST,
    MESSAGES_SYNC_SUCCESS,
    MESSAGES_SYNC_FAILED,
    MESSAGES_FETCH_SUCCESS,
    MESSAGES_FETCH_REQUEST,
    MESSAGES_FETCH_FAILED,
} from '../constants/constants'


const intitalState = {
    isSuccess: false,
    isLoading: false,
    messages: [],
    error: null,
    isSuccessMsg: null,
}


const addingMessagesReducer = (state = intitalState, action) => {
    switch(action.type) {
        case MESSAGES_SYNC_REQUEST:
        case MESSAGES_FETCH_REQUEST:
            return { ...state, isSuccess: false, messages: [], error: null }
        case MESSAGES_SYNC_SUCCESS:
            return { ...state, isSuccess: true, messages: [], error: null, isLoading: false, 
                isSuccessMsg: action.payload }
        case MESSAGES_FETCH_SUCCESS:
            return { ...state, isSuccess: true, messages: action.payload, error: null, isLoading: false, 
                isSuccessMsg: action.payload }
        case MESSAGES_SYNC_FAILED:
        case MESSAGES_FETCH_FAILED:
            return { ...state, isSuccess: false, error: action.payload, isLoading: false, messages: [] }
        default:
            return state
    }
}


export default addingMessagesReducer