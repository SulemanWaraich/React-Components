import { useState } from "react";
import Item from "./Item";
const FoodItem = ({ item }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {item.map(function (item) {
        return (
          <Item
            key={item}
            item={item}
            bought={activeItems.includes(item)}
            handleOnClick={(event) => onBuyButton(item, event)}
          ></Item>
        );
      })}
    </ul>
  );
};

export default FoodItem;
