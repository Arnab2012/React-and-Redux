import { useState } from "react";
import styles from "./Input.module.css";
import { MdAddCircle } from "react-icons/md";
import { useRef } from "react";
import { useContext } from "react";
import { ItemContext } from "../store/ItemStore";

// while we are using Context API in ItemStore Component so here we are not receiving props
function Input() {
  // here the two useState will track the todoName and todoDate entered by the user
  // let [todoName, setTodoName] = useState("");
  // let [todoDate, setTodoDate] = useState("");

  // using useRef instead of useState
  let todoName=useRef("");
  let todoDate=useRef("");

  // handling functions
  // let handletodoName = (e) => {
  //   setTodoName(e.target.value);
  // };
  // let handletodoDate = (e) => {
  //   setTodoDate(e.target.value);
  // };

  // here we are using the ItemStore component
  // getting the addNewItem from Context object from ItemStore
  const {addNewItem}=useContext(ItemContext);

  let handleAddClick = () => {
    let name=todoName.current.value;
    let date=todoDate.current.value;

    if (!name || !date) {
      alert("Please enter both a Todo and a Date.");
      return;
    }
    // call the Parent Component onClick Handler
    // onAddButtonClick(name,date);

    // call the function from Context
    addNewItem(name,date);
    // empty the boxes
    // setTodoName("");
    // setTodoDate("");

    todoName.current.value="";
    todoDate.current.value="";
  };
  
  return (
    <div className="container text-center">
      <div className="row myRow">
        <div className="col-6">
          <input
            type="text"
            className={styles["inputBox"]}
            placeholder="Enter Todo here"
            // value={todoName}
            ref={todoName}
            // onChange={handletodoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles["inputBox"]}
            // value={todoDate}
            ref={todoDate}
            // onChange={handletodoDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success myButton"
            onClick={handleAddClick}
          >
            {/* Added React icons */}
            <MdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Input;