import AppName from "./components/AppName";
import Input from "./components/Input";
import "./App.css";
import Item from "./components/Item";
import EmptyMessage from "./components/EmptyMessage";
import ItemContextProvider from "./store/ItemStore";


function App() {
  // using useState() here
  // let [todoItems,setTodoItems]=useState([]);

  // now everything will come from ItemContextProvider from ItemStore Component
  return (
    // using Context API here
    // we are passing values as object todoItems [],and two methods addNewItem and deleteItem
    <ItemContextProvider>
      <center className="todoContainer">
        <AppName></AppName>

        {/* here we are passing as prop */}

        {/* <Input onAddButtonClick={handleAddButtonClick}></Input> */}
        {/* <EmptyMessage Items={todoItems}></EmptyMessage> */}
        {/* <Item Items={todoItems} onDeleteButtonClick={handleDeleteButtonClick}></Item> */}

        {/* here we are using from (Context Provider) ItemStore component */}
        <Input />
        <EmptyMessage />
        <Item />
      </center>
    </ItemContextProvider>
  );
}

export default App;