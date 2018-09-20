import React from "react";
import IconButton from "./IconButton";

export default props => (
  <div className="pb-2" role="form">
    <div className="row">
      <div className="col-9 col-md-10 col-lg-10 col-xl-10">
        <input
          id="description"
          className="form-control"
          placeholder="add item"
          onChange={props.formChange}
          value={props.description}
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
