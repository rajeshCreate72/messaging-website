import { 
    SYNC_CONTACTS_FAILED,
    SYNC_CONTACTS_REQUEST, 
    SYNC_CONTACTS_SUCCESS } from "../constants/constants"


const initialState = {
    isLoading: false,
    isAdded: false,
    contact: null,
    isSuccess: false,
}


const addingContact = (state = { initialState }, action) => {
    switch(action.type) {
        case SYNC_CONTACTS_REQUEST:
            return { ...state, isLoading: true}
        case SYNC_CONTACTS_SUCCESS:
            return { ...state, isLoading: false, isAdded: true, contact: action.payload, isSuccess: true }
        case SYNC_CONTACTS_FAILED:
            return { ...state, isLoading: false, isAdded: false, contact: null, isSuccess: false }
        default:
            return state
    }
}


export default addingContact
