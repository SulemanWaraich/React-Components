import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItem";
import Message from "./components/Message";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  function onKeyDown(event) {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is: " + newFoodItem);
    }
  }

  return (
    <>
      <Container>
        <h1 className="kg-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <Message item={foodItems}></Message>
        <FoodItem item={foodItems}></FoodItem>
      </Container>
      <Container>
        <p>Above content is the healthy food that are good for your health.</p>
      </Container>
    </>
  );
}

export default App;
