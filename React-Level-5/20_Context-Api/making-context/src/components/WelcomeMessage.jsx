import { useContext } from "react";
import { TodoItemsStore } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemsStore);
  const todoItems = contextObj.todoItems;
  return todoItems.length === 0 && <h1>Enjoy Your Day</h1>;
};

export default WelcomeMessage;
