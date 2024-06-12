import axios from 'axios'
import {
    REGISTER_REQUEST,
    REGISTER_FAILED,
    REGISTER_SUCESS,
} from '../constants/constants'


export const registerRequest = () => ({ type:  REGISTER_REQUEST})

export const registerFailed = (error) => ({ type: REGISTER_FAILED, payload: error })

export const registerSuccess = (user) => ({ type: REGISTER_SUCESS, payload: user })

export const register = (credentials) => async(dispatch) => {
    dispatch(loginRequest())
    try {
        const response = await axios.post('http://localhost:8000/api/register', credentials)
        const user = response.data
        console.log(user.userId)
        dispatch(registerSuccess(user))
    } catch(error) {
        console.log('Error Registering ', error.message)
        dispatch(loginFailed(error.message))
    }
}