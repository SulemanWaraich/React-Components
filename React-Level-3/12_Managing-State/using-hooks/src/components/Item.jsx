import styles from "./Item.module.css";
const Item = ({ item, bought, handleOnClick }) => {
  return (
    <>
      <li
        className={`list-group-item ${bought && "active"}`}
        id={styles["kg-item"]}
      >
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
