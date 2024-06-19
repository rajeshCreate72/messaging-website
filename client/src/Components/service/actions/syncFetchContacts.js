import axios from "axios";
import {
  FETCH_CONTACTS_FAILED,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  SYNC_CONTACTS_FAILED,
  SYNC_CONTACTS_REQUEST,
  SYNC_CONTACTS_SUCCESS,
} from "../constants/constants";

export const syncContactsSuccess = (user) => ({
  type: SYNC_CONTACTS_SUCCESS,
  payload: user,
});

export const syncContactsFailed = (error) => ({
  type: SYNC_CONTACTS_FAILED,
  payload: error.message,
});

export const syncContactsRequest = () => ({ type: SYNC_CONTACTS_REQUEST });

export const syncContacts = (contact) => async (dispatch) => {
  dispatch(syncContactsRequest());
  try {
    const response = await axios.post("http://localhost:8000/api/contacts", {
      contact,
    });
    console.log(response.data);
    dispatch(syncContactsSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(syncContactsFailed(error.message));
  }
};

// For Fetching contacts

export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

export const fetchContactsFailed = (error) => ({
  type: FETCH_CONTACTS_FAILED,
  payload: error.message,
});

export const fetchContactsRequest = () => ({ type: FETCH_CONTACTS_REQUEST });

export const fetchContacts = (ofUser) => async (dispatch) => {
  dispatch(fetchContactsRequest());
  console.log(ofUser);
  try {
    const response = await axios.get("http://localhost:8000/api/contacts", {
      params: { userId: ofUser },
    });
    const contacts = response.data;
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    console.log(error);
    dispatch(fetchContactsFailed(error));
  }
};
