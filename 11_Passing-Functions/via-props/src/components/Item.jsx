import styles from "./Item.module.css";
const Item = ({ item, handleOnClick }) => {
  return (
    <>
      <li className="list-group-item" id={styles["kg-item"]}>
        <span className={styles["kg-span"]}>{item}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleOnClick}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
