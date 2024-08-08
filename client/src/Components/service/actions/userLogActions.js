import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/constants";

export const loginRequest = () => ({ type: LOGIN_REQUEST });

export const loginFailed = (error) => ({ type: LOGIN_FAILED, payload: error });

export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });

export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(
      "http://localhost:8000/api/login",
      credentials,
      {
        withCredentials: true,
      }
    );
    const user = response.data;
    console.log(user);
    dispatch(loginSuccess(user));
    window.localStorage.setItem("userId", user);
  } catch (error) {
    console.log("Error logging in ", error.message);
    dispatch(loginFailed(error.message));
  }
};

export const logout = () => ({ type: LOGOUT });
