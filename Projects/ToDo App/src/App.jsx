import AppName from "./components/AppName";
import Input from "./components/Input";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";

import "./App.css";
import Item from "./components/Item";

function App() {
  let todoItems = [
    { todoName: "Buy Milk", todoDate: "10/4/2023" },
    { todoName: "Go to College", todoDate: "10/4/2023" },
    { todoName: "Go to Gym", todoDate: "10/4/2023" },
    { todoName: "Go to Tution", todoDate: "10/8/2023" },
  ];
  return (
    <center className="todoContainer">
      <AppName></AppName>
      <Input></Input>
      <Item Items={todoItems}></Item>
    </center>
  );
}

export default App;
