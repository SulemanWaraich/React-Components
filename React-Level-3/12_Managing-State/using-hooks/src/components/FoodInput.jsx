import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Items Here"
      className={styles.field}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
