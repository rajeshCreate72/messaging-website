import { configureStore } from '@reduxjs/toolkit';
import ContactsReducer from './service/reducers/chatReducer';
import userAuthentication from './service/reducers/userReducer';
import userRegistration from './service/reducers/registerReducer';
import addingContact from './service/reducers/syncContacts';

const store = configureStore({
    reducer: {
        contacts: ContactsReducer,
        loginAuth: userAuthentication,
        registerUser: userRegistration,
        addContact: addingContact,
    }
})

export default store;