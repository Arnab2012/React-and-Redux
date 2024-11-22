import "./App.css";
import React from "react";

function App() {
  // let foodItems = [];
  let foodItems = ["Rice", "Vegetables", "Fish", "Egg", "Chicken","Mutton"];
  return (
    <>
      <h1>Food Items</h1>
      <ul className="list-group">
        {/* without using map */}
        {/* <li class="list-group-item">Rice</li>
        <li class="list-group-item">Vegetables</li>
        <li class="list-group-item">Fish</li>
        <li class="list-group-item">Egg</li>
        <li class="list-group-item">Chicken</li> */}


        {/* conditional Rendering */}
        {/* {foodItems.length==0 ? <h3>There is no Food Items</h3> : null} */}
        {foodItems.length==0 && <h3>There is no Food Items</h3>}
        {/* with using map */}
        {foodItems.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
