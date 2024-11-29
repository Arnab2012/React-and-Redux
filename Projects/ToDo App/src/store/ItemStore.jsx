import { useReducer } from "react";
import { createContext } from "react";

export const ItemContext = createContext([]);

// adding Business Logic (Item Addition and deletion logic here)

// pure function for useReducer()
const todoItemsReducer = (currentItems, action) => {
  let newToDoItems = currentItems;
  // for adding new item
  if (action.type === "ADD_ITEM") {
    newToDoItems = [
      ...currentItems,
      { todoName: action.payload.todoName, todoDate: action.payload.todoDate },
    ];
  }
  // for deleting a item
  else if (action.type === "DELETE_ITEM") {
    newToDoItems = currentItems.filter(
      (i) =>
        !(
          i.todoName === action.payload.todoName &&
          i.todoDate === action.payload.todoDate
        )
    );
  }
  return newToDoItems;
};

const ItemContextProvider = ({ children }) => {
  // using useReducer() here
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // when the add button is clicked add new item and pass to Item component
  let addNewItem = (todoName, todoDate) => {
    // creating a new action object
    const addItemAction = {
      type: "ADD_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodoItems(addItemAction);
  };

  // when the delete button is clicked remove the item and pass to Item component
  let deleteItem = (todoName, todoDate) => {
    // creating a new action object
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <ItemContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;