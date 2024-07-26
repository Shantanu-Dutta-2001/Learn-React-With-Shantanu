import "./App.css";
import ErrorMessage from "./components/ErrrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Roti", "Salad", "Paneer", "Mushroom", "Vegetables"];
  // let foodItems = [];

  // way 1 using if-else
  // if (foodItems?.length === 0) {
  //   return <h2>I am feeling hungry</h2>;
  // } else {
  //   return (
  //     <>
  //       <h2>Healthy Foods</h2>
  //       <ul className="list-group">
  //         {foodItems.map((item) => (
  //           <li key={item} className="list-group-item">
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // }

  // way 2 using ternary operators
  // return (
  //   <>
  //     <h2>Healthy Foods</h2>
  //     <ul className="list-group">
  //       {foodItems.length === 0 ? <h1>I am hungry</h1> : null}
  //       {foodItems.map((item) => (
  //         <li key={item} className="list-group-item">
  //           {item}
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );

  //way 3 using logical expression
  // return (
  //   <>
  //     <h2>Healthy Foods</h2>
  //     <ul className="list-group">
  //       {foodItems.length === 0 && <h1>I am hungry</h1>}
  //       {foodItems.map((item) => (
  //         <li key={item} className="list-group-item">
  //           {item}
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );

  // breaking down to components and understand parent to child data passing using props
  return (
    <>
      <h2>Healthy Foods</h2>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
