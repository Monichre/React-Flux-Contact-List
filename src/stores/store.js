import Dispatch from '../dispatcher/dispatch.js';
import Constants from '../constants/constants.js';
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

let _contacts = []; //State variables are often preceeded by underscores

function setContacts(contacts){
    _contacts = contacts;
}

function setContact(contact){
    _contacts.push(contact);
}

class StoreClass extends EventEmitter {

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    getContacts(){
        return _contacts;
    }

}

const AppStore = new StoreClass();

// Going to handle all the Actions with a Dispatch Token -- wtf
AppStore.dispatchToken = Dispatch.register(action => {
    switch(action.actionType){
        case Constants.RECEIVE_CONTACTS:
            setContacts(action.contacts);
            AppStore.emitChange();
            break

        case Constants.RECEIVE_CONTACTS_ERROR:
            alert(action.message);
            AppStore.emitChange();
            break

        // State Change for adding Contact **Singular
        case Constants.RECEIVE_CONTACT: //This RECEIVE_CONTACT is an action coming from our action.js file
            setContact(action.contact); //This is a native store function we create
            AppStore.emitChange();
            break

        case Constants.RECEIVE_CONTACT_ERROR:
            alert(action.message);
            AppStore.emitChange();
            break



        default:
    }
});

export default AppStore;
