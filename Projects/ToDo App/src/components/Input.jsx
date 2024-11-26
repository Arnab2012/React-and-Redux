import { useState } from "react";
import styles from "./Input.module.css";
import { MdAddCircle } from "react-icons/md";

function Input({ onAddButtonClick }) {
  // here the two useState will track the todoName and todoDate entered by the user
  let [todoName, setTodoName] = useState("");
  let [todoDate, setTodoDate] = useState("");

  // handling functions
  let handletodoName = (e) => {
    setTodoName(e.target.value);
  };
  let handletodoDate = (e) => {
    setTodoDate(e.target.value);
  };
  let handleAddClick = () => {
    if (!todoName || !todoDate) {
      alert("Please enter both a Todo and a Date.");
      return;
    }
    // call the Parent Component onClick Handler
    onAddButtonClick(todoName, todoDate);
    // empty the boxes
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row myRow">
        <div className="col-6">
          <input
            type="text"
            className={styles["inputBox"]}
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handletodoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles["inputBox"]}
            value={todoDate}
            onChange={handletodoDate}
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
