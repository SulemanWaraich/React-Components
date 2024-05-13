import { useState } from "react";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsStore } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addItems = (itemName, itemDate) => {
    setTodoItems((currVal) => [
      ...currVal,
      { name: itemName, dueDate: itemDate },
    ]);
  };

  const deleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsStore.Provider
      value={{
        todoItems: todoItems,
        addItems: addItems,
        deleteItems: deleteItems,
      }}
    >
      <center className="todo-container">
        <AddName></AddName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsStore.Provider>
  );
}

export default App;
