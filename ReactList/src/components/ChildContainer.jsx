import styles from "./ChildContainer.module.css";

const ChildContainer = (props) => {
  return <div className={styles.childContainer}>{props.children}</div>;
};

export default ChildContainer;
