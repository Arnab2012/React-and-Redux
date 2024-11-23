import Item from "./Item";

function FoodItem(props) {
  return (
    <ul className="list-group">
      {props.fooditems.map((item) => (
        // passing argument as prop
        <Item key={item} fooditem={item}></Item>
      ))}
    </ul>
  );
}
export default FoodItem;
