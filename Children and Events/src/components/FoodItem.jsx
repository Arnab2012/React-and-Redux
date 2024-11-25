import { useState } from "react";
import Item from "./Item";

function FoodItem(props) {
  // here we also define the action which will be passed to the Item Component
  let [active, setActive] = useState([]);
  let buttonClicked = (item) => {
    // if the item already bought then active cancel option
    if (active.includes(item)) {
      setActive(active.filter((i) => i !== item));
      console.log(`${item} canceled`);
    } else {
      setActive([...active, item]);
      console.log(`${item} bought`);
    }
  };
  return (
    <ul className="list-group">
      {props.fooditems.map((item) => (
        // passing argument and function both as prop
        <Item
          key={item}
          fooditem={item}
          buttonClicked={buttonClicked}
          bought={active.includes(item)}
        ></Item>
      ))}
    </ul>
  );
}
export default FoodItem;
