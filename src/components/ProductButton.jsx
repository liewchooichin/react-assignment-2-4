import styles from "./Button.module.css";
import PropTypes from "prop-types";

ProductButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
export function ProductButton({ label, handleClick }) {
  return (
    <button 
        className={styles.button}
        onClick={handleClick}
    >
        {label}
    </button>
  );
}

