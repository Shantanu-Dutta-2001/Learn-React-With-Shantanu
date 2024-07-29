import Item from "./Item";

const FoodItems = ({ items }) => {
  const buyButtonClicked = (foodItem) => {
    console.log(`${foodItem} is added to cart`);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          buyButtonClicked={() => buyButtonClicked(item)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
