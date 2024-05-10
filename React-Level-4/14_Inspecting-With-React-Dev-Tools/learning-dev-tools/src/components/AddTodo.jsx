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
  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
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
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={handleAddButtonClicked}
          >
            <IoBagAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
