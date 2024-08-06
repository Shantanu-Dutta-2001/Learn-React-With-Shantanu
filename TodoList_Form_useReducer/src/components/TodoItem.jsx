import { useContext } from "react";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { todoListItemContext } from "../dataStore/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const contextObj = useContext(todoListItemContext);
  const deleteItem = contextObj.deleteItem;
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdOutlineRemoveCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
