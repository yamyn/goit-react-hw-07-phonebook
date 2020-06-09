import fetch from '../../helpers/apiService';

import {
    loadContactsStart,
    loadContactsSuccess,
    loadContactsError,
    addContactStart,
    addContactSuccess,
    addContactError,
    deleteContactStart,
    deleteContactSuccess,
    deleteContactError,
} from './contactsActions';

export const fetchContacts = () => dispatch => {
    dispatch(loadContactsStart());

    fetch
        .get()
        .then(response => dispatch(loadContactsSuccess(response.data)))
        .catch(error => dispatch(loadContactsError(error)));
};

export const deleteContacts = id => dispatch => {
    dispatch(deleteContactStart());

    fetch
        .delete(`/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)));
};

export const addContact = contact => dispatch => {
    dispatch(addContactStart());

    fetch
        .post('', contact)
        .then(response => dispatch(addContactSuccess(response.data)))
        .catch(error => dispatch(addContactError(error)));
};
