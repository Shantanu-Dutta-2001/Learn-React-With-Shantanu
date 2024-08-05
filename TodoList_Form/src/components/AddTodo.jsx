import { useContext, useRef, useState } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import styles from "./AddTodo.module.css";
import { todoListItemContext } from "../dataStore/todo-items-store";

function AddTodo() {
  const contextObj = useContext(todoListItemContext);
  const addNewItem = contextObj.addNewItem;
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddBtnClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddBtnClick}>
        <div className="col-6">
          <input
            type="text"
            className={styles.todoInput}
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            className={styles.todoInput}
            type="date"
            ref={dueDateElement}
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
