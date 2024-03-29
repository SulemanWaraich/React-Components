import styles from "./Item.module.css";
const Item = ({ item }) => {
  return (
    <>
      <li className="list-group-item" id={styles["kg-item"]}>
        <span className={styles["kg-span"]}>{item}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={(event) => {
            return console.log(`${item} being bought`);
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
