import React from "react";

export default props => (
  <button onClick={props.onClick} className={"btn btn-" + props.color}>
    <i className={"fa fa-" + props.icon} />
  </button>
);
