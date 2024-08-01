import styles from "./Keypad.module.css";
import Button from "./Button.jsx";

const keypad = ({ onButtonClicked }) => {
  return (
    <div className={styles.keypad}>
      <Button onButtonClicked={onButtonClicked}></Button>
    </div>
  );
};

export default keypad;
