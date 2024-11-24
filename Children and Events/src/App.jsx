import "./App.css";
import React from "react";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodItem from "./components/FoodItem";
import Input from "./components/Input";

function App() {
  // let foodItems = [];
  let foodItems = ["Rice", "Vegetables", "Fish", "Egg", "Chicken", "Mutton","Soyabin"];
  return (
    <>
      <Container>
        <h1 className="heading">Food Items</h1>
        <Input></Input>
        <ErrorMessage fooditems={foodItems}></ErrorMessage>
        <FoodItem fooditems={foodItems}></FoodItem>
      </Container>

      <Container>
        <p>The above is an another container of some Food Items</p>
      </Container>
    </>
  );
}

export default App;
