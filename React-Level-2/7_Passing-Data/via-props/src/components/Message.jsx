const Message = ({ item }) => {
  return <>{item.length === 0 ? <h1>I am still hungry</h1> : null};</>;
};

export default Message;
