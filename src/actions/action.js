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
    },
    saveContact: (contact) => {
        ContactsAPI
            .saveContact('https://jsonplaceholder.typicode.com/users', contact)
            .then(contact => {
                Dispatch.dispatch({
                    actionType: Constants.RECEIVE_CONTACT,
                    contact: contact
                });
            })
            .catch(message => {
                Dispatch.dispatch({
                    actionType: Constants.RECEIVE_CONTACT_ERROR,
                    message: message
                });
            });
    }
}
