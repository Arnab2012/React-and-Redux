import styles from "./Item.module.css"
function Item({ Items }) {
  return (
    <div className={styles.itemContainer}>
      <div class="container">
        {Items.map((item) => (
          <div className="row myRow">
            <div className="col-6">{item.todoName}</div>
            <div className="col-4">{item.todoDate}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger myButton">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Item;
