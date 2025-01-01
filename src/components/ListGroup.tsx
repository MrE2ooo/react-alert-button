import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem :(item:string)=>void
}

function ListGroup({ items, heading ,onSelectItem }: ListGroupProps) {
  // Components can not return more than one element so we use fragment

  // event Handeler
  // const handleClick = (event: any ) => console.log(event);

  // hook useState

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>0 Items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
