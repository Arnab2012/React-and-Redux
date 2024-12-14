import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { BsBagCheckFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  const elemnetsFound = bagItems.indexOf(item.id) >= 0;

  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elemnetsFound ? (
        <button
          className="btn btn-add-bag btn-danger"
          onClick={handleRemoveFromBag}
        >
          Remove from Bag
          <MdDeleteForever className="removeFromBag"/>
        </button>
      ) : (
        <button
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          Add to Bag
          <BsBagCheckFill className="addToBag"/>
        </button>
      )}
    </div>
  );
};
export default HomeItem;
