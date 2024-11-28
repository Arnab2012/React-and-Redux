import AppName from "./components/AppName";
import Input from "./components/Input";
// import Item1 from "./components/Item1";
// import Item2 from "./components/Item2";

import "./App.css";
import Item from "./components/Item";
import { useState } from "react";
import EmptyMessage from "./components/EmptyMessage";
import { ItemContext } from "./store/ItemStore";

function App() {
  // let todoItems = [
  //   { todoName: "Buy Milk", todoDate: "10/4/2023" },
  //   { todoName: "Go to College", todoDate: "10/4/2023" },
  //   { todoName: "Go to Gym", todoDate: "10/4/2023" },
  //   { todoName: "Go to Tution", todoDate: "10/8/2023" },
  // ];

  let [todoItems,setTodoItems]=useState([]);

  // when the add button is clicked add new item and pass to Item component
  let addNewItem=(todoName,todoDate)=>{
    setTodoItems([...todoItems,{todoName,todoDate}]);
  }

  // when the delete button is clicked remove the item and pass to Item component
  let deleteItem=(todoName,todoDate)=>{
    setTodoItems(todoItems.filter((i)=> !(i.todoName === todoName && i.todoDate === todoDate)));
  }

  return (
    // using Context API here
    // we are passing values as object todoItems [],and two methods addNewItem and deleteItem
    <ItemContext.Provider value={{todoItems,addNewItem,deleteItem}}>
      
    <center className="todoContainer">
      <AppName></AppName>

      {/* here we are passing as prop */}

      {/* <Input onAddButtonClick={handleAddButtonClick}></Input> */}
      {/* <EmptyMessage Items={todoItems}></EmptyMessage> */}
      {/* <Item Items={todoItems} onDeleteButtonClick={handleDeleteButtonClick}></Item> */}

      {/* here we are using from (Context Provider) ItemStore component */}
      <Input/>
      <EmptyMessage/>
      <Item/>
    </center>
    </ItemContext.Provider>
  );
}

export default App;
