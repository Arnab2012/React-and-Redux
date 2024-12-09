import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/CounterSlice";
import { privacyAction } from "../store/PrivacySlice";

const Buttons = () => {
  const inputElement = useRef();

  const dispatch = useDispatch();

  // creating functions to handle buttons
  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };
  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };

  const handleAdd = () => {
    dispatch(counterAction.addition(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch(counterAction.subtraction(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch(privacyAction.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          Increment +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          Decrement -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center rowMargin">
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <input type="text" placeholder="Enter Number" ref={inputElement} />
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center rowMargin">
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
    </>
  );
};
export default Buttons;
