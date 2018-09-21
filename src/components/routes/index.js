import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "./../template/Menu";
import Footer from "./../template/Footer";
import Home from "./../page/Home";
import About from "./../page/About";
import Erro404 from "../page/Erro404";

export default props => (
  <BrowserRouter>
    <div>
      <Menu />
      <main className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route component={Erro404} />
        </Switch>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
