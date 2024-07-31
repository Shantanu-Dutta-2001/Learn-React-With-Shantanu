import style from "./Item.module.css";

const Item = ({ foodItem, bought, buyButtonClicked }) => {
  return (
    <li className={`${style["myList"]} ${bought && "active"}`}>
      <span className={style["mySpan"]}>{foodItem}</span>
      <button
        className={`${style.myButton} btn btn-secondary`}
        onClick={buyButtonClicked}
      >
        Buy Now
      </button>
    </li>
  );
};

export default Item;
