import {
  REQUEST_MESSAGES_GET,
  SUCCESS_MESSAGES_GET,
  FAILED_MESSAGES_GET,
  REQUEST_MESSAGES_POST,
  SUCCESS_MESSAGES_POST,
  FAILED_MESSAGES_POST,
} from "../constants/constants";

const initialState = {
  isLoading: false,
  isSuccessP: false,
  isSuccessG: false,
  messages: [],
  retrived: null,
  error: null,
};

const addMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MESSAGES_GET:
    case REQUEST_MESSAGES_POST:
      return { ...state, isLoading: true, messages: [], retrived: null };
    case SUCCESS_MESSAGES_POST:
      return {
        ...state,
        isLoading: false,
        isSuccessP: true,
        retrived: action.payload,
        error: null,
      };
    case SUCCESS_MESSAGES_GET:
      return {
        ...state,
        isLoading: false,
        isSuccessG: true,
        messages: action.payload,
        error: null,
        retrived: null,
      };
    case FAILED_MESSAGES_POST:
    case FAILED_MESSAGES_GET:
      return {
        ...state,
        isLoading: false,
        retrived: null,
        messages: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addMessageReducer;
