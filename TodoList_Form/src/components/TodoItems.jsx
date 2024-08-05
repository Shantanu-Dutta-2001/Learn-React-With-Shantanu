import { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoListItemContext } from "../dataStore/todo-items-store";

const TodoItems = () => {
  const contextObj = useContext(todoListItemContext);
  const todoItems = contextObj.item;
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
