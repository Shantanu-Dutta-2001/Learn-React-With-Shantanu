import "./App.css";

function App() {
  let foodItems = ["Roti", "Salad", "Paneer", "Mushroom", "Vegetables"];
  // let foodItems = [];

  // way 1 using if-else
  if (foodItems?.length === 0) {
    return <h2>I am feeling hungry</h2>;
  } else {
    return (
      <>
        <h2>Healthy Foods</h2>
        <ul class="list-group">
          {foodItems.map((item) => (
            <li key={item} class="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }

  // way 2 using ternary operators
  return (
    <>
      <h2>Healthy Foods</h2>
      <ul class="list-group">
        {foodItems.length === 0 ? <h1>I am hungry</h1> : null}
        {foodItems.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  //way 3 using logical expression
  return (
    <>
      <h2>Healthy Foods</h2>
      <ul class="list-group">
        {foodItems.length === 0 && <h1>I am hungry</h1>}
        {foodItems.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
