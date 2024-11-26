import AppName from "./components/AppName";
import Input from "./components/Input";
// import Item1 from "./components/Item1";
// import Item2 from "./components/Item2";

import "./App.css";
import Item from "./components/Item";
import { useState } from "react";
import EmptyMessage from "./components/EmptyMessage";

function App() {
  // let todoItems = [
  //   { todoName: "Buy Milk", todoDate: "10/4/2023" },
  //   { todoName: "Go to College", todoDate: "10/4/2023" },
  //   { todoName: "Go to Gym", todoDate: "10/4/2023" },
  //   { todoName: "Go to Tution", todoDate: "10/8/2023" },
  // ];

  let [todoItems,setTodoItems]=useState([]);

  // when the add button is clicked add new item and pass to Item component
  let handleAddButtonClick=(todoName,todoDate)=>{
    setTodoItems([...todoItems,{todoName,todoDate}]);
  }

  // when the delete button is clicked remove the item and pass to Item component
  let handleDeleteButtonClick=(todoName,todoDate)=>{
    setTodoItems(todoItems.filter((i)=> !(i.todoName === todoName && i.todoDate === todoDate)));
  }
  return (
    <center className="todoContainer">
      <AppName></AppName>
      {/* first we pass a onClick event handler to Input Component */}
      <Input onAddButtonClick={handleAddButtonClick}></Input>
      <EmptyMessage Items={todoItems}></EmptyMessage>
      <Item Items={todoItems} onDeleteButtonClick={handleDeleteButtonClick}></Item>
    </center>
  );
}

export default App;
