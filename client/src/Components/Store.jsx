import { configureStore } from '@reduxjs/toolkit';
import ContactsReducer from './service/reducers/chatReducer';
import userAuthentication from './service/reducers/userReducer';
import userRegistration from './service/reducers/registerReducer';
import addingContact from './service/reducers/syncFetchContacts';
import addingMessagesReducer from './service/reducers/messagesFetchSync';

const store = configureStore({
    reducer: {
        contacts: ContactsReducer,
        loginAuth: userAuthentication,
        registerUser: userRegistration,
        addContact: addingContact,
        addMessages: addingMessagesReducer,
    }
})

export default store;