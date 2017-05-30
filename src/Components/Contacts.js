import React, {Component} from 'react';
import Action from '../actions/action.js';
import AppStore from '../stores/store.js';
import ContactListItem from './ContactListItem.js';
import {ListGroup, ListGroupItem} from 'react-bootstrap';


function getContactListItem(contact){
    return (
            <ContactListItem key={contact.id} contact={contact} />
    );
}

class Contacts extends Component {


    constructor(props) {
        super(props);

        this.state = {
            contacts: []
        }
        this.onChange = this.onChange.bind(this);
    }


    componentWillMount(){
        AppStore.addChangeListener(this.onChange);
    }


    componentDidMount(){
        Action.receiveContacts();
    }

    componentWillUnmount(){
        AppStore.removeChangeListener(this.onChange);
    }

    onChange(){
        this.setState({
            contacts: AppStore.getContacts()
        }, function(){
            console.log(this.state);
        });
    }


    render() {

        let contactListItems;
        if(this.state.contacts){
            contactListItems = this.state.contacts.map(contact => getContactListItem(contact));
        }
        return (
            <div className="Contacts">
                <ListGroup>
                    {contactListItems}
                </ListGroup>
            </div>
        );
    }
}

export default Contacts;
