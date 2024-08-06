import styles from "./WelcomeMsg.module.css";
import { useContext } from "react";
import { todoListItemContext } from "../dataStore/todo-items-store";
const WelcomeMsg = () => {
  const contextObj = useContext(todoListItemContext);
  const todoListItem = contextObj.item;
  return (
    todoListItem.length === 0 && (
      <p className={styles.welcome}>Enjoy your day</p>
    )
  );
};

export default WelcomeMsg;
