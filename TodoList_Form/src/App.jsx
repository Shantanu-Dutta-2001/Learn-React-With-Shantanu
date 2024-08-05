import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { todoListItemContext } from "./dataStore/todo-items-store";

function App() {
  let [todoListItem, setTodoListItem] = useState([]);

  const onNewItemAdd = (itemName, itemDueDate) => {
    const newListItem = { name: itemName, dueDate: itemDueDate };
    // setTodoListItem([...todoListItem, newListItem]);

    // functional update to avoid async updates using spread operator
    setTodoListItem((currVal) => [...currVal, newListItem]);
  };

  const onDeleteItem = (todoItemName) => {
    const newTodoItems = todoListItem.filter(
      (item) => item.name !== todoItemName
    );
    setTodoListItem(newTodoItems);
  };

  return (
    <todoListItemContext.Provider
      value={{
        item: todoListItem,
        addNewItem: onNewItemAdd,
        deleteItem: onDeleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </todoListItemContext.Provider>
  );
}

export default App;
