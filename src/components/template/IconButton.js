import React from "react";

export default props => (
  <button
    onClick={props.onClick}
    className={"rounded-circle btn btn-" + props.color}
    title={props.title}
  >
    <i className={"text-white fa fa-" + props.icon} />
  </button>
);
