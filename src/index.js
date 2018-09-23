// Component Stateless
import React from "react";
import ReactDOM from "react-dom";

// Main Component
import App from "./components/app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// Update page without refresh
// https://webpack.js.org/api/hot-module-replacement/
if (module.hot) {
  module.hot.accept();
}
