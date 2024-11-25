import "./App.css";
import React from "react";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodItem from "./components/FoodItem";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Rice", "Vegetables", "Fish", "Egg", "Chicken", "Mutton","Soyabin"];

  // defining a useState hook
  // let FoodItems=useState();
  // let currentFoodItem=FoodItems[0];
  // let setcurrentFoodItem=FoodItems[1];

  // array destructuring is used here
  let [currentFoodItem,setcurrentFoodItem]=useState();

  let [foodItems,setfoodItems]=useState([]);

  // here we also define the action which will be passed to the Input Component
  let changeOnInput = (e) => {
    console.log(e.target.value);
    setcurrentFoodItem(e.target.value);
  };
  
  let changeOnKeyDown = (e) => {
    // when the key is Enter
    if(e.key==='Enter'){
      let newItem=currentFoodItem;
      // empty the text box
      e.target.value="";
      setcurrentFoodItem(e.target.value);
      // first spread the old value of the array
      let newfoodItems=[...foodItems,newItem];
      // then add it in the state
      setfoodItems(newfoodItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">Food Items</h1>
        <Input changeOnInput={changeOnInput} changeOnKeyDown={changeOnKeyDown}></Input>
        {/* <p>{currentFoodItem}</p> */}
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
