import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
  let [calcVal, setCalcVal] = useState("");

  const onButtonClicked = (btnText) => {
    if (btnText == "C") {
      setCalcVal("");
    } else if (btnText == "=") {
      const result = eval(calcVal);
      setCalcVal(result);
    } else {
      const newDisplayVal = calcVal + btnText;
      setCalcVal(newDisplayVal);
    }
    console.log(btnText);
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayVal={calcVal}></Display>
        <Keypad onButtonClicked={onButtonClicked}></Keypad>
      </div>
    </>
  );
}

export default App;
