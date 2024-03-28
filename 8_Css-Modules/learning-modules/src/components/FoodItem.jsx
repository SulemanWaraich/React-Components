import Item from "./Item";
const FoodItem = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map(function (item) {
        return <Item item={item} key={item}></Item>;
      })}
    </ul>
  );
};

export default FoodItem;
