import {
    MESSAGES_SYNC_REQUEST,
    MESSAGES_SYNC_SUCCESS,
    MESSAGES_SYNC_FAILED,
    MESSAGES_FETCH_SUCCESS,
    MESSAGES_FETCH_FAILED,
    MESSAGES_FETCH_REQUEST,
} from '../constants/constants'
import axios from 'axios'

export const syncingMessagesSuccess = (messages) => ({ type: MESSAGES_SYNC_SUCCESS, payload: messages })

export const syncingMessagesFailed = (error) => ({ type: MESSAGES_SYNC_FAILED, payload: error.message })

export const syncingMessagesRequest = () => ({ type: MESSAGES_SYNC_REQUEST })

export const syncMesssages = (messageSent) => async(dispatch) => {
    dispatch(syncingMessagesRequest())

    try {
        const response = await axios.post('http://localhost:8000/api/chats', messageSent)
        const messages = response.data;
        console.log(messages)
        dispatch(syncingMessagesSuccess(messages))
    } catch(error) {
        console.log(error)
        dispatch(syncingMessagesFailed(error))
    }
}

export const fetchMessagesSuccess = (messages) => ({ type: MESSAGES_FETCH_SUCCESS, payload: messages})

export const fetchMessagesFailed = (error) => ({ type: MESSAGES_FETCH_FAILED, payload: error.message })

export const fetchMessagesRequest = () => ({ type: MESSAGES_FETCH_REQUEST })

export const fetchMessages = (chatUsers) => async(dispatch) => {
    dispatch(fetchMessagesRequest())
    try{
        const response = await axios.get('http://localhost:8000/api/chats', {params: { userId: chatUsers.userId, contactId: chatUsers.contactId }})
        const messages = response.data
        dispatch(fetchMessagesSuccess(messages))
    } catch(error) {
        console.log(error)
        dispatch(fetchMessagesFailed(error))
    }
}







