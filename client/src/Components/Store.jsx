import { configureStore } from '@reduxjs/toolkit';
import ContactsReducer from './service/reducers/chatReducer';
import userAuthentication from './service/reducers/userReducer';

const store = configureStore({
    reducer: {
        contacts: ContactsReducer,
        loginAuth: userAuthentication,
    }
})

export default store;