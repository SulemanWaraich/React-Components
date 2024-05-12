import { useState } from "react";
import styles from "./AddTodo.module.css";
import { IoBagAdd } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            name="text"
            className={styles["field"]}
            value={todoName}
            placeholder="Enter Todo Items Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name="date"
            className={styles["field"]}
            value={todoDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2" style={{ paddingRight: "136px" }}>
          <button className="btn btn-success kg-btn">
            <IoBagAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
