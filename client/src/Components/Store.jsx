import { configureStore } from "@reduxjs/toolkit";
import ContactsReducer from "./service/reducers/chatReducer";
import userAuthentication from "./service/reducers/userReducer";
import userRegistration from "./service/reducers/registerReducer";
import addContactReducer from "./service/reducers/syncContacts";
import addMessageReducer from "./service/reducers/syncMessages";

const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    loginAuth: userAuthentication,
    registerUser: userRegistration,
    addContacts: addContactReducer,
    addMessages: addMessageReducer,
  },
});

export default store;
