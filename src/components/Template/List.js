import React from "react";
import IconButton from "./IconButton";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(item => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>
          <IconButton
            color="danger"
            icon="trash-o"
            onClick={() => props.deleteItem(item)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
