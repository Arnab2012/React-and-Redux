import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItem from "./components/FoodItem";

function App() {
  // let foodItems = [];
  let foodItems = ["Rice", "Vegetables", "Fish", "Egg", "Chicken", "Mutton"];
  return (
    <>
      <h1>Food Items</h1>
      <ErrorMessage fooditems={foodItems}></ErrorMessage>
      <FoodItem fooditems={foodItems}></FoodItem>
    </>
  );
}

export default App;
