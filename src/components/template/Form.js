import React from "react";
import IconButton from "./IconButton";

export default props => {
  const keyAdd = e => {
    if (e.key === "Enter") {
      props.formAdd();
    }
  };
  return (
    <div
      className="container-form rounded pl-2 pt-2 pb-2 mb-4 mt-3"
      role="form"
    >
      <div className="row">
        <div className="col-9 col-md-10 col-lg-10 col-xl-10">
          <input
            id="description"
            className="form-control"
            placeholder="add item"
            onChange={props.formChange}
            value={props.description}
            onKeyUp={keyAdd}
          />
        </div>

        <div className="col-3 col-md-2 col-lg-2 col-xl-2">
          <IconButton
            color="primary"
            icon="plus"
            onClick={props.formAdd}
            title="Add new item"
          />
        </div>
      </div>
    </div>
  );
};
