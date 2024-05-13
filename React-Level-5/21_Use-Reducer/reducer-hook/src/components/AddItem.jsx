import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsStore } from "../store/todo-items-store";

function AddItem({ todoName, todoDate }) {
  const contextObj = useContext(TodoItemsStore);
  const deleteItems = contextObj.deleteItems;

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => deleteItems(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
