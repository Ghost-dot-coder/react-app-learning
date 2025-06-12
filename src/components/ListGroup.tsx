//import type { MouseEvent } from "react";

import { useState } from "react";
interface Props {
  items: String[];
  heading: String;
}
function ListGroup({ items, heading }: Props) {
  // items = [];
  //let selectedIndex = 0;
  const [selectedIndex, setselectedIndex] = useState(-1);

  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 ? <p>Nothing to show</p> : null}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setselectedIndex(index);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
