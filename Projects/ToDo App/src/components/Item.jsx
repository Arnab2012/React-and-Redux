import styles from "./Item.module.css";
import { RiDeleteBin2Fill } from "react-icons/ri";

function Item({ Items, onDeleteButtonClick }) {
  return (
    <div className={styles.itemContainer}>
      <div className="container">
        {Items.map((item) => (
          <div className="row myRow" key={item}>
            <div className="col-6">{item.todoName}</div>
            <div className="col-4">{item.todoDate}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger myButton"
                onClick={() =>
                  onDeleteButtonClick(item.todoName, item.todoDate)
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
