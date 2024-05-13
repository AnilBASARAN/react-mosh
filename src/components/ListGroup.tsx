import { useState } from "react";
function ListGroup() {
  let cities = ["paris", "londra", "istanbul", "tokyo"];
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            onClick={() => setSelected(index)}
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
