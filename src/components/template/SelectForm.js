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
      placeholder="select the parent"
    >
      <option disabled value="">
        select the parent
      </option>
      {props.list.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
