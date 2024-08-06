import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useReducer } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { todoListItemContext } from "./dataStore/todo-items-store";

const todoItemReducer = (currentTodoItems, action) => {
  let newTodoItem = currentTodoItems;
  if (action.type === "New_Item") {
    newTodoItem = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "Delete_Item") {
    newTodoItem = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItem;
};
function App() {
  const [todoListItem, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const onNewItemAdd = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "New_Item",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const onDeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "Delete_Item",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
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
