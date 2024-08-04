import { useRef, useState } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItemAdd }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddBtnClick = (event) => {
    event.preventDefault();
    onNewItemAdd(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddBtnClick}>
        <div className="col-6">
          <input
            type="text"
            className={styles.todoInput}
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.todoInput}
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdOutlineAddTask />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
