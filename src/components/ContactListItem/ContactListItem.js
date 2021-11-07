import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const { text, span, button } = styles;

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <p className={text}>
        {name}: <span className={span}>{number}</span>
      </p>
      <button
        type="button"
        onClick={() => onDelete(id)}
        title="Delete"
        className={button}
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
