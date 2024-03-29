import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItem";
import Message from "./components/Message";
import Container from "./components/Container";

function App() {
  let foodItems = ["daal", "chana", "roti", "ghee", "salad"];

  return (
    <>
      <Container>
        <h1 className="kg-heading">Healthy Food</h1>
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
