import React from "react";

export default props => (
  <button
    onClick={props.onClick}
    className={"btn btn-" + props.color}
    title={props.title}
  >
    <i className={"fa fa-" + props.icon} />
  </button>
);
