import styles from "./Item.module.css";
function Item({ fooditem, bought,buttonClicked }) {
  // used destructuring above
  
//   let buttonClicked = (e) => {
//     console.log(e);
//     console.log(`${props.item} bought`);
//   };
  return (
    <li className={`list-group-item ${styles.myItem} ${bought ? 'active' : ''}`}>
      {fooditem}
      <button
      // if the item is bought then change button to cancel and again if cancel change to buy
        className={`${styles.itemButton} btn ${bought ? 'btn-danger' : 'btn-info'}`}
        onClick={() => buttonClicked(fooditem)}
      >
        {bought ? "Cancel":"Buy"}
      </button>
    </li>
  );
}
export default Item;
