import { createContext, useReducer } from "react";

export const todoListItemContext = createContext({
  item: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

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

const TodoItemsContextProvider = ({ children }) => {
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
      {children}
    </todoListItemContext.Provider>
  );
};

export default TodoItemsContextProvider;
