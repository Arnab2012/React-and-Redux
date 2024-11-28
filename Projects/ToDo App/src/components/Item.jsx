import { useContext } from "react";
import styles from "./Item.module.css";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { ItemContext } from "../store/ItemStore";

// while we are using Context API in ItemStore Component so here we are not receiving props
function Item() {
  // here we are using the ItemStore component
  // getting the todoItems,deleteItem from Context object from ItemStore
  const {todoItems,deleteItem}=useContext(ItemContext);

  return (
    <div className={styles.itemContainer}>
      <div className="container">
        {todoItems.map((item) => (
          <div className="row myRow" key={item.todoName}>
            <div className="col-6">{item.todoName}</div>
            <div className="col-4">{item.todoDate}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger myButton"
                onClick={() =>
                  // onDeleteButtonClick(item.todoName, item.todoDate)
                  deleteItem(item.todoName, item.todoDate)
                }
              >
                {/* Added React icons */}
                <RiDeleteBin2Fill />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Item;
