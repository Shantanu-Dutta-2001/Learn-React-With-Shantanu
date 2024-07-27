import style from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`${style["myList"]}`}>
      <span className={style["mySpan"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
