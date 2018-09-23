// Dependencies
import React from "react";

// Component Stateless
export default props => (
  <button
    onClick={props.onClick}
    className={"rounded-circle btn btn-" + props.color}
    title={props.title}
    data-toggle={props.dataToogle ? "modal" : null}
    data-target={props.dataTarget ? "#exampleModal" : null}
  >
    <i className={"text-white fa fa-" + props.icon} />
  </button>
);
