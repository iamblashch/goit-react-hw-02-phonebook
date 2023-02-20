import React, { Component } from 'react';

const INITIAL_STATE = {
        name: '',
        number: '',
    
}

export class ContactList extends Component {
  state = ({...INITIAL_STATE})
  
  hendleChangeInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  hendleSubmitForm = e => {
    e.preventDefault();
    this.props.addContact({...this.state})
    this.reset()
  };
  reset(){
    this.setState({...INITIAL_STATE})
  }

  render() {
    const {name, number}  = this.state
    return (
      <>
        <form onSubmit={this.hendleSubmitForm}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.hendleChangeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
          />
          <label htmlFor="number">Tel: </label>
          <input
            onChange={this.hendleChangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
          />
          <button type='submit'>ADD</button>
        </form>
      </>
    );
  }
}
