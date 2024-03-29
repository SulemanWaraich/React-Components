import Item from "./Item";
const FoodItem = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map(function (item) {
        return (
          <Item
            item={item}
            key={item}
            handleOnClick={() => console.log(`${item} beng bought`)}
          ></Item>
        );
      })}
    </ul>
  );
};

export default FoodItem;
