import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import contactsListReducer from './contacts/contactsReducer';
import alertReducer from './alert/alertReducer';

import validation from './middleware/validation';
import errorHandler from './middleware/errorHandler';

const store = configureStore({
    reducer: {
        contactsList: contactsListReducer,
        alert: alertReducer,
    },
    middleware: [...getDefaultMiddleware(), errorHandler, validation],
});

export default store;
