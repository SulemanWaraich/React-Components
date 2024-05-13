import { createContext } from "react";

export const TodoItemsStore = createContext({
  todoItems: [],
  addItems: () => {},
  deleteItems: () => {},
});
