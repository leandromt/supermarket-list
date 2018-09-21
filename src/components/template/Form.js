import React from "react";
import IconButton from "./IconButton";

export default props => {
  function validatitionForm(newItemValidation) {
    return newItemValidation
      ? "form-control form-true"
      : "form-control border border-danger";
  }

  const keyAdd = e => {
    if (e.key === "Enter") {
      props.formAdd();
    }
  };
  return (
    <div className="container-form rounded pl-2 pt-2 pb-2 mb-4 mt-3">
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            id="description"
            className={validatitionForm(props.newItemValidation)}
            placeholder="add item"
            onChange={props.formChange}
            value={props.nameNewItem === "" ? "" : props.description}
            onKeyUp={keyAdd}
          />
        </div>
        <div className="form-group col-md-4">
          {/* <select id="inputState" className="form-control">
            <option selected>Father</option>
            <option>...</option>
          </select> */}
        </div>
        <div className="form-group col-md-2">
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
