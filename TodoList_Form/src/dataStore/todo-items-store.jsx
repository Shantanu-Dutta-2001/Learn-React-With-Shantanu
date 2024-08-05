import { createContext } from "react";

export const todoListItemContext = createContext({
  item: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
