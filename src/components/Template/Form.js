import React from "react";
import Button from "./IconButton";

export default props => (
  <div className="pb-2" role="form">
    <div className="row">
      <div className="col-sm-12 col-md-9 col-lg-10 col-xl-10">
        <input
          id="description"
          className="form-control"
          placeholder="Add item"
          onChange={props.formChange}
          value={props.description}
        />
      </div>

      <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2">
        <Button color="primary" icon="plus" onClick={props.formAdd} />
      </div>
    </div>
  </div>
);
