import styles from "./Item.module.css"
function Item(props){
    let buttonClicked=(e)=>{
        console.log(e);
        console.log(`${props.fooditem} bought`)
    }
    return <li className={`list-group-item ${styles.myItem}`}>
        {props.fooditem}
        <button className={`${styles.itemButton} btn btn-info`}
        onClick={(e)=>buttonClicked(e)}>
            Buy</button>
    </li>
}
export default Item;