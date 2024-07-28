import styles from "./Keypad.module.css";
import Button from "./Button.jsx";

const keypad = () => {
  return (
    <div className={styles.keypad}>
      <Button></Button>
    </div>
  );
};

export default keypad;
