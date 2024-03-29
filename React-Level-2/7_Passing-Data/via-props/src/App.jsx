import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItem";
import Message from "./components/Message";

function App() {
  let foodItems = ["daal", "chana", "roti", "ghee", "salad"];

  return (
    <>
      <h1>Healthy Food</h1>
      <Message item={foodItems}></Message>
      <FoodItem item={foodItems}></FoodItem>
    </>
  );
}

export default App;
