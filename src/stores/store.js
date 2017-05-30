import Dispatch from '../dispatcher/dispatch.js';
import Constants from '../constants/constants.js';
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

let _contacts = []; //State variables are often preceeded by underscores

function setContacts(contacts){
    _contacts = contacts;
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
        default:
    }
});

export default AppStore;
