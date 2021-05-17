import React, { Component } from 'react';
import {Consumer}from '../Context';
import Contact from './Contact';

export default class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {
                value =>value.listeContacts.map(contact => <Contact data = {contact} key={contact.id}/>)
                }
            </Consumer>
        )
    }
}
