import {
  REQUEST_POST_CONTACT,
  SUCCESS_POST_CONTACT,
  FAILED_POST_CONTACT,
  REQUEST_GET_CONTACTS,
  SUCCESS_GET_CONTACTS,
  FAILED_GET_CONTACTS,
} from "../constants/constants";

const initialState = {
  isLoading: false,
  IsSuccessP: false,
  IsSuccessG: false,
  contacts: [],
  okay: null,
  error: null,
};

const addContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POST_CONTACT:
    case REQUEST_GET_CONTACTS:
      return {
        ...state,
        isLoading: true,
        contacts: [],
        error: null,
        okay: null,
      };
    case SUCCESS_POST_CONTACT:
      return {
        ...state,
        IsSuccessP: true,
        IsSuccessG: false,
        okay: action.payload,
        error: null,
      };
    case SUCCESS_GET_CONTACTS:
      return {
        ...state,
        IsSuccessG: true,
        IsSuccessP: false,
        contacts: action.payload,
        error: null,
      };
    case FAILED_POST_CONTACT:
    case FAILED_GET_CONTACTS:
      return {
        ...state,
        IsSuccessG: false,
        IsSuccessP: false,
        okay: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addContactReducer;
