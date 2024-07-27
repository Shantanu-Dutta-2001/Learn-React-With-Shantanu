import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoListItems = [
    { name: "Learn React", dueDate: "20/08/2024" },
    { name: "Make Projects", dueDate: "10/08/2024" },
    { name: "Make More Projects", dueDate: "10/09/2024" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoListItems}></TodoItems>
    </center>
  );
}

export default App;
