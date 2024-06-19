import {
  REQUEST_MESSAGES_GET,
  SUCCESS_MESSAGES_GET,
  FAILED_MESSAGES_GET,
  REQUEST_MESSAGES_POST,
  SUCCESS_MESSAGES_POST,
  FAILED_MESSAGES_POST,
} from "../constants/constants";
import axios from "axios";

export const postRequest = () => ({ type: REQUEST_MESSAGES_POST });

export const postSuccess = (retrived) => ({
  type: SUCCESS_MESSAGES_POST,
  payload: retrived,
});

export const postFailed = (error) => ({
  type: FAILED_MESSAGES_POST,
  payload: error.message,
});

export const postMessages = (ofContact) => async (dispatch) => {
  dispatch(postRequest());
  // console.log(ofContact);
  try {
    const response = await axios.post(
      "http://localhost:8000/api/chats",
      ofContact
    );
    const retrived = response.data;
    dispatch(postSuccess(retrived));
  } catch (error) {
    console.log(error);
    dispatch(postFailed(error));
  }
};

export const getRequest = () => ({ type: REQUEST_MESSAGES_GET });

export const getSuccess = (messages) => ({
  type: SUCCESS_MESSAGES_GET,
  payload: messages,
});

export const getFailed = (error) => ({
  type: FAILED_MESSAGES_GET,
  payload: error.message,
});

export const getMessages = (ofContact) => async (dispatch) => {
  dispatch(getRequest());
  console.log(ofContact);
  try {
    const response = await axios.get("http://localhost:8000/api/chats", {
      params: { userId: ofContact.userId, contactId: ofContact.contactId },
    });
    const messages = response.data;
    dispatch(getSuccess(messages));
  } catch (error) {
    console.log(error);
    dispatch(getFailed(error));
  }
};
