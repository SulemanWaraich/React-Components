import styles from "./FoodInput.module.css";

const FoodInput = () => {
  function handleOnChange(event) {
    console.log(event.target.value);
  }

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
