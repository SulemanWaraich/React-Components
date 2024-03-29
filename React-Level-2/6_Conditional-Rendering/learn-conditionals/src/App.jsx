import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let foodItems = [];
  // if (foodItems.length === 0) {              if & else
  //   return <h1>I am still hungry.</h1>;
  // }
  let foodItems = ["daal", "chana", "roti", "ghee", "salad"];

  return (
    <>
      <h1>Healthy Food</h1>
      {/* {foodItems.length === 0 ? <h1>I am still hungry</h1> : null} Ternary Operator */}
      {/* {foodItems.length === 0 && <h1>I am still hungry</h1>} Logical Operator */}
      <ul className="list-group">
        {foodItems.map(function (item) {
          return (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
