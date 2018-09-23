// Dependencies
import React from "react";

// Component Stateless
export default props => {
  return (
    <select
      id="inputState"
      className="form-control"
      defaultValue=""
      placeholder="select the parent"
    >
      <option value="">select the parent</option>
      {props.list.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
