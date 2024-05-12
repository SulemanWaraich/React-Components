import { useState } from "react";
import styles from "./AddTodo.module.css";
import { IoBagAdd } from "react-icons/io5";
import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const updateName = useRef();
  const updateDate = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = updateName.current.value;
    const todoDate = updateDate.current.value;
    updateName.current.value = "";
    updateDate.current.value = "";
    onNewItem(todoName, todoDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            name="text"
            className={styles["field"]}
            placeholder="Enter Todo Items Here"
            ref={updateName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name="date"
            className={styles["field"]}
            ref={updateDate}
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
