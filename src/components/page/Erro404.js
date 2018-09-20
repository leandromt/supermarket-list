import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import PageHeader from "../template/Header";

class Erro404 extends Component {
  render() {
    return (
      <div>
        <PageHeader name="Erro" small="404" />
        <h4>Ops! Page Not Fold.</h4>
        <p>
          back to{" "}
          <NavLink className="navbar-brand" to="/">
            MyList
          </NavLink>
        </p>
      </div>
    );
  }
}

export default Erro404;
