import axios from "axios"
import { 
    SYNC_CONTACTS_FAILED,
    SYNC_CONTACTS_REQUEST, 
    SYNC_CONTACTS_SUCCESS } from "../constants/constants"

export const syncContactsSuccess = (user) => ({ type: SYNC_CONTACTS_SUCCESS, payload: user })

export const syncContactsFailed = (error) => ({ type: SYNC_CONTACTS_FAILED, payload: error })

export const syncContactsRequest = () => ({ type: SYNC_CONTACTS_REQUEST })

export const syncContacts = () => async(dispatch) => {
    dispatch(syncContactsRequest())
    try {
        const response = await axios.post('http://localhost:8000/api/contacts', contact)
        console.log(response.data)
        dispatch(syncContactsSuccess(response.data))
    } catch(error) {
        dispatch(syncContactsFailed(error))
    }
}