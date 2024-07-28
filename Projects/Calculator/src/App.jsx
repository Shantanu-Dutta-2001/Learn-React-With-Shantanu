import styles from "./App.module.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <Keypad></Keypad>
      </div>
    </>
  );
}

export default App;
