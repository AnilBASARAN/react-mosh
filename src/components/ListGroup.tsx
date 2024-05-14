import { useState } from "react";

interface ListGroupProps {
  cities: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ cities, heading, onSelectItem }: ListGroupProps) {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            onClick={() => {
              setSelected(index);
              onSelectItem(city);
            }}
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
