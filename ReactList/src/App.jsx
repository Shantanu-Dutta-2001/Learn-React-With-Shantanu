import "./App.css";
import ErrorMessage from "./components/ErrrorMessage";
import FoodItems from "./components/FoodItems";
import ChildContainer from "./components/ChildContainer";
import FoodItemInput from "./components/FoodItemInput";
import { useState } from "react";

function App() {
  // let enteredTextStateArr = useState("nothing");
  // let enteredTextVal = enteredTextStateArr[0];
  // let setEnteredTextState = enteredTextStateArr[1];

  // OR IT CAN BE DECLARED AS

  let [enteredTextVal, setEnteredTextState] = useState();

  let [foodItems, setFoodItems] = useState([
    "Roti",
    "Salad",
    "Paneer",
    "Mushroom",
    "Vegetables",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      setEnteredTextState(event.target.value);
      let newFoodItem = event.target.value;
      event.target.value = null;
      let newFoodList = [...foodItems, newFoodItem];
      setFoodItems(newFoodList);
    }
  };
  return (
    <>
      <ChildContainer>
        <h2>Healthy Foods</h2>
        <FoodItemInput handleKeyDown={onKeyDown}></FoodItemInput>
        <p>Last Food Item you entered is : {enteredTextVal}</p>
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
