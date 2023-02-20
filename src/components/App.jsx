import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import css from './app.module.css'

export class App extends Component {
  state = {
    contact: [],
  };
  addContact = data => {
    const newContact = { ...data, id: nanoid(10) };
    this.setState(prevState => {
      return {
        contact: [...prevState.contact, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      const newContact = prevState.contact.filter(item => id !== item.id);
      return { contact: newContact };
    });
  };

  render() {
    return (
      <section className={css.app}>
        <ContactForm addContact={this.addContact} />
        {this.state.contact.length !== 0 && (
          <ContactList list={this.state.contact} remuve={this.deleteContact} />
        )}
      </section>
    );
  }
}
