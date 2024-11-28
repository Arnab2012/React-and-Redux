import { useContext } from "react";
import { ItemContext } from "../store/ItemStore";

// while we are using Context API in ItemStore Component so here we are not receiv
function EmptyMessage(){
    // getting the todoItems from Context object from ItemStore
    const {todoItems}=useContext(ItemContext);
    return <>{todoItems.length == 0 && <h3>There is no Task Pending</h3>}</>
}
export default EmptyMessage;