import Dispatch from '../dispatcher/dispatch.js';
import Constants from '../constants/constants.js';
import ContactsAPI from '../utils/contactsAPI.js'

export default {
    receiveContacts: () => {
        ContactsAPI
            .getContacts('https://jsonplaceholder.typicode.com/users')
            .then(contacts => {
                Dispatch.dispatch({
                    actionType: Constants.RECEIVE_CONTACTS,
                    contacts: contacts
                });
            })
            .catch(message => {
                Dispatch.dispatch({
                    actionType: Constants.RECEIVE_CONTACTS_ERROR,
                    message: message
                });
            });
    }
}
