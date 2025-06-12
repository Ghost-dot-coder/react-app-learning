import type { MouseEvent } from "react";

function ListGroup() {
  var items = ["New York", "San Francisco", "Tokyo", "London"];
  // items = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List Group</h1>
      {items.length == 0 ? <p>Nothing to show</p> : null}
      {items.map((items) => (
        <ul key={items} onClick={handleClick}>
          {items}
        </ul>
      ))}
    </>
  );
}

export default ListGroup;
