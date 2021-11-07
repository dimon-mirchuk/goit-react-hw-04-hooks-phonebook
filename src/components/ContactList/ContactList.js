import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem";
import styles from "./ContactList.module.css";

const { item, list } = styles;

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={list}>
      {contacts.map((contact) => (
        <li className={item} key={contact.id}>
          <ContactListItem {...contact} onDelete={onDelete} key={contact.id} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
