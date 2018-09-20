import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "./../template/Menu";
import Home from "./../template/Home";
import About from "./../template/About";
import Erro404 from "./../template/Erro404";

export default props => (
  <BrowserRouter>
    <div>
      <Menu />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route component={Erro404} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);
