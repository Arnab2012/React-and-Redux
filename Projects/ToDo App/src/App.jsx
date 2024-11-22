import AppName from "./components/AppName";
import Input from "./components/Input";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";

import "./App.css";

function App() {
  return (
    <center className="todoContainer">
      <AppName></AppName>
      <Input></Input>
      <div className="itemContainer">
        <Item1></Item1>
        <Item2></Item2>
      </div>
    </center>
  );
}

export default App;
