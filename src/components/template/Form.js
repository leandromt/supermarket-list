// Dependencies
import React from "react";

// Custom Components
import IconButton from "./IconButton";
import SelectForm from "./SelectForm";

// Component Stateless
export default props => {
  function validatitionForm(newItemValidation) {
    return newItemValidation
      ? "form-control form-true"
      : "form-control border border-danger";
  }

  const keyAdd = e => {
    if (e.key === "Enter") {
      props.formSubmit(e);
    }
  };

  return (
    <form
      className="container-form rounded pl-2 pr-2 pt-3 mb-4 mt-3"
      onSubmit={props.formSubmit}
    >
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            id="description"
            className={validatitionForm(props.newItemValidation)}
            placeholder="add new item"
            onChange={props.formChange}
            value={props.nameNewItem === "" ? "" : props.description}
            onKeyUp={keyAdd}
          />
        </div>
        <div className="form-group col-md-4">
          <SelectForm list={props.list} selectChange={props.selectChange} />
        </div>
        <div className="form-group col-md-2">
          <IconButton color="primary" icon="plus" title="Add new item" />
        </div>
      </div>
    </form>
  );
};
