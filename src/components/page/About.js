import React from "react";
import PageHeader from "../template/Header";

export default props => (
  <div>
    <PageHeader name="About" small="App Supermarket" />
    <br />
    <p>
      This is an application developed for the job interview of Casa Magalhães.
      It was in development React Js and Bootstrap
    </p>
    <h4>GitHub</h4>
    <p>
      <a href="https://github.com/leandromt/supermarket-list">
        github.com/leandromt/supermarket-list
      </a>
    </p>

    <h4>Developer</h4>
    <p>
      Leandro Tavares
      <br />
      LinkedIn:
      <a href="https://linkedin.com/in/tavares-leandro/">
        linkedin.com/in/tavares-leandro/
      </a>
      <br />
      Email: leandro.mendestavares@gmail.com
    </p>
  </div>
);
