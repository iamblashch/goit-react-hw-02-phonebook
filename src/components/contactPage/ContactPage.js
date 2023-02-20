import React, { Component } from 'react';
import { ContactList } from '../contactList/ContactList';

export class ContactPage extends Component {
    addContact = data => {
    console.log('data :>> ', data);
  };

  render() {
    return (
        <>
        <ContactList addContact={this.addContact} />;
        </>
    )
  }
}
