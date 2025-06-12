function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];
  return (
    <>
      <h1>List Group</h1>
      {items.map((items) => (
        <li key={items}>{items}</li>
      ))}
    </>
  );
}

export default ListGroup;
