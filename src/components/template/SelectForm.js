// Dependencies
import React from "react";

// Component Stateless
export default props => {
  console.log(props.list);
  return (
    <select
      id="inputState"
      className="form-control"
      defaultValue=""
      placeholder="Father"
    >
      <option disabled value="">
        father
      </option>
      {props.list.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
