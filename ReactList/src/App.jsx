import "./App.css";
import ErrorMessage from "./components/ErrrorMessage";
import FoodItems from "./components/FoodItems";
import ChildContainer from "./components/ChildContainer";

function App() {
  let foodItems = ["Roti", "Salad", "Paneer", "Mushroom", "Vegetables"];
  return (
    <>
      <ChildContainer>
        <h2>Healthy Foods</h2>
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
