import MyButton from "./MyButton";
import LuckyNo from "./LuckyNo";
import "./App.css";

function App() {
  let myProfession = "web developer";
  return (
    <div>
      <h4>I am Shantanu Dutta. I am passionate {myProfession}</h4>
      <MyButton></MyButton>
      <br />
      <LuckyNo></LuckyNo>
    </div>
  );
}

export default App;
