import styles from "./Button.module.css";

const Button = () => {
  let buttonsLables = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      {buttonsLables.map((item) => (
        <button key={item} className={styles.button}>
          {item}
        </button>
      ))}
    </>
  );
};

export default Button;