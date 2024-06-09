import { configureStore } from '@reduxjs/toolkit';
import ContactsReducer from './Reducers/ContactsReducer';

const store = configureStore({
    reducer: {
        contacts: ContactsReducer,
    }
})

export default store;