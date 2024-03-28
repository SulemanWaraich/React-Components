import styles from "./Item.module.css";
const Item = ({ item }) => {
  return (
    <>
      <li className="list-group-item" id={styles["kg-item"]}>
        <span className={styles["kg-span"]}>{item}</span>
      </li>
    </>
  );
};
export default Item;
