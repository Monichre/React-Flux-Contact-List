import React, { Component } from 'react';
import Action from '../actions/action.js';
import {Panel, FormGroup, Button} from 'react-bootstrap';


class AddContact extends Component {


    constructor(props){

        super(props);

        this.state = {

            newContact: {
                name: '',
                email: '',
                phone: ''
            }
        };
    }
    handleSubmit(e){
        e.preventDefault();
        console.log("submitting in this bitch");

        if(this.refs.name.value === ""){

            alert("Yo, name is required");

        } else {

            this.setState({

                newContact: {
                    name: this.refs.name.value,
                    email: this.refs.email.value,
                    phone: this.refs.phone.value
                }

            }, function(){
                Action.saveContact(this.state.newContact);
            });
        }
        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.phone.value = '';


    }
  render() {

    return (

        <Panel>
            Add Contact

            <form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                    <input
                        className="form-group"
                        type="text"
                        ref="name"
                        placeholder="Add Name"
                        />
                </FormGroup>
                <FormGroup>
                    <input
                        className="form-group"
                        type="text"
                        ref="email"
                        placeholder="Add Email"
                        />
                </FormGroup>
                <FormGroup>
                    <input
                        className="form-group"
                        type="text"
                        ref="phone"
                        placeholder="Add Phone"
                        />
                </FormGroup>
                <Button type="submit">
                    Submit
                </Button>

            </form>

        </Panel>

    );
  }
}

export default AddContact;
