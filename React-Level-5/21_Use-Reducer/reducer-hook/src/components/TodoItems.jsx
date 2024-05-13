import { useContext } from "react";
import AddItem from "./AddItem";
import styles from "./TodoItems.module.css";
import { TodoItemsStore } from "../store/todo-items-store";

const TodoItems = ({ onDeleteItem }) => {
  const contextObj = useContext(TodoItemsStore);
  const TodoItems = contextObj.todoItems;

  return (
    <div className={styles["items-container"]}>
      {TodoItems.map(function (item) {
        return (
          <AddItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteItem={onDeleteItem}
          ></AddItem>
        );
      })}
    </div>
  );
};

export default TodoItems;
