import { Component } from "react";
import "./App.css";
import ContactAddForm from "./ContactAddForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Container from "./Container";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const getContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(getContacts);
    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  handleAddContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  handleDeleteContact = (id) =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactAddForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contacts={visibleContacts}
            onDelete={this.handleDeleteContact}
          />
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}
      </Container>
    );
  }
}

export default App;
