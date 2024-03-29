import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Items Here"
      className={styles.field}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
