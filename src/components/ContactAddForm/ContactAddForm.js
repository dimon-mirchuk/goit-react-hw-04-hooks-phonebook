import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ContactAddForm.module.css";

const { form, label, input, button } = styles;

function ContactAddForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={form}>
      <label className={label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ]) ? [a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
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
          onChange={handleChange}
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

ContactAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactAddForm;
