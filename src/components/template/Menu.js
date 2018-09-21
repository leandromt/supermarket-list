import React from "react";
import { NavLink } from "react-router-dom";

export default props => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/">
      <i className="fa fa-list-alt" /> SuperMarket
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">
            MyList <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
