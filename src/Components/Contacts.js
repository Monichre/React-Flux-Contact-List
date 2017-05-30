import React, {Component} from 'react';
import Action from '../actions/action.js';
import AppStore from '../stores/store.js';

// Components

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
        return (
            <div className="Contacts">
                CONTACTS
            </div>
        );
    }
}

export default Contacts;
