import React, {Component} from 'react';
import {Button, Well, ListGroup, ListGroupItem} from 'react-bootstrap';
import Action from '../actions/action.js';

class ContactListItem extends Component {

    handleDeleteClick(id){
        console.log(id);
        Action.deleteContact(id);
    }
    render() {
        const {contact} = this.props;
        return (

            <Well>
                <h4>{contact.name}</h4>
                <ListGroup>
                    <ListGroupItem>Email: {contact.email}</ListGroupItem>
                    <ListGroupItem>Phone: {contact.phone}</ListGroupItem>
                </ListGroup>
                <Button bsStyle="danger" onClick={this.handleDeleteClick.bind(this, contact.id)}/>
            </Well>

        );
    }
}

export default ContactListItem;
