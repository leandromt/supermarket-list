// Dependencies
import React from "react";

// Component Stateless
export default props => {
  // Validation if item exists
  const item =
    props.item !== undefined && props.item !== null ? props.item : null;
  const itemName =
    props.item !== undefined && props.item !== null ? props.item.name : "";

  // Reference Input Form
  this.myRef = React.createRef();

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit item
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input
              id="input-form"
              className="form-control"
              placeholder="edit item"
              defaultValue={itemName}
              ref={this.myRef}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => props.updateItem(item, this.myRef.current.value)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
