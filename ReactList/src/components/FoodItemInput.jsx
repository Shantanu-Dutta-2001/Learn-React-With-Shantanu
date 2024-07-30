import styles from "./FoodItemInput.module.css";

const FoodItemInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter a food Item you like"
      className={styles.myInput}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodItemInput;
