import style from "./Item.module.css";

const Item = ({ foodItem }) => {
  const buyButtonClicked = (foodItem) => {
    console.log(`${foodItem} is added to cart`);
  };
  return (
    <li className={`${style["myList"]}`}>
      <span className={style["mySpan"]}>{foodItem}</span>
      <button
        className={`${style.myButton} btn btn-secondary`}
        onClick={() => buyButtonClicked(foodItem)}
      >
        Buy Now
      </button>
    </li>
  );
};

export default Item;
