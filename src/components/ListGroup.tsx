function ListGroup() {
  var items = ["New York", "San Francisco", "Tokyo", "London"];
  items = [];
  return (
    <>
      <h1>List Group</h1>
      {items.length == 0 ? <p>Nothing to show</p> : null}
      {items.map((items) => (
        <ul key={items}>{items}</ul>
      ))}
    </>
  );
}

export default ListGroup;
