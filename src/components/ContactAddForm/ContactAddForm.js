import PropTypes from "prop-types";
import { Component } from "react";
import styles from "./ContactAddForm.module.css";

const { form, label, input, button } = styles;

class ContactAddForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => this.setState({ name: "", number: "" });

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={form}>
        <label className={label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ]) ? [a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
            placeholder="Ivan Ivanov"
            className={input}
          />
        </label>
        <label className={label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            value={number}
            placeholder="+7 (999) 999-99-99"
            className={input}
          />
        </label>
        <button type="submit" className={button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactAddForm;
