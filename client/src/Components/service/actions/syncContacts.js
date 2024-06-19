import {
  REQUEST_POST_CONTACT,
  SUCCESS_POST_CONTACT,
  FAILED_POST_CONTACT,
  REQUEST_GET_CONTACTS,
  SUCCESS_GET_CONTACTS,
  FAILED_GET_CONTACTS,
} from "../constants/constants";
import axios from "axios";

export const postRequest = () => ({ type: REQUEST_POST_CONTACT });

export const postSuccess = (okay) => ({
  type: SUCCESS_POST_CONTACT,
  payload: okay,
});

export const postFailed = (error) => ({
  type: FAILED_POST_CONTACT,
  payload: error.message,
});

export const postContact = (contact) => async (dispatch) => {
  dispatch(postRequest());
  try {
    const response = await axios.post(
      "http://localhost:8000/api/contacts",
      contact
    );
    const okay = response.data;
    dispatch(postSuccess(okay));
  } catch (error) {
    console.log(error);
    dispatch(postFailed(error));
  }
};

// For getting contacts
export const getRequest = () => ({ type: REQUEST_GET_CONTACTS });

export const getSuccess = (contacts) => ({
  type: SUCCESS_GET_CONTACTS,
  payload: contacts,
});

export const getFailed = (error) => ({
  type: FAILED_GET_CONTACTS,
  payload: error.message,
});

export const getContacts = (ofUser) => async (dispatch) => {
  dispatch(getRequest());
  console.log(ofUser);
  try {
    const response = await axios.get("http://localhost:8000/api/contacts", {
      params: { userId: ofUser },
    });
    const contacts = response.data;
    dispatch(getSuccess(contacts));
  } catch (error) {
    console.log(error);
    dispatch(getFailed(error));
  }
};
