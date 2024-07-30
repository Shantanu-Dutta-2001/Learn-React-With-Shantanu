import "./App.css";
import ErrorMessage from "./components/ErrrorMessage";
import FoodItems from "./components/FoodItems";
import ChildContainer from "./components/ChildContainer";
import FoodItemInput from "./components/FoodItemInput";
import { useState } from "react";

function App() {
  let foodItems = ["Roti", "Salad", "Paneer", "Mushroom", "Vegetables"];

  // let enteredTextStateArr = useState("nothing");
  // let enteredTextVal = enteredTextStateArr[0];
  // let setEnteredTextState = enteredTextStateArr[1];

  // OR IT CAN BE DECLARED AS

  let [enteredTextVal, setEnteredTextState] = useState("nothing");

  const onKeyDown = (event) => {
    console.log(event.target.value);
    setEnteredTextState(event.target.value);
  };
  return (
    <>
      <ChildContainer>
        <h2>Healthy Foods</h2>
        <FoodItemInput handleKeyDown={onKeyDown}></FoodItemInput>
        <p>Food item you entered is : {enteredTextVal}</p>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </ChildContainer>
      <ChildContainer>
        Above are the list of healthy food items which are good for health.
      </ChildContainer>
    </>
  );
}

export default App;
