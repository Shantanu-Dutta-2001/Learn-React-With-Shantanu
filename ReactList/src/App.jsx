import "./App.css";
import ErrorMessage from "./components/ErrrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Roti", "Salad", "Paneer", "Mushroom", "Vegetables"];
  return (
    <>
      <h2>Healthy Foods</h2>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
