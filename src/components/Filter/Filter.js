import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const { label, input } = styles;

const Filter = ({ value, onChange }) => {
  return (
    <label className={label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        required
        className={input}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;
